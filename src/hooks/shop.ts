import { useLazyQuery } from "@apollo/client";
import { ShopsqueryDocument } from "../graphql/documents.graphql";


export const useGetShop = () => {
  return useLazyQuery(ShopsqueryDocument, {
    fetchPolicy: "cache-and-network",
  });
};
