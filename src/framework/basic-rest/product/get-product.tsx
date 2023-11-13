import { Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import { gql } from '@apollo/client';

const productsQuery = gql`
query FindFirstProduct($where: ProductWhereInput) {
  findFirstProduct(where: $where) {
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

export const fetchProduct = async (_slug: string) => {
  const { data } = await http.query({
    query: productsQuery,
    variables: {
      "where": {
        "name": {
          "contains": _slug
        }
      }
    }
  });

  return data?.findFirstProduct
};
export const useProductQuery = (slug: string) => {
  return useQuery<Product, Error>([API_ENDPOINTS.PRODUCT, slug], () =>
    fetchProduct(slug)
  );
};
