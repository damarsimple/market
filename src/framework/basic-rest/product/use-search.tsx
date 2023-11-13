import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import { gql } from '@apollo/client';

const productsQuery = gql`
  query FindManyProduct($where: ProductWhereInput) {
    findManyProduct(where: $where) {
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

export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;

  const { data } = await http.query({
    query: productsQuery,
    variables: {
      where: {
        name: {
          contains: _params?.text,
        },
      },
    },
  });

  function searchProduct(product: any) {
    return product.name.toLowerCase().indexOf(_params.text.toLowerCase()) > -1;
  }

  return data?.findManyProduct?.filter(searchProduct);
};
export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.SEARCH, options],
    fetchSearchedProducts
  );
};
