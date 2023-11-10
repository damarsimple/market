import { CategoriesQueryOptionsType, Category } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from 'react-query';
import { gql } from '@apollo/client';

export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const {
    data,
  } = await http.query({
    variables: _params,
    query: gql`query FindManyProductCategory($take: Int, $skip: Int, $where: ProductCategoryWhereInput, $orderBy: [ProductCategoryOrderByWithRelationInput], $cursor: ProductCategoryWhereUniqueInput) {
      findManyProductCategory(take: $take, skip: $skip, where: $where, orderBy: $orderBy, cursor: $cursor) {
        id
        name
        slug
      }
    }`
  });

  return { categories: { data: data.findManyProductCategory as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  return useQuery<{ categories: { data: Category[] } }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories
  );
};
