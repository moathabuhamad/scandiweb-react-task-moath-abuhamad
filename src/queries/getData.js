import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_CURRENCIES,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCT_BY_ID,
} from "./queries";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const ApiGetProductsByCategory = async (category) => {
  return client.query({
    query: GET_PRODUCTS_BY_CATEGORY,
    variables: { title: category },
  });
};

export const ApiGetAllCurrencies = async () => {
  return client.query({ query: GET_CURRENCIES });
};

export const ApiGetAllCategories = async () => {
  return client.query({ query: GET_CATEGORIES });
};

export const ApiGetProductById = async (id) => {
  return client.query({ query: GET_PRODUCT_BY_ID, variables: { id } });
};
