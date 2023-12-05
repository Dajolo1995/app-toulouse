import React from 'react'
import {
    Typography,
    Layout,
    Row,
    Col,
    Card,
    Divider,
    Button,
} from "../../../utils/Desing";
import { ShoppingCartOutlined,} from "@ant-design/icons";
import {
    ActionProductsOrder,
    Color,
    Product,
    ReferenceData,
    Size,
    Stock,
} from "../../../graphql/types.graphql";
import { getOrderId } from '../../../utils/auth';
import { useAddProduct, useGetOrderId } from "../../../hooks/order";
import { useEffect, useState } from 'react';
import { sx } from './styles';
import { useNavigate } from 'react-router-dom';
import { SHOP_ID, WAREHOUSE_ID,} from '../../../ViteConfg';
import { Slider } from 'antd';
//import numeral from "numeral";
type Props = {
    reference?: Partial<ReferenceData>;
    titlePrice: string;
};

const warehouseId = WAREHOUSE_ID;
const Reference = ({ reference, titlePrice }: Props) => {

    const [colorSelected, setColorSelected] = useState<Partial<Color>>({});
    const [sizeSelected, setSizeSelected] = useState<Partial<Size>>({});
    const [value, setValue] = useState<number | "">(1);
    const [product, setProduct] = useState<Partial<Product>>({});
    const [message, setMessage] = useState<string | null>(null);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [stock, setStock] = useState<Partial<Stock>>({});
    const [stateOpenModal, setStateOpenModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [icon, setIcon] = useState<React.ReactNode | null>(null);

    const [addProducts] = useAddProduct();
    const router = useNavigate();
    const [getOrder, { data }] = useGetOrderId();

    const showMessageInofrmation = (msg?: string, icon?: React.ReactNode) => {
        setMessage(msg || "");
        setShowMessage(true);
        setIcon(icon);
      };
    
      /**
       * @description gestion de productos, agrega o actualiza
       * @param action tipo de accion para el producto
       */
      const editProduct = async (action: ActionProductsOrder) => {
        try {
          const orderId = getOrderId();
          if (orderId) {
            const response = await addProducts({
              variables: {
                input: {
                  details: [
                    {
                      action,
                      productId: product?._id?.toString() || "",
                      quantity: value || 1,
                    },
                  ],
                  isWholesaler: true,
                  orderId,
                },
              },
            });
    
            if (response?.data?.addProductsOrder) {
              if (action === ActionProductsOrder.Create) {
                setShowSuccessModal(true);
              } else {
                showMessageInofrmation(`Producto actualizado correctamente`);
              }
            }
          }
        } catch (error: any) {
          showMessageInofrmation(`Error al agregar producto ${error?.message}`, 
        );
        }
      };
    
      /**
       * @description acción del boton agregar
       */
      const onClick = () => {
        const orderId = getOrderId();
        if (!orderId) {
          router(`/auth/login?redirect=/catalogo`);
        } else {
          const detail = data?.orderId?.order?.details?.find(
            (item) => item.product._id === product._id
          );
          if (detail) {
            editProduct(ActionProductsOrder.Update);
          } else {
            editProduct(ActionProductsOrder.Create);
          }
        }
      };
    
      useEffect(() => {
        setValue(1);
        setProduct(
          reference?.products?.find(
            ({ color, size }) =>
              color?._id === colorSelected._id && size._id === sizeSelected._id
          ) || {}
        );
      }, [colorSelected, sizeSelected]);
    
      useEffect(() => {
        console.log("data", data);
        if (data?.orderId) {
          const detail = data?.orderId?.order?.details?.find(
            (item) => item.product._id === product._id
          );
          if (detail) {
            setValue(detail.quantity);
          } else {
            setValue(1);
          }
        }
    
        setStock(
          product?.stock?.find((stock) => stock?.warehouse?._id === warehouseId) ||
          {}
        );
      }, [data, product]);
    
      useEffect(() => {
        const orderId = getOrderId();
        if (orderId)
          getOrder({
            variables: {
              id: orderId,
            },
          });
      }, []);
    
       const openModal = () => {
        setStateOpenModal(true);
      };
    
      const closeModal = () => {
        setStateOpenModal(false);
        setShowSuccessModal(false);
        
      }
    
      const onCart = () => {
        router("/auth/login");
      }; 
return (
  <>
       <Card style={sx.container}>
        <Card style={sx.card}>
          <Row >
            <Col>
              <Typography >{reference?.description}</Typography>
              <Typography >Ref.: {reference?.name}</Typography>
              <div style={{ cursor: "pointer" }} onClick={openModal}>
                <Typography.Text style={{ color: "#000000" }}>
                  Ver más
                </Typography.Text>
              </div>
            </Col>
            <Col  xs={5}>
              <Typography.Text>
                Color: {colorSelected?.name}
              </Typography.Text>
              <Divider />
              {/* <Colors
                products={reference?.products}
                colorSelected={colorSelected}
                setColorSelected={setColorSelected}
              /> */}
              <Typography.Text>
                Talla: {sizeSelected?.value}
              </Typography.Text>
              <Divider />
              {/* <Sizes
                products={reference?.products}
                colorSelected={colorSelected}
                sizeSelected={sizeSelected}
                setSizeSelected={setSizeSelected}
              /> */}
              <Typography.Text >Precio</Typography.Text>
              <Divider/>
              <Typography.Text >Detal</Typography.Text>
              <Typography.Text>
                {reference?.price}
              </Typography.Text>
              <Typography.Text>{titlePrice}</Typography.Text>
              <Typography.Text>
                {reference?.discountPrice}
              </Typography.Text>
            </Col>
          </Row>
          <Divider style={sx.divider} />
          {!(stock && (stock?.quantity || 0) <= 10 && stock?.quantity !== 0) ? (
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 37,
                marginBottom: -39,
              }}
            >
              <Col  xs={3}>
                <Typography.Text>Cantidad</Typography.Text>
              </Col>
              <Col  xs={5}>
                {/* <Quantity
                  min={stock?.quantity === 0 ? 0 : 1}
                  max={stock?.quantity || 0}
                  value={stock?.quantity === 0 ? 0 : value}
                  setValue={setValue}
                  balance={1}
                  formatValue={true}
                /> */}
              </Col>
              <Col xs={4}>
                <Button
                  style={sx.button}
                  onClick={onClick}
                >
                  Agregar
                </Button>
              </Col>
            </Row>
          ) : (
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={3}>
                <Typography.Text>Cantidad</Typography.Text>
              </Col>
              <Col  xs={5}>
                {/* <Quantity
                  min={stock?.quantity === 0 ? 0 : 1}
                  max={stock?.quantity || 0}
                  value={stock?.quantity === 0 ? 0 : value}
                  setValue={setValue}
                  balance={1}
                  formatValue={true}
                /> */}
              </Col>
              <Col  xs={4}>
                <Button
                  
                  style={sx.button}
                  onClick={onClick}
                >
                  Agregar
                </Button>
              </Col>
            </Row>
          )}
          {/* {stock && (stock?.quantity || 0) <= 10 && stock?.quantity !== 0 ? (
            <Alert severity="warning" style={{ marginTop: 20 }}>
              Quedan pocas unidades
            </Alert>
          ) : (
            <div style={{ marginTop: 70 }}> </div>
          )}
          {stock?.quantity === 0 && (
            <Alert severity="error" style={{ marginTop: 20 }}>
              No quedan unidades
            </Alert>
          )} */}
        </Card>
        {/* <AlertInformation
          open={showMessage}
          message={message || ""}
          onClose={() => setShowMessage(false)}
          time={2000}
          icon={icon}
        /> */}
      </Card>

      {/* <ModalImage
        stateOpenModal={stateOpenModal}
        closeModal={closeModal}
        product={product}
      /> */}

      {/* <ProductAddedModal 
      openModal={showSuccessModal} 
      closeModal={closeModal} 
      productDetails={product}
      referenceDetails={reference as Partial<ReferenceData>}
      onCart={onCart}
      value={value} 
      
      /> */} 
  </>
 );
};

export default Reference;
