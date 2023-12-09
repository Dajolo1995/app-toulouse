// Menu.tsx or Menu.ts
import React, { useState } from "react";
import { Row, Col, Button, Badge } from "../../../utils/Desing";
import WhiteLogo from "../../../components/image/WhiteLogo";
import MenuItemOption from "./MenuItemOption";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "../../../utils/Icon";
import SearchItemMuenu from "./SearchItemMuenu";

const MenuMain: React.FC = () => {
  const [stateOpenMenu, setStateOpenMenu] = useState(false);
  const [stateSearch, setStateSearch] = useState(false);

  const openMenu = () => {
    setStateOpenMenu(true);
  };

  const onClose = () => {
    setStateOpenMenu(false);
  };

  const openSearch = () => {
    setStateSearch(true);
  };

  const closeSearch = () => {
    setStateSearch(false);
  };

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Col
          xs={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={openMenu}
            icon={
              <MenuOutlined style={{ color: "#fff", fontSize: "1.5rem" }} />
            }
            type="link"
          ></Button>
        </Col>
        <Col
          xs={18}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <WhiteLogo width={130} />
        </Col>
        <Col xs={3}>
          <Button
            onClick={openSearch}
            type="link"
            icon={
              <SearchOutlined style={{ color: "#fff", fontSize: "1.5rem" }} />
            }
            style={{ marginRight: "15px" }}
          ></Button>

          <Badge count={5} size="small" style={{ background: "#DC9F95" }}>
            <Button
              onClick={openSearch}
              type="link"
              icon={
                <ShoppingCartOutlined
                  style={{ color: "#fff", fontSize: "1.5rem" }}
                />
              }
            ></Button>
          </Badge>
        </Col>
      </Row>

      <MenuItemOption open={stateOpenMenu} onClose={onClose} placement="left" />

      <SearchItemMuenu
        open={stateSearch}
        onClose={closeSearch}
        placement="right"
      />
    </>
  );
};

export default MenuMain;
