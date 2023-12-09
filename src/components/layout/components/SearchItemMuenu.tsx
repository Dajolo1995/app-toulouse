import React from "react";
import DrawerLayout from "../../../components/drawer/DrawerLayout";
import { Input, Row, Col } from "../../../utils/Desing";

const { Search } = Input;

interface props {
  open: boolean;
  onClose: () => void;
  placement: "left" | "right" | "top" | "bottom";
}

const SearchItemMuenu: React.FC<props> = ({ open, onClose, placement }) => {
  return (
    <DrawerLayout
      open={open}
      onClose={onClose}
      placement={placement}
      size={250}
      title="Filtrar por"
      content={
        <Row
          gutter={[8, 8]}
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={24}>
            <Search placeholder="Buscar..." />
          </Col>
        </Row>
      }
    />
  );
};

export default SearchItemMuenu;
