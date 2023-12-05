import { useLazyQuery } from "@apollo/client";

import { ConveyorsOrderDocument } from "../graphql/documents.graphql";

export const useGetConveyors = () => {
  return useLazyQuery(ConveyorsOrderDocument, {
    fetchPolicy: "cache-first",
  });
};
