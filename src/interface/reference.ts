import { User, Reference } from "../graphql/types.graphql";

export interface reference {
  __typename?: "ReferenceData" | undefined;
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPrice: number;
  products:Product[]
}

export interface Product {
  __typename?: "Product" |  undefined;
  _id: string;
  status?: string;
  barcode: string;
  color: Color;
  size?: Size;
  images?: Image[] | null;
  stock?: Stock[] | null | undefined;
  createdAt?: string;
  updatedAt?: string;
  user?: User | null | undefined;
  reference?: Reference | null | undefined; // Agregar la propiedad 'reference'
}

export interface Color {
  __typename?: "Color";
  _id: string;
  html?: string | null;
  image?: Image | null;
  name?: string | null;
  name_internal?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  user?: User | null;
}

export interface Size {
  __typename?: string | null | undefined;
  _id?: string | null | undefined;
  value?: string | null | undefined;
  weight?: number;
}

export interface Image {
  __typename?: string | null | undefined;
  _id?: string | null | undefined;
  urls?: Urls | null | undefined;
}

export interface Urls {
  __typename?: string | null | undefined;
  jpeg?: ImageTypes | null | undefined;
  webp?: ImageTypes | null | undefined;
}

export interface ImageTypes {
  __typename?: string | null | undefined;
  small?: string | null | undefined;
}

export interface Stock {
  __typename?: string | null | undefined;
  warehouse?: Warehouse;
  quantity?: number;
}

export interface Warehouse {
  __typename?: string | null | undefined;
  _id?: string | null | undefined;
}
