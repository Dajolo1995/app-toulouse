// LayoutApp.tsx
import React, { ReactNode } from "react";
import { Layout } from "../../utils/Desing";
import MenuMain from "./components/Menu"; // Correct import

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
          height: "80px",
          // borderEndStartRadius: "30px",
          // borderEndEndRadius: "30px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
      >
        <MenuMain />
      </Header>
      <Content style={{background:"#fff"}} >{children}</Content>
    </Layout>
  );
};

export default LayoutApp;
