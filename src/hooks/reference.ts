import { useLazyQuery } from "@apollo/client";

import { ReferencesDocument } from "../graphql/documents.graphql";

export const useGetReferences = () => {
  return useLazyQuery(ReferencesDocument, {
    fetchPolicy: "cache-first",
  });
};
