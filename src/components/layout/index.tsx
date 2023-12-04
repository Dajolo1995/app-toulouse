import React, { ReactNode } from "react";
import { Layout } from "../../utils/Desing";

const { Header, Content } = Layout;

interface LayoutAppProps {
  children: ReactNode;
}

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#000000",
        }}
      ></Header>
      <Content
        className="site-layout"
        style={{ padding: "10px", background: "#fff", minHeight: "89vh" }}
      >
        {children}
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default LayoutApp;
