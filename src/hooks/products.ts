import { ProductsDocument } from "../graphql/documents.graphql";
import { useLazyQuery } from "@apollo/client";

export const useGetProducts = () => {
  return useLazyQuery(ProductsDocument, {
    fetchPolicy: "cache-first",
  });
};
