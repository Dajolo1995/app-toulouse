import { useMutation } from "@apollo/client";

import { UpdateCustomerDocument } from "@/graphql/documents.graphql";

export const useUpdateCustomer = () => {
  return useMutation(UpdateCustomerDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          orderId(order = {}) {
            return { ...order, customer: data?.updateCustomer };
          },
        },
      });
    },
  });
};
