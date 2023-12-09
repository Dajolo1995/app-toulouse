import React from "react";
import DrawerLayout from "../../../components/drawer/DrawerLayout";
import { Link } from "react-router-dom";
import Router from "../../../router/Router";
import { Button, Row, Col } from "../../../utils/Desing";

interface props {
  open: boolean;
  onClose: () => void;
  placement: "top" | "right" | "bottom" | "left";
}

const MenuItemOption: React.FC<props> = ({ open, onClose, placement }) => {
  console.log(Router());

  return (
    <DrawerLayout
      open={open}
      onClose={onClose}
      placement={placement}
      size={240}
      content={
        <div style={{ height: "100%", margin: 0, }}>
          <Row gutter={[8, 8]}>
            {Router().map((item) => (
              <Col xs={24}>
                {item.menu === true && item.static === false ? (
                  <Button
                    type="link"
                    style={{ color: "#989898" }}
                  >
                    <Link to={item.path} style={{ fontSize: "1.2rem", fontWeight:"600" }}>
                      {item.name}
                    </Link>
                  </Button>
                ) : null}
              </Col>
            ))}
          </Row>

          <Row
            gutter={[8, 8]}
            style={{ marginTop: "auto", height: "80%", alignItems: "end" }}
          >
            <Col xs={24} style={{ display: "grid" }}>
              {Router().map((item) => (
                <Col xs={24}>
                  {item.menu === true && item.static === true ? (
                    <Button
                      type="link"
                      style={{ color: "#dc9f95"}}
                    >
                      <Link to={item.path} style={{ fontSize: "1rem", fontWeight:"600" }}>
                        {item.name}
                      </Link>
                    </Button>
                  ) : null}
                </Col>
              ))}
            </Col>
          </Row>
        </div>
      }
    />
  );
};

export default MenuItemOption;
