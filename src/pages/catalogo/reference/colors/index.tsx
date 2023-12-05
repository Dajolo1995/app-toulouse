/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {/*  Avatar */ Button, Col, Row } from "../../../../utils/Desing";

import { Color, Product } from "@/graphql/types.graphql";

import { styles, sx } from "./styles";
import { CDN_URL, WAREHOUSE_ID } from "@/ViteConfg";
export type Props = {
  products: Partial<Product[]> | undefined;
  colorSelected: Partial<Color>;
  setColorSelected: (color: Partial<Color>) => void;
};

//const cdn = CDN_URL;
const warehouseId = WAREHOUSE_ID;

const Colors = ({ products, colorSelected, setColorSelected }: Props) => {
  const colors: Partial<Color[]> = [];

  products?.forEach((product) => {
    const colorFind = colors?.find(
      (color) => color?._id === product?.color._id
    );

    if (!colorFind) {
      const stock = product?.stock?.find(
        (item) => item.warehouse._id === warehouseId
      );

      if (stock && stock.quantity > 0) {
        colors.push(product?.color);
      }
    }
  });

  let color: Color | undefined;
  const colorWithStock = () => {
    if (products) {
      for (let i = 0; i < products?.length; i++) {
        let stock = products[i]?.stock?.find(
          (item) => item.warehouse._id === warehouseId
        );
        if (stock && stock?.quantity > 0) {
          color = products[i]?.color;
          break;
        }
      }
    }
    return color;
  };

  useEffect(() => {
    if (products && products?.length > 0) {
      setColorSelected(colorWithStock() || {});
    }
  }, [products]);

  return (
    <Row  style={sx.grid}>
      {colors?.map((color, key) => (
        <Col  md={4} xs={4} key={key}>
          <Button
            style={
              colorSelected?._id === color?._id
                ? styles.buttonColorSelected
                : styles.buttonColor
            }
            onClick={() => setColorSelected(color || {})}
          >
            {/* <Avatar
              sx={{
                ...sx.circle,
                backgroundColor: color?.html,
                color: color?.html,
              }}
              src={`${cdn}/${color?.image?.urls?.webp?.small}`}
            /> */}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Colors;
