import { gql } from '@apollo/client';
import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { get } from 'lodash';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery } from 'react-query';

type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};

const productsQuery = gql`
query FindManyProducts($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput], $cursor: ProductWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ProductScalarFieldEnum]) {
  findManyProduct(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
    id
    name
    price
    stock
    slug
    imageUrl
    store {
      id
      name
    }
    categories {
      id
      name
    }
  }
}
`;
function transformProductData(products: any[]) {
  return products.map(product => {
    const defaultImageUrl = product.imageUrl || "/assets/images/products/default.jpg";

    return {

      ...product,
      description: product.description ?? "",
      id: `product${product.id}`,
      name: product.name,
      slug: product.name.replace(/\s+/g, '-').toLowerCase(), // Generating a slug from the name as a placeholder
      image: {
        id: product.id, // Assuming the `id` can be reused; adjust if needed
        thumbnail: defaultImageUrl,
        original: defaultImageUrl
      },
      gallery: [
        {
          id: product.id, // Assuming the `id` can be reused; adjust if needed
          thumbnail: defaultImageUrl,
          original: defaultImageUrl
        }
      ],
      quantity: product.stock,
      price: product.price,
      sale_price: product.price, // Placeholder as we don't have a sale_price field
      unit: "Qty", // Placeholder as we don't have a unit field
      tag: product.categories.map((category: any) => ({
        id: category.id,
        name: category.name,
        slug: category.name.replace(/\s+/g, '-').toLowerCase() // Generating a slug from the category name
      }))
    };
  });
}


const fetchProducts = async ({ queryKey }: any) => {
  const [_key, params] = queryKey;
  const { data } = await http.query({
    query: productsQuery,
    variables: {
      ...params,

      "where": {
        "categories":
          params.category ?
            {
              "some": {
                "slug": {
                  "equals": params.category
                }
              }
            }  : undefined
      }
    }
  });

  console.log(params)
  return {
    data: shuffle(
      transformProductData(data.findManyProduct)
    ) as unknown as Product[],
    paginatorInfo: {
      nextPageUrl: '', // You should provide logic to determine nextPageUrl from the response
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => true,
    }
  );
};

export { useProductsQuery, fetchProducts };
