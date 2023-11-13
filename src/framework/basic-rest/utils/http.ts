import axios from 'axios';
import { getToken } from './get-token';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import useUserStore from 'src/stores/user';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    // config.headers.Authorization = {
    //   ...config.headers,
    //   Authorization: `Bearer ${token ? token : ''}`,
    // };
    config.headers.Authorization = `Bearer ${token ? token : ''}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URI,
});


const authLink = setContext((_, { headers }) => {

  // get the authentication token from local storage if it exists

  const token = useUserStore.getState().token
  // return the headers to the context so httpLink can read them

  return {

    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }

  }

});


const client = new ApolloClient({

  link: authLink.concat(httpLink),

  cache: new InMemoryCache()

});


export default client;
