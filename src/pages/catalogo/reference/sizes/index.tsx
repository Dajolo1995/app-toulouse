import { Button, Row, Col } from "../../../../utils/Desing";
import { CSSProperties, useEffect } from "react";

import { Color, Product, Size } from "@/graphql/types.graphql";
import { WAREHOUSE_ID } from "@/ViteConfg";
import { styles, sx } from "./styles";

export type Props = {
  products?: Partial<Product[]> | undefined;
  colorSelected: Partial<Color>;
  sizeSelected: Partial<Size>;
  setSizeSelected: (size: Partial<Size>) => void;
};

const warehouseId = WAREHOUSE_ID;

const Sizes = ({
  products,
  colorSelected,
  sizeSelected,
  setSizeSelected,
}: Props) => {
  const sizes: Partial<Size[]> = [];

  products?.forEach((product) => {
    const sizeFind = sizes?.find((size) => size?._id === product?.size._id);

    if (!sizeFind) {
      sizes.push(product?.size);
    }
  });

  const isAvailableSize = (sizeId: String) => {
    const productSelected = products?.find(
      (product) =>
        product?.color._id === colorSelected?._id &&
        product?.size?._id === sizeId
    );

    const stock = productSelected?.stock?.find(
      (item) => item.warehouse._id === warehouseId
    );

    return !(productSelected?.stock && stock && stock?.quantity > 0);
  };

  let size: Size | undefined;
  const sizeWithStock = () => {
    if (products) {
      for (let i = 0; i < products?.length; i++) {
        let stock = products[i]?.stock?.find(
          (item) => item.warehouse._id === warehouseId
        );
        if (stock && stock?.quantity > 0) {
          size = products[i]?.size;
        }
      }
      return size;
    }
  };

  let size1: Size | undefined;
  const productsSelected = products?.filter(
    (product) => product?.color?.name === colorSelected.name
  );
  const sizeSelectedWithStock = () => {
    if (productsSelected) {
      for (let i = 0; i < productsSelected?.length; i++) {
        let stock = productsSelected[i]?.stock?.find(
          (item) => item.warehouse._id === warehouseId
        );
        if (stock && stock?.quantity > 0) {
          size1 = productsSelected[i]?.size;
        }
      }
      return size1;
    }
  };

  useEffect(() => {
    if (products && products?.length > 0) {
      let i = 0;
      let stock: any = products[i]?.stock?.find(
        (item) => item.warehouse._id === warehouseId
      );

      while (stock && stock?.quantity === 0) {
        i++;
        stock = products[i]?.stock;
      }
      setSizeSelected(sizeWithStock() || {});
    }
  }, [products]);

  useEffect(() => {
    if (productsSelected && productsSelected?.length > 0) {
      let i = 0;
      let stock: any = productsSelected[i]?.stock?.find(
        (item) => item.warehouse._id === warehouseId
      );

      while (stock && stock?.quantity === 0) {
        i++;
        stock = productsSelected[i]?.stock;
      }
      setSizeSelected(sizeSelectedWithStock() || {});
    }
  }, [colorSelected]);

  return (
    <Row style={sx.grid}>
      {sizes
        ?.filter((size) => !isAvailableSize(size?._id || ""))
        ?.map((size, key) => (
          <Col md={4} xs={4} key={key}>
            <Button
              // disabled={isAvailableSize(size?._id || "")}
              style={
                sizeSelected?._id === size?._id
                  ? sx.buttonSizeSelected
                  : sx.buttonSize
              }
              onClick={() => setSizeSelected(size || {})}
            >
              {/*isAvailableSize(size?._id || "") && (
                <span style={styles.line as CSSProperties} />
              )*/}
              <div style={styles.square}> {size?.value}</div>
            </Button>
          </Col>
        ))}
    </Row>
  );

};
  export default Sizes;