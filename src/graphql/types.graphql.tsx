export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export enum ActionDetailAdjustment {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActionDetailInput {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActionDetailOutput {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActionDetailRequest {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActionDetailTransfer {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActionPaymentsOrder {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

/** Opción del permiso */
export type ActionPermission = {
  __typename?: 'ActionPermission';
  /** Identificador del permiso */
  _id: Scalars['String']['output'];
  /** Descripción del permiso */
  description: Scalars['String']['output'];
  /** Nombre de la acción del permiso */
  name: Scalars['String']['output'];
};

export enum ActionProductsOrder {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

/** Datos para agregar historial de metas a la tienda */
export type AddGoalHistoryInput = {
  /** Historico de metas */
  goalHistory?: InputMaybe<GoalHistoryInput>;
  /** Id de la tienda a la cual se va agregar el historico */
  shopId: Scalars['String']['input'];
};

/** Datos para agregar medios de pago al pedido */
export type AddPaymentsOrderInput = {
  /** Id del pedido que se requiere agreagar o editar productos */
  orderId: Scalars['String']['input'];
  /** Medios de pago */
  payments: Array<PaymentsOrderInput>;
};

/** Datos para agregar productos al pedido */
export type AddProductsOrderInput = {
  /** Productos a crear o actualizar */
  details: Array<DetailAddProductsOrderInput>;
  /** El pedido es mayorista */
  isWholesaler?: InputMaybe<Scalars['Boolean']['input']>;
  /** Id del pedido que se requiere agreagr o editar productos */
  orderId: Scalars['String']['input'];
};

/** Dirección del cliente */
export type Address = {
  __typename?: 'Address';
  /** Ciudad a la que pertenece */
  city: City;
  /** Contacto para el envío */
  contact: Scalars['String']['output'];
  /** Datos extra de la dirección */
  extra?: Maybe<Scalars['String']['output']>;
  /** Tipo de ubicación (Calle, Avenida, Manzana, Etc) */
  field1: Scalars['String']['output'];
  /** Define si la dirección es la principal */
  isMain?: Maybe<Scalars['Boolean']['output']>;
  /** Número de la casa */
  loteNumber: Scalars['String']['output'];
  /** Barrio */
  neighborhood: Scalars['String']['output'];
  /** Número del field1 */
  number1: Scalars['String']['output'];
  /** Número del field2 */
  number2: Scalars['String']['output'];
  /** Teléfono del contacto */
  phone: Scalars['String']['output'];
  /** Código postal */
  postalCode?: Maybe<Scalars['String']['output']>;
};

/** Dirección del cliente */
export type AddressInput = {
  /** Identificador de la ciudad */
  cityId: Scalars['String']['input'];
  /** Contacto para el envío */
  contact: Scalars['String']['input'];
  /** Datos extra de la dirección */
  extra?: InputMaybe<Scalars['String']['input']>;
  /** Tipo de ubicación (Calle, Avenida, Manzana, Etc) */
  field1: Scalars['String']['input'];
  /** Define si la dirección es la principal */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Número de la casa */
  loteNumber: Scalars['String']['input'];
  /** Barrio */
  neighborhood: Scalars['String']['input'];
  /** Número del field1 */
  number1: Scalars['String']['input'];
  /** Número del field2 */
  number2: Scalars['String']['input'];
  /** Teléfono del contacto */
  phone: Scalars['String']['input'];
};

/** Dirección del cliente */
export type AddressInputOrder = {
  /** Ciudad de envío */
  city: CityInput;
  /** Contacto para el envío */
  contact: Scalars['String']['input'];
  /** Datos extra de la dirección */
  extra?: InputMaybe<Scalars['String']['input']>;
  /** Tipo de ubicación (Calle, Avenida, Manzana, Etc) */
  field1: Scalars['String']['input'];
  /** Define si la dirección es la principal */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Número de la casa */
  loteNumber: Scalars['String']['input'];
  /** Barrio */
  neighborhood: Scalars['String']['input'];
  /** Número del field1 */
  number1: Scalars['String']['input'];
  /** Número del field2 */
  number2: Scalars['String']['input'];
  /** Teléfono del contacto */
  phone: Scalars['String']['input'];
};

/** Atributo del producto */
export type Attrib = {
  __typename?: 'Attrib';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Está activo */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación de la atributo */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la atributo */
  name: Scalars['String']['output'];
  /** Fecha de actualización de la atributo */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la atributo */
  user: User;
};

/** Autorización DIAN de la tienda */
export type AuthorizationDian = {
  __typename?: 'AuthorizationDian';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Comprobante contable de la autorización DIAN */
  accountingReceipt: Scalars['Float']['output'];
  /** Compañía a la que pertenece la autorización */
  company: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Fecha de finalización de la resolución */
  dateFinal?: Maybe<Scalars['DateTime']['output']>;
  /** Fecha de inicio de la resolución */
  dateInitial?: Maybe<Scalars['DateTime']['output']>;
  /** Si la autorización esta electrónica */
  isElectronic: Scalars['Boolean']['output'];
  /** Última fecha de facturación */
  lastDateInvoicing?: Maybe<Scalars['DateTime']['output']>;
  /** Ultimo numero usado para facturar */
  lastNumber: Scalars['Float']['output'];
  /** Valor mínimo para facturar */
  minValue: Scalars['Float']['output'];
  /** Numero final de la resolución */
  numberFinal?: Maybe<Scalars['Float']['output']>;
  /** Numero inicial de la resolución */
  numberInitial?: Maybe<Scalars['Float']['output']>;
  /** Prefijo de autorización */
  prefix: Scalars['String']['output'];
  /** Si es una habilitación true */
  qualification: Scalars['Boolean']['output'];
  /** Resolución de la autorización o de la habilitación */
  resolution?: Maybe<Scalars['String']['output']>;
  /** Tienda a la que pertenece */
  shop: Shop;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la autorización de facturación */
  user: User;
};

/** Caja donde se deposita el dinero */
export type Box = {
  __typename?: 'Box';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Base de la caja */
  base: Scalars['Float']['output'];
  /** Empresa a la que perteneces la caja */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Caja principal de la empresa */
  isMain: Scalars['Boolean']['output'];
  /** Nombre de la caja */
  name: Scalars['String']['output'];
  /** Total de dinero en la caja sin contar la base */
  total: Scalars['Float']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la caja */
  user: User;
};

/** Marca del producto */
export type Brand = {
  __typename?: 'Brand';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Esta activa la marca */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación de la marca */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la marca */
  name: Scalars['String']['output'];
  /** Fecha de actualización de la marca */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la marca */
  user: User;
};

/** Region de envios */
export type Carrier = {
  __typename?: 'Carrier';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** conversion */
  convertion?: Maybe<Scalars['Float']['output']>;
  /** Fecha creada del transportista */
  createdAt: Scalars['DateTime']['output'];
  /** descripcion del transportista */
  description: Scalars['String']['output'];
  /** Detalle del transportista */
  details?: Maybe<Array<DetailsData>>;
  /** Envio gratis */
  free: Scalars['Boolean']['output'];
  /** Requiere guia */
  guideRequired: Scalars['Boolean']['output'];
  /** Imagen */
  images?: Maybe<Image>;
  /** descripcion del transportista */
  module?: Maybe<Scalars['String']['output']>;
  /** Nombre de la transportadora */
  name: Scalars['String']['output'];
  /** Tiene costo de envio */
  shippingCharge: Scalars['Boolean']['output'];
  /** Estado del transportista */
  state: Scalars['Boolean']['output'];
  /** tiempo de envio del transportista */
  time: Scalars['String']['output'];
  /** descripcion del transportista */
  tipeCalcule?: Maybe<Scalars['String']['output']>;
  /** Fecha de la actualizacion del transportista */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o modificó la transportadora */
  user: User;
  /** Zonas guardadas */
  zone?: Maybe<Array<Zone>>;
};

/** Arqueo de caja */
export type CashRegister = {
  __typename?: 'CashRegister';
  /** Billete o moneda de $ 1.000 */
  B1000: Scalars['Float']['output'];
  /** Billete de $ 2.000 */
  B2000: Scalars['Float']['output'];
  /** Billete de $ 5.000 */
  B5000: Scalars['Float']['output'];
  /** Billete de $ 10.000 */
  B10000: Scalars['Float']['output'];
  /** Billete de $ 20.000 */
  B20000: Scalars['Float']['output'];
  /** Billete de $ 50.000 */
  B50000: Scalars['Float']['output'];
  /** Billete de $ 100.000 */
  B100000: Scalars['Float']['output'];
  /** Moneda de 50 */
  M50: Scalars['Float']['output'];
  /** Moneda de $ 100 */
  M100: Scalars['Float']['output'];
  /** Moneda de $ 200 */
  M200: Scalars['Float']['output'];
  /** Moneda de $ 500 */
  M500: Scalars['Float']['output'];
};

/** Arqueo de caja */
export type CashRegisterInput = {
  /** Billete o moneda de $ 1.000 */
  B1000: Scalars['Float']['input'];
  /** Billete de $ 2.000 */
  B2000: Scalars['Float']['input'];
  /** Billete de $ 5.000 */
  B5000: Scalars['Float']['input'];
  /** Billete de $ 10.000 */
  B10000: Scalars['Float']['input'];
  /** Billete de $ 20.000 */
  B20000: Scalars['Float']['input'];
  /** Billete de $ 50.000 */
  B50000: Scalars['Float']['input'];
  /** Billete de $ 100.000 */
  B100000: Scalars['Float']['input'];
  /** Moneda de 50 */
  M50: Scalars['Float']['input'];
  /** Moneda de $ 100 */
  M100: Scalars['Float']['input'];
  /** Moneda de $ 200 */
  M200: Scalars['Float']['input'];
  /** Moneda de $ 500 */
  M500: Scalars['Float']['input'];
};

/** Categoría del producto nivel 1 */
export type CategoryLevel1 = {
  __typename?: 'CategoryLevel1';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Nombre de la categoría */
  childs?: Maybe<Array<CategoryLevel2>>;
  /** Compañías */
  companies: Array<Company>;
  /** Fecha de creación de la categoría */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la categoría */
  name: Scalars['String']['output'];
  /** Medidas de la categoria */
  shipping?: Maybe<ShippingCategory>;
  /** Fecha de actualización de la categoría */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la categoría */
  user: User;
};

/** Categoría del producto nivel 2 */
export type CategoryLevel2 = {
  __typename?: 'CategoryLevel2';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Categorías inferiores */
  childs?: Maybe<Array<CategoryLevel3>>;
  /** Compañías */
  companies: Array<Company>;
  /** Fecha de creación de la categoría */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la categoría */
  name?: Maybe<Scalars['String']['output']>;
  /** Identificador de la categoría padre */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Fecha de actualización de la categoría */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la categoría */
  user: User;
};

/** Categoría del producto nivel 3 */
export type CategoryLevel3 = {
  __typename?: 'CategoryLevel3';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañías */
  companies: Array<Company>;
  /** Fecha de creación de la categoría */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la categoría */
  name?: Maybe<Scalars['String']['output']>;
  /** Identificador de la categoría padre */
  parentId?: Maybe<Scalars['String']['output']>;
  /** Fecha de actualización de la categoría */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la categoría */
  user: User;
};

/** Ciudad de la dirección */
export type City = {
  __typename?: 'City';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Código DANE */
  code: Scalars['String']['output'];
  /** Código DIAN */
  codeDian: Scalars['Float']['output'];
  /** País */
  country: Country;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Código postal */
  defaultPostalCode: Scalars['String']['output'];
  /** Nombre de la ciudad */
  name: Scalars['String']['output'];
  /** Departamento */
  state: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la ciudad */
  user: User;
  /** Zona a la que pertenece la ciudad */
  zone?: Maybe<Array<Zone>>;
};

/** Ciudad entrada */
export type CityInput = {
  /** Identificador de mongo */
  _id: Scalars['String']['input'];
  /** País */
  country: CountryInput;
  /** Fecha de creación */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Nombre de la ciudad */
  name: Scalars['String']['input'];
  /** Departamento */
  state: Scalars['String']['input'];
  /** Fecha de actualización */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Cierre verificado de facturación */
export type CloseVerified = {
  __typename?: 'CloseVerified';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Listado de billetes y monedas registrados */
  cashRegister: CashRegister;
  /** Fecha de cierre */
  closeDate: Scalars['DateTime']['output'];
  /** cierre que se verifico */
  closeZ: CloseZInvoicing;
  /** Compañía a la que pertence el cierre */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Egresos del día */
  expenses?: Maybe<Array<Expense>>;
  /** Egresos corregido */
  newExpense: Scalars['Float']['output'];
  /** Ventas por transaccion corregida */
  newQuantityBank?: Maybe<Scalars['Float']['output']>;
  /** Ventas por datafono corregida */
  newQuantityDataphone?: Maybe<Scalars['Float']['output']>;
  /** Total de pagos registrados corregidos */
  newTotalPaymentRegister: Scalars['Float']['output'];
  /** Total de pagos reportados corregidos */
  newTotalPaymentReport: Scalars['Float']['output'];
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Observacion al corregir un cierre */
  observation: Scalars['String']['output'];
  /** Listado de pagos */
  payments?: Maybe<Array<PaymentOrderClose>>;
  /** Medios de pago usados para cruzar créditos */
  paymentsCredit?: Maybe<Array<PaymentCredit>>;
  /** Punto de venta que registra el cierre */
  pointOfSale: PointOfSale;
  /** Prefijo del número */
  prefix: Scalars['String']['output'];
  /** Transacciones reportadas por el usuario */
  quantityBank: Scalars['Float']['output'];
  /** Ventas por datafono reportadas por el usuario */
  quantityDataphone?: Maybe<Scalars['Float']['output']>;
  /** Devoluciones generadas */
  refunds?: Maybe<RefundOrderClose>;
  /** Datos de las ordenes */
  summaryOrder: SummaryOrderClose;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cierre */
  user: User;
};

/** Cierre X de facturación */
export type CloseXInvoicing = {
  __typename?: 'CloseXInvoicing';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Listado de billetes y monedas registrados */
  cashRegister: CashRegister;
  /** Fecha de cierre */
  closeDate: Scalars['DateTime']['output'];
  /** Compañía a la que pertence el cierre */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Egresos del día */
  expenses?: Maybe<Array<Expense>>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Listado de pagos */
  payments?: Maybe<Array<PaymentOrderClose>>;
  /** Medios de pago usados para cruzar créditos */
  paymentsCredit?: Maybe<Array<PaymentCredit>>;
  /** Punto de venta que registra el cierre */
  pointOfSale: PointOfSale;
  /** Transacciones reportadas por el usuario */
  quantityBank: Scalars['Float']['output'];
  /** Ventas por datafono reportadas por el usuario */
  quantityDataphone?: Maybe<Scalars['Float']['output']>;
  /** Devoluciones generadas */
  refunds?: Maybe<RefundOrderClose>;
  /** Datos de las ordenes */
  summaryOrder: SummaryOrderClose;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cierre */
  user: User;
};

/** Cierre Z de facturación */
export type CloseZInvoicing = {
  __typename?: 'CloseZInvoicing';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Listado de billetes y monedas registrados */
  cashRegister: CashRegister;
  /** Fecha de cierre */
  closeDate: Scalars['DateTime']['output'];
  /** Compañía a la que pertence el cierre */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Egresos del día */
  expenses?: Maybe<Array<Expense>>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Listado de pagos */
  payments?: Maybe<Array<PaymentOrderClose>>;
  /** Medios de pago usados para cruzar créditos */
  paymentsCredit?: Maybe<Array<PaymentCredit>>;
  /** Punto de venta que registra el cierre */
  pointOfSale: PointOfSale;
  /** Prefijo del número */
  prefix: Scalars['String']['output'];
  /** Transacciones reportadas por el usuario */
  quantityBank: Scalars['Float']['output'];
  /** Ventas por datafono reportadas por el usuario */
  quantityDataphone?: Maybe<Scalars['Float']['output']>;
  /** Devoluciones generadas */
  refunds?: Maybe<RefundOrderClose>;
  /** Datos de las ordenes */
  summaryOrder: SummaryOrderClose;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cierre */
  user: User;
  /** si el cierre ha sido verificado */
  verifiedStatus: VerifiedClose;
};

/** Color del producto */
export type Color = {
  __typename?: 'Color';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado del color */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación del color */
  createdAt: Scalars['DateTime']['output'];
  /** Color en formato html */
  html: Scalars['String']['output'];
  /** Imagen del color */
  image?: Maybe<Image>;
  /** Nombre del color */
  name: Scalars['String']['output'];
  /** Nombre interno del color */
  name_internal: Scalars['String']['output'];
  /** Fecha de actualización del color */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea el color */
  user: User;
};

/** Combinaciones de color y talla */
export type CombinationInput = {
  /** Identificador del color */
  colorId: Scalars['String']['input'];
  /** Identificadores de las imagenes */
  imageIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identificador de la talla */
  sizeId: Scalars['String']['input'];
};

/** Empresa */
export type Company = {
  __typename?: 'Company';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Esta activa la compañía */
  active: Scalars['Boolean']['output'];
  /** Dirección de la compañía */
  address: Scalars['String']['output'];
  /** Ciudad de la dirección */
  city: City;
  /** Fecha de creación de la compañia */
  createdAt: Scalars['DateTime']['output'];
  /** Documento de la compañía */
  document: Scalars['String']['output'];
  /** Tipo de documento de la compañía */
  documentType: DocumentType;
  /** Dígito de verificación del documento */
  dv: Scalars['Float']['output'];
  /** Correo de la compañia */
  email: Scalars['String']['output'];
  /** Es la compañía principal */
  isMain: Scalars['Boolean']['output'];
  /** Logo de la compañia */
  logo: Image;
  /** Nombre de la compañía */
  name: Scalars['String']['output'];
  /** Teléfono de la compañía */
  phone: Scalars['String']['output'];
  /** Tipo de responsabilidad contable de la compañía */
  typeLiability: TypeLiability;
  /** Tipo de régimen compañía */
  typeRegime: TypeRegime;
  /** Fecha de actualización de la compañia */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la compañia */
  user: User;
};

/** Datos para confirmar productos */
export type ConfirmPaymentsOrderInput = {
  /** Identificador del pedido a confirmar los pagos */
  orderId: Scalars['String']['input'];
  /** Pagos a confirmar */
  payments: Array<PaymentConfirm>;
};

/** Datos para confirmar productos */
export type ConfirmProductsOrderInput = {
  /** Productos a confirmar */
  details: Array<DetailsConfirm>;
  /** Identificador del pedido a confirmar productos */
  orderId: Scalars['String']['input'];
};

/** Datos para confirmar los productos del traslado */
export type ConfirmStockTransferInput = {
  /** Productos para confirmar */
  details: Array<DetailConfirmStockTransferInput>;
};

/** Modelo para la transportadora */
export type Conveyor = {
  __typename?: 'Conveyor';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** conversion */
  convertion?: Maybe<Scalars['Float']['output']>;
  /** Fecha de creación de la transportadora */
  createdAt: Scalars['DateTime']['output'];
  /** Precio por defecto */
  defaultPrice: Scalars['Float']['output'];
  /** Detalle del transportista */
  detailsZone?: Maybe<Array<DetailsConveyor>>;
  /** Envio gratis */
  free?: Maybe<Scalars['Boolean']['output']>;
  /** Requiere guia */
  guideRequired?: Maybe<Scalars['Boolean']['output']>;
  /** Logo de la tranportadora */
  logo?: Maybe<Image>;
  /** Mensaje para el usuario */
  message?: Maybe<Scalars['String']['output']>;
  /** descripcion del transportista */
  module?: Maybe<Scalars['String']['output']>;
  /** Nombre de la transportadora */
  name: Scalars['String']['output'];
  /** Precios por región solo para type ZONE */
  rates?: Maybe<Array<RatesRegion>>;
  /** Tiene costo de envio */
  shippingCharge?: Maybe<Scalars['Boolean']['output']>;
  /** Estado del transportista */
  state?: Maybe<Scalars['Boolean']['output']>;
  /** tiempo de envio del transportista */
  time?: Maybe<Scalars['String']['output']>;
  /** descripcion del transportista */
  tipeCalcule?: Maybe<Scalars['String']['output']>;
  /** Tipo de transportadora */
  type?: Maybe<ConveyorType>;
  /** Fecha de actualización de la transportadora */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la transportadora */
  user: User;
  /** Zonas guardadas */
  zone?: Maybe<Array<Zone>>;
};

/** Transportadora que realiza el envio */
export type ConveyorOrder = {
  __typename?: 'ConveyorOrder';
  /** Datos del transportista */
  conveyor: Conveyor;
  /** Error del médio de pago */
  error?: Maybe<Scalars['String']['output']>;
  /** Código de la guia del transportista */
  guideCode?: Maybe<Scalars['String']['output']>;
  /** Fecha en el que se realiza el envío */
  shippingDate?: Maybe<Scalars['DateTime']['output']>;
  /** Valor del envío */
  value: Scalars['Float']['output'];
};

export enum ConveyorType {
  Fedex = 'FEDEX',
  Interrapidisimo = 'INTERRAPIDISIMO',
  Zone = 'ZONE'
}

/** Pais */
export type Country = {
  __typename?: 'Country';
  /** Nombre del país */
  name: Scalars['String']['output'];
  /** Prefijo del país */
  prefix: Scalars['String']['output'];
};

/** País entrada */
export type CountryInput = {
  /** Nombre del país */
  name: Scalars['String']['input'];
};

/** Cupones para pagos */
export type Coupon = {
  __typename?: 'Coupon';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Código para redención del cupón */
  code: Scalars['String']['output'];
  /** Consecutivo del cupón */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Fecha de vencimiento del cupón */
  expiration: Scalars['DateTime']['output'];
  /** Mensaje del pie del cupón */
  message: Scalars['String']['output'];
  /** Consecutivo del cupón */
  number: Scalars['Float']['output'];
  /** Estado del cupón */
  status: StatusCoupon;
  /** Título del cupón */
  title: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cupón */
  user: User;
  /** Valor de redención del cupón */
  value: Scalars['Float']['output'];
};

/** Datos para crear un atributo */
export type CreateAttribInput = {
  /** Nombre del atributo */
  name: Scalars['String']['input'];
};

/** Datos para la creación de una autorización */
export type CreateAuthorizationInput = {
  /** Comprobante contable de la autorización DIAN */
  accountingReceipt: Scalars['String']['input'];
  /** Fecha de finalización de la resolución */
  dateFinal?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fecha de inicio de la resolución */
  dateInitial?: InputMaybe<Scalars['DateTime']['input']>;
  /** Es electrónica */
  isElectronic: Scalars['Boolean']['input'];
  /** Valor mínimo para facturar electrónicamente */
  minValue: Scalars['Float']['input'];
  /** Numero final de la resolución */
  numberFinal?: InputMaybe<Scalars['Float']['input']>;
  /** Numero inicial de la resolución */
  numberInitial?: InputMaybe<Scalars['Float']['input']>;
  /** Prefijo de facturación */
  prefix: Scalars['String']['input'];
  /** Si es una habilitación true */
  qualification?: InputMaybe<Scalars['Boolean']['input']>;
  /** resolución de facturacion */
  resolution?: InputMaybe<Scalars['String']['input']>;
  /** Id de la tienda */
  shopId: Scalars['String']['input'];
};

/** Datos para crear la caja */
export type CreateBoxInput = {
  /** Cantidad de la base para la caja */
  base: Scalars['Float']['input'];
  /** Es caja principal de la compañía */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre de la caja */
  name: Scalars['String']['input'];
};

/** Datos para crear una marca */
export type CreateBrandInput = {
  /** Nombre de la marca */
  name: Scalars['String']['input'];
};

/** Datos para crear un transportador */
export type CreateCarrierInput = {
  /** Descripción del transportador */
  defaultPrice: Scalars['Float']['input'];
  /** Detalles del transportista */
  details?: InputMaybe<Array<DetailsInput>>;
  /** Envio de gasto */
  free?: InputMaybe<Scalars['Boolean']['input']>;
  /** Requiere guia */
  guideRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificador de las imagen del producto */
  images?: InputMaybe<Scalars['String']['input']>;
  /** Descripción del transportador */
  message: Scalars['String']['input'];
  /** Nombre del transportador */
  name: Scalars['String']['input'];
  /** Tiene costo de envio */
  shippingCharge?: InputMaybe<Scalars['Boolean']['input']>;
  /** Estado del transportador */
  state?: InputMaybe<Scalars['Boolean']['input']>;
  /** Descripción del transportador */
  time: Scalars['String']['input'];
  /** Descripción de la zona */
  user?: InputMaybe<Scalars['String']['input']>;
  /** Zonas del transportista */
  zone: Array<Scalars['String']['input']>;
};

/** Datos para la creación de una categoría */
export type CreateCategoryInput = {
  /** Alto del producto */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Nivel de la categoría */
  level: Scalars['Float']['input'];
  /** Largo del producto */
  long?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la categoría */
  name: Scalars['String']['input'];
  /** Identificador de la categoría padre */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Volumen del producto */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Peso del producto */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Ancho del producto */
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para crear una ciudad */
export type CreateCityInput = {
  /** Código DANE */
  code: Scalars['String']['input'];
  /** Código DIAN */
  codeDian: Scalars['Float']['input'];
  /** Nombre del país */
  countryName: Scalars['String']['input'];
  /** Prefijo del país */
  countryPrefix: Scalars['String']['input'];
  /** Código postal de la ciudad por defecto */
  defaultPostalCode: Scalars['String']['input'];
  /** Nombre de la ciudad */
  name: Scalars['String']['input'];
  /** Nombre del departamento */
  state: Scalars['String']['input'];
  /** Tipo de zona */
  zone: Array<Scalars['String']['input']>;
};

/** Datos para crear un cierre verificado */
export type CreateCloseVerifiedInput = {
  /** Cantidad de transferencias reportadas */
  bankReport: Scalars['Float']['input'];
  /** Dinero registrado */
  cashRegister: Scalars['Float']['input'];
  /** Dinero reportado */
  cashReport: Scalars['Float']['input'];
  /** Identificador del cierre z que se va a verificar */
  closeZId: Scalars['String']['input'];
  /** Cantidad de ventas por datafono reportadas */
  dataphoneReport: Scalars['Float']['input'];
  /** egresos */
  expenses: Scalars['Float']['input'];
  /** Observacion */
  observation: Scalars['String']['input'];
};

/** Datos para crear un cierre X */
export type CreateCloseXInvoicingInput = {
  /** Listado de cash reportado */
  cashRegister: CashRegisterInput;
  /** Fecha del cierre */
  closeDate: Scalars['String']['input'];
  /** Identificador del punto de venta */
  pointOfSaleId: Scalars['String']['input'];
  /** Cantidad de trasnferencias reportadas */
  quantityBank: Scalars['Float']['input'];
  /** Cantidad de ventas por datafono reportadas */
  quantityDataphone: Scalars['Float']['input'];
};

/** Datos para crear un cierre Z */
export type CreateCloseZInvoicingInput = {
  /** Listado de cash reportado */
  cashRegister: CashRegisterInput;
  /** Fecha del cierre */
  closeDate: Scalars['String']['input'];
  /** Identificador del punto de venta */
  pointOfSaleId: Scalars['String']['input'];
  /** Cantidad de trasnferencias reportadas */
  quantityBank: Scalars['Float']['input'];
  /** Cantidad de ventas por datafono reportadas */
  quantityDataphone: Scalars['Float']['input'];
};

/** Datos para crear un color */
export type CreateColorInput = {
  /** Url asignado al color */
  html: Scalars['String']['input'];
  /** Identificador de la imagen asignada al color */
  imageId?: InputMaybe<Scalars['String']['input']>;
  /** Nombre asignado al color */
  name: Scalars['String']['input'];
  /** Nombre interno asignado al color */
  name_internal: Scalars['String']['input'];
};

/** Datos para crear empresa */
export type CreateCompanyInput = {
  /** Dirección de la empresa */
  address: Scalars['String']['input'];
  /** Identificador de la ciudad */
  cityId: Scalars['String']['input'];
  /** Documento de la empresa */
  document: Scalars['String']['input'];
  /** Identificador del tipo de documento */
  documentTypeId: Scalars['String']['input'];
  /** Email de la empresa */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Email de la empresa */
  email: Scalars['String']['input'];
  /** Identificador de logo para la empresa */
  logoId: Scalars['String']['input'];
  /** Nombre de la empresa */
  name: Scalars['String']['input'];
  /** Teléfono de la empresa */
  phone: Scalars['String']['input'];
  /** Identificador del tipo de responsabilidad contable */
  typeLiabilityId: Scalars['String']['input'];
  /** Identificador del tipo de régimen contable */
  typeRegimeId: Scalars['String']['input'];
};

/** Datos para la creación del cupón */
export type CreateCouponInput = {
  /** Fecha de expiración para el cupón */
  expiration: Scalars['DateTime']['input'];
  /** Mensaje del cupón */
  message: Scalars['String']['input'];
  /** Titulo del cupón */
  title: Scalars['String']['input'];
  /** Monto para crear el cupón */
  value: Scalars['Float']['input'];
};

/** Datos para crear un crédito */
export type CreateCreditInput = {
  /** Monto de crédigo aprobado */
  amount: Scalars['Float']['input'];
  /** Identificador del cliente al que se le va a asignar el crédito */
  customerId: Scalars['String']['input'];
};

/** Datos para crear un cliente */
export type CreateCustomerInput = {
  /** Direcciones del cliente */
  addresses?: InputMaybe<Array<AddressInput>>;
  /** Fecha de nacimiento */
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  /** Identificación de tipo de cliente */
  customerTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Número de documento */
  document: Scalars['String']['input'];
  /** Identificación del tipo de documento */
  documentTypeId: Scalars['String']['input'];
  /** Dígito de verificación */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Correo del cliente */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Nombres del cliente */
  firstName: Scalars['String']['input'];
  /** Primera vez que compra */
  firstPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Es el cliente por defecto, solo debe existir uno */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Si es persona jurídica */
  isLegalPerson?: InputMaybe<Scalars['Boolean']['input']>;
  /** El teléfono tiene whatsapp */
  isWhatsapp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Apellidos del cliente */
  lastName: Scalars['String']['input'];
  /** Número de teléfono */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de responsabilidad constable */
  typeLiabilityId: Scalars['String']['input'];
  /** Identificador del tipo de régimen contable */
  typeRegimeId: Scalars['String']['input'];
};

/** Datos para crear un descuento */
export type CreateDiscountRuleInput = {
  /** Fecha final para aplicar el descuento */
  dateFinal: Scalars['String']['input'];
  /** Fecha inicial para aplicar el descuento */
  dateInitial: Scalars['String']['input'];
  /** Nombre del descuento */
  name: Scalars['String']['input'];
  /** Porcentaje del descuento */
  percent?: InputMaybe<Scalars['Float']['input']>;
  /** Reglas a aplicar */
  rules: Array<RuleInput>;
  /** Valor del descuento */
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para crear Egreso */
export type CreateExpenseInput = {
  /** Identificador de la caja */
  boxId: Scalars['String']['input'];
  /** Descripción del pago */
  concept?: InputMaybe<Scalars['String']['input']>;
  /** Valor del egreso */
  value: Scalars['Float']['input'];
};

/** Datos para crear una ciudad */
export type CreateLedgerAccountInputDto = {
  /** Descripción de la cuenta contable */
  description: Scalars['String']['input'];
  /** Número de cuenta contable */
  ledgerAccount: Scalars['Float']['input'];
  /** Nombre de la cuenta contable */
  name: Scalars['String']['input'];
  /** Tipo de cuenta bancaria 1 - 9 */
  type: Scalars['Float']['input'];
};

/** Datos para crear el pedido */
export type CreateOrderInput = {
  /** Identificador de la tienda del pedido */
  shopId: Scalars['String']['input'];
  /** Estado del pedido */
  status: StatusOrder;
};

/** Datos para crear un método de pago */
export type CreatePaymentInput = {
  /** Código DIAN */
  codeDian: Scalars['Float']['input'];
  /** Color en html que representa el método de pago  */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la imagen del método de pago */
  logoId?: InputMaybe<Scalars['String']['input']>;
  /** Mensaje para el medio de pago */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del método de pago */
  name: Scalars['String']['input'];
  /** Identificador de tiendas que usan el método de pago */
  shopIds: Array<Scalars['String']['input']>;
  /** Tipo de método de pago */
  type: TypePayment;
};

/** Datos para crear un punto de venta */
export type CreatePointOfSaleInput = {
  /** Identificador de la autorización electrónica de facturación */
  authorizationElectronicId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la autorización de facturación */
  authorizationId: Scalars['String']['input'];
  /** Identificador de la caja asignada */
  boxId: Scalars['String']['input'];
  /** Nombre del punto de venta */
  name: Scalars['String']['input'];
  /** Identificador de la tienda a la que pertence */
  shopId: Scalars['String']['input'];
};

/** Datos para crear un producto */
export type CreateProductInput = {
  /** Identificador del producto */
  colorId: Scalars['String']['input'];
  /** Identificador de las imagenes del producto */
  imagesId?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identificador de la referencia */
  referenceId: Scalars['String']['input'];
  /** Identificador del producto */
  sizeId: Scalars['String']['input'];
};

/** Datos para crear un recibo de caja */
export type CreateReceiptInput = {
  /** Identificador de la caja que va a afectar */
  boxId: Scalars['String']['input'];
  /** Concepto del recibo */
  concept: Scalars['String']['input'];
  /** Pedidos a los que afecta el recibo */
  details?: InputMaybe<Array<DetailReceiptOrder>>;
  /** Cruza crédito el recibo */
  isCredit: Scalars['Boolean']['input'];
  /** Identificador del medio de pago */
  paymentId: Scalars['String']['input'];
  /** Identificador del punto de venta */
  pointOfSaleId: Scalars['String']['input'];
  /** Valor del recibo */
  value: Scalars['Float']['input'];
};

/** Datos para crear una referencia */
export type CreateReferenceInput = {
  /** Estado de la referencia */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Atributos de la referencia */
  attribIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Marca de la referencia */
  brandId: Scalars['String']['input'];
  /** Categoría nivel 1 de la referencia */
  categoryLevel1Id: Scalars['String']['input'];
  /** Categoría nivel 2 de la referencia */
  categoryLevel2Id?: InputMaybe<Scalars['String']['input']>;
  /** Categoría nivel 3 de la referencia */
  categoryLevel3Id?: InputMaybe<Scalars['String']['input']>;
  /** Se puede cambiar */
  changeable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Combinaciones de talla y color para crear los productos */
  combinations?: InputMaybe<Array<CombinationInput>>;
  /** Costo de la referencia */
  cost: Scalars['Float']['input'];
  /** Descripción de la referencia */
  description: Scalars['String']['input'];
  /** Alto del producto */
  height: Scalars['Float']['input'];
  /** Largo del producto */
  long: Scalars['Float']['input'];
  /** Nombre de la referencia */
  name: Scalars['String']['input'];
  /** Precio de la referencia */
  price: Scalars['Float']['input'];
  /** Volumen del producto */
  volume: Scalars['Float']['input'];
  /** Peso del producto */
  weight: Scalars['Float']['input'];
  /** Ancho del producto */
  width: Scalars['Float']['input'];
};

/** Datos para la creación de una zona */
export type CreateRegionInput = {
  /** Nombre de la ciudad */
  city: Scalars['String']['input'];
  /** Descripción de la zona */
  country?: InputMaybe<Scalars['String']['input']>;
  /** departamento de la region */
  dpto?: InputMaybe<Scalars['String']['input']>;
  /** Descripción de la zona */
  idZone?: InputMaybe<Scalars['String']['input']>;
  /** Identifica el estado de la zona */
  state?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateReturnOrderInput = {
  /** Productos que se devuelven del pedido */
  details: Array<DetailReturnInput>;
  /** Pedido al que afecta la devolución */
  orderId: Scalars['String']['input'];
};

/** Datos para crear una regla de devolución */
export type CreateReturnOrderRuleInput = {
  /** Si la regla se encuentra activa */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Días máximos para generar la devolución */
  limitDays: Scalars['Float']['input'];
  /** Nombre de la regla */
  name: Scalars['String']['input'];
  /** Reglas a aplicar */
  rules: Array<RuleInput>;
};

/** Datos para la creación de un rol */
export type CreateRoleInput = {
  /** Estado del rol */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Habilita para que el usuario pueda consulta cualquier bodega */
  changeWarehouse?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre del rol */
  name: Scalars['String']['input'];
  /** Identificadores de los permisos asignados */
  permissionIds: Array<Scalars['String']['input']>;
  /** Orden por gerarquía */
  rank?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para la creación de la tienda */
export type CreateShopInput = {
  /** Dirección de la tienda */
  address: Scalars['String']['input'];
  /** Razón social de la tienda */
  businessName: Scalars['String']['input'];
  /** Identificador de la ciudad */
  cityId?: InputMaybe<Scalars['String']['input']>;
  /** Nombre comercial de la tienda */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la bodega predeterminada para la tienda */
  defaultWarehouseId: Scalars['String']['input'];
  /** Documento de la tienda */
  document?: InputMaybe<Scalars['String']['input']>;
  /** Documento nit de la tienda */
  documentNit: Scalars['String']['input'];
  /** Identificador del tipo de documento */
  documentTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Documento de la tienda */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Email de la tienda */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Meta asiganda a la tienda */
  goal?: InputMaybe<Scalars['Float']['input']>;
  /** Es centro de distribución */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Embed de la tienda */
  maps?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la tienda */
  name: Scalars['String']['input'];
  /** Teléfono de la tienda */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Mostrar en páginas web */
  showWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificador del tipo de responsabilidad contable */
  typeLiabilityId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de régimen contable */
  typeRegimeId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la bodega de centro de distribución asignado */
  warehouseMainId?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para crear una talla */
export type CreateSizeInput = {
  /** Valor asignado a la talla */
  value: Scalars['String']['input'];
  /** Posición del ordenamiento */
  weight: Scalars['Float']['input'];
};

/** Datos para crear el ajuste de productos */
export type CreateStockAdjustmentInput = {
  /** Productos del ajuste */
  details: Array<DetailStockAdjustmentCreateInput>;
  /** Observación del que realiza el ajuste */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado del ajuste */
  status?: InputMaybe<StatusStockAdjustment>;
  /** Identificador de la bodega para el ajuste */
  warehouseId: Scalars['String']['input'];
};

/** Datos para crear la entrada de productos */
export type CreateStockInputInput = {
  /** Productos de la entrada */
  details: Array<DetailStockInputCreateInput>;
  /** Observación del que realiza la entrada */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la entrada */
  status?: InputMaybe<StatusStockInput>;
  /** Identificador de la bodega para la entrada */
  warehouseId: Scalars['String']['input'];
};

/** Datos para crear la salida de productos */
export type CreateStockOutputInput = {
  /** Productos de la salida */
  details: Array<DetailStockOutputCreateInput>;
  /** Observación del que realiza la salida */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la salida */
  status?: InputMaybe<StatusStockOutput>;
  /** Identificador de la bodega para la salida */
  warehouseId: Scalars['String']['input'];
};

/** Datos para crear la solicitud de productos */
export type CreateStockRequestInput = {
  /** Observación de la solicitud */
  autogenerate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Productos de la solicitud */
  details: Array<DetailStockRequestCreateInput>;
  /** Observación de la solicitud */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la solicitud */
  status?: InputMaybe<StatusStockRequest>;
  /** Identificador de la bodega de destino de la solicitud */
  warehouseDestinationId: Scalars['String']['input'];
  /** Identificador de la bodega de origen de la solicitud */
  warehouseOriginId: Scalars['String']['input'];
};

/** Productos para marcar agregados para el historial */
export type CreateStockTransferInput = {
  /** Productos del traslado */
  details: Array<DetailStockTransferCreateInput>;
  /** Observación del que realiza el traslado */
  observationOrigin?: InputMaybe<Scalars['String']['input']>;
  /** Solicitudes usadas */
  requests?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Estado del traslado */
  status?: InputMaybe<StatusStockTransfer>;
  /** Identificador de la bodega de destino del traslado */
  warehouseDestinationId: Scalars['String']['input'];
  /** Identificador de la bodega de origen del traslado */
  warehouseOriginId: Scalars['String']['input'];
};

/** Datos para la creación de un usuario */
export type CreateUserInput = {
  /** Compañía a la que pertecene el usuario */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del cliente asignado al usuario */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Identifica si el usuario es web */
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre del usuario */
  name: Scalars['String']['input'];
  /** Contraseña de usuario */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del punto de venta asignado al usuario */
  pointOfSaleId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del rol del usuario */
  roleId: Scalars['String']['input'];
  /** Identificador de la tienda asignada al usuario */
  shopId: Scalars['String']['input'];
  /** Estado del usuario */
  status?: InputMaybe<StatusUser>;
  /** Usuario registrado */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para la creacion de una bodega */
export type CreateWarehouseInput = {
  /** Inventario máximo de productos */
  max: Scalars['Float']['input'];
  /** Inventario mínimo de productos */
  min: Scalars['Float']['input'];
  /** Nombre de la bodega */
  name: Scalars['String']['input'];
};

/** Datos para la creación de una zona */
export type CreateZoneInput = {
  /** Descripción de la zona */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la zona */
  name: Scalars['String']['input'];
  /** Identifica el estado de la zona */
  state?: InputMaybe<Scalars['Boolean']['input']>;
  /** Descripción de la zona */
  user?: InputMaybe<Scalars['String']['input']>;
};

/** Crédito del cliente */
export type Credit = {
  __typename?: 'Credit';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Monto habilitado para el crédito */
  amount: Scalars['Float']['output'];
  /** Monto disponible para el crédito */
  available: Scalars['Float']['output'];
  /** Monto usado del crédito */
  balance: Scalars['Float']['output'];
  /** Compañía a la que pertenece el crédito */
  company: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Cliente al que pertenece el crédito */
  customer: Customer;
  /** Detalle de la afectación del crédito */
  details?: Maybe<Array<DetailCredit>>;
  /** Monto congelado que no ha sido finalizado */
  frozenAmount: Scalars['Float']['output'];
  /** Estado del crédito */
  status: StatusCredit;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la cartera */
  user: User;
};

/** Crédito del cliente */
export type CreditHistory = {
  __typename?: 'CreditHistory';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Valor del movimiento */
  amount: Scalars['Float']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Crédito que genera el movimiento */
  credit: Credit;
  /** Número del documento que relaiza el proceso del pedido */
  documentNumber?: Maybe<Scalars['Float']['output']>;
  /** Tipo de documento que genera el movimiento */
  documentType?: Maybe<TypeDocument>;
  /** Tipo de movimiento de cartera */
  type: TypeCreditHistory;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o edito el historial */
  user: User;
};

/** Cliente */
export type Customer = {
  __typename?: 'Customer';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Se encuentra activo el usuario */
  active: Scalars['Boolean']['output'];
  /** Direcciones del cliente */
  addresses?: Maybe<Array<Address>>;
  /** Fecha de nacimiento */
  birthday?: Maybe<Scalars['DateTime']['output']>;
  /** Compañía del cliente */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Tipo de cliente */
  customerType: CustomerType;
  /** Número de documento */
  document: Scalars['String']['output'];
  /** Tipo de documento */
  documentType: DocumentType;
  /** Digito de verificación del documento */
  dv: Scalars['Float']['output'];
  /** Número telefónico tiene whatsapp */
  email?: Maybe<Scalars['String']['output']>;
  /** Nombres del cliente */
  firstName: Scalars['String']['output'];
  /** Es la primera compra */
  firstPurchase: Scalars['Boolean']['output'];
  /** Cliente por defecto */
  isDefault: Scalars['Boolean']['output'];
  /** Es persona jurídica */
  isLegalPerson: Scalars['Boolean']['output'];
  /** Número telefonico tiene whatsapp */
  isWhatsapp: Scalars['Boolean']['output'];
  /** Apellidos del cliente */
  lastName: Scalars['String']['output'];
  /** Número telefónico del cliente */
  phone?: Maybe<Scalars['String']['output']>;
  /** Tipo de responsabilidad contable del cliente */
  typeLiability: TypeLiability;
  /** Tipo de régimen del cliente */
  typeRegime: TypeRegime;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cliente */
  user: User;
  /** Fecha de mayorista */
  wholesalerDate?: Maybe<Scalars['DateTime']['output']>;
};

/** Ventas de tipos de clientes */
export type CustomerSalesReport = {
  __typename?: 'CustomerSalesReport';
  /** Cantidad de ventas */
  quantity: Scalars['Float']['output'];
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
  /** Tipo de cliente */
  typeCustomer: CustomerType;
};

/** Ventas de tipos de clientes */
export type CustomerSalesReportInvoicing = {
  __typename?: 'CustomerSalesReportInvoicing';
  /** Nombre del cliente */
  customerName: Scalars['String']['output'];
  /** Numero documento del cliente */
  document: Scalars['String']['output'];
  /** Cantidad de ventas */
  quantity: Scalars['Float']['output'];
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
  /** Tipo de cliente */
  typeCustomer: CustomerType;
};

/** Tipos de clientes */
export type CustomerType = {
  __typename?: 'CustomerType';
  /** Identificación de mongo */
  _id: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre del tipo de cliente */
  name: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el tipo de cliente */
  user: User;
};

/** Cierre diario */
export type DailyClosing = {
  __typename?: 'DailyClosing';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Fecha de cierre */
  closeDate: Scalars['DateTime']['output'];
  /** Compañía a la que pertence el cierre */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Facturas del cierre */
  invoices: Array<Invoice>;
  /** Punto de venta que registra el cierre */
  pointOfSale: PointOfSale;
  /** Resumen del cierre */
  summary: SummaryClose;
  /** Resumen de pagos del cierre */
  summaryPayments: Array<SummaryPayment>;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el cierre */
  user: User;
};

/** Datos para generar la facturación */
export type DataGenerateInvoicesInput = {
  /** Si se desea facturar 100% */
  allCash?: InputMaybe<Scalars['Boolean']['input']>;
  /** Efectivo para facturar */
  cash: Scalars['Float']['input'];
  /** Fecha final para la facturación */
  dateFinal: Scalars['String']['input'];
  /** Fecha inicial para la facturación */
  dateInitial: Scalars['String']['input'];
  /** Identificador de la tienda a facturar */
  shopId: Scalars['String']['input'];
};

/** Detalle para agregar al crédito */
export type DetailAddCredit = {
  /** Pedido que afecta la cartera */
  orderId: Scalars['String']['input'];
  /** Valor que afecta la cartera */
  total: Scalars['Float']['input'];
  /** Tipo de movimiento */
  type: TypeCreditHistory;
};

/** Producto que se va a agregar */
export type DetailAddProductsOrderInput = {
  /** Acción a realizar con el producto */
  action: ActionProductsOrder;
  /** Identificador Producto agregado al pedido */
  productId: Scalars['String']['input'];
  /** Cantidad de producto agregado */
  quantity: Scalars['Float']['input'];
};

/** Detalle de ajuste de productos */
export type DetailAdjustment = {
  __typename?: 'DetailAdjustment';
  /** Fecha de agregado del deltalle al ajuste */
  createdAt: Scalars['DateTime']['output'];
  /** Producto de la ajuste */
  product: Product;
  /** Cantidad de producto */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualización del detalle al ajuste */
  updatedAt: Scalars['DateTime']['output'];
};

/** Producto a confirmar en el traslado */
export type DetailConfirmStockTransferInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle del crédito */
export type DetailCredit = {
  __typename?: 'DetailCredit';
  /** Monto pendiente en el pedido */
  balance: Scalars['Float']['output'];
  /** Pedido que reporta el crédito */
  order: Order;
  /** Monto total del pedido en crédito */
  total: Scalars['Float']['output'];
};

/** Detalle de la salida de productos */
export type DetailInput = {
  __typename?: 'DetailInput';
  /** Fecha de agregado del deltalle a la entrada */
  createdAt: Scalars['DateTime']['output'];
  /** Producto de la entrada */
  product: Product;
  /** Cantidad de producto */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualización del detalle a la entrada */
  updatedAt: Scalars['DateTime']['output'];
};

/** Productos de la factura */
export type DetailInvoice = {
  __typename?: 'DetailInvoice';
  /** Descuento del producto en la factura */
  discount: Scalars['Float']['output'];
  /** Precio del producto en la factura */
  price: Scalars['Float']['output'];
  /** Producto agregado a la factura */
  product: Product;
  /** Cantidad de productos en la factura */
  quantity: Scalars['Float']['output'];
  /** Impuestos */
  tax: Scalars['Float']['output'];
};

/** Productos del pedido */
export type DetailOrder = {
  __typename?: 'DetailOrder';
  /** Fecha de agregado del producto al pedido */
  createdAt: Scalars['DateTime']['output'];
  /** Descuento del producto en el pedido */
  discount: Scalars['Float']['output'];
  /** Precio del producto en el pedido */
  price: Scalars['Float']['output'];
  /** Producto agregado al pedido */
  product: Product;
  /** Cantidad de productos en el pedido */
  quantity: Scalars['Float']['output'];
  /** Cantidad de productos devueltos */
  quantityReturn: Scalars['Float']['output'];
  /** Estado del producto */
  status: StatusOrderDetail;
  /** Fecha de actualizado del producto al pedido */
  updatedAt: Scalars['DateTime']['output'];
};

/** Detalle de la salida de productos */
export type DetailOutput = {
  __typename?: 'DetailOutput';
  /** Fecha de agregado del deltalle a la salida */
  createdAt: Scalars['DateTime']['output'];
  /** Producto de la salida */
  product: Product;
  /** Cantidad de producto */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualización del detalle a la salida */
  updatedAt: Scalars['DateTime']['output'];
};

/** Detalles del recibo */
export type DetailReceipt = {
  __typename?: 'DetailReceipt';
  /** Monto para abonar al pedido */
  amount: Scalars['Float']['output'];
  /** Identificador del pedido */
  orderId: Scalars['String']['output'];
};

/** Detalles de cruce de la cartera */
export type DetailReceiptOrder = {
  /** Monto para abonar al pedido */
  amount: Scalars['Float']['input'];
  /** Identificador del pedido */
  orderId: Scalars['String']['input'];
};

export type DetailRequest = {
  __typename?: 'DetailRequest';
  /** Fecha de agregado del producto a la solicitud */
  createdAt: Scalars['DateTime']['output'];
  /** Producto de la solicitud */
  product: Product;
  /** Cantidad de la solicfitud */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualizado del producto a la solicitud */
  updatedAt: Scalars['DateTime']['output'];
};

/** Producto de la devoliución del pedido */
export type DetailReturnInput = {
  /** Identificador del producto */
  productId: Scalars['String']['input'];
  /** Cantidad del producto */
  quantity: Scalars['Float']['input'];
};

/** Productos de la devolucion */
export type DetailReturnInvoice = {
  __typename?: 'DetailReturnInvoice';
  /** Precio del producto de la devolución */
  price: Scalars['Float']['output'];
  /** Producto de la devolución */
  product: Product;
  /** Cantidad de productos de la devolución */
  quantity: Scalars['Float']['output'];
};

/** Productos del ajuste de productos */
export type DetailStockAdjustmentCreateInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle del ajuste de productos */
export type DetailStockAdjustmentInput = {
  /** Acción a efectuar con el producto */
  action: ActionDetailAdjustment;
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Productos de la entrada de productos */
export type DetailStockInputCreateInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle de la entrada de productos */
export type DetailStockInputInput = {
  /** Acción a efectuar con el producto */
  action: ActionDetailInput;
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Productos de la salida de productos */
export type DetailStockOutputCreateInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle de la salida de productos */
export type DetailStockOutputInput = {
  /** Acción a efectuar con el producto */
  action: ActionDetailOutput;
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Productos de la solicitud de productos */
export type DetailStockRequestCreateInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle de la solicitud de productos */
export type DetailStockRequestInput = {
  /** Acción a efectuar con el producto */
  action: ActionDetailRequest;
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Productos del historial de inventario */
export type DetailStockTransferCreateInput = {
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle del traslado de productos */
export type DetailStockTransferInput = {
  /** Acción a efectuar con el producto */
  action: ActionDetailTransfer;
  /** Identificador de mongo del producto */
  productId: Scalars['String']['input'];
  /** Cantidad de productos */
  quantity: Scalars['Float']['input'];
};

/** Detalle del traslado de productos */
export type DetailTransfer = {
  __typename?: 'DetailTransfer';
  /** Fecha de agregado el producto */
  createdAt: Scalars['DateTime']['output'];
  /** Producto del detalle */
  product: Product;
  /** Cantidad del productos en el traslado */
  quantity: Scalars['Float']['output'];
  /** Cantidad del productos confirmados en el traslado */
  quantityConfirmed?: Maybe<Scalars['Float']['output']>;
  /** Estado del producto */
  status: StatusDetailTransfer;
  /** Fecha de actualizacion el producto */
  updatedAt: Scalars['DateTime']['output'];
};

/** Detalle del traslado de productos */
export type DetailTransferError = {
  __typename?: 'DetailTransferError';
  /** Producto del detalle */
  product: Product;
  /** Cantidad del productos en el traslado */
  quantity: Scalars['Float']['output'];
  /** Motivo del proceso */
  reason?: Maybe<Scalars['String']['output']>;
  /** Estado del producto */
  status: StatusDetailTransferError;
  /** Fecha de actualización del traslado */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que valida el error */
  user?: Maybe<User>;
};

/** Producto para confirmar en el pedido */
export type DetailsConfirm = {
  /** Producto a confirmar */
  productId: Scalars['String']['input'];
  /** Estado del producto, si es diferente a confirm */
  status?: InputMaybe<StatusOrderDetail>;
};

/** detalel del transportista */
export type DetailsConveyor = {
  __typename?: 'DetailsConveyor';
  greaterWeight?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lowerWeight?: Maybe<Scalars['Float']['output']>;
  /** Values for zones */
  zones?: Maybe<Array<ZonePrice>>;
};

/** detalel del transportista */
export type DetailsData = {
  __typename?: 'DetailsData';
  greaterWeight?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lowerWeight?: Maybe<Scalars['Float']['output']>;
  /** Values for zones */
  zones?: Maybe<Array<ZoneValue>>;
};

/** Input para los detalles del transportista */
export type DetailsInput = {
  /** Peso superior */
  greaterWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Peso inferior */
  lowerWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Values for zones */
  zones?: InputMaybe<Array<ZoneValues>>;
};

/** Input para los detalles del transportista */
export type DetailsUpdate = {
  /** Peso superior */
  greaterWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Peso inferior */
  lowerWeight?: InputMaybe<Scalars['Float']['input']>;
  /** Values for zones */
  zones?: InputMaybe<Array<ZoneValuesUpdate>>;
};

/** Reglas de descuento */
export type DiscountRule = {
  __typename?: 'DiscountRule';
  /** Identificación de mongo */
  _id: Scalars['String']['output'];
  /** Descuenti activo */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Fecha y hora del final del descuento */
  dateFinal: Scalars['DateTime']['output'];
  /** Fecha y hora de inicio del descuento */
  dateInitial: Scalars['DateTime']['output'];
  /** Nombre de la regla */
  name: Scalars['String']['output'];
  /** Valor del porcentaje del descuento */
  percent: Scalars['Float']['output'];
  /** Reglas para aplicar el descuento */
  rules: Array<Rule>;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el descuento */
  user: User;
  /** Valor del descuento */
  value: Scalars['Float']['output'];
};

/** Tipo de documento de identificación */
export type DocumentType = {
  __typename?: 'DocumentType';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Abreviación (CC, NIT, TI, CE, PASS) */
  abbreviation: Scalars['String']['output'];
  /** Número asigando por la DIAN para el tipo de documento */
  codeDian: Scalars['Float']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre del tipo de documento */
  name: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el pedido */
  user: User;
};

export enum DocumentTypesRule {
  Categories = 'CATEGORIES',
  Company = 'COMPANY',
  Customertypes = 'CUSTOMERTYPES',
  Shops = 'SHOPS',
  Subcategories = 'SUBCATEGORIES'
}

/** Errores de traslado de efectivo */
export type ErrorCash = {
  __typename?: 'ErrorCash';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Caja hacia donde se realiza el movimiento */
  boxDestination: Box;
  /** Caja desde donde se realiza el movimiento */
  boxOrigin: Box;
  /** Cierre que efectúa el error */
  closeZ?: Maybe<CloseZInvoicing>;
  /** Compañía a la que pertenece el error */
  company: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Motivo del proceso */
  reason?: Maybe<Scalars['String']['output']>;
  /** Tipo de error */
  typeError: TypeErrorCash;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la caja */
  user: User;
  /** Valor del movimiento */
  value: Scalars['Float']['output'];
  /** Si ya fue verificados */
  verified: Scalars['Boolean']['output'];
};

/** Egreso de dinero */
export type Expense = {
  __typename?: 'Expense';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Caja que afecta el egreso */
  box: Box;
  /** Empresa a la que pertenece el egreso */
  company: Company;
  /** Concepto del egreso */
  concept?: Maybe<Scalars['String']['output']>;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Consecutivo del egreso */
  number: Scalars['Float']['output'];
  /** Estado del egreso */
  status: StatusExpense;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el egreso */
  user: User;
  /** Valor del egreso */
  value: Scalars['Float']['output'];
};

/** Filtros para la cuentas contables */
export type FilterLedgerAccount = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado a la entrada */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Id identificador de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para la lista de atributos */
export type FiltersAttribsInput = {
  /** Identificadores de los atributos */
  _ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Estado del atributo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del atributo */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortAttrib>;
};

/** Filtros para consultar las autorizaciones */
export type FiltersAuthorizationInput = {
  /** Identificador */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Es factura electrónica */
  isElectronic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Prefijo de facturación */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** Filtro por tienda */
  shop?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortAuthorization>;
};

/** Filtros para consultar la cajas */
export type FiltersBoxesInput = {
  /** Identificador de la caja */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Es caja principal */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la caja para buscar coincidencias */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortBox>;
};

/** Filtros para la lista de marcas */
export type FiltersBrandsInput = {
  /** Identificador de la marcas */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Estado del atributo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del atributo */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortBrand>;
};

/** Datos para consultar la zona */
export type FiltersCarrierInput = {
  /** Identificador del transportista */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del transportista */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortCarrier>;
};

/** Filtros para obtener la lista de categorías */
export type FiltersCategoriesInput = {
  /** Identificador de la categoría padre */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la compañía */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la categoría */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortCategories>;
};

/** Filtros para obtener la lista de categorías */
export type FiltersCategoriesLevelInput = {
  /** Identificador de la categoría */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Identificadores de las categorías */
  _ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Compañía */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Nivel de categoria */
  level: Scalars['Float']['input'];
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la categoría */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador de la categoría padre */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortCategories>;
};

/** Filtros para obtener las ciudades */
export type FiltersCitiesInput = {
  /** Identificador de la ciudad */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del país */
  country?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la ciudad */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCity>;
  /** Nombre del departamento */
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para consultar los cierres X */
export type FiltersClosesXInvoicingInput = {
  /** Fecha del cierre */
  closeDate?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número del cierre */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Tienda del cierre */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCloseXInvoicing>;
};

/** Filtros para consultar los cierres Z */
export type FiltersClosesZInvoicingInput = {
  /** Fecha de cierre final */
  closeDate?: InputMaybe<Scalars['String']['input']>;
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Es cuadre de caja */
  isBox?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número del cierre */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Tienda del cierre */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCloseZInvoicing>;
  /** Valor del cierre */
  value?: InputMaybe<Scalars['Float']['input']>;
  /** estado del cierre */
  verifiedStatus?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para la lista de colores */
export type FiltersColorsInput = {
  /** Identificador del color */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la bodega */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín busqueda del color */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortColor>;
};

/** Filtros para obtener listado de compañías */
export type FiltersCompaniesInput = {
  /** Estado de la compañía */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comódin para buscar por nombre o documento */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCompany>;
};

/** Filtros para obtener listado de transportadoras */
export type FiltersConveyorsInput = {
  /** Identificador de la transportadora */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la transportadora */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortConveyor>;
  /** Identificador de la zona */
  zoneIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Filtros para consultar un cupón */
export type FiltersCouponInput = {
  /** Código del cupón */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Estado del cupón */
  status?: InputMaybe<StatusCoupon>;
};

/** Filtros para consultar los cupones */
export type FiltersCouponsInput = {
  /** Código del cupón */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo del cupón */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCoupon>;
  /** Estado del cupón */
  status?: InputMaybe<StatusCoupon>;
};

/** Filtros para consultar los créditos de los clientes */
export type FiltersCreditHistoryInput = {
  /** Monto del movimiento */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del crédito */
  creditId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del cliente */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Número del documento que realiza el nmovimiento */
  documentNumber?: InputMaybe<Scalars['Float']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortCreditHistory>;
  /** Tipo del histórico de movimiento */
  type?: InputMaybe<TypeCreditHistory>;
};

/** Filtros para obtener un crédito */
export type FiltersCreditInput = {
  /** Cliente que tiene asignado el crédito */
  customerId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para consultar los créditos de los clientes */
export type FiltersCreditsInput = {
  /** Monto aprobado al cliente */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del cliente */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortCredit>;
  /** Estado del crédito */
  status?: InputMaybe<StatusCredit>;
};

/** Filtros para obtener los tipos de cliente */
export type FiltersCustomerTypesInput = {
  /** Identificador del tipo de documento */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de los tipos de documento */
  _ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre comodín para la busqueda de tipos de cliente */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
};

/** Filtros de listado de clientes */
export type FiltersCustomersInput = {
  /** Identificador de un usuario */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Si el cliente se encuentra activo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** comodin para la busque de documento, nombre, apellido, teléfono, correo,  */
  dato?: InputMaybe<Scalars['String']['input']>;
  /** Identificdor de un usuario */
  idCompany?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortCustomer>;
};

/** Filtros para cierre fiscal */
export type FiltersDailyClosing = {
  /** Fecha final del cierre del cierre */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial del cierre del cierre */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  pointOfSaleId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortDailyClosing>;
};

/** Filtros para consultar las reglas de descuentos */
export type FiltersDiscountRulesInput = {
  /** Si el descuento se encuentra activo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para el nombre de la regla */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Porcentaje del descuento */
  percent?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortDiscountRule>;
  /** Valor en cantidad del descuento */
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Filtros para los tipos de documento */
export type FiltersDocumentTypesInput = {
  /** Estado activo del documento */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre del tipo de documento */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Listado de errores de efectivo */
export type FiltersErrorsCashInput = {
  /** tiendas */
  boxId?: InputMaybe<Scalars['String']['input']>;
  /** Número del cierre que efectúa el error */
  closeZNumber?: InputMaybe<Scalars['Float']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortErrosCash>;
  /** Tipo de error */
  typeError?: InputMaybe<TypeErrorCash>;
  /** cantidad de efectivo */
  value?: InputMaybe<Scalars['Float']['input']>;
  /** Si ya fue verificado */
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Filtros para obtener el listado de egresos */
export type FiltersExpensesInput = {
  /** Caja a la que afecta el egreso */
  boxId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha final de la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial de la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo del egreso */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortExpense>;
  /** Estado del egreso */
  status?: InputMaybe<StatusExpense>;
};

/** Datos para consultar el estado de la meta */
export type FiltersGoalStatusInput = {
  /** Mes a evaluar la meta */
  month: Scalars['String']['input'];
  /** Identificador de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para la lista de imagenes */
export type FiltersImagesInput = {
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín busqueda de la imagen */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortImage>;
};

/** Filtros del listado de facturas */
export type FiltersInvoicesInput = {
  /** Si la factura de encuentra se encuentra activa */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificador del cliente */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Si la factura es electrónica */
  isElectronic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Está enviada */
  isSend?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número de la factura */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador de los medios de pago */
  paymentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identificador del punto de venta */
  pointOfSaleId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortInovice>;
};

/** Filtros del listado de pedidos */
export type FiltersOrdersInput = {
  /** Identificador del cliente */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Número de la factura */
  invoiceNumber?: InputMaybe<Scalars['Float']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Estado del pedido que no quiere consultar */
  nonStatus?: InputMaybe<Array<StatusOrder>>;
  /** Número consecutivo del pedido */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Trae los pedidos POS solamente */
  orderPos?: InputMaybe<Scalars['Boolean']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del medio de pago */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  /** Filtro por tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortOrder>;
  /** Estado del pedido */
  status?: InputMaybe<StatusOrder>;
  /** Estado del pedido Web */
  statusWeb?: InputMaybe<StatusWeb>;
};

/** Filtros para obtener el listado de tipos de medios de pago */
export type FiltersPaymentsInput = {
  /** Estado del tipo de los médios de pago */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del medio de pago */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Tienda para consultar el medio de pago */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortPayment>;
  /** Tipo de medio de pago (cash, bank, credit, bonus) */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para obtener los puntos de venta */
export type FiltersPointOfSalesInput = {
  /** Identificador del punto de venta */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín busqueda del punto de venta */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Tienda a la que pertenecen los puntos de venta */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortPointOfSale>;
};

export type FiltersProductInput = {
  /** Identificador de mongo */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Código de barras producto */
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** Color del producto */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Descripción del producto */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Referencia del producto */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** talla del producto */
  size?: InputMaybe<Scalars['String']['input']>;
  /** Estado del producto */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Bodega de inventario o "all" para traer todos los inventarios */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para la lista de productos */
export type FiltersProductsInput = {
  /** Id de color */
  colorId?: InputMaybe<Scalars['String']['input']>;
  /** Identificadores de mongo */
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para la busqueda del producto, barcode, referencem description */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Id de referencia */
  referenceId?: InputMaybe<Scalars['String']['input']>;
  /** Id de talla */
  sizeId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortProduct>;
  /** Estado del producto */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Bodega de inventario o "all" para traer todos los inventarios */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
  /** Se usa para seleccionar solo los productos que tengan inventario */
  withStock?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Filtros para obtener el reporte de stock */
export type FiltersProductsStockReportInput = {
  /** Id de color */
  colorId?: InputMaybe<Scalars['String']['input']>;
  /** Comodín para la busqueda del producto, barcode, reference, description */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Solo los productos con stock */
  onlyStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Id de talla */
  sizeId?: InputMaybe<Scalars['String']['input']>;
  /** Estado del producto */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Bodega de inventario o "all" para traer todos los inventarios */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para consultar los recibos de caja */
export type FiltersReceiptsInput = {
  /** Caja que afecta el pago */
  boxId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo del recibo */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del medio de pago */
  paymentId?: InputMaybe<Scalars['String']['input']>;
  /** Punto de venta del pago */
  pointOfSaleId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortReceipt>;
  /** Estado del recibo */
  status?: InputMaybe<StatusReceipt>;
};

/** Filtros para la lista de referencias */
export type FiltersReferencesInput = {
  /** Referencia activa */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificación de la marca */
  brandId?: InputMaybe<Scalars['String']['input']>;
  /** Identificación de la marca */
  categoryLevel1Id?: InputMaybe<Scalars['String']['input']>;
  /** Identificación de la marca */
  categoryLevel2Id?: InputMaybe<Scalars['String']['input']>;
  /** Identificación de la marca */
  categoryLevel3Id?: InputMaybe<Scalars['String']['input']>;
  /** Referencia se puede cambiar */
  changeable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Costo para la busqueda de referencias */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del cliente para validar descuentos */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para la busqueda de las referencias */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Precio para la busqueda de referencias */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador de la tienda para validar descuentos */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortReference>;
};

/** Datos para consultar la zona */
export type FiltersRegionInput = {
  /** Identificador del rol */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la zona */
  city?: InputMaybe<Scalars['String']['input']>;
  /** ids de la zona */
  idZones?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortRegion>;
};

/** Filtros para consultar las reglas de devoluciones */
export type FiltersReturnOrderRulesInput = {
  /** Si la regla se encuentra activa */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Días máximos para generar la devolución */
  limitDays?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para el nombre de la regla */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortReturnOrderRule>;
};

/** Filtros de listado de devoluciones del pedido */
export type FiltersReturnsOrderInput = {
  /** Si la devolucion de encuentra se encuentra activo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número de la devolución */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortReturnOrder>;
};

/** Filtros para consultar los roles */
export type FiltersRolesInput = {
  /** Identificador del rol */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** El rol se encuentra activo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del rol */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortRole>;
};

/** Filtros para el reporte de ventas */
export type FiltersSalesReportInput = {
  /** Traer todas las ventas */
  allOrders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fecha final del reporte */
  dateFinal: Scalars['String']['input'];
  /** Fecha inicial del reporte */
  dateInitial: Scalars['String']['input'];
  /** Agrupar por dia, mes o año */
  distribuitor?: InputMaybe<Scalars['Boolean']['input']>;
  /** Agrupar por dia, mes o año */
  groupDates: GroupDates;
  /** Si es true se agrupan por categoria */
  isGroupByCategory: Scalars['Boolean']['input'];
  /** Id de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para el reporte de ventas */
export type FiltersSalesReportInvoicingInput = {
  /** Fecha final del reporte */
  dateFinal: Scalars['String']['input'];
  /** Fecha inicial del reporte */
  dateInitial: Scalars['String']['input'];
  /** Id de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros usados para consultar las tiendas */
export type FiltersShopsInput = {
  /** Identificador de la tienda */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Identificadores de las tiendas */
  _ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Dirección de la sucursal */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Empresa de la tienda */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Empresa de la tienda */
  companyIds?: InputMaybe<Scalars['String']['input']>;
  /** Bodega por defecto para la sucursal */
  defaultWarehouseId?: InputMaybe<Scalars['String']['input']>;
  /** Meta asignada a la tienda */
  goal?: InputMaybe<Scalars['Float']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín de la tienda */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Teléfono de la sucursal */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Se muestra en la web */
  showWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortShop>;
  /** Estado de la tienda */
  status?: InputMaybe<StatusShop>;
};

/** Filtros para la lista de tallas */
export type FiltersSizesInput = {
  /** Identificador de la talla */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la bodega */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín busqueda de la talla */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortSize>;
};

/** Filtros para el listado de ajsutes de productos */
export type FiltersStockAdjustmentsInput = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado al ajuste */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockAdjustment>;
  /** Estado del ajuste */
  status?: InputMaybe<StatusStockAdjustment>;
  /** Valor total de la entrada */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Id de la bodega */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para la lista de inventarios */
export type FiltersStockInput = {
  /** Id de color */
  colorId?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para la busqueda del producto, barcode, reference, description */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Solo los productos con stock */
  onlyStock?: InputMaybe<Scalars['Boolean']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Id de talla */
  sizeId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockProducts>;
  /** Estado del producto */
  status?: InputMaybe<Scalars['String']['input']>;
  /** Bodega de inventario o "all" para traer todos los inventarios */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para el listado de entradas de productos */
export type FiltersStockInputsInput = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado a la entrada */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockInput>;
  /** Estado de la entrada */
  status?: InputMaybe<StatusStockInput>;
  /** Valor total de la entrada */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Id de la bodega */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para el listado de salidas de productos */
export type FiltersStockOutputsInput = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado a la salida */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockOutput>;
  /** Estado de la salida */
  status?: InputMaybe<StatusStockOutput>;
  /** Valor total de la entrada */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Id de la bodega */
  warehouseId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para el listado de solicitudes de productos */
export type FiltersStockRequestsInput = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado al traslado */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockRequest>;
  /** Estado de la solicitud */
  status?: InputMaybe<StatusStockRequest>;
  /** Id de la bodega de destino */
  warehouseDestinationId?: InputMaybe<Scalars['String']['input']>;
  /** Id de la bodega de origen */
  warehouseOriginId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para el listado de traslados de productos */
export type FiltersStockTransfersErrorInput = {
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockTransferError>;
  /** Si el traslado esta o no verificado por completo */
  verifield?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Filtros para el listado de traslados de productos */
export type FiltersStockTransfersInput = {
  /** Fecha final para la busqueda */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para la busqueda */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Número consecutivo asignado al traslado */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Desde donde arranca la página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento (1 es ascendente, -1 es descendente) */
  sort?: InputMaybe<SortStockTransfer>;
  /** Estado del traslado */
  status?: InputMaybe<StatusStockTransfer>;
  /** Id de la bodega de destino */
  warehouseDestinationId?: InputMaybe<Scalars['String']['input']>;
  /** Id de la bodega de origen */
  warehouseOriginId?: InputMaybe<Scalars['String']['input']>;
};

/** Filtros para listar los tipos de responsabilidades */
export type FiltersTypeLiabilitiesInput = {
  /** Identificador de la responsabilidad */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del tipo de  responsabilidad */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortTypeLiability>;
};

/** Filtros para listar los tipos de regímenes */
export type FiltersTypeRegimesInput = {
  /** Identificador del régimen */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del tipo de régimen */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortTypeRegime>;
};

/** Filtros a aplicar para consultar los usuarios */
export type FiltersUsersInput = {
  /** Identificador del tipo de cliente */
  customerTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Selecciona si es usuario web o no */
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín para la busqueda por nombre,nombre de usuario, documento o correo */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Identificador del rol */
  roleId?: InputMaybe<Scalars['String']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortUser>;
  /** Estado del usuario */
  status?: InputMaybe<StatusUser>;
};

/** Filtros de las bodegas */
export type FiltersWarehousesInput = {
  /** Identificador de la bodega */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la bodega */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Si se requiere traer la bodega principal */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Comodín busqueda de la bodega */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página actual */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortWarehouse>;
};

/** Datos para consultar la zona */
export type FiltersZoneInput = {
  /** Identificador de la zona */
  _id?: InputMaybe<Scalars['String']['input']>;
  /** Cantidad de registros */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la zona */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Página */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento */
  sort?: InputMaybe<SortZone>;
  /** Nombre de la zona */
  state?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Datos para crear cierre diario por fechas */
export type GenerateDailyClosingInput = {
  /** Fecha inicial */
  dateFinal: Scalars['String']['input'];
  /** Fecha inicial */
  dateInitial: Scalars['String']['input'];
  /** Id de la tienda */
  shopId: Scalars['String']['input'];
};

/** Historial de metas de la tienda */
export type GoalHistory = {
  __typename?: 'GoalHistory';
  /** Fecha del registro */
  date: Scalars['DateTime']['output'];
  /** Meta de la tienda */
  goal: Scalars['Float']['output'];
  /** Meta alcanzada por la tienda */
  goalAchieved: Scalars['Float']['output'];
};

/** Historial de meta que se va agregar a la tienda */
export type GoalHistoryInput = {
  /** Fecha del registro */
  date: Scalars['DateTime']['input'];
  /** Meta de la tienda */
  goal: Scalars['Float']['input'];
  /** Meta alcanzada por la tienda */
  goalAchieved?: InputMaybe<Scalars['Float']['input']>;
};

export enum GroupDates {
  Day = 'DAY',
  Month = 'MONTH',
  Year = 'YEAR'
}

/** Indexación de las imagenes */
export type Image = {
  __typename?: 'Image';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre de la imagen */
  name: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Direcciones de la imagen */
  urls?: Maybe<Urls>;
  /** Usuario que creó o editó la imagen */
  user: User;
};

/** Enlaces de diferences tamaños */
export type ImageTypes = {
  __typename?: 'ImageTypes';
  /** Enlace de imagen grande */
  big: Scalars['String']['output'];
  /** Enlace de imagen mediana */
  medium: Scalars['String']['output'];
  /** Enlace de imagen pequeña */
  small: Scalars['String']['output'];
};

/** Inventarios */
export type InventoryReport = {
  __typename?: 'InventoryReport';
  /** Codigo de barras */
  barcode: Scalars['String']['output'];
  /** Color del producto */
  color: Color;
  /** bodega del producto */
  productWarehouse?: Maybe<Array<Warehouse>>;
  /** Referencia del producto */
  reference: Reference;
  /** Talla del producto */
  size: Size;
  /** Bodega */
  stock?: Maybe<StockProduct>;
};

/** Factura */
export type Invoice = {
  __typename?: 'Invoice';
  /** Código de facturación electrónica	 */
  CUFE?: Maybe<Scalars['String']['output']>;
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** La factura se encuentra activa o no */
  active: Scalars['Boolean']['output'];
  /** Autorización de facturación */
  authorization: AuthorizationDian;
  /** Empresa a la que perteneces la factura */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Cliente para la factura */
  customer: Customer;
  /** Productos de la factura */
  details?: Maybe<Array<DetailInvoice>>;
  /** Errores generados por la dian */
  errorsDian?: Maybe<Array<Scalars['String']['output']>>;
  /** Es factura electrónica */
  isElectronic: Scalars['Boolean']['output'];
  /** Número de factura */
  number: Scalars['Float']['output'];
  /** Pedido basado para la factura */
  order: Order;
  /** Métodos de pago usados en la factura */
  payments?: Maybe<Array<PaymentInvoice>>;
  /** Tienda donde se realiza la factura */
  shop: Shop;
  /** Resumen de los pagos y totales */
  summary: SummaryInvoice;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la factrura */
  user: User;
};

/** Cuentas contables */
export type LedgerAccount = {
  __typename?: 'LedgerAccount';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Numero de cuenta contable */
  description: Scalars['String']['output'];
  /** Número de cuenta contable */
  ledgerAccount: Scalars['Float']['output'];
  /** Nombre de cuenta contable */
  name: Scalars['String']['output'];
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Departamento */
  status: StatusLedgerAccount;
  /** Typo */
  type: Scalars['Float']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
};

/** Respuesta despues de hacer el login */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** Token para la conexión */
  access_token: Scalars['String']['output'];
  /** Usuario almacenado en la base de datos */
  user: User;
};

/** Datos para hacer login */
export type LoginUserInput = {
  /** Contraseña de usuario */
  password: Scalars['String']['input'];
  /** Usuario registrado */
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Se encarga de agregar un historico de meta a una tienda */
  addGoalHistory: Shop;
  /** Se encarga de agregar medios de pago */
  addPaymentsOrder: ResponseOrder;
  /** Se encarga de agregar productos a un pedido */
  addProductsOrder: ResponseOrder;
  /** Se encarga de cambiar la clave al usuario con base al tokenu */
  changePasswordToken: LoginResponse;
  /** Se encarga de confirmar o desconfirmar pagos de un pedido */
  confirmPaymentsOrder: ResponseOrder;
  /** Se encarga de confirmar o desconfirmar productos de un pedido */
  confirmProductsOrder: ResponseOrder;
  /** Confirma los productos del traslado */
  confirmProductsStockTransfer: StockTransfer;
  /** Crea un atributo */
  createAttrib: Attrib;
  /** Crea una autorización de facturación */
  createAuthorization: AuthorizationDian;
  /** Crea una caja */
  createBox: Box;
  /** Crea una marca */
  createBrand: Brand;
  /** Crea un transportador */
  createCarrier: Carrier;
  /** Crea una categoría */
  createCategory: CategoryLevel1;
  /** Crea una ciudad */
  createCity: City;
  /** Crea un cierre verificado */
  createCloseVerified: CloseVerified;
  /** Crea un cierre X de facturación */
  createCloseXInvoicing: CloseXInvoicing;
  /** Crea un cierre Z de facturación */
  createCloseZInvoicing: CloseZInvoicing;
  /** Crea un color */
  createColor: Color;
  /** Crea una compañía */
  createCompany: Company;
  /** Crea un transportador */
  createConveyor: Conveyor;
  /** Se encarga crear un cupón */
  createCoupon: Coupon;
  /** Asigna el crédito a un cliente */
  createCredit: Credit;
  /** Se encarga crear un cliente */
  createCustomer: Customer;
  /** Se encarga crear un descuento */
  createDiscountRule: DiscountRule;
  /** Crea un egreso */
  createExpense: Expense;
  /** Crea una cuenta contable */
  createLedgerAccount: LedgerAccount;
  /** Se encarga de crear el pedido */
  createOrder: ResponseOrder;
  /** Crea un método de pago */
  createPayment: Payment;
  /** Se encarga de crear el punto de venta */
  createPointOfSale: PointOfSale;
  /** Crea un producto */
  createProduct: Product;
  /** Crea una recibo de caja */
  createReceipt: ResponseReceipt;
  /** Crea una referencia */
  createReference: Reference;
  /** Crea una region */
  createRegion: Region;
  /** Se encarga de crear la devolución del pedido */
  createReturnOrder: ReturnOrder;
  /** Se encarga de crear las reglas de devolución */
  createReturnOrderRule: ReturnOrderRule;
  /** Crea una rol */
  createRole: Role;
  /** Crea una tienda */
  createShop: Shop;
  /** Crear una talla */
  createSize: Size;
  /** Crea un ajuste de productos */
  createStockAdjustment: StockAdjustment;
  /** Crea una entrada de productos */
  createStockInput: StockInput;
  /** Crea una salida de productos */
  createStockOutput: StockOutput;
  /** Crea una solicitud */
  createStockRequest: StockRequest;
  /** Crea una traslado de productos */
  createStockTransfer: StockTransfer;
  createUser: User;
  /** Crea una bodega */
  createWarehouse: Warehouse;
  /** Crea una zona */
  createZone: Zone;
  /** Crea una cuenta contable */
  deleteLedgerAccount: LedgerAccount;
  /** Genera los cierres diarios */
  generateDailyClosing: ResponseGenerateDailyClosing;
  /** Autogenera una solicitud de productos por bodega */
  generateStockRequest: StockRequest;
  /** Generador de facturas */
  invoicing: ResponseInvoicing;
  /** Se encarga de realizar el ingreso al sistema por el usuario */
  login: LoginResponse;
  /** Se encarga de enviar correo de recuperación de contraseña */
  recoveryPassword: Scalars['Boolean']['output'];
  /** Se encarga de crear el usuario desde aplicaciones externas */
  signup: LoginResponse;
  /** Actualiza un atributo */
  updateAttrib: Attrib;
  /** Actualiza una autorización de facturación */
  updateAuthorization: AuthorizationDian;
  /** Actualiza una caja */
  updateBox: Box;
  /** Actualiza la marca */
  updateBrand: Brand;
  /** Actualiza una region */
  updateCarrier: Carrier;
  /** Actualiza la categoría */
  updateCategory: CategoryLevel1;
  /** Actualiza una ciudad */
  updateCity: City;
  /** actualiza un cierre Z de facturación */
  updateCloseZInvoicing: CloseZInvoicing;
  /** Actualiza el color */
  updateColor: Color;
  /** Actualiza una compañía */
  updateCompany: Company;
  /** Actualiza una region */
  updateConveyor: Conveyor;
  /** Se encarga actualizar un cupón */
  updateCoupon: Coupon;
  /** Actualiza el crédito de un cliente */
  updateCredit: Credit;
  /** Se encarga actualizar un cliente */
  updateCustomer: Customer;
  /** Se encarga actualizar un descuento */
  updateDiscountRule: DiscountRule;
  /** Actualiza un egreso */
  updateExpense: Expense;
  /** Crea una cuenta contable */
  updateLedgerAccount: LedgerAccount;
  /** Se encarga actualizar un pedido */
  updateOrder: ResponseOrder;
  /** Actualiza un método de pago */
  updatePayment: Payment;
  /** Se encarga actualizar un punto de venta */
  updatePointOfSale: PointOfSale;
  /** Se encarga actualizar un producto */
  updateProduct: Product;
  /** Actualiza un recibo de caja */
  updateReceipt: Receipt;
  /** Actualiza una referencia */
  updateReference: Reference;
  /** Actualiza una region */
  updateRegion: Region;
  /** Se encarga actualizar las reglas de devolucion */
  updateReturnOrderRule: ReturnOrderRule;
  /** Actualiza un rol */
  updateRole: Role;
  /** Actualiza una tienda */
  updateShop: Shop;
  /** Actualizar la talla */
  updateSize: Size;
  /** Actualiza un ajuste de productos */
  updateStockAdjustment: StockAdjustment;
  /** Actualiza una entrada de productos */
  updateStockInput: StockInput;
  /** Actualiza una salida de productos */
  updateStockOutput: StockOutput;
  /** Actualiza una solicitud de productos */
  updateStockRequest: StockRequest;
  /** Actualiza traslado */
  updateStockTransfer: StockTransfer;
  updateUser: User;
  /** Actualiza una bodega */
  updateWarehouse: Warehouse;
  /** Actualiza un rol */
  updateZone: Zone;
  /** Verifica un producto de un traslado en error */
  verifiedErrorsCash: ErrorCash;
  /** Verifica un producto de un traslado en error */
  verifiedProductStockTransfer: StockTransferError;
};


export type MutationAddGoalHistoryArgs = {
  AddGoalHistoryInput: AddGoalHistoryInput;
};


export type MutationAddPaymentsOrderArgs = {
  addPaymentsOrderInput: AddPaymentsOrderInput;
};


export type MutationAddProductsOrderArgs = {
  addProductsOrderInput: AddProductsOrderInput;
};


export type MutationChangePasswordTokenArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationConfirmPaymentsOrderArgs = {
  confirmPaymentsOrderInput: ConfirmPaymentsOrderInput;
};


export type MutationConfirmProductsOrderArgs = {
  confirmProductsOrderInput: ConfirmProductsOrderInput;
};


export type MutationConfirmProductsStockTransferArgs = {
  confirmStockTransferInput: ConfirmStockTransferInput;
  id: Scalars['String']['input'];
};


export type MutationCreateAttribArgs = {
  createAttribInput: CreateAttribInput;
};


export type MutationCreateAuthorizationArgs = {
  createAuthorizationInput: CreateAuthorizationInput;
};


export type MutationCreateBoxArgs = {
  createBoxInput: CreateBoxInput;
};


export type MutationCreateBrandArgs = {
  createBrandInput: CreateBrandInput;
};


export type MutationCreateCarrierArgs = {
  createcarrierInput: CreateCarrierInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateCityArgs = {
  createCityInput: CreateCityInput;
};


export type MutationCreateCloseVerifiedArgs = {
  createCloseVerified?: InputMaybe<CreateCloseVerifiedInput>;
};


export type MutationCreateCloseXInvoicingArgs = {
  createCloseXInvoicing?: InputMaybe<CreateCloseXInvoicingInput>;
};


export type MutationCreateCloseZInvoicingArgs = {
  createCloseZInvoicing?: InputMaybe<CreateCloseZInvoicingInput>;
};


export type MutationCreateColorArgs = {
  createColorInput: CreateColorInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateConveyorArgs = {
  createcarrierInput: CreateCarrierInput;
};


export type MutationCreateCouponArgs = {
  createCouponInput: CreateCouponInput;
};


export type MutationCreateCreditArgs = {
  createCreditInput: CreateCreditInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateDiscountRuleArgs = {
  createDiscountRuleInput: CreateDiscountRuleInput;
};


export type MutationCreateExpenseArgs = {
  createExpenseInput: CreateExpenseInput;
};


export type MutationCreateLedgerAccountArgs = {
  createLedgerAccountInputDto: CreateLedgerAccountInputDto;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
};


export type MutationCreatePointOfSaleArgs = {
  createPointOfSaleInput: CreatePointOfSaleInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateReceiptArgs = {
  createReceiptInput: CreateReceiptInput;
};


export type MutationCreateReferenceArgs = {
  createReferenceInput: CreateReferenceInput;
};


export type MutationCreateRegionArgs = {
  createRegionInput: CreateRegionInput;
};


export type MutationCreateReturnOrderArgs = {
  createReturnOrderInput: CreateReturnOrderInput;
};


export type MutationCreateReturnOrderRuleArgs = {
  createReturnOrderRuleInput: CreateReturnOrderRuleInput;
};


export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};


export type MutationCreateShopArgs = {
  createShopInput: CreateShopInput;
};


export type MutationCreateSizeArgs = {
  createSizeInput: CreateSizeInput;
};


export type MutationCreateStockAdjustmentArgs = {
  createStockAdjustmentInput: CreateStockAdjustmentInput;
};


export type MutationCreateStockInputArgs = {
  createStockInputInput: CreateStockInputInput;
};


export type MutationCreateStockOutputArgs = {
  createStockOutputInput: CreateStockOutputInput;
};


export type MutationCreateStockRequestArgs = {
  createStockRequestInput: CreateStockRequestInput;
};


export type MutationCreateStockTransferArgs = {
  createStockTransferInput: CreateStockTransferInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput;
};


export type MutationCreateZoneArgs = {
  createZoneInput: CreateZoneInput;
};


export type MutationDeleteLedgerAccountArgs = {
  createLedgerAccountInputDto: CreateLedgerAccountInputDto;
  id: Scalars['String']['input'];
};


export type MutationGenerateDailyClosingArgs = {
  generateDailyClosingInput?: InputMaybe<GenerateDailyClosingInput>;
};


export type MutationGenerateStockRequestArgs = {
  category: Scalars['String']['input'];
  shopId: Scalars['String']['input'];
};


export type MutationInvoicingArgs = {
  dataGenerateInvoicesInput: DataGenerateInvoicesInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRecoveryPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateAttribArgs = {
  id: Scalars['String']['input'];
  updateAttribInput: UpdateAttribInput;
};


export type MutationUpdateAuthorizationArgs = {
  id: Scalars['String']['input'];
  updateAuthorizationInput?: InputMaybe<UpdateAuthorizationInput>;
};


export type MutationUpdateBoxArgs = {
  id: Scalars['String']['input'];
  updateBoxInput: UpdateBoxInput;
};


export type MutationUpdateBrandArgs = {
  id: Scalars['String']['input'];
  updateBrandInput: UpdateBrandInput;
};


export type MutationUpdateCarrierArgs = {
  id: Scalars['String']['input'];
  updateCarrierInput: UpdateCarrierInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String']['input'];
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateCityArgs = {
  id: Scalars['String']['input'];
  updateCityInput: UpadteCityInput;
};


export type MutationUpdateCloseZInvoicingArgs = {
  updateCloseZInvoicing?: InputMaybe<VerifiedCloseZInput>;
};


export type MutationUpdateColorArgs = {
  id: Scalars['String']['input'];
  updateColorInput: UpdateColorInput;
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['String']['input'];
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationUpdateConveyorArgs = {
  id: Scalars['String']['input'];
  updateCarrierInput: UpdateCarrierInput;
};


export type MutationUpdateCouponArgs = {
  id: Scalars['String']['input'];
  updateCustomerInput: UpdateCouponInput;
};


export type MutationUpdateCreditArgs = {
  id: Scalars['String']['input'];
  updateCreditInput: UpdateCreditInput;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['String']['input'];
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateDiscountRuleArgs = {
  id: Scalars['String']['input'];
  updateDiscountRuleInput: UpdateDiscountRuleInput;
};


export type MutationUpdateExpenseArgs = {
  id: Scalars['String']['input'];
  updateExpenseInput: UpdateExpenseInput;
};


export type MutationUpdateLedgerAccountArgs = {
  createLedgerAccountInputDto: CreateLedgerAccountInputDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['String']['input'];
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdatePaymentArgs = {
  id: Scalars['String']['input'];
  updatePaymentInput: UpdatePaymentInput;
};


export type MutationUpdatePointOfSaleArgs = {
  id: Scalars['String']['input'];
  updatePointOfSaleInput: UpdatePointOfSaleInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['String']['input'];
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateReceiptArgs = {
  id: Scalars['String']['input'];
  updateReceiptInput: UpdateReceiptInput;
};


export type MutationUpdateReferenceArgs = {
  id: Scalars['String']['input'];
  updateReferenceInput: UpdateReferenceInput;
};


export type MutationUpdateRegionArgs = {
  id: Scalars['String']['input'];
  updateRegionInput: UpdateRegionInput;
};


export type MutationUpdateReturnOrderRuleArgs = {
  id: Scalars['String']['input'];
  updateReturnOrderRuleInput: UpdateReturnOrderRuleInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['String']['input'];
  updateRoleInput: UpdateRoleInput;
};


export type MutationUpdateShopArgs = {
  id: Scalars['String']['input'];
  updateShopInput: UpdateShopInput;
};


export type MutationUpdateSizeArgs = {
  id: Scalars['String']['input'];
  updateSizeInput: UpdateSizeInput;
};


export type MutationUpdateStockAdjustmentArgs = {
  id: Scalars['String']['input'];
  updateStockAdjustmentInput: UpdateStockAdjustmentInput;
};


export type MutationUpdateStockInputArgs = {
  id: Scalars['String']['input'];
  updateStockInputInput: UpdateStockInputInput;
};


export type MutationUpdateStockOutputArgs = {
  id: Scalars['String']['input'];
  updateStockOutputInput: UpdateStockOutputInput;
};


export type MutationUpdateStockRequestArgs = {
  id: Scalars['String']['input'];
  updateStockRequestInput: UpdateStockRequestInput;
};


export type MutationUpdateStockTransferArgs = {
  id: Scalars['String']['input'];
  updateStockTransferInput: UpdateStockTransferInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['String']['input'];
  updateWarehouseInput: UpdateWarehouseInput;
};


export type MutationUpdateZoneArgs = {
  id: Scalars['String']['input'];
  updateZoneInput: UpdateZoneInput;
};


export type MutationVerifiedErrorsCashArgs = {
  verifiedErrorsCashInput: VerifiedErrorsCashInput;
};


export type MutationVerifiedProductStockTransferArgs = {
  verifiedProductTransferErrorInput: VerifiedProductTransferErrorInput;
};

/** Opción del permiso */
export type OptionPermission = {
  __typename?: 'OptionPermission';
  /** Acciones a realizan en la opción */
  actions: Array<ActionPermission>;
  /** Nombre de la opción */
  name: Scalars['String']['output'];
};

/** Pedido de productos */
export type Order = {
  __typename?: 'Order';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Usuario que creó o editó el pedido */
  address?: Maybe<Address>;
  /** Fecha de cierre del pedido */
  closeDate: Scalars['DateTime']['output'];
  /** Empresa a la que perteneces el pedido */
  company: Company;
  /** Trasportadora */
  conveyorOrder?: Maybe<ConveyorOrder>;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Cliente que solicita el pedido */
  customer: Customer;
  /** Productos que tiene el pedido */
  details?: Maybe<Array<DetailOrder>>;
  /** Factura generada al facturar */
  invoice?: Maybe<Invoice>;
  /**
   * Número de la factura vieja
   * @deprecated facturas viejas
   */
  invoiceNumber?: Maybe<Scalars['Float']['output']>;
  /** Facturado */
  invoiced: Scalars['Boolean']['output'];
  /** Número de pedido */
  number: Scalars['Float']['output'];
  /** Pedido de POS */
  orderPos: Scalars['Boolean']['output'];
  /** Métodos de pago usados en el pedido */
  payments?: Maybe<Array<PaymentOrder>>;
  /** Punto de venta asigando */
  pointOfSale?: Maybe<PointOfSale>;
  /** Tienda donde se solicita el pedido */
  shop: Shop;
  /** Estado del pedido */
  status: StatusOrder;
  /** Estado de transición pedido web */
  statusWeb?: Maybe<StatusWeb>;
  /** Resumen de los pagosy totales */
  summary: SummaryOrder;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el pedido */
  user: User;
};

/** Medios de pago */
export type Payment = {
  __typename?: 'Payment';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado del tipo de los médios de pago */
  active: Scalars['Boolean']['output'];
  /** Código DIAN */
  codeDian: Scalars['Float']['output'];
  /** Color del medio de pago */
  color?: Maybe<Scalars['String']['output']>;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Logo para el medio de pago */
  logo?: Maybe<Image>;
  /** Mensaje para el usuario web */
  message?: Maybe<Scalars['String']['output']>;
  /** Nombre del medio de pago */
  name: Scalars['String']['output'];
  /** Tipo de medio de pago */
  shops: Array<Shop>;
  /** Tipo de medio de pago */
  type: TypePayment;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el medio de pago */
  user: User;
};

/** Producto para confirmar en el pedido */
export type PaymentConfirm = {
  /** Médio de pago a confirmar */
  paymentId: Scalars['String']['input'];
  /** Estado del producto, si es diferente a confirm */
  status?: InputMaybe<StatusOrderDetail>;
};

/** Pagos que cruzan créditos */
export type PaymentCredit = {
  __typename?: 'PaymentCredit';
  /** Medio de pago */
  payment: Payment;
  /** Cantidad de las pagos del medio */
  quantity: Scalars['Float']['output'];
  /** Valor del medio de pago */
  value: Scalars['Float']['output'];
};

/** Medios de pago de la factura */
export type PaymentInvoice = {
  __typename?: 'PaymentInvoice';
  /** Método de pago usado */
  payment: Payment;
  /** Total pagado */
  total: Scalars['Float']['output'];
};

/** Medio de pago usado en el pedido */
export type PaymentOrder = {
  __typename?: 'PaymentOrder';
  /** Cupón solo válido para el medio de pago tipo coupon */
  code?: Maybe<Scalars['String']['output']>;
  /** Fecha de agregado del pago al pedido */
  createdAt: Scalars['DateTime']['output'];
  /** Método de pago usado */
  payment: Payment;
  /** Total pagado */
  receipt?: Maybe<Receipt>;
  /** Estado del pago */
  status: StatusOrderDetail;
  /** Total pagado */
  total: Scalars['Float']['output'];
  /** Fecha de actualizado del pago al pedido */
  updatedAt: Scalars['DateTime']['output'];
};

/** Resumen de los pagos */
export type PaymentOrderClose = {
  __typename?: 'PaymentOrderClose';
  /** Medio de pago */
  payment: Payment;
  /** Cantidad de las pagos del medio */
  quantity: Scalars['Float']['output'];
  /** Valor del medio de pago */
  value: Scalars['Float']['output'];
};

/** Medio de pago que se va a agregar */
export type PaymentsOrderInput = {
  /** Acción a realizar con el medio de pago */
  action: ActionPaymentsOrder;
  /** Código del cupón, válido para medios de pago tipo coupon */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Identificador medio de pago agregado al pedido */
  paymentId: Scalars['String']['input'];
  /** Valor total agregado */
  total: Scalars['Float']['input'];
};

/** Medios de pago */
export type PaymentsSalesReport = {
  __typename?: 'PaymentsSalesReport';
  /** Medio de pago */
  payment: Payment;
  /** Cantidad de veces de uso del medio de pago */
  quantity: Scalars['Float']['output'];
  /** Valor total recaudado con el recibo de pago */
  total: Scalars['Float']['output'];
};

/** Medios de pago */
export type PaymentsSalesReportInvoicing = {
  __typename?: 'PaymentsSalesReportInvoicing';
  /** Medio de pago */
  payment: Payment;
  /** Cantidad de veces de uso del medio de pago */
  quantity: Scalars['Float']['output'];
  /** Valor total recaudado con el recibo de pago */
  total: Scalars['Float']['output'];
};

/** Permisos a los que tiene el usuario */
export type Permission = {
  __typename?: 'Permission';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Tipo de acción */
  action: Permissions;
  /** Detalle de la acción */
  description: Scalars['String']['output'];
  /** Módulo al que pertenece el permiso */
  module: Scalars['String']['output'];
  /** Nombre de la acción */
  name: Scalars['String']['output'];
  /** Opción del módulo al que pertenece el permiso */
  option: Scalars['String']['output'];
};

/** Permiso */
export type PermissionData = {
  __typename?: 'PermissionData';
  /** Nombre del módulo */
  module: Scalars['String']['output'];
  /** Opciones del módulo */
  options: Array<OptionPermission>;
};

export enum Permissions {
  AccessAccouting = 'ACCESS_ACCOUTING',
  AccessAccoutingAuthorizations = 'ACCESS_ACCOUTING_AUTHORIZATIONS',
  AccessAccoutingLedgerAccount = 'ACCESS_ACCOUTING_LEDGER_ACCOUNT',
  AccessConfigurationConveyors = 'ACCESS_CONFIGURATION_CONVEYORS',
  AccessConfigurationRoles = 'ACCESS_CONFIGURATION_ROLES',
  AccessConfigurationShops = 'ACCESS_CONFIGURATION_SHOPS',
  AccessConfigurationUsers = 'ACCESS_CONFIGURATION_USERS',
  AccessConfigurationWarehouses = 'ACCESS_CONFIGURATION_WAREHOUSES',
  AccessCredits = 'ACCESS_CREDITS',
  AccessCrmCities = 'ACCESS_CRM_CITIES',
  AccessCrmCoupons = 'ACCESS_CRM_COUPONS',
  AccessCrmCustomers = 'ACCESS_CRM_CUSTOMERS',
  AccessCrmDiscountrules = 'ACCESS_CRM_DISCOUNTRULES',
  AccessErp = 'ACCESS_ERP',
  AccessInventoryAdjustments = 'ACCESS_INVENTORY_ADJUSTMENTS',
  AccessInventoryAttribs = 'ACCESS_INVENTORY_ATTRIBS',
  AccessInventoryBrands = 'ACCESS_INVENTORY_BRANDS',
  AccessInventoryCategories = 'ACCESS_INVENTORY_CATEGORIES',
  AccessInventoryColors = 'ACCESS_INVENTORY_COLORS',
  AccessInventoryInputs = 'ACCESS_INVENTORY_INPUTS',
  AccessInventoryOutputs = 'ACCESS_INVENTORY_OUTPUTS',
  AccessInventoryProducts = 'ACCESS_INVENTORY_PRODUCTS',
  AccessInventoryReferences = 'ACCESS_INVENTORY_REFERENCES',
  AccessInventoryReports = 'ACCESS_INVENTORY_REPORTS',
  AccessInventoryRequests = 'ACCESS_INVENTORY_REQUESTS',
  AccessInventorySizes = 'ACCESS_INVENTORY_SIZES',
  AccessInventoryTransfers = 'ACCESS_INVENTORY_TRANSFERS',
  AccessInvoicingClosesx = 'ACCESS_INVOICING_CLOSESX',
  AccessInvoicingClosesz = 'ACCESS_INVOICING_CLOSESZ',
  AccessInvoicingInvoices = 'ACCESS_INVOICING_INVOICES',
  AccessInvoicingOrders = 'ACCESS_INVOICING_ORDERS',
  AccessInvoicingPointofsales = 'ACCESS_INVOICING_POINTOFSALES',
  AccessInvoicingReturns = 'ACCESS_INVOICING_RETURNS',
  AccessInvoicingReturnOrderRules = 'ACCESS_INVOICING_RETURN_ORDER_RULES',
  AccessPos = 'ACCESS_POS',
  AccessShipmentCarrier = 'ACCESS_SHIPMENT_CARRIER',
  AccessShipmentRegion = 'ACCESS_SHIPMENT_REGION',
  AccessShipmentZone = 'ACCESS_SHIPMENT_ZONE',
  AccessTreasuryBoxes = 'ACCESS_TREASURY_BOXES',
  AccessTreasuryExpenses = 'ACCESS_TREASURY_EXPENSES',
  AccessTreasuryPayments = 'ACCESS_TREASURY_PAYMENTS',
  AccessTreasuryReceipt = 'ACCESS_TREASURY_RECEIPT',
  AutogenerateInventoryRequest = 'AUTOGENERATE_INVENTORY_REQUEST',
  ConfirmInventoryTransfer = 'CONFIRM_INVENTORY_TRANSFER',
  CreateAccoutingAuthorization = 'CREATE_ACCOUTING_AUTHORIZATION',
  CreateConfigurationRole = 'CREATE_CONFIGURATION_ROLE',
  CreateConfigurationShop = 'CREATE_CONFIGURATION_SHOP',
  CreateConfigurationUser = 'CREATE_CONFIGURATION_USER',
  CreateConfigurationWarehouse = 'CREATE_CONFIGURATION_WAREHOUSE',
  CreateCredit = 'CREATE_CREDIT',
  CreateCrmCity = 'CREATE_CRM_CITY',
  CreateCrmCoupon = 'CREATE_CRM_COUPON',
  CreateCrmCustomer = 'CREATE_CRM_CUSTOMER',
  CreateCrmDiscountrule = 'CREATE_CRM_DISCOUNTRULE',
  CreateInventoryAdjustment = 'CREATE_INVENTORY_ADJUSTMENT',
  CreateInventoryAttrib = 'CREATE_INVENTORY_ATTRIB',
  CreateInventoryBrand = 'CREATE_INVENTORY_BRAND',
  CreateInventoryCategory = 'CREATE_INVENTORY_CATEGORY',
  CreateInventoryColor = 'CREATE_INVENTORY_COLOR',
  CreateInventoryInput = 'CREATE_INVENTORY_INPUT',
  CreateInventoryOutput = 'CREATE_INVENTORY_OUTPUT',
  CreateInventoryProduct = 'CREATE_INVENTORY_PRODUCT',
  CreateInventoryReference = 'CREATE_INVENTORY_REFERENCE',
  CreateInventoryRequest = 'CREATE_INVENTORY_REQUEST',
  CreateInventorySize = 'CREATE_INVENTORY_SIZE',
  CreateInventoryTransfer = 'CREATE_INVENTORY_TRANSFER',
  CreateInvoicingClosex = 'CREATE_INVOICING_CLOSEX',
  CreateInvoicingClosez = 'CREATE_INVOICING_CLOSEZ',
  CreateInvoicingOrder = 'CREATE_INVOICING_ORDER',
  CreateInvoicingPointofsale = 'CREATE_INVOICING_POINTOFSALE',
  CreateInvoicingReturn = 'CREATE_INVOICING_RETURN',
  CreateInvoicingReturnOrderRule = 'CREATE_INVOICING_RETURN_ORDER_RULE',
  CreateShipmentCarrier = 'CREATE_SHIPMENT_CARRIER',
  CreateShipmentRegion = 'CREATE_SHIPMENT_REGION',
  CreateShipmentZone = 'CREATE_SHIPMENT_ZONE',
  CreateTreasuryBox = 'CREATE_TREASURY_BOX',
  CreateTreasuryExpense = 'CREATE_TREASURY_EXPENSE',
  CreateTreasuryPayment = 'CREATE_TREASURY_PAYMENT',
  CreateTreasuryReceipt = 'CREATE_TREASURY_RECEIPT',
  ExportReportInventoryStockProducts = 'EXPORT_REPORT_INVENTORY_STOCK_PRODUCTS',
  GenerateInvoicingDailyClosing = 'GENERATE_INVOICING_DAILY_CLOSING',
  InventoryTransfersVerified = 'INVENTORY_TRANSFERS_VERIFIED',
  PrintCrmCoupon = 'PRINT_CRM_COUPON',
  PrintInventoryAdjustment = 'PRINT_INVENTORY_ADJUSTMENT',
  PrintInventoryInput = 'PRINT_INVENTORY_INPUT',
  PrintInventoryOutput = 'PRINT_INVENTORY_OUTPUT',
  PrintInventoryRequest = 'PRINT_INVENTORY_REQUEST',
  PrintInventoryTransfer = 'PRINT_INVENTORY_TRANSFER',
  PrintInvoicingClosex = 'PRINT_INVOICING_CLOSEX',
  PrintInvoicingClosez = 'PRINT_INVOICING_CLOSEZ',
  PrintInvoicingOrder = 'PRINT_INVOICING_ORDER',
  PrintInvoicingReturn = 'PRINT_INVOICING_RETURN',
  PrintTreasuryExpense = 'PRINT_TREASURY_EXPENSE',
  PrintTreasuryReceipt = 'PRINT_TREASURY_RECEIPT',
  ReadAccoutingAuthorizations = 'READ_ACCOUTING_AUTHORIZATIONS',
  ReadConfigurationConveyors = 'READ_CONFIGURATION_CONVEYORS',
  ReadConfigurationImages = 'READ_CONFIGURATION_IMAGES',
  ReadConfigurationPermissions = 'READ_CONFIGURATION_PERMISSIONS',
  ReadConfigurationRoles = 'READ_CONFIGURATION_ROLES',
  ReadConfigurationShops = 'READ_CONFIGURATION_SHOPS',
  ReadConfigurationUsers = 'READ_CONFIGURATION_USERS',
  ReadConfigurationWarehouses = 'READ_CONFIGURATION_WAREHOUSES',
  ReadCredits = 'READ_CREDITS',
  ReadCrmCities = 'READ_CRM_CITIES',
  ReadCrmCoupons = 'READ_CRM_COUPONS',
  ReadCrmCustomers = 'READ_CRM_CUSTOMERS',
  ReadCrmCustomertypes = 'READ_CRM_CUSTOMERTYPES',
  ReadCrmDiscountrules = 'READ_CRM_DISCOUNTRULES',
  ReadInventoryAdjustments = 'READ_INVENTORY_ADJUSTMENTS',
  ReadInventoryAttribs = 'READ_INVENTORY_ATTRIBS',
  ReadInventoryBrands = 'READ_INVENTORY_BRANDS',
  ReadInventoryCategories = 'READ_INVENTORY_CATEGORIES',
  ReadInventoryColors = 'READ_INVENTORY_COLORS',
  ReadInventoryInputs = 'READ_INVENTORY_INPUTS',
  ReadInventoryOutputs = 'READ_INVENTORY_OUTPUTS',
  ReadInventoryProducts = 'READ_INVENTORY_PRODUCTS',
  ReadInventoryReferences = 'READ_INVENTORY_REFERENCES',
  ReadInventoryRequests = 'READ_INVENTORY_REQUESTS',
  ReadInventorySizes = 'READ_INVENTORY_SIZES',
  ReadInventoryTransfers = 'READ_INVENTORY_TRANSFERS',
  ReadInvoicingClosesx = 'READ_INVOICING_CLOSESX',
  ReadInvoicingClosesz = 'READ_INVOICING_CLOSESZ',
  ReadInvoicingDailyClosing = 'READ_INVOICING_DAILY_CLOSING',
  ReadInvoicingInvoices = 'READ_INVOICING_INVOICES',
  ReadInvoicingOrders = 'READ_INVOICING_ORDERS',
  ReadInvoicingPointofsales = 'READ_INVOICING_POINTOFSALES',
  ReadInvoicingReturns = 'READ_INVOICING_RETURNS',
  ReadInvoicingReturnOrderRules = 'READ_INVOICING_RETURN_ORDER_RULES',
  ReadShipmentCarrier = 'READ_SHIPMENT_CARRIER',
  ReadShipmentRegion = 'READ_SHIPMENT_REGION',
  ReadShipmentZone = 'READ_SHIPMENT_ZONE',
  ReadStockProducts = 'READ_STOCK_PRODUCTS',
  ReadTreasuryBoxes = 'READ_TREASURY_BOXES',
  ReadTreasuryErrorsCash = 'READ_TREASURY_ERRORS_CASH',
  ReadTreasuryExpenses = 'READ_TREASURY_EXPENSES',
  ReadTreasuryPayments = 'READ_TREASURY_PAYMENTS',
  ReadTreasuryReceipts = 'READ_TREASURY_RECEIPTS',
  ReportInvoicingGoalStatus = 'REPORT_INVOICING_GOAL_STATUS',
  ReportInvoicingSales = 'REPORT_INVOICING_SALES',
  UpdateAccoutingAuthorization = 'UPDATE_ACCOUTING_AUTHORIZATION',
  UpdateConfigurationRole = 'UPDATE_CONFIGURATION_ROLE',
  UpdateConfigurationShop = 'UPDATE_CONFIGURATION_SHOP',
  UpdateConfigurationUser = 'UPDATE_CONFIGURATION_USER',
  UpdateConfigurationWarehouse = 'UPDATE_CONFIGURATION_WAREHOUSE',
  UpdateCredit = 'UPDATE_CREDIT',
  UpdateCrmCity = 'UPDATE_CRM_CITY',
  UpdateCrmCoupon = 'UPDATE_CRM_COUPON',
  UpdateCrmCustomer = 'UPDATE_CRM_CUSTOMER',
  UpdateCrmDiscountrule = 'UPDATE_CRM_DISCOUNTRULE',
  UpdateInventoryAdjustment = 'UPDATE_INVENTORY_ADJUSTMENT',
  UpdateInventoryAttrib = 'UPDATE_INVENTORY_ATTRIB',
  UpdateInventoryBrand = 'UPDATE_INVENTORY_BRAND',
  UpdateInventoryCategory = 'UPDATE_INVENTORY_CATEGORY',
  UpdateInventoryColor = 'UPDATE_INVENTORY_COLOR',
  UpdateInventoryInput = 'UPDATE_INVENTORY_INPUT',
  UpdateInventoryOutput = 'UPDATE_INVENTORY_OUTPUT',
  UpdateInventoryProduct = 'UPDATE_INVENTORY_PRODUCT',
  UpdateInventoryReference = 'UPDATE_INVENTORY_REFERENCE',
  UpdateInventoryRequest = 'UPDATE_INVENTORY_REQUEST',
  UpdateInventorySize = 'UPDATE_INVENTORY_SIZE',
  UpdateInventoryTransfer = 'UPDATE_INVENTORY_TRANSFER',
  UpdateInvoicingOrder = 'UPDATE_INVOICING_ORDER',
  UpdateInvoicingPointofsale = 'UPDATE_INVOICING_POINTOFSALE',
  UpdateInvoicingReturnOrderRule = 'UPDATE_INVOICING_RETURN_ORDER_RULE',
  UpdateShipmentCarrier = 'UPDATE_SHIPMENT_CARRIER',
  UpdateShipmentRegion = 'UPDATE_SHIPMENT_REGION',
  UpdateShipmentZone = 'UPDATE_SHIPMENT_ZONE',
  UpdateTreasuryBox = 'UPDATE_TREASURY_BOX',
  UpdateTreasuryExpense = 'UPDATE_TREASURY_EXPENSE',
  UpdateTreasuryPayment = 'UPDATE_TREASURY_PAYMENT',
  UpdateTreasuryReceipt = 'UPDATE_TREASURY_RECEIPT',
  VerifiedTreasuryErrrorsCash = 'VERIFIED_TREASURY_ERRRORS_CASH'
}

/** Punto de venta de la tienda */
export type PointOfSale = {
  __typename?: 'PointOfSale';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Tienda a la que pertenece el punto de venta */
  authorization: AuthorizationDian;
  /** Autorización de facturación electrónica */
  authorizationElectronic?: Maybe<AuthorizationDian>;
  /** Caja del punto de venta */
  box: Box;
  /** Fecha de cierre */
  closeDate?: Maybe<Scalars['DateTime']['output']>;
  /** Se encuentra en proceso de cierre */
  closing?: Maybe<Scalars['Boolean']['output']>;
  /** Compañia a la que pertenece el punto de venta */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Facturar en línea */
  invoice: Scalars['Boolean']['output'];
  /** Nombre del punto de venta */
  name: Scalars['String']['output'];
  /** Tienda a la que pertenece el punto de venta */
  shop: Shop;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el punto de venta */
  user: User;
};

/** Productos del sistema */
export type Product = {
  __typename?: 'Product';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Código de barras del producto */
  barcode: Scalars['String']['output'];
  /** Color del producto */
  color: Color;
  /** Fecha de creación del producto */
  createdAt: Scalars['DateTime']['output'];
  /** Imagenes del producto */
  images?: Maybe<Array<Image>>;
  /** Referencia del producto */
  reference: Reference;
  /** Talla del producto */
  size: Size;
  /** Estado del producto */
  status: StatusProduct;
  /** Inventario del producto por bodegas */
  stock?: Maybe<Array<Stock>>;
  /** Fecha de actualización del producto */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea el producto */
  user: User;
};

/** Detalle del producto */
export type ProductDetail = {
  __typename?: 'ProductDetail';
  /** Codigo de barras del producto */
  barcode: Scalars['String']['output'];
  /** Marca del producto */
  brand: Scalars['String']['output'];
  /** Categoria nivel 1 del producto */
  categoryLevel1: Scalars['String']['output'];
  /** Color del producto */
  color: Scalars['String']['output'];
  /** Costo del producto */
  cost: Scalars['Float']['output'];
  /** Nombre del producto */
  name: Scalars['String']['output'];
  /** Precio del producto */
  price: Scalars['Float']['output'];
  /** Talla del producto */
  size: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Listado de atributos */
  attribs: ResponseAttribs;
  /** Lista de autorizaciones */
  authorizations: ResponseAuthorizations;
  /** Se encarga de listar las cajas */
  boxes: ResponseBoxes;
  /** Listado de marcas */
  brands: ResponseBrands;
  /** Obtiene el transportista por el identificador */
  carrierId: Carrier;
  /** Listado de las regiones */
  carrierQuery: ResponseCarrier;
  /** Lista las categorías */
  categories: ResponseCategories;
  /** Lista las categorías por level */
  categoriesLevel: ResponseCategories;
  /** Listado de ciudades */
  cities: ResponseCities;
  /** consultar un cierre verificado */
  closeVerified: CloseVerified;
  /** Lista de cierres x */
  closesXInvoicing: ResponseClosesXInvoicing;
  /** Lista de cierres z */
  closesZInvoicing: ResponseClosesZInvoicing;
  /** Lista los colores */
  colors: ResponseColors;
  /** Listado de las compañías */
  companies: ResponseCompanies;
  /** Obtiene el transportista por el identificador */
  conveyorrId: Conveyor;
  /** Lista de transportadoras */
  conveyors: ResponseConveyors;
  /** Lista de transportadoras para el pedido */
  conveyorsOrder: Array<ConveyorOrder>;
  /** Consultar cupón */
  coupon: Coupon;
  /** Consultar cupones */
  coupons: ResponseCoupons;
  /** Crédito */
  credit: Credit;
  /** Historico de crédito */
  creditHistory: ResponseCreditHistory;
  /** Crédito */
  creditId: Credit;
  /** Lista de créditos */
  credits: ResponseCredits;
  /** Se encarga de obtener el usuario dependiendo del token enviado */
  currentUser: User;
  /** Consulta las ventas por rango de fechas */
  customerReport: ResponseReportsSalesCustomer;
  /** Listado de tipos de cliente */
  customerTypes: ResponseCustomerTypes;
  /** Listado de clientes */
  customers: ResponseCustomers;
  /** Lista de cierres fiscales */
  dailyClosings: ResponseDailyClosing;
  /** Listado de descuentos */
  discountRules: ResponseDiscountRules;
  /** Listado de tipos de documento */
  documentTypes: Array<DocumentType>;
  /** Obtiene listado de traslados en error de productos entre bodegas */
  errorsCash: ResponseErrorCash;
  /** Se encarga de listar los egresos */
  expenses: ResponseExpenses;
  /** Obtiene la lista de cuentas contables */
  filterLegerAccount: ResponseLedgerAccount;
  /** Obtiene la lista de cuentas contables */
  filterLegerAccountReport: Array<ResponseLegerAccountReport>;
  /** Consulta usada para ver el estado de la meta */
  goalStatus: ResponseGoalStatus;
  /** Listado de imagenes */
  images: ResponseImages;
  /** Exporta a excel el invenario */
  inventoriesReportExport: Scalars['String']['output'];
  /** Lista de facturas */
  invoices: ResponseInvoices;
  /** Obtiene la orden por el id */
  orderId: ResponseOrder;
  /** Obtener las ordenes */
  orders: ResponseOrders;
  /** Obtener las ordenes por punto de venta */
  ordersByPointOfSale: Array<Order>;
  /** Consulta las ventas por rango de fechas */
  paymentReport: ResponseReportsSalesStatus;
  /** Se encarga de listar los metodos de pago */
  payments: ResponsePayments;
  /** Se encarga de listar los permisos */
  permissions: Array<PermissionData>;
  /** Lista de puntos de venta */
  pointOfSales: ResponsePointOfSales;
  /** Obtiene un producto */
  product: Product;
  /** Consulta el stock de los productos */
  productStock: ResponseStock;
  /** Lista los productos */
  products: ResponseProducts;
  /** Se encarga de listar los metodos de pago */
  receipts: ResponseReceipts;
  /** Obtiene la referencia por el identificador */
  referenceId: ReferenceData;
  /** Listado de las referencias */
  references: ResponseReferences;
  /** Listado de las regiones */
  regions: ResponseRegion;
  /** Consulta las ventas por rango de fechas */
  reportSales: ResponseReportSales;
  /** Consulta las ventas por rango de fechas */
  reportSalesInvoicing: ResponseReportSalesInvoicing;
  /** Lista de reglas de devolución */
  returnOrderRules: ResponseReturnsOrderRules;
  /** Lista de devoluciones de pedidos */
  returnsOrder: ResponseReturnsOrder;
  /** Obtiene el rol por el identificador */
  roleId: Role;
  /** Listado de las roles */
  roles: ResponseRoles;
  /** Consulta las ventas por rango de fechas */
  saleReport: ResponseSaleReports;
  /** Consulta las ventas por rango de fechas */
  salesReport: SalesReports;
  /** Obtiene la tienda por el identificador */
  shopId: Shop;
  /** Se encarga de listar las tiendas */
  shops: ResponseShops;
  /** Se encarga de listar las tiendas */
  shopsClient: ResponseShopsClient;
  /** Listar las tallas */
  sizes: ResponseSizes;
  /** Obtiene un ajuste de productos con base a su identificador */
  stockAdjustmentId: StockAdjustment;
  /** Lista de ajustes de productos */
  stockAdjustments: ResponseStockAdjustments;
  /** Obtiene una entrada de productos con base a su identificador */
  stockInputId: StockInput;
  /** Lista de entradas de productos */
  stockInputs: ResponseStockInputs;
  /** Obtiene una salida de productos con base al identificador */
  stockOutputId: StockOutput;
  /** Listado de salidas de productos */
  stockOutputs: ResponseStockOutputs;
  /** Obtiene una solicitud de productos por su identificador */
  stockRequestId: StockRequest;
  /** Lista las solicitudes de productos */
  stockRequests: ResponseStockRequests;
  /** Consulta el trasldo por el identificador */
  stockTransferId: StockTransfer;
  /** Obtiene listado de traslados de productos entre bodegas */
  stockTransfers: ResponseStockTransfers;
  /** Obtiene listado de traslados en error de productos entre bodegas */
  stockTransfersError: ResponseStockTransfersError;
  /** Consulta las ventas por rango de fechas */
  summaryReport: SummaryReportSales;
  /** Listado de tipos de responsabilidades */
  typeLiabilities: ResponseTypeLiabilities;
  /** Listado de tipos de regímenes */
  typeRegimes: ResponseTypeRegimes;
  /** Consulta todos los usuarios con base a los filtros */
  users: ResponseUsers;
  /** Se encarga de traer bodega por identificador */
  warehouseId: Warehouse;
  /** Se encarga de listar las bodegas */
  warehouses: ResponseWarehouses;
  /** Listado de las zonas */
  zona: ResponseZone;
};


export type QueryAttribsArgs = {
  filtersAttribsInput?: InputMaybe<FiltersAttribsInput>;
};


export type QueryAuthorizationsArgs = {
  filtersAuthorizations?: InputMaybe<FiltersAuthorizationInput>;
};


export type QueryBoxesArgs = {
  filtersBoxesInput?: InputMaybe<FiltersBoxesInput>;
};


export type QueryBrandsArgs = {
  filtersBrandsInput?: InputMaybe<FiltersBrandsInput>;
};


export type QueryCarrierIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCarrierQueryArgs = {
  filtersCarrierInput?: InputMaybe<FiltersCarrierInput>;
};


export type QueryCategoriesArgs = {
  filtersCategoriesInput?: InputMaybe<FiltersCategoriesInput>;
};


export type QueryCategoriesLevelArgs = {
  filtersCategoriesLevelInput?: InputMaybe<FiltersCategoriesLevelInput>;
};


export type QueryCitiesArgs = {
  filtersCitiesInput?: InputMaybe<FiltersCitiesInput>;
};


export type QueryCloseVerifiedArgs = {
  id: Scalars['String']['input'];
};


export type QueryClosesXInvoicingArgs = {
  filtersClosesXInvoicing?: InputMaybe<FiltersClosesXInvoicingInput>;
};


export type QueryClosesZInvoicingArgs = {
  filtersClosesZInvoicing?: InputMaybe<FiltersClosesZInvoicingInput>;
};


export type QueryColorsArgs = {
  filtersColorsInput?: InputMaybe<FiltersColorsInput>;
};


export type QueryCompaniesArgs = {
  filtersCompaniesInput?: InputMaybe<FiltersCompaniesInput>;
};


export type QueryConveyorrIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryConveyorsArgs = {
  filtersConveyorsInput?: InputMaybe<FiltersConveyorsInput>;
};


export type QueryConveyorsOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryCouponArgs = {
  filtersCouponInput: FiltersCouponInput;
};


export type QueryCouponsArgs = {
  filtersCouponsInput: FiltersCouponsInput;
};


export type QueryCreditArgs = {
  filtersCreditInput: FiltersCreditInput;
};


export type QueryCreditHistoryArgs = {
  FiltersCreditHistoryInput: FiltersCreditHistoryInput;
};


export type QueryCreditIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCreditsArgs = {
  filtersCreditsInput?: InputMaybe<FiltersCreditsInput>;
};


export type QueryCustomerReportArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QueryCustomerTypesArgs = {
  filtersCustomerTypesInput: FiltersCustomerTypesInput;
};


export type QueryCustomersArgs = {
  filtersCustomerInput?: InputMaybe<FiltersCustomersInput>;
};


export type QueryDailyClosingsArgs = {
  filtersDailyClosing?: InputMaybe<FiltersDailyClosing>;
};


export type QueryDiscountRulesArgs = {
  filtersDiscountRulesInput?: InputMaybe<FiltersDiscountRulesInput>;
};


export type QueryDocumentTypesArgs = {
  filtersDocumentTypesInput?: InputMaybe<FiltersDocumentTypesInput>;
};


export type QueryErrorsCashArgs = {
  filtersErrorsCashInput: FiltersErrorsCashInput;
};


export type QueryExpensesArgs = {
  filtersExpensesInput?: InputMaybe<FiltersExpensesInput>;
};


export type QueryFilterLegerAccountArgs = {
  filterLedgerAccount?: InputMaybe<FilterLedgerAccount>;
};


export type QueryFilterLegerAccountReportArgs = {
  filterLedgerAccount?: InputMaybe<FilterLedgerAccount>;
};


export type QueryGoalStatusArgs = {
  filtersGoalStatus: FiltersGoalStatusInput;
};


export type QueryImagesArgs = {
  filtersImagesInput?: InputMaybe<FiltersImagesInput>;
};


export type QueryInventoriesReportExportArgs = {
  filtersProductsStockReportInput?: InputMaybe<FiltersProductsStockReportInput>;
};


export type QueryInvoicesArgs = {
  filtersInvoices?: InputMaybe<FiltersInvoicesInput>;
};


export type QueryOrderIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  filtersOrdersInput: FiltersOrdersInput;
};


export type QueryPaymentReportArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QueryPaymentsArgs = {
  filtersPaymentsInput?: InputMaybe<FiltersPaymentsInput>;
};


export type QueryPointOfSalesArgs = {
  filtersPointOfSales?: InputMaybe<FiltersPointOfSalesInput>;
};


export type QueryProductArgs = {
  filtersProductInput?: InputMaybe<FiltersProductInput>;
};


export type QueryProductStockArgs = {
  filtersProductStock?: InputMaybe<FiltersStockInput>;
};


export type QueryProductsArgs = {
  filtersProductsInput?: InputMaybe<FiltersProductsInput>;
};


export type QueryReceiptsArgs = {
  filtersReceiptsInput?: InputMaybe<FiltersReceiptsInput>;
};


export type QueryReferenceIdArgs = {
  id: Scalars['String']['input'];
  productsStatus?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReferencesArgs = {
  companyId: Scalars['String']['input'];
  filtersReferencesInput?: InputMaybe<FiltersReferencesInput>;
};


export type QueryRegionsArgs = {
  filtersRegionInput?: InputMaybe<FiltersRegionInput>;
};


export type QueryReportSalesArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QueryReportSalesInvoicingArgs = {
  filtersSalesReportInput: FiltersSalesReportInvoicingInput;
};


export type QueryReturnOrderRulesArgs = {
  filtersReturnOrderRulesInput?: InputMaybe<FiltersReturnOrderRulesInput>;
};


export type QueryReturnsOrderArgs = {
  filtersReturnsOrder?: InputMaybe<FiltersReturnsOrderInput>;
};


export type QueryRoleIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRolesArgs = {
  filtersRolesInput?: InputMaybe<FiltersRolesInput>;
};


export type QuerySaleReportArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QuerySalesReportArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QueryShopIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryShopsArgs = {
  filtersShopsInput?: InputMaybe<FiltersShopsInput>;
};


export type QueryShopsClientArgs = {
  filtersShopsInputs?: InputMaybe<FiltersShopsInput>;
};


export type QuerySizesArgs = {
  filtersSizesInput?: InputMaybe<FiltersSizesInput>;
};


export type QueryStockAdjustmentIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStockAdjustmentsArgs = {
  filtersStockAdjustmentsInput?: InputMaybe<FiltersStockAdjustmentsInput>;
};


export type QueryStockInputIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStockInputsArgs = {
  filtersStockInputsInput?: InputMaybe<FiltersStockInputsInput>;
};


export type QueryStockOutputIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStockOutputsArgs = {
  filtersStockOutputsInput?: InputMaybe<FiltersStockOutputsInput>;
};


export type QueryStockRequestIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStockRequestsArgs = {
  filtersStockRequestsInput?: InputMaybe<FiltersStockRequestsInput>;
};


export type QueryStockTransferIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryStockTransfersArgs = {
  filtersStockTransfersInput?: InputMaybe<FiltersStockTransfersInput>;
};


export type QueryStockTransfersErrorArgs = {
  filtersStockTransfersErrorInput?: InputMaybe<FiltersStockTransfersErrorInput>;
};


export type QuerySummaryReportArgs = {
  filtersSalesReportInput: FiltersSalesReportInput;
};


export type QueryTypeLiabilitiesArgs = {
  filtersTypeLiabilitiesInput?: InputMaybe<FiltersTypeLiabilitiesInput>;
};


export type QueryTypeRegimesArgs = {
  filtersTypeRegimesInput?: InputMaybe<FiltersTypeRegimesInput>;
};


export type QueryUsersArgs = {
  filtersUsersInput?: InputMaybe<FiltersUsersInput>;
};


export type QueryWarehouseIdArgs = {
  warehouseId: Scalars['String']['input'];
};


export type QueryWarehousesArgs = {
  filtersWarehousesInput?: InputMaybe<FiltersWarehousesInput>;
};


export type QueryZonaArgs = {
  filtersZoneInput?: InputMaybe<FiltersZoneInput>;
};

/** Rangos de precio por regiones */
export type RatesRegion = {
  __typename?: 'RatesRegion';
  /** Precio de la zona */
  price: Scalars['Float']['output'];
  /** Zona a aplicar el precio */
  zone: ZoneType;
};

/** Egreso de dinero */
export type Receipt = {
  __typename?: 'Receipt';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Caja afectada por el recibo si es efectivo */
  box?: Maybe<Box>;
  /** Empresa a la que pertenece el recibo de caja */
  company: Company;
  /** Concepto del recibo de caja */
  concept?: Maybe<Scalars['String']['output']>;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Detalle del cruce del recibo */
  details: Array<DetailReceipt>;
  /** Valida si el recibo de caja es crédito */
  isCredit: Scalars['Boolean']['output'];
  /** Consecutivo del recibo de caja */
  number: Scalars['Float']['output'];
  /** Método de pago del recibo de caja */
  payment: Payment;
  /** Punto de venta que genera el recibo */
  pointOfSale: Box;
  /** Prefijo recibo de caja */
  prefix?: Maybe<Scalars['String']['output']>;
  /** Estado del recibo de caja */
  status: StatusReceipt;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el recibo de caja */
  user: User;
  /** Valor del recibo de caja */
  value: Scalars['Float']['output'];
};

/** Referencia de los productos */
export type Reference = {
  __typename?: 'Reference';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado de la referencia */
  active: Scalars['Boolean']['output'];
  /** Atributos de la referencia */
  attribs?: Maybe<Array<Attrib>>;
  /** Marca de la referencia */
  brand: Brand;
  /** Categoría Nivel 1 de la referencia */
  categoryLevel1: CategoryLevel1;
  /** Categoría Nivel 2 de la referencia */
  categoryLevel2?: Maybe<CategoryLevel2>;
  /** Categoría Nivel 3 de la referencia */
  categoryLevel3?: Maybe<CategoryLevel3>;
  /** Determina si la referencia se puede cambiar */
  changeable: Scalars['Boolean']['output'];
  /** Compañias que pueden usar la referencia */
  companies: Array<Company>;
  /** Costo de la referencia */
  cost: Scalars['Float']['output'];
  /** Fecha de creación de la referencia */
  createdAt: Scalars['DateTime']['output'];
  /** Descripción de la referencia */
  description: Scalars['String']['output'];
  /** Nombre de la referencia */
  name: Scalars['String']['output'];
  /** Precio de la referencia */
  price: Scalars['Float']['output'];
  /** Medidas de la referencia */
  shipping: Shipping;
  /** Fecha de actualización de la referencia */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la referencia */
  user: User;
};

/** Respuesta de la referencias */
export type ReferenceData = {
  __typename?: 'ReferenceData';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado de la referencia */
  active: Scalars['Boolean']['output'];
  /** Atributos de la referencia */
  attribs?: Maybe<Array<Attrib>>;
  /** Marca de la referencia */
  brand: Brand;
  /** Categoría Nivel 1 de la referencia */
  categoryLevel1: CategoryLevel1;
  /** Categoría Nivel 2 de la referencia */
  categoryLevel2?: Maybe<CategoryLevel2>;
  /** Categoría Nivel 3 de la referencia */
  categoryLevel3?: Maybe<CategoryLevel3>;
  /** Determina si la referencia se puede cambiar */
  changeable: Scalars['Boolean']['output'];
  /** Compañias que pueden usar la referencia */
  companies: Array<Company>;
  /** Costo de la referencia */
  cost: Scalars['Float']['output'];
  /** Fecha de creación de la referencia */
  createdAt: Scalars['DateTime']['output'];
  /** Descripción de la referencia */
  description: Scalars['String']['output'];
  /** Precio con descuento si se envía el tipo de cliente */
  discountPrice: Scalars['Float']['output'];
  /** Nombre de la referencia */
  name: Scalars['String']['output'];
  /** Precio de la referencia */
  price: Scalars['Float']['output'];
  /** Productos de la referencia */
  products: Array<Product>;
  /** Medidas de la referencia */
  shipping: Shipping;
  /** Fecha de actualización de la referencia */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la referencia */
  user: User;
};

/** Resumen de los pagos */
export type RefundOrderClose = {
  __typename?: 'RefundOrderClose';
  /** Cantidad de productos devueltos */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** Valor de las devoluciones */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Region de envios */
export type Region = {
  __typename?: 'Region';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Nombre de la ciudad */
  city: Scalars['String']['output'];
  /** Nombre del departamento de la ciudad */
  country: Scalars['String']['output'];
  /** Fecha creada de la ciudad */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre del departamento de la ciudad */
  dpto: Scalars['String']['output'];
  /** Estado de la region */
  state: Scalars['Boolean']['output'];
  /** Fecha de la actualizacion de la ciudad */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o modificó la ciudad */
  user: User;
  /** Usuario que creó o modificó la ciudad */
  zone: Zone;
};

/** Respuesta al listado de los atributos */
export type ResponseAttribs = {
  __typename?: 'ResponseAttribs';
  /** Lista de atributos */
  docs: Array<Attrib>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de autorizaciones de facturación */
export type ResponseAuthorizations = {
  __typename?: 'ResponseAuthorizations';
  /** Lista de autorización de facturación */
  docs: Array<AuthorizationDian>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de cajas */
export type ResponseBoxes = {
  __typename?: 'ResponseBoxes';
  /** Lista de cajas */
  docs: Array<Box>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de las marcas */
export type ResponseBrands = {
  __typename?: 'ResponseBrands';
  /** Lista de marcas */
  docs: Array<Brand>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de la zona */
export type ResponseCarrier = {
  __typename?: 'ResponseCarrier';
  /** Lista de transportista */
  docs: Array<Carrier>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de las categorías */
export type ResponseCategories = {
  __typename?: 'ResponseCategories';
  /** Lista de categorías */
  docs: Array<CategoryLevel1>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del listado de ciudades */
export type ResponseCities = {
  __typename?: 'ResponseCities';
  /** Lista de ciudades */
  docs: Array<City>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de cierres X */
export type ResponseClosesXInvoicing = {
  __typename?: 'ResponseClosesXInvoicing';
  /** Lista de cierres X */
  docs: Array<CloseXInvoicing>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de cierres Z */
export type ResponseClosesZInvoicing = {
  __typename?: 'ResponseClosesZInvoicing';
  /** Lista de cierres Z */
  docs: Array<CloseZInvoicing>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los colores */
export type ResponseColors = {
  __typename?: 'ResponseColors';
  /** Lista de colores */
  docs: Array<Color>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de compañías */
export type ResponseCompanies = {
  __typename?: 'ResponseCompanies';
  /** Lista de compañías */
  docs: Array<Company>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de traslados de transportadoras */
export type ResponseConveyors = {
  __typename?: 'ResponseConveyors';
  /** Lista de transportadoras */
  docs: Array<Conveyor>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del listado de cupones */
export type ResponseCoupons = {
  __typename?: 'ResponseCoupons';
  /** Lista de cupones */
  docs: Array<Coupon>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado del historial de créditos */
export type ResponseCreditHistory = {
  __typename?: 'ResponseCreditHistory';
  /** Lista del historial de créditos */
  docs: Array<CreditHistory>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los créditos */
export type ResponseCredits = {
  __typename?: 'ResponseCredits';
  /** Lista de créditos */
  docs: Array<Credit>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del listado de tipos de cliente */
export type ResponseCustomerTypes = {
  __typename?: 'ResponseCustomerTypes';
  /** Lista de tipos de cliente */
  docs: Array<CustomerType>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del listado de clientes */
export type ResponseCustomers = {
  __typename?: 'ResponseCustomers';
  /** Lista de clientes */
  docs: Array<Customer>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de cierres fiscales */
export type ResponseDailyClosing = {
  __typename?: 'ResponseDailyClosing';
  /** Lista de cierres fiscales */
  docs: Array<DailyClosing>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del listado de reglas de descuento */
export type ResponseDiscountRules = {
  __typename?: 'ResponseDiscountRules';
  /** Lista de reglas de descuento */
  docs: Array<DiscountRule>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de cajas */
export type ResponseErrorCash = {
  __typename?: 'ResponseErrorCash';
  /** Lista de errores de efectivo */
  docs: Array<ErrorCash>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de egresos */
export type ResponseExpenses = {
  __typename?: 'ResponseExpenses';
  /** Lista de egresos */
  docs: Array<Expense>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta de la creación de los cierres diarios de facturación */
export type ResponseGenerateDailyClosing = {
  __typename?: 'ResponseGenerateDailyClosing';
  /** Mensaje de respuesta */
  message: Scalars['String']['output'];
  /** Cantidad de cierres diarios creados */
  quantity: Scalars['Float']['output'];
};

/** Datos resultado de la consulta de Estado de la meta */
export type ResponseGoalStatus = {
  __typename?: 'ResponseGoalStatus';
  /** Meta */
  goal: Scalars['Float']['output'];
  /** Venta neta generada por el usuario */
  netSales: Scalars['Float']['output'];
};

/** Respuesta al listado de las imagenes */
export type ResponseImages = {
  __typename?: 'ResponseImages';
  /** Lista de imagenes */
  docs: Array<Image>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de facturas */
export type ResponseInvoices = {
  __typename?: 'ResponseInvoices';
  /** Lista de facturas */
  docs: Array<Invoice>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Resultado de facturación */
export type ResponseInvoicing = {
  __typename?: 'ResponseInvoicing';
  /** Cantidad de facturas generadas */
  invoiceQuantityBank: Scalars['Float']['output'];
  /** Cantidad de facturas generadas */
  invoiceQuantityCash: Scalars['Float']['output'];
  /** Valor total facturado */
  valueInvoicingBank: Scalars['Float']['output'];
  /** Valor total facturado */
  valueInvoicingCash: Scalars['Float']['output'];
};

/** Respuesta a la consulta de productos */
export type ResponseLedgerAccount = {
  __typename?: 'ResponseLedgerAccount';
  /** Lista de reglas para periodo de cambio por producto */
  docs: Array<LedgerAccount>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  /** Contador de paginas */
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta del reporte para la Cuenta contable */
export type ResponseLegerAccountReport = {
  __typename?: 'ResponseLegerAccountReport';
  /** Comprobante contable de la autorización DIAN */
  accountingReceipt: Scalars['Float']['output'];
  /** Fechas de la faturación */
  date: Scalars['DateTime']['output'];
  /** Descripción de la cuenta contable */
  description: Scalars['String']['output'];
  /** Sin definir */
  expiration: Scalars['Float']['output'];
  /** Documento de la factura */
  invoice: Scalars['String']['output'];
  /** Número de  Cuenta contable */
  ledgerAccount: Scalars['Float']['output'];
  /** Numero de documento del cliente */
  nit: Scalars['String']['output'];
  /** Nombre de la forma de pago */
  paymentName: Scalars['String']['output'];
  /** Tipo de cuenta contable */
  type: Scalars['Float']['output'];
  /** Valor total de la factura */
  value: Scalars['Float']['output'];
};

/** Respuesta para obtener la orden */
export type ResponseOrder = {
  __typename?: 'ResponseOrder';
  /** Crédito que tiene el cliente */
  conveyors?: Maybe<Array<Conveyors>>;
  /** Crédito que tiene el cliente */
  credit?: Maybe<Credit>;
  /** Pedido actualizado */
  order: Order;
};

/** Lista de predidos */
export type ResponseOrders = {
  __typename?: 'ResponseOrders';
  /** Lista de pedidos */
  docs: Array<Order>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de metodos de pago */
export type ResponsePayments = {
  __typename?: 'ResponsePayments';
  /** Lista de metodos de pago */
  docs: Array<Payment>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de puntos de venta */
export type ResponsePointOfSales = {
  __typename?: 'ResponsePointOfSales';
  /** Lista de puntos de venta */
  docs: Array<PointOfSale>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los productos */
export type ResponseProducts = {
  __typename?: 'ResponseProducts';
  /** Lista de productos */
  docs: Array<Product>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Resultado al crear un recibo de caja */
export type ResponseReceipt = {
  __typename?: 'ResponseReceipt';
  /** Crédito afectado por el recibo de caja */
  credit: Credit;
  /** Recibo de caja generado */
  receipt: Receipt;
};

/** Respuesta a la consulta de recibos de caja */
export type ResponseReceipts = {
  __typename?: 'ResponseReceipts';
  /** Lista de recibos de caja */
  docs: Array<Receipt>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de las referencias */
export type ResponseReferences = {
  __typename?: 'ResponseReferences';
  /** Lista de referencias */
  docs: Array<ReferenceData>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de la zona */
export type ResponseRegion = {
  __typename?: 'ResponseRegion';
  /** Lista de roles */
  docs: Array<Region>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Reportde de ventas generales */
export type ResponseReportSales = {
  __typename?: 'ResponseReportSales';
  /** Ventas por tipo de cliente */
  customersSalesReport?: Maybe<Array<CustomerSalesReport>>;
  /** Medios de pago */
  paymentsSalesReport?: Maybe<Array<PaymentsSalesReport>>;
  /** Ventas detalladas */
  salesReport?: Maybe<Array<SalesReport>>;
  /** Resumen de ventas */
  summarySalesReport?: Maybe<SummarySalesReport>;
};

/** Reportde de ventas generales */
export type ResponseReportSalesInvoicing = {
  __typename?: 'ResponseReportSalesInvoicing';
  /** Ventas por tipo de cliente */
  customersSalesReport?: Maybe<Array<CustomerSalesReportInvoicing>>;
  /** Medios de pago */
  paymentsSalesReport?: Maybe<Array<PaymentsSalesReportInvoicing>>;
  /** Ventas detalladas */
  salesReport?: Maybe<Array<SalesReportInvoicing>>;
  /** Resumen de ventas */
  summarySalesReport?: Maybe<SummarySalesReportInvoicing>;
};

/** Reportde de ventas tipo de cliente */
export type ResponseReportsSalesCustomer = {
  __typename?: 'ResponseReportsSalesCustomer';
  /** Ventas por tipo de cliente */
  customersSalesReport?: Maybe<Array<CustomerSalesReport>>;
};

/** Reporte de metodo de pagos */
export type ResponseReportsSalesStatus = {
  __typename?: 'ResponseReportsSalesStatus';
  /** Medios de pago */
  paymentsSalesReport?: Maybe<Array<PaymentsSalesReport>>;
};

/** Lista de devoluciones de ordenes */
export type ResponseReturnsOrder = {
  __typename?: 'ResponseReturnsOrder';
  /** Lista de devoluci0nes */
  docs: Array<ReturnOrder>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de reglas de devoluciones */
export type ResponseReturnsOrderRules = {
  __typename?: 'ResponseReturnsOrderRules';
  /** Lista de reglas de facturas */
  docs: Array<ReturnOrderRule>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de roles */
export type ResponseRoles = {
  __typename?: 'ResponseRoles';
  /** Lista de roles */
  docs: Array<Role>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Reporte de ventas generales */
export type ResponseSaleReports = {
  __typename?: 'ResponseSaleReports';
  /** Ventas detalladas */
  saleDashboard?: Maybe<Array<SalesReportDashboard>>;
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
};

/** Respuesta a la consulta de tiendas */
export type ResponseShops = {
  __typename?: 'ResponseShops';
  /** Lista de tiendas */
  docs: Array<Shop>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de tiendas para clientes */
export type ResponseShopsClient = {
  __typename?: 'ResponseShopsClient';
  /** Lista de tiendas */
  docs: Array<Shops>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de docuementos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de las tallas */
export type ResponseSizes = {
  __typename?: 'ResponseSizes';
  /** Lista de tallas */
  docs: Array<Size>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los productos */
export type ResponseStock = {
  __typename?: 'ResponseStock';
  /** Lista de productos con inventario */
  docs: Array<InventoryReport>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de ajustes de productos */
export type ResponseStockAdjustments = {
  __typename?: 'ResponseStockAdjustments';
  /** Lista de ajustes */
  docs: Array<StockAdjustment>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de entradas de productos */
export type ResponseStockInputs = {
  __typename?: 'ResponseStockInputs';
  /** Lista de entradas */
  docs: Array<StockInput>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de salidas de productos */
export type ResponseStockOutputs = {
  __typename?: 'ResponseStockOutputs';
  /** Lista de salidas */
  docs: Array<StockOutput>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de solicitudes de productos */
export type ResponseStockRequests = {
  __typename?: 'ResponseStockRequests';
  /** Lista de solicitudes */
  docs: Array<StockRequest>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de traslados de productos */
export type ResponseStockTransfers = {
  __typename?: 'ResponseStockTransfers';
  /** Lista de traslados */
  docs: Array<StockTransfer>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de traslados en error de productos */
export type ResponseStockTransfersError = {
  __typename?: 'ResponseStockTransfersError';
  /** Lista de traslados en error */
  docs: Array<StockTransferError>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los tipos de  responsibilidades */
export type ResponseTypeLiabilities = {
  __typename?: 'ResponseTypeLiabilities';
  /** Lista de tipos responsabilidades */
  docs: Array<TypeLiability>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta al listado de los tipos de  regímenes */
export type ResponseTypeRegimes = {
  __typename?: 'ResponseTypeRegimes';
  /** Lista de tipos de regímenes */
  docs: Array<TypeRegime>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Lista de usuarios */
export type ResponseUsers = {
  __typename?: 'ResponseUsers';
  /** Lista de usuarios */
  docs: Array<User>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de bodegas */
export type ResponseWarehouses = {
  __typename?: 'ResponseWarehouses';
  /** Lista de salidas */
  docs: Array<Warehouse>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Respuesta a la consulta de la zona */
export type ResponseZone = {
  __typename?: 'ResponseZone';
  /** Lista de roles */
  docs: Array<Zone>;
  /** ¿Encuentra página siguiente? */
  hasNextPage: Scalars['Boolean']['output'];
  /** ¿Encuentra página anterior? */
  hasPrevPage: Scalars['Boolean']['output'];
  /** Total de documentos solicitados */
  limit: Scalars['Float']['output'];
  /** Página siguente */
  nextPage: Scalars['Float']['output'];
  /** Página actual */
  page: Scalars['Float']['output'];
  pagingCounter: Scalars['Float']['output'];
  /** Página anterior */
  prevPage: Scalars['Float']['output'];
  /** Total de documentos */
  totalDocs: Scalars['Float']['output'];
  /** Total de páginas */
  totalPages: Scalars['Float']['output'];
};

/** Devoluciones de facturación */
export type ReturnOrder = {
  __typename?: 'ReturnOrder';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado del devolucion */
  active: Scalars['Boolean']['output'];
  /** Compañía a la que pertence la devolución */
  company: Company;
  /** Cupón generado */
  coupon: Coupon;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Productos de la devolución */
  details?: Maybe<Array<DetailReturnInvoice>>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Pedido de la devolución */
  order: Order;
  /** Punto de venta */
  pointOfSale: PointOfSale;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó la factrura */
  user: User;
};

/** Reglas para realizar las devoluciones */
export type ReturnOrderRule = {
  __typename?: 'ReturnOrderRule';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Reglas activa */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Días límite para realizar la devolución */
  limitDays: Scalars['Float']['output'];
  /** Nombre de la regla */
  name: Scalars['String']['output'];
  /** Reglas para realizar la devolución */
  rules: Array<Rule>;
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o editó el descuento */
  user: User;
};

/** Rol del usuario  */
export type Role = {
  __typename?: 'Role';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Se encuentra activo el rol */
  active: Scalars['Boolean']['output'];
  /** Permite hacer consultas con otra bodega */
  changeWarehouse: Scalars['Boolean']['output'];
  /** Fecha de creación del rol */
  createdAt: Scalars['DateTime']['output'];
  /** Nombre asignado al rol */
  name: Scalars['String']['output'];
  /** Permisos al los quie tiene el rol */
  permissions: Array<Permission>;
  /** Orden por gerarquía */
  rank: Scalars['Float']['output'];
  /** Fecha en la que se actualizó el rol */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o modificó el rol */
  user: User;
};

/** Reglas para el descuento */
export type Rule = {
  __typename?: 'Rule';
  /** Identificador de los documentos */
  documentIds: Array<Scalars['String']['output']>;
  /** Tipo de documento para validar el descuento */
  documentType: DocumentTypesRule;
  /** Tipo de regla que deben cumplir los documentos */
  type: TypesRule;
};

/** Regla de descuento */
export type RuleInput = {
  /** Identificador de los documentos */
  documentIds: Array<Scalars['String']['input']>;
  /** Tipo de documento para validar el descuento */
  documentType: DocumentTypesRule;
  /** Tipo de regla que deben cumplir los documentos */
  type: TypesRule;
};

/** Ventas detalladas con base a los filtros */
export type SalesReport = {
  __typename?: 'SalesReport';
  /** Categoría */
  category?: Maybe<CategoryLevel1>;
  /** Fecha de la venta */
  date: Scalars['DateTime']['output'];
  /** Fecha de la venta */
  dateDay: Scalars['DateTime']['output'];
  /** Cantidad de productos de la categoría vendidos o cantidad de pedidos generados */
  quantity: Scalars['Float']['output'];
  /** Tienda */
  shop: Shop;
  /** Valor total de la venta */
  total: Scalars['Float']['output'];
};

/** Ventas detalladas con base a los filtros */
export type SalesReportDashboard = {
  __typename?: 'SalesReportDashboard';
  /** Categoría */
  category?: Maybe<Scalars['String']['output']>;
  /** Fecha de la venta */
  date: Scalars['DateTime']['output'];
  /** Fecha de la venta */
  dateDay: Scalars['DateTime']['output'];
  /** Cantidad de productos de la categoría vendidos o cantidad de pedidos generados */
  quantity: Scalars['Float']['output'];
  /** Tienda */
  shop: Scalars['String']['output'];
  /** Valor total de la venta */
  total: Scalars['Float']['output'];
};

/** Ventas detalladas con base a los filtros */
export type SalesReportInvoicing = {
  __typename?: 'SalesReportInvoicing';
  /** Categoría */
  category?: Maybe<CategoryLevel1>;
  /** Cantidad de productos de la categoría vendidos o cantidad de pedidos generados */
  quantity: Scalars['Float']['output'];
  /** Tienda */
  shop: Shop;
  /** Valor total de la venta */
  total: Scalars['Float']['output'];
};

/** Datos de medidas para el envío de los productos */
export type Shipping = {
  __typename?: 'Shipping';
  /** Fecha de creación del dato de envio */
  createdAt: Scalars['DateTime']['output'];
  /** Alto del producto */
  height: Scalars['Float']['output'];
  /** Largo del producto */
  long: Scalars['Float']['output'];
  /** Fecha de actualización del dato de envio */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea los datos de envío */
  user: User;
  /** Volumen del producto */
  volume: Scalars['Float']['output'];
  /** Peso del producto */
  weight: Scalars['Float']['output'];
  /** Ancho del producto */
  width: Scalars['Float']['output'];
};

/** Datos de medidas para el envío de los productos */
export type ShippingCategory = {
  __typename?: 'ShippingCategory';
  /** Fecha de creación del dato de envio */
  createdAt: Scalars['DateTime']['output'];
  /** Alto del producto */
  height?: Maybe<Scalars['Float']['output']>;
  /** Largo del producto */
  long?: Maybe<Scalars['Float']['output']>;
  /** Fecha de actualización del dato de envio */
  updatedAt: Scalars['DateTime']['output'];
  /** Volumen del producto */
  volume?: Maybe<Scalars['Float']['output']>;
  /** Peso del producto */
  weight?: Maybe<Scalars['Float']['output']>;
  /** Ancho del producto */
  width?: Maybe<Scalars['Float']['output']>;
};

export type Shop = {
  __typename?: 'Shop';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Dirección de la tienda */
  address?: Maybe<Scalars['String']['output']>;
  /** Razón social de la tienda */
  businessName?: Maybe<Scalars['String']['output']>;
  /** Ciudad de la dirección */
  city: City;
  /** Empresa que usa la tienda */
  company: Company;
  /** Nombre comercial de la tienda */
  companyName?: Maybe<Scalars['String']['output']>;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Bodega predeterminada para la tienda */
  defaultWarehouse: Warehouse;
  /** Documento de la tienda(NIT) */
  document?: Maybe<Scalars['String']['output']>;
  /** Documento nit de la tienda */
  documentNit?: Maybe<Scalars['String']['output']>;
  /** Tipo de documento de la compañía */
  documentType?: Maybe<DocumentType>;
  /** Dígito de verificación del documento */
  dv?: Maybe<Scalars['Float']['output']>;
  /** Correo de la tienda */
  email?: Maybe<Scalars['String']['output']>;
  /** Meta asiganda a la tienda */
  goal: Scalars['Float']['output'];
  /** Historico de metas de la tienda */
  goalHistory?: Maybe<Array<GoalHistory>>;
  /** Es centro de distribución */
  isMain: Scalars['Boolean']['output'];
  /** Dirección de la tienda */
  maps?: Maybe<Scalars['String']['output']>;
  /** Nombre de la tienda */
  name: Scalars['String']['output'];
  /** Teléfono de la tienda */
  phone?: Maybe<Scalars['String']['output']>;
  /** Se muestra en la web */
  showWeb: Scalars['Boolean']['output'];
  /** Estado de la tienda */
  status: StatusShop;
  /** Tipo de responsabilidad contable de la compañía */
  typeLiability?: Maybe<TypeLiability>;
  /** Tipo de régimen compañía */
  typeRegime?: Maybe<TypeRegime>;
  /** Fecha de creación */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la tienda */
  user: User;
  /** Bodega de centro de distribución asignado */
  warehouseMain?: Maybe<Warehouse>;
};

/** Datos de una tienda */
export type Shops = {
  __typename?: 'Shops';
  /** ID de la tienda */
  _id: Scalars['String']['output'];
  /** Direccion de la tienda */
  address: Scalars['String']['output'];
  /** Ciudad de la tienda */
  city: City;
  /** Compañia de la tienda */
  company: Company;
  /** Embed de la tienda */
  maps?: Maybe<Scalars['String']['output']>;
  /** Nombre de la tienda */
  name: Scalars['String']['output'];
  /** Telefono de la tienda */
  phone?: Maybe<Scalars['String']['output']>;
};

/** Datos para el registro de un usuario */
export type SignUpInput = {
  /** Fecha de cumpleaños del cliente */
  birthDate?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la compañia a la que pertenece */
  companyId: Scalars['String']['input'];
  /** Identificación de tipo de cliente */
  customerTypeId: Scalars['String']['input'];
  /** Documento de identidad del cliente */
  document: Scalars['String']['input'];
  /** Identificación del tipo de documento de identidad del cliente */
  documentTypeId: Scalars['String']['input'];
  /** Correo del cliente */
  email: Scalars['String']['input'];
  /** Nombres del cliente */
  firstName: Scalars['String']['input'];
  /** Apellidos del cliente */
  lastName: Scalars['String']['input'];
  /** Contraseña del cliente */
  password: Scalars['String']['input'];
  /** Teléfono del cliente */
  phone?: InputMaybe<Scalars['String']['input']>;
};

/** Talla del producto */
export type Size = {
  __typename?: 'Size';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado de la talla */
  active: Scalars['Boolean']['output'];
  /** Fecha de creación de la talla */
  createdAt: Scalars['DateTime']['output'];
  /**
   * Identificador mysql
   * @deprecated Campo para migración de mysql
   */
  id?: Maybe<Scalars['Float']['output']>;
  /** Fecha de actualización de la talla */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la talla */
  user: User;
  /** Valor de la talla */
  value: Scalars['String']['output'];
  /** Peso de la talla para el ordenamiento */
  weight: Scalars['Float']['output'];
};

/** Ordenamiento para el listado de atributos */
export type SortAttrib = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de las autorizaciones */
export type SortAuthorization = {
  /** Ordenamiento por prefijo */
  prefix?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de las cajas */
export type SortBox = {
  base?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  isMain?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de marcas */
export type SortBrand = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de las zonas */
export type SortCarrier = {
  active?: InputMaybe<Scalars['Float']['input']>;
  city?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de categorías */
export type SortCategories = {
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la ciudad */
export type SortCity = {
  /** ordernamiento por país */
  country?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por documento */
  name?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por estado */
  state?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de cierre z */
export type SortCloseXInvoicing = {
  /** Ordenamiento por fecha de cierre */
  closeDate?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por numero */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de cierre z */
export type SortCloseZInvoicing = {
  /** Ordenamiento por fecha de cierre */
  closeDate?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por numero */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de colores */
export type SortColor = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  name_internal?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la trasnportadora */
export type SortCompany = {
  /** Ordenamiento por nombre */
  active?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por nombre */
  name?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por nombre */
  regimenSimplify?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la trasnportadora */
export type SortConveyor = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por nombre */
  name?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del ccupón */
export type SortCoupon = {
  /** ordernamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por fecha de expiración */
  expiration?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por consecutivo */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de los créditos */
export type SortCredit = {
  /** Ordenamiento por monto aprobado */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por monto disponible */
  available?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por monto ocupado */
  balance?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por monto congelado */
  frozenAmount?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de los créditos */
export type SortCreditHistory = {
  /** Ordenamiento por monto aprobado */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Tipo de historico de créditos */
  type?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del cliente */
export type SortCustomer = {
  /** ordernamiento por estado del cliente */
  active?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por documento */
  document?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por correo */
  email?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por nombre */
  firstName?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por si es por defecto */
  isDefault?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por si tiene whatsapp */
  isWhatsapp?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por apellido */
  lastName?: InputMaybe<Scalars['Float']['input']>;
  /** ordernamiento por teléfono */
  phone?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de cierre z */
export type SortDailyClosing = {
  /** Ordenamiento por fecha de cierre */
  closeDate?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para el ordenamiento */
export type SortDiscountRule = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  dateFinal?: InputMaybe<Scalars['Float']['input']>;
  dateInitial?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  percent?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamient */
export type SortErrosCash = {
  value?: InputMaybe<Scalars['Float']['input']>;
  verified?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de los egresos */
export type SortExpense = {
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de imagenes */
export type SortImage = {
  name?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de facturas */
export type SortInovice = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de pedidos */
export type SortOrder = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número consecutivo del pedido */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la teinda */
export type SortPayment = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de colores */
export type SortPointOfSale = {
  closeDate?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de productos */
export type SortProduct = {
  barcode?: InputMaybe<Scalars['Float']['input']>;
  changeable?: InputMaybe<Scalars['Float']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  reference?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de los recibos de caja */
export type SortReceipt = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por consecutivo */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado del recibo */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por valor del recibo */
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de referencias */
export type SortReference = {
  changeable?: InputMaybe<Scalars['Float']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de las zonas */
export type SortRegion = {
  active?: InputMaybe<Scalars['Float']['input']>;
  city?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de las devoluciones en pedido */
export type SortReturnOrder = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para el ordenamiento */
export type SortReturnOrderRule = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  limitDays?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de roles */
export type SortRole = {
  active?: InputMaybe<Scalars['Float']['input']>;
  changeWarehouse?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la tienda */
export type SortShop = {
  address?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  goal?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de tallas */
export type SortSize = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del ajuste de productos */
export type SortStockAdjustment = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por total */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega */
  warehouse?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la entrada de productos */
export type SortStockInput = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por total */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega */
  warehouse?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la salida de productos */
export type SortStockOutput = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por total */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega */
  warehouse?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la lista de inventarios */
export type SortStockProducts = {
  /** Id de talla */
  color?: InputMaybe<Scalars['Float']['input']>;
  /** Id de talla */
  size?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del solicitudes de productos */
export type SortStockRequest = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega de destino */
  warehouseDestination?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega de origen */
  warehouseOrigin?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del traslado de productos */
export type SortStockTransfer = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por número */
  number?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por estado */
  status?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega de destino */
  warehouseDestination?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por bodega de origen */
  warehouseOrigin?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento del traslado de productos */
export type SortStockTransferError = {
  /** Ordenamiento por fecha de creación */
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  /** Ordenamiento por fecha de actualización */
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de tipos de responsabilidades */
export type SortTypeLiability = {
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  isDefault?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de tipos de régimen */
export type SortTypeRegime = {
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  isDefault?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de los usuarios */
export type SortUser = {
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  username?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento de la bodega */
export type SortWarehouse = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  isMain?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

/** Ordenamiento para el listado de las zonas */
export type SortZone = {
  active?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
};

export enum StatusCoupon {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Redeemed = 'REDEEMED'
}

export enum StatusCredit {
  Active = 'ACTIVE',
  Finish = 'FINISH',
  Suspend = 'SUSPEND'
}

export enum StatusDetailTransfer {
  Confirmed = 'CONFIRMED',
  New = 'NEW',
  Sent = 'SENT'
}

export enum StatusDetailTransferError {
  Confirmed = 'CONFIRMED',
  Missing = 'MISSING',
  Surplus = 'SURPLUS'
}

export enum StatusExpense {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export enum StatusLedgerAccount {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export enum StatusOrder {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Open = 'OPEN',
  Pendding = 'PENDDING'
}

export enum StatusOrderDetail {
  Confirmed = 'CONFIRMED',
  New = 'NEW'
}

export enum StatusProduct {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum StatusReceipt {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED'
}

export enum StatusShop {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspend = 'SUSPEND'
}

export enum StatusStockAdjustment {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Open = 'OPEN'
}

export enum StatusStockInput {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Open = 'OPEN'
}

export enum StatusStockOutput {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Open = 'OPEN'
}

export enum StatusStockRequest {
  Cancelled = 'CANCELLED',
  Open = 'OPEN',
  Pending = 'PENDING',
  Used = 'USED'
}

export enum StatusStockTransfer {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Incomplete = 'INCOMPLETE',
  Open = 'OPEN',
  Sent = 'SENT',
  Verified = 'VERIFIED'
}

export enum StatusUser {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Suspend = 'SUSPEND'
}

export enum StatusWeb {
  AutoCancelled = 'AUTO_CANCELLED',
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Open = 'OPEN',
  PaymentConfirmed = 'PAYMENT_CONFIRMED',
  Pendding = 'PENDDING',
  PenddingCredit = 'PENDDING_CREDIT',
  Preparing = 'PREPARING',
  Sent = 'SENT'
}

/** Inventario por bodegas del producto */
export type Stock = {
  __typename?: 'Stock';
  /** Fecha de creación del dato de envio */
  createdAt: Scalars['DateTime']['output'];
  /** Cantidad de productos en la bodega */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualización del dato de envio */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea los datos de envío */
  user: User;
  /** Identificador de la bodega */
  warehouse: Warehouse;
};

/** Ajuste de productos */
export type StockAdjustment = {
  __typename?: 'StockAdjustment';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía a la que pertence el ajuste */
  company: Company;
  /** Fecha de creación de la entrada */
  createdAt: Scalars['DateTime']['output'];
  /** Detalles del ajuste */
  details: Array<DetailAdjustment>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Observación de la entrada */
  observation?: Maybe<Scalars['String']['output']>;
  /** Estado del ajuste */
  status: StatusStockAdjustment;
  /** Costo total del ajuste */
  total: Scalars['Float']['output'];
  /** Fecha de la última actulización de la entrada */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó el ajuste */
  user: User;
  /** Bodega del ajuste */
  warehouse: Warehouse;
};

/** Salida de productos */
export type StockInput = {
  __typename?: 'StockInput';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía a la que pertence la entrada */
  company: Company;
  /** Fecha de creación de la entrada */
  createdAt: Scalars['DateTime']['output'];
  /** Detalles de la entrada */
  details: Array<DetailInput>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Observación de la entrada */
  observation?: Maybe<Scalars['String']['output']>;
  /** Estado de la entrada */
  status: StatusStockInput;
  /** Costo total de la entrada */
  total: Scalars['Float']['output'];
  /** Fecha de la última actulización de la entrada */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó la entrada */
  user: User;
  /** Bodega de la entrada */
  warehouse: Warehouse;
};

/** Salida de productos */
export type StockOutput = {
  __typename?: 'StockOutput';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía a la que pertence la salida */
  company: Company;
  /** Fecha de creación de la salida */
  createdAt: Scalars['DateTime']['output'];
  /** Detalles de la salida */
  details: Array<DetailOutput>;
  /** Número consecutivo */
  number: Scalars['Float']['output'];
  /** Observación de la entrada */
  observation?: Maybe<Scalars['String']['output']>;
  /** Estado de la salida */
  status: StatusStockOutput;
  /** Costo total de la salida */
  total: Scalars['Float']['output'];
  /** Fecha de la última actulización de la salida */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó la salida */
  user: User;
  /** Bodega de la salida */
  warehouse: Warehouse;
};

/** Inventario por bodegas del producto */
export type StockProduct = {
  __typename?: 'StockProduct';
  /** Fecha de creación del dato de envio */
  createdAt: Scalars['DateTime']['output'];
  /** Cantidad de productos en la bodega */
  quantity: Scalars['Float']['output'];
  /** Fecha de actualización del dato de envio */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea los datos de envío */
  user: User;
  /** Identificador de la bodega */
  warehouse?: Maybe<Warehouse>;
};

/** Solicitud de productos */
export type StockRequest = {
  __typename?: 'StockRequest';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /**
   * Usuario que crea la solicitud
   * @deprecated Migración mysql
   */
  code?: Maybe<Scalars['String']['output']>;
  /** Compañía a la que pertence la solicitud */
  company: Company;
  /** Fecha de creación de la solicitud */
  createdAt: Scalars['DateTime']['output'];
  /** Detalles de la solicitud */
  details: Array<DetailRequest>;
  /** Número consecutivo de identificación */
  number: Scalars['Float']['output'];
  /** Observación de la solicitud */
  observation?: Maybe<Scalars['String']['output']>;
  /** Estado de la solicitud */
  status: StatusStockRequest;
  /** Fecha de la última actulización de la solicitud */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea la solicitud */
  user: User;
  /** Bodega de destino de la solicitud */
  warehouseDestination: Warehouse;
  /** Bodega de origen de la solicitud */
  warehouseOrigin: Warehouse;
};

/** Translado de productos */
export type StockTransfer = {
  __typename?: 'StockTransfer';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía a la que pertence el traslado */
  company: Company;
  /** Fecha de creación del traslado */
  createdAt: Scalars['DateTime']['output'];
  /** Detalle de los productos */
  details: Array<DetailTransfer>;
  /** Consecutivo del traslado */
  number: Scalars['Float']['output'];
  /** Observación general */
  observation?: Maybe<Scalars['String']['output']>;
  /** Observación del que crea el traslado */
  observationDestination?: Maybe<Scalars['String']['output']>;
  /** Observación del que crea el traslado */
  observationOrigin?: Maybe<Scalars['String']['output']>;
  /** Solicitudes usadas */
  requests?: Maybe<Array<StockRequest>>;
  /** Estado del traslado */
  status: StatusStockTransfer;
  /** Fecha de actualización del traslado */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario de destino del traslado */
  userDestination?: Maybe<User>;
  /** Usuario de origen del traslado */
  userOrigin: User;
  /** Bodega de origen del traslado */
  warehouseDestination: Warehouse;
  /** Bodega de origen del traslado */
  warehouseOrigin: Warehouse;
};

/** Errores en traslados de productos */
export type StockTransferError = {
  __typename?: 'StockTransferError';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía del traslado */
  company: Company;
  /** Fecha de creación del traslado */
  createdAt: Scalars['DateTime']['output'];
  /** Detalle de los productos que están en error */
  details: Array<DetailTransferError>;
  /** Traslado al que está relacionado */
  stockTransfer: StockTransfer;
  /** Fecha de actualización del traslado */
  updatedAt: Scalars['DateTime']['output'];
  /** Si ya fue verificados todos los errores */
  verified: Scalars['Boolean']['output'];
};

/** Resumen del cierre */
export type SummaryClose = {
  __typename?: 'SummaryClose';
  /** Subtotal del cierre */
  subtotal: Scalars['Float']['output'];
  /** Impuestos del cierre */
  tax: Scalars['Float']['output'];
  /** Total del cierre */
  total: Scalars['Float']['output'];
};

/** Resumen de la factura */
export type SummaryInvoice = {
  __typename?: 'SummaryInvoice';
  /** Cambio de la factura */
  change: Scalars['Float']['output'];
  /** Descuento de la factura */
  discount: Scalars['Float']['output'];
  /** Subtotal de la factura */
  subtotal: Scalars['Float']['output'];
  /** Impuestos de la factura */
  tax: Scalars['Float']['output'];
  /** Total de la factura */
  total: Scalars['Float']['output'];
  /** Total pago de la factura */
  totalPaid: Scalars['Float']['output'];
};

/** Datos de resumen del pedido */
export type SummaryOrder = {
  __typename?: 'SummaryOrder';
  /** Cambio del pedido */
  change: Scalars['Float']['output'];
  /** Descuento del pedido */
  discount: Scalars['Float']['output'];
  /** Subtotal del pedido */
  subtotal: Scalars['Float']['output'];
  /** Impuestos del pedido */
  tax: Scalars['Float']['output'];
  /** Total del pedido */
  total: Scalars['Float']['output'];
  /** Total pago del pedido */
  totalPaid: Scalars['Float']['output'];
};

/** Resumen de las ordenes */
export type SummaryOrderClose = {
  __typename?: 'SummaryOrderClose';
  /** Cantidad de las ordenes canceladas */
  quantityCancel: Scalars['Float']['output'];
  /** Cantidad de las ordenes finalizadas */
  quantityClosed: Scalars['Float']['output'];
  /** Cantidad de los cupones redimidos */
  quantityCoupons: Scalars['Float']['output'];
  /** Cantidad de las ordenes abiertas */
  quantityOpen: Scalars['Float']['output'];
  /** Valor de las ordenes finalizadas */
  value: Scalars['Float']['output'];
  /** Valor de los cupones redimidos */
  valueCoupons: Scalars['Float']['output'];
};

/** Resumen pagos del cierre */
export type SummaryPayment = {
  __typename?: 'SummaryPayment';
  /** Medios de pago */
  payment: Payment;
  /** Cantidad */
  quantity: Scalars['Float']['output'];
  /** Total pagado */
  total: Scalars['Float']['output'];
};

/** Resumen de ventas */
export type SummarySalesReport = {
  __typename?: 'SummarySalesReport';
  /** CMV */
  cmv: Scalars['Float']['output'];
  /** Margen de ventas en porcentaje */
  margin: Scalars['Float']['output'];
  /** Cantidad de ventas */
  quantity: Scalars['Float']['output'];
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
};

/** Resumen de ventas */
export type SummarySalesReportInvoicing = {
  __typename?: 'SummarySalesReportInvoicing';
  /** Fecha de cierre de la venta */
  closeDate: Scalars['DateTime']['output'];
  /** CMV */
  cmv: Scalars['Float']['output'];
  /** Identificador de la venta */
  idOrder: Scalars['String']['output'];
  /** Margen de ventas en porcentaje */
  margin: Scalars['Float']['output'];
  /** Productos de la venta */
  products: Array<ProductDetail>;
  /** Cantidad de ventas */
  quantity: Scalars['Float']['output'];
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
};

/** Cantidad de ventas */
export type SummarySalesReportQuantity = {
  __typename?: 'SummarySalesReportQuantity';
  /** Cantidad de ventas */
  quantity: Scalars['Float']['output'];
};

export enum TypeCreditHistory {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Frozen = 'FROZEN',
  Thawed = 'THAWED'
}

export enum TypeDocument {
  Order = 'ORDER',
  Receipt = 'RECEIPT'
}

export enum TypeErrorCash {
  Missing = 'MISSING',
  Surplus = 'SURPLUS'
}

/** Tipo de responsabilidad empresarial */
export type TypeLiability = {
  __typename?: 'TypeLiability';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Código de la dian */
  codeDian: Scalars['Float']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Responsabilidad por defecto */
  isDefault: Scalars['Boolean']['output'];
  /** Nombre del tipo de la responsabilidad */
  name: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea o modifica */
  user: User;
};

export enum TypePayment {
  Bank = 'BANK',
  Bonus = 'BONUS',
  Cash = 'CASH',
  Credit = 'CREDIT',
  Dataphone = 'DATAPHONE'
}

/** Tipo de régimen */
export type TypeRegime = {
  __typename?: 'TypeRegime';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Código de la dian */
  codeDian: Scalars['Float']['output'];
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Régimen por defecto */
  isDefault: Scalars['Boolean']['output'];
  /** Nombre del tipo del régimen */
  name: Scalars['String']['output'];
  /** Fecha de actualización */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que crea o modifica */
  user: User;
};

export enum TypesRule {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  Greaterthanorequal = 'GREATERTHANOREQUAL',
  Less = 'LESS',
  Lessthanorequal = 'LESSTHANOREQUAL'
}

/** Datos para actualizar la ciudad */
export type UpadteCityInput = {
  /** Código DANE */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Código DIAN */
  codeDian?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre del país */
  countryName?: InputMaybe<Scalars['String']['input']>;
  /** Prefijo del país */
  countryPrefix?: InputMaybe<Scalars['String']['input']>;
  /** Código postal de la ciudad por defecto */
  defaultPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la ciudad */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del departamento */
  state?: InputMaybe<Scalars['String']['input']>;
  /** Tipo de zona */
  zone?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Datos para actualizar el atributo */
export type UpdateAttribInput = {
  /** Se encuentra activa el atributo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Valor asignado al atributo */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar la autorización */
export type UpdateAuthorizationInput = {
  /** Comprobante contable de la autorización DIAN */
  accountingReceipt?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de finalización de la resolución */
  dateFinal?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fecha de inicio de la resolución */
  dateInitial?: InputMaybe<Scalars['DateTime']['input']>;
  /** Es electrónica */
  isElectronic?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fecha de cierre */
  lastDateInvoicing?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ultimo número usado para facturar */
  lastNumber?: InputMaybe<Scalars['Float']['input']>;
  /** Valor mínimo para facturar electrónicamente */
  minValue?: InputMaybe<Scalars['Float']['input']>;
  /** Numero final de la resolución */
  numberFinal?: InputMaybe<Scalars['Float']['input']>;
  /** Numero inicial de la resolución */
  numberInitial?: InputMaybe<Scalars['Float']['input']>;
  /** Prefijo de facturación */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /** Si es una habilitación true */
  qualification?: InputMaybe<Scalars['Boolean']['input']>;
  /** resolución de facturacion */
  resolution?: InputMaybe<Scalars['String']['input']>;
  /** Id de la tienda */
  shopId?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar caja */
export type UpdateBoxInput = {
  /** Cantidad de la base para la caja */
  base?: InputMaybe<Scalars['Float']['input']>;
  /** Es caja principal de la compañía */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre de la caja */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar marcas */
export type UpdateBrandInput = {
  /** Se encuentra activa la marca */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Valor asignado a la marca */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para la actualizacion de un transportador */
export type UpdateCarrierInput = {
  /** Descripción del transportador */
  convertion?: InputMaybe<Scalars['Float']['input']>;
  /** Descripción del transportador */
  defaultPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Detalles del transportista */
  details?: InputMaybe<Array<DetailsUpdate>>;
  /** Envio gratis */
  free?: InputMaybe<Scalars['Boolean']['input']>;
  /** Requiere guia */
  guideRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificador de las imagenes del transportista */
  images?: InputMaybe<Scalars['String']['input']>;
  /** Descripción del transportador */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Descripción del transportador */
  module?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del transportador */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tiene costo de envio */
  shippingCharge?: InputMaybe<Scalars['Boolean']['input']>;
  /** Estado del transportador */
  state?: InputMaybe<Scalars['Boolean']['input']>;
  /** Descripción del transportador */
  time?: InputMaybe<Scalars['String']['input']>;
  /** Tipo de calculo */
  tipeCalcule?: InputMaybe<Scalars['String']['input']>;
  /** zonas del transportista */
  zone?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Datos para actualizar la categoría */
export type UpdateCategoryInput = {
  /** Alto del producto */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Nivel de la categoría */
  level: Scalars['Float']['input'];
  /** Largo del producto */
  long?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la categoría */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la categoría padre  */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** Volumen del producto */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Peso del producto */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Ancho del producto */
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para actualizar el color */
export type UpdateColorInput = {
  /** Estado asignado al color */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Url asignado al color */
  html?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la imagen del color */
  imageId?: InputMaybe<Scalars['String']['input']>;
  /** Nombre asignado al color */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Nombre interno asignado al color */
  name_internal?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar la compañía */
export type UpdateCompanyInput = {
  /** Dirección de la empresa */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la ciudad */
  cityId?: InputMaybe<Scalars['String']['input']>;
  /** Documento de la empresa */
  document?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de documento */
  documentTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Email de la empresa */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Email de la empresa */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de logo para la empresa */
  logoId?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la empresa */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Teléfono de la empresa */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de responsabilidad contable */
  typeLiabilityId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de régimen contable */
  typeRegimeId?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar el cupón */
export type UpdateCouponInput = {
  /** Estado del cupón */
  status?: InputMaybe<StatusCoupon>;
};

/** Datos para actualizar un crédito */
export type UpdateCreditInput = {
  /** Monto aprobado para el crédito */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** Detalles para agregar al crédito */
  detailAddCredit?: InputMaybe<DetailAddCredit>;
  /** Estado del crédito */
  status?: InputMaybe<StatusCredit>;
};

/** Datos para actualizar un cliente */
export type UpdateCustomerInput = {
  /** Cliente activo */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Direcciones del cliente */
  addresses?: InputMaybe<Array<AddressInput>>;
  /** Fecha de nacimiento */
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  /** Identificación de tipo de cliente */
  customerTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Número de documento */
  document?: InputMaybe<Scalars['String']['input']>;
  /** Identificación del tipo de documento */
  documentTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Dígito de verificación */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Correo del cliente */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Nombres del cliente */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Primera vez que compra */
  firstPurchase?: InputMaybe<Scalars['Boolean']['input']>;
  /** Es el cliente por defecto, solo debe existir uno */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Si es persona jurídica */
  isLegalPerson?: InputMaybe<Scalars['Boolean']['input']>;
  /** El teléfono tiene whatsapp */
  isWhatsapp?: InputMaybe<Scalars['Boolean']['input']>;
  /** Apellidos del cliente */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Número de teléfono */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de responsabilidad constable */
  typeLiabilityId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de régimen contable */
  typeRegimeId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha como mayorista */
  wholesalerDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Datos para actualizar el descuento */
export type UpdateDiscountRuleInput = {
  /** Estado del descuento */
  active: Scalars['Boolean']['input'];
  /** Fecha final para aplicar el descuento */
  dateFinal?: InputMaybe<Scalars['String']['input']>;
  /** Fecha inicial para aplicar el descuento */
  dateInitial?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del descuento */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Porcentaje del descuento */
  percent?: InputMaybe<Scalars['Float']['input']>;
  /** Reglas a aplicar */
  rules?: InputMaybe<Array<RuleInput>>;
  /** Valor del descuento */
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para actualizar el egreso */
export type UpdateExpenseInput = {
  /** Estado del egreso */
  status?: InputMaybe<StatusExpense>;
};

/** Datos para actualizar el pedido */
export type UpdateOrderInput = {
  /** Dirección de envío para el pedido */
  address?: InputMaybe<AddressInputOrder>;
  /** Identificación de la transportadora */
  conveyorId?: InputMaybe<Scalars['String']['input']>;
  /** Identificación del cliente */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Estado del pedido */
  status?: InputMaybe<StatusOrder>;
  /** Estado que se aplicará al pedid web */
  statusWeb?: InputMaybe<StatusWeb>;
};

/** Datos para actualizar método de pago */
export type UpdatePaymentInput = {
  /** Estado del método de pago */
  active: Scalars['Boolean']['input'];
  /** Código DIAN */
  codeDian?: InputMaybe<Scalars['Float']['input']>;
  /** Color en html que representa el método de pago  */
  color?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la imagen del método de pago */
  logoId?: InputMaybe<Scalars['String']['input']>;
  /** Mensaje para el medio de pago */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Nombre del método de pago */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de tiendas que usan el método de pago */
  shopIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Tipo de método de pago */
  type?: InputMaybe<TypePayment>;
};

/** Datos para actualizar un punto de venta */
export type UpdatePointOfSaleInput = {
  /** Identificador de la autorización electrónica de facturación */
  authorizationElectronicId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la autorización de facturación */
  authorizationId?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de cierre del punto de venta */
  closeDate?: InputMaybe<Scalars['String']['input']>;
  /** Cerrando punto de venta */
  closing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Facturar en línea */
  invoice?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Datos para actualizar el producto */
export type UpdateProductInput = {
  /** Código de barras del producto */
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del color */
  colorId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de las imagenes del producto */
  imagesId?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identificador de la talla */
  sizeId?: InputMaybe<Scalars['String']['input']>;
  /** Estado del producto */
  status?: InputMaybe<StatusProduct>;
};

/** Datos para actualizar el recibo */
export type UpdateReceiptInput = {
  /** Estado del recibo */
  status?: InputMaybe<StatusReceipt>;
};

/** Datos para actualizar referencia */
export type UpdateReferenceInput = {
  /** Estado de la referencia */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Identificador de los atributos de la referencia */
  attribIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Identificador de la marca de la referencia */
  brandId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la categoría level 1 de la referencia */
  categoryLevel1Id?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la categoría level 2 de la referencia */
  categoryLevel2Id?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la categoría level 3 de la referencia */
  categoryLevel3Id?: InputMaybe<Scalars['String']['input']>;
  /** Se puede cambiar de la referencia */
  changeable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Costo de la referencia */
  cost?: InputMaybe<Scalars['Float']['input']>;
  /** Descripción de la referencia */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Alto del producto */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Largo del producto */
  long?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la referencia */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Precio de la referencia */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Volumen del producto */
  volume?: InputMaybe<Scalars['Float']['input']>;
  /** Peso del producto */
  weight?: InputMaybe<Scalars['Float']['input']>;
  /** Ancho del producto */
  width?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para la creación de una zona */
export type UpdateRegionInput = {
  /** Nombre de la ciudad */
  city: Scalars['String']['input'];
  /** Descripción de la zona */
  country?: InputMaybe<Scalars['String']['input']>;
  /** departamento de la region */
  dpto?: InputMaybe<Scalars['String']['input']>;
  /** Descripción de la zona */
  idZone?: InputMaybe<Scalars['String']['input']>;
  /** Identifica el estado de la zona */
  state?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Datos para actualizar una regla de devolución */
export type UpdateReturnOrderRuleInput = {
  /** Si la regla se encuentra activa */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Días máximos para generar la devolución */
  limitDays?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la regla */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Reglas a aplicar */
  rules?: InputMaybe<Array<RuleInput>>;
};

/** Datos para actualizar el rol */
export type UpdateRoleInput = {
  /** Estado del rol */
  active: Scalars['Boolean']['input'];
  /** Puede el usuario cambiar su bodega */
  changeWarehouse: Scalars['Boolean']['input'];
  /** Nombre del rol */
  name: Scalars['String']['input'];
  /** Identificadores de los permisos seleccionados */
  permissionIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Orden por gerarquía */
  rank?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para actualizar la tienda */
export type UpdateShopInput = {
  /** Dirección de la tienda */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Razón social de la tienda */
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la ciudad */
  cityId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la empresa para la tienda */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Nombre comercial de la tienda */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la bodega predeterminada para la tienda */
  defaultWarehouseId?: InputMaybe<Scalars['String']['input']>;
  /** Documento de la tienda */
  document?: InputMaybe<Scalars['String']['input']>;
  /** Documento nit de la tienda */
  documentNit?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de documento */
  documentTypeId?: InputMaybe<Scalars['String']['input']>;
  /** Documento de la tienda */
  dv?: InputMaybe<Scalars['Float']['input']>;
  /** Email de la tienda */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Meta asiganda a la tienda */
  goal?: InputMaybe<Scalars['Float']['input']>;
  /** Es centro de distribución */
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  /** Embed de la tienda */
  maps?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la tienda */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Teléfono de la tienda */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Mostrar en páginas web */
  showWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Estado de la tienda */
  status?: InputMaybe<StatusShop>;
  /** Identificador del tipo de responsabilidad contable */
  typeLiabilityId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del tipo de régimen contable */
  typeRegimeId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la bodega de centro de distribución asignado */
  warehouseMainId?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar la talla */
export type UpdateSizeInput = {
  /** Se encuentra activa la talla */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Valor asignado a la talla */
  value?: InputMaybe<Scalars['String']['input']>;
  /** Posición del ordenamiento */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

/** Datos para actualizar el ajuste de productos */
export type UpdateStockAdjustmentInput = {
  /** Productos del ajuste */
  details?: InputMaybe<Array<DetailStockAdjustmentInput>>;
  /** Observación del ajuste */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado del ajuste */
  status?: InputMaybe<StatusStockAdjustment>;
};

/** Datos para actualizar la entrada de productos */
export type UpdateStockInputInput = {
  /** Productos de la entrada */
  details?: InputMaybe<Array<DetailStockInputInput>>;
  /** Observación de la entrada */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la entrada */
  status?: InputMaybe<StatusStockInput>;
};

/** Datos para actualizar la salida de productos */
export type UpdateStockOutputInput = {
  /** Productos de la salida */
  details?: InputMaybe<Array<DetailStockOutputInput>>;
  /** Observación de la salida */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la salida */
  status?: InputMaybe<StatusStockOutput>;
};

/** Datos para actualizar la solicitud de productos */
export type UpdateStockRequestInput = {
  /** Productos de la solicitud */
  details?: InputMaybe<Array<DetailStockRequestInput>>;
  /** Observación de la solicitud */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la solicitud */
  status?: InputMaybe<StatusStockRequest>;
};

/** Datos para actualizar el traslado de productos */
export type UpdateStockTransferInput = {
  /** Productos del traslado */
  details?: InputMaybe<Array<DetailStockTransferInput>>;
  /** Observación general */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Observación del que recibe el traslado */
  observationDestination?: InputMaybe<Scalars['String']['input']>;
  /** Observación del que envía el traslado */
  observationOrigin?: InputMaybe<Scalars['String']['input']>;
  /** Solicitudes usadas */
  requests?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Estado del traslado */
  status?: InputMaybe<StatusStockTransfer>;
};

/** Datos para actualizar el usuario */
export type UpdateUserInput = {
  /** Compañía a la que pertecene el usuario */
  companyId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del cliente asignado al usuario */
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** Identifica si el usuario es web */
  isWeb?: InputMaybe<Scalars['Boolean']['input']>;
  /** Nombre del usuario */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Contraseña de usuario */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del punto de venta asignado al usuario */
  pointOfSaleId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador del rol del usuario */
  roleId?: InputMaybe<Scalars['String']['input']>;
  /** Identificador de la tienda asignada al usuario */
  shopId?: InputMaybe<Scalars['String']['input']>;
  /** Estado del usuario */
  status?: InputMaybe<StatusUser>;
  /** Usuario registrado */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar  */
export type UpdateWarehouseInput = {
  /** Estado de la bodega */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Inventario máximo de productos */
  max?: InputMaybe<Scalars['Float']['input']>;
  /** Inventario mínimo de productos */
  min?: InputMaybe<Scalars['Float']['input']>;
  /** Nombre de la bodega */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Datos para actualizar el rol */
export type UpdateZoneInput = {
  /** Descripción de la zona */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Nombre de la zona */
  name: Scalars['String']['input'];
  /** Identifica el estado de la zona */
  state?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Enlaces de diferences tipos */
export type Urls = {
  __typename?: 'Urls';
  /** Enlaces de tipo jpeg */
  jpeg?: Maybe<ImageTypes>;
  /** Enlaces de tipo webp */
  original?: Maybe<Scalars['String']['output']>;
  /** Enlaces de tipo webp */
  webp?: Maybe<ImageTypes>;
};

/** Usuario que manipula los datos de la aplicación */
export type User = {
  __typename?: 'User';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Compañía de acceso para el usuario */
  company: Company;
  /** Nombre de usuario */
  createdAt: Scalars['DateTime']['output'];
  /** Cliente asignado */
  customer?: Maybe<Customer>;
  /** Usado para diferenciar la creación de los usuarios */
  isWeb: Scalars['Boolean']['output'];
  /** Nombre de para mostrar del usuario */
  name: Scalars['String']['output'];
  /** Contraseña de usuario */
  password?: Maybe<Scalars['String']['output']>;
  /** Punto de venta asignado al usuario */
  pointOfSale?: Maybe<PointOfSale>;
  /** Rol que ocupa el usuario */
  role: Role;
  /** Tienda a la que se encuentra asignado el usuario */
  shop: Shop;
  /** Estado del usuario */
  status: StatusUser;
  /** Nombre de usuario */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó el usuario */
  user?: Maybe<User>;
  /** Cuenta de usuario */
  username: Scalars['String']['output'];
};

export enum VerifiedClose {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

/** Datos para verificar los cierres z */
export type VerifiedCloseZInput = {
  /** Identificador del cierre que se va a verificar */
  closeZId: Scalars['String']['input'];
  /** Estado de verificado del cierre */
  verifiedStatus: VerifiedClose;
};

/** Datos para verificar los errores de pedido */
export type VerifiedErrorsCashInput = {
  /** Identificador del error de efectivo */
  errorCashId: Scalars['String']['input'];
  /** Motivo por el cual se verificar el error */
  reason: Scalars['String']['input'];
};

/** Datos para verificar los productos */
export type VerifiedProductTransferErrorInput = {
  /** Identificador del producto */
  productId: Scalars['String']['input'];
  /** Motivo por el cual se verifica el producto */
  reason: Scalars['String']['input'];
  /** Proceso a realizar, si se envia al origen true, si se envia al destino false */
  returnInventory: Scalars['Boolean']['input'];
  /** Identificador del traslado en error */
  stockTransferErrorId: Scalars['String']['input'];
};

/** Modelo de la bodega */
export type Warehouse = {
  __typename?: 'Warehouse';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Estado de la bodega */
  active: Scalars['Boolean']['output'];
  /** Empresa a la que pertenece la bodega */
  company: Company;
  /** Fecha de creación */
  createdAt: Scalars['DateTime']['output'];
  /** Máxima cantidad de productos en la bodega */
  max: Scalars['Float']['output'];
  /** Mínima cantidad de productos en la bodega */
  min: Scalars['Float']['output'];
  /** Nombre de la bodega */
  name: Scalars['String']['output'];
  /** Fecha de creación */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó el usuario */
  user: User;
};

/** Zona de envios */
export type Zone = {
  __typename?: 'Zone';
  /** Identificador de mongo */
  _id: Scalars['String']['output'];
  /** Fecha creada de la zona */
  createdAt: Scalars['DateTime']['output'];
  /** Descripción de la zona */
  description: Scalars['String']['output'];
  /** Nombre de las zonas */
  name: Scalars['String']['output'];
  /** Estado de la zona */
  state: Scalars['Boolean']['output'];
  /** Fecha de la actualizacion de la zona */
  updatedAt: Scalars['DateTime']['output'];
  /** Usuario que creó o modificó la zona */
  user: User;
};

/** Zone value */
export type ZonePrice = {
  __typename?: 'ZonePrice';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export enum ZoneType {
  Inshop = 'INSHOP',
  Local = 'LOCAL',
  Metropolitan = 'METROPOLITAN',
  National = 'NATIONAL',
  Special = 'SPECIAL',
  Urban = 'URBAN'
}

/** Zone value */
export type ZoneValue = {
  __typename?: 'ZoneValue';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** Zone value */
export type ZoneValues = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Zone value */
export type ZoneValuesUpdate = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

/** Respuesta para obtener la orden */
export type Conveyors = {
  __typename?: 'conveyors';
  /** Información de la transportadora */
  conveyor: Conveyor;
  /** Valor del envio */
  value: Scalars['Float']['output'];
};

/** Resumen de ventas */
export type SalesReportQuantity = {
  __typename?: 'salesReportQuantity';
  /** CMV */
  cmv: Scalars['Float']['output'];
  /** Margen de ventas en porcentaje */
  margin: Scalars['Float']['output'];
  /** Valor total de las ventas */
  total: Scalars['Float']['output'];
};

/** Reportde de ventas tipo de cliente */
export type SalesReports = {
  __typename?: 'salesReports';
  /** Resumen de ventas */
  salesReport?: Maybe<SalesReportQuantity>;
};

/** Reportde de ventas tipo de cliente */
export type SummaryReportSales = {
  __typename?: 'summaryReportSales';
  /** Resumen de ventas */
  summary?: Maybe<SummarySalesReportQuantity>;
};
