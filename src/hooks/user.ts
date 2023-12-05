import { useLazyQuery, useMutation } from "@apollo/client";

import {
  CurrentUserDocument,
  LoginDocument,
  UpdateUserDocument,
  SignupDocument,
  RecoveryPasswordDocument,
  ChangePasswordTokenDocument,
} from "../graphql/documents.graphql";

export const useGetCurrentUser = () => {
  return useLazyQuery(CurrentUserDocument, {
    fetchPolicy: "cache-and-network",
  });
};

export const useLogin = () => {
  return useMutation(LoginDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          currentUser() {
            return data?.login?.user;
          },
        },
      });
    },
  });
};

export const useUpdateUser = () => {
  return useMutation(UpdateUserDocument);
};

export const useSignup = () => {
  return useMutation(SignupDocument, {
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          currentUser() {
            return data?.signup?.user;
          },
        },
      });
    },
  });
};

export const useRecovery = () => {
  return useMutation(RecoveryPasswordDocument);
};

export const useChangePasswordToken = () => {
  return useMutation(ChangePasswordTokenDocument);
};
