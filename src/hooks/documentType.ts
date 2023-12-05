import { useQuery } from "@apollo/client";

import { DocumentTypesDocument } from "../graphql/documents.graphql";

export const useGetDocumentTypes = () => {
  return useQuery(DocumentTypesDocument, {
    fetchPolicy: "cache-first",
  });
};
