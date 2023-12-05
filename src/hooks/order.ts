import { useLazyQuery, useMutation } from "@apollo/client";
import {
  OrderIdDocument,
  OrdersDocument,
  AddProductsOrderDocument,
  AddPaymentsOrderDocument,
  CreateOrderDocument,
  UpdateOrderDocument,
} from "../graphql/documents.graphql";

export const useGetOrderId = () => {
  return useLazyQuery(OrderIdDocument, {
    fetchPolicy: "cache-first",
  });
};

export const useGetOrders = () => {
  return useLazyQuery(OrdersDocument);
};

export const useAddProduct = () => {
  return useMutation(AddProductsOrderDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          orderId() {
            return data?.addProductsOrder;
          },
        },
      });
    },
  });
};

export const useAddPayments = () => {
  return useMutation(AddPaymentsOrderDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          orderId() {
            return data?.addPaymentsOrder;
          },
        },
      });
    },
  });
};

export const useCreateOrder = () => {
  return useMutation(CreateOrderDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          orderId() {
            return data?.createOrder;
          },
        },
      });
    },
  });
};

export const useUpdateOrder = () => {
  return useMutation(UpdateOrderDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          orderId() {
            return data?.updateOrder;
          },
        },
      });
    },
  });
};
