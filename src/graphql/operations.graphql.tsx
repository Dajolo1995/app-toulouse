import { Exact, Scalars, UpdateCustomerInput, CreateOrderInput, UpdateOrderInput, AddProductsOrderInput, AddPaymentsOrderInput, SignUpInput, StatusUser, UpdateUserInput, InputMaybe, FiltersCitiesInput, FiltersDocumentTypesInput, StatusWeb, StatusOrder, TypePayment, FiltersOrdersInput, FiltersPaymentsInput, FiltersProductsInput, FiltersReferencesInput, StatusProduct, FiltersShopsInput, LoginUserInput } from "./types.graphql";

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', _id: string, active: boolean, birthday?: any | null, createdAt: any, document: string, email?: string | null, firstName: string, isWhatsapp: boolean, lastName: string, phone?: string | null, updatedAt: any, addresses?: Array<{ __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null, customerType: { __typename?: 'CustomerType', _id: string }, documentType: { __typename?: 'DocumentType', _id: string } } };

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'ResponseOrder', order: { __typename?: 'Order', _id: string, number: number, address?: { __typename?: 'Address', field1: string, number1: string, number2: string, loteNumber: string, extra?: string | null, neighborhood: string, isMain?: boolean | null, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } } | null, customer: { __typename?: 'Customer', _id: string, document: string, firstName: string, lastName: string, addresses?: Array<{ __typename?: 'Address', field1: string, number1: string, number2: string, loteNumber: string, extra?: string | null, neighborhood: string, isMain?: boolean | null, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null }, details?: Array<{ __typename?: 'DetailOrder', quantity: number, price: number, discount: number, product: { __typename?: 'Product', _id: string, reference: { __typename?: 'Reference', name: string, description: string }, color: { __typename?: 'Color', name: string, html: string, image?: { __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null }, stock?: Array<{ __typename?: 'Stock', quantity: number }> | null, size: { __typename?: 'Size', value: string } } }> | null, conveyorOrder?: { __typename?: 'ConveyorOrder', value: number, conveyor: { __typename?: 'Conveyor', _id: string, logo?: { __typename?: 'Image', name: string, urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } } | null, summary: { __typename?: 'SummaryOrder', total: number, discount: number, subtotal: number, totalPaid: number } } } };

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateOrderInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder: { __typename?: 'ResponseOrder', order: { __typename?: 'Order', _id: string, number: number, address?: { __typename?: 'Address', field1: string, number1: string, number2: string, loteNumber: string, extra?: string | null, neighborhood: string, isMain?: boolean | null, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } } | null, customer: { __typename?: 'Customer', _id: string, document: string, firstName: string, lastName: string, addresses?: Array<{ __typename?: 'Address', field1: string, number1: string, number2: string, loteNumber: string, extra?: string | null, neighborhood: string, isMain?: boolean | null, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null }, details?: Array<{ __typename?: 'DetailOrder', quantity: number, price: number, discount: number, product: { __typename?: 'Product', _id: string, reference: { __typename?: 'Reference', name: string, description: string }, color: { __typename?: 'Color', name: string, html: string, image?: { __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null }, stock?: Array<{ __typename?: 'Stock', quantity: number }> | null, size: { __typename?: 'Size', value: string } } }> | null, conveyorOrder?: { __typename?: 'ConveyorOrder', value: number, conveyor: { __typename?: 'Conveyor', _id: string, logo?: { __typename?: 'Image', name: string, urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } } | null, summary: { __typename?: 'SummaryOrder', total: number, discount: number, subtotal: number, totalPaid: number } } } };

export type AddProductsOrderMutationVariables = Exact<{
  input: AddProductsOrderInput;
}>;


export type AddProductsOrderMutation = { __typename?: 'Mutation', addProductsOrder: { __typename?: 'ResponseOrder', order: { __typename?: 'Order', _id: string, details?: Array<{ __typename?: 'DetailOrder', quantity: number, product: { __typename?: 'Product', _id: string } }> | null } } };

export type AddPaymentsOrderMutationVariables = Exact<{
  input: AddPaymentsOrderInput;
}>;


export type AddPaymentsOrderMutation = { __typename?: 'Mutation', addPaymentsOrder: { __typename?: 'ResponseOrder', order: { __typename?: 'Order', _id: string, summary: { __typename?: 'SummaryOrder', total: number, subtotal: number, totalPaid: number }, payments?: Array<{ __typename?: 'PaymentOrder', total: number }> | null } } };

export type SignupMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', _id: string, createdAt: any, name: string, status: StatusUser, updatedAt: any, username: string, customer?: { __typename?: 'Customer', _id: string, firstName: string, lastName: string, email?: string | null } | null } } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', _id: string, name: string, username: string, customer?: { __typename?: 'Customer', _id: string, firstName: string, lastName: string, phone?: string | null, document: string, customerType: { __typename?: 'CustomerType', name: string }, documentType: { __typename?: 'DocumentType', abbreviation: string }, addresses?: Array<{ __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null } | null } };

export type RecoveryPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RecoveryPasswordMutation = { __typename?: 'Mutation', recoveryPassword: boolean };

export type ChangePasswordTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type ChangePasswordTokenMutation = { __typename?: 'Mutation', changePasswordToken: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', _id: string, createdAt: any, name: string, status: StatusUser, updatedAt: any, username: string, customer?: { __typename?: 'Customer', _id: string, firstName: string, lastName: string, email?: string | null } | null } } };

export type CitiesQueryVariables = Exact<{
  input?: InputMaybe<FiltersCitiesInput>;
}>;


export type CitiesQuery = { __typename?: 'Query', cities: { __typename?: 'ResponseCities', docs: Array<{ __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } }> } };

export type ConveyorsOrderQueryVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type ConveyorsOrderQuery = { __typename?: 'Query', conveyorsOrder: Array<{ __typename?: 'ConveyorOrder', value: number, error?: string | null, conveyor: { __typename?: 'Conveyor', _id: string, name: string, logo?: { __typename?: 'Image', name: string, urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } }> };

export type DocumentTypesQueryVariables = Exact<{
  input?: InputMaybe<FiltersDocumentTypesInput>;
}>;


export type DocumentTypesQuery = { __typename?: 'Query', documentTypes: Array<{ __typename?: 'DocumentType', _id: string, name: string, abbreviation: string }> };

export type OrderIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type OrderIdQuery = { __typename?: 'Query', orderId: { __typename?: 'ResponseOrder', order: { __typename?: 'Order', _id: string, number: number, statusWeb?: StatusWeb | null, status: StatusOrder, createdAt: any, updatedAt: any, customer: { __typename?: 'Customer', _id: string, document: string, firstName: string, lastName: string, customerType: { __typename?: 'CustomerType', name: string }, addresses?: Array<{ __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null }, details?: Array<{ __typename?: 'DetailOrder', quantity: number, price: number, discount: number, product: { __typename?: 'Product', _id: string, reference: { __typename?: 'Reference', name: string, description: string }, color: { __typename?: 'Color', name: string, html: string, image?: { __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null }, images?: Array<{ __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null }> | null, stock?: Array<{ __typename?: 'Stock', quantity: number }> | null, size: { __typename?: 'Size', value: string } } }> | null, address?: { __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } } | null, conveyorOrder?: { __typename?: 'ConveyorOrder', value: number, conveyor: { __typename?: 'Conveyor', _id: string, logo?: { __typename?: 'Image', name: string, urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } } | null, summary: { __typename?: 'SummaryOrder', total: number, discount: number, subtotal: number, totalPaid: number }, payments?: Array<{ __typename?: 'PaymentOrder', total: number, payment: { __typename?: 'Payment', _id: string, type: TypePayment, name: string } }> | null }, credit?: { __typename?: 'Credit', available: number } | null, conveyors?: Array<{ __typename?: 'conveyors', value: number, conveyor: { __typename?: 'Conveyor', _id: string, name: string, logo?: { __typename?: 'Image', urls?: { __typename?: 'Urls', jpeg?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } }> | null } };

export type OrdersQueryVariables = Exact<{
  input: FiltersOrdersInput;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'ResponseOrders', totalPages: number, page: number, docs: Array<{ __typename?: 'Order', _id: string, number: number, createdAt: any, updatedAt: any, statusWeb?: StatusWeb | null, customer: { __typename?: 'Customer', _id: string, document: string, firstName: string, lastName: string, customerType: { __typename?: 'CustomerType', name: string }, addresses?: Array<{ __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null }, payments?: Array<{ __typename?: 'PaymentOrder', total: number }> | null, details?: Array<{ __typename?: 'DetailOrder', quantity: number, price: number, discount: number, product: { __typename?: 'Product', _id: string, reference: { __typename?: 'Reference', name: string, description: string }, color: { __typename?: 'Color', name: string, html: string, image?: { __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null }, stock?: Array<{ __typename?: 'Stock', quantity: number }> | null, size: { __typename?: 'Size', value: string }, images?: Array<{ __typename?: 'Image', urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null }> | null } }> | null, address?: { __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } } | null, conveyorOrder?: { __typename?: 'ConveyorOrder', value: number, conveyor: { __typename?: 'Conveyor', _id: string, logo?: { __typename?: 'Image', name: string, urls?: { __typename?: 'Urls', webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null } } | null, summary: { __typename?: 'SummaryOrder', total: number, discount: number, subtotal: number, totalPaid: number } }> } };

export type PaymentsQueryVariables = Exact<{
  input?: InputMaybe<FiltersPaymentsInput>;
}>;


export type PaymentsQuery = { __typename?: 'Query', payments: { __typename?: 'ResponsePayments', docs: Array<{ __typename?: 'Payment', _id: string, name: string, type: TypePayment, active: boolean, message?: string | null, shops: Array<{ __typename?: 'Shop', _id: string }> }> } };

export type ProductsQueryVariables = Exact<{
  input: FiltersProductsInput;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ResponseProducts', docs: Array<{ __typename?: 'Product', _id: string, stock?: Array<{ __typename?: 'Stock', quantity: number }> | null }> } };

export type ReferencesQueryVariables = Exact<{
  companyId: Scalars['String']['input'];
  input?: InputMaybe<FiltersReferencesInput>;
}>;


export type ReferencesQuery = { __typename?: 'Query', references: { __typename?: 'ResponseReferences', totalPages: number, page: number, docs: Array<{ __typename?: 'ReferenceData', _id: string, name: string, price: number, description: string, discountPrice: number, products: Array<{ __typename?: 'Product', _id: string, status: StatusProduct, barcode: string, color: { __typename?: 'Color', _id: string, html: string, name: string, name_internal: string, image?: { __typename?: 'Image', _id: string, urls?: { __typename?: 'Urls', jpeg?: { __typename?: 'ImageTypes', small: string } | null, webp?: { __typename?: 'ImageTypes', small: string } | null } | null } | null }, size: { __typename?: 'Size', _id: string, value: string, weight: number }, images?: Array<{ __typename?: 'Image', _id: string, name: string, urls?: { __typename?: 'Urls', jpeg?: { __typename?: 'ImageTypes', small: string } | null, webp?: { __typename?: 'ImageTypes', small: string } | null } | null }> | null, stock?: Array<{ __typename?: 'Stock', quantity: number, warehouse: { __typename?: 'Warehouse', _id: string } }> | null }> }> } };

export type ShopsqueryQueryVariables = Exact<{
  input?: InputMaybe<FiltersShopsInput>;
}>;


export type ShopsqueryQuery = { __typename?: 'Query', shopsClient: { __typename: 'ResponseShopsClient', docs: Array<{ __typename: 'Shops', _id: string, name: string, address: string, phone?: string | null, maps?: string | null, company: { __typename: 'Company', _id: string, name: string }, city: { __typename: 'City', _id: string, name: string } }> } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', _id: string, name: string, username: string, customer?: { __typename?: 'Customer', _id: string, firstName: string, lastName: string, phone?: string | null, document: string, firstPurchase: boolean, wholesalerDate?: any | null, customerType: { __typename?: 'CustomerType', _id: string, name: string }, documentType: { __typename?: 'DocumentType', _id: string, abbreviation: string }, addresses?: Array<{ __typename?: 'Address', contact: string, extra?: string | null, field1: string, isMain?: boolean | null, loteNumber: string, neighborhood: string, number1: string, number2: string, phone: string, city: { __typename?: 'City', _id: string, name: string, state: string, country: { __typename?: 'Country', name: string } } }> | null } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', _id: string, shop: { __typename?: 'Shop', _id: string, name: string } } } };
