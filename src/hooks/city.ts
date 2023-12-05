import { useLazyQuery } from "@apollo/client";

import { CitiesDocument } from "../graphql/documents.graphql";


export const useGetCities = () => {
  return useLazyQuery(CitiesDocument, {
    fetchPolicy: "cache-first",
  });
};
