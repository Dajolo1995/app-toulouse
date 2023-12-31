import { useLazyQuery } from "@apollo/client";

import { PaymentsDocument } from "@/graphql/documents.graphql";

export const useGetPayments = () => {
  return useLazyQuery(PaymentsDocument, {
    fetchPolicy: "cache-first",
  });
};
