import React, { ReactNode, useEffect } from "react";
import { Layout } from "../../utils/Desing";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetCurrentUser } from "../../hooks/user";

const { Header, Content } = Layout;

interface LayoutAppProps {
  children: ReactNode;
}

const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  const [getCurrent, { data }] = useGetCurrentUser();
  const params = useLocation();
  const navigate = useNavigate();

  const isLogin = !!data?.currentUser?._id;

  const fetchData = async () => {
    await getCurrent();

    if (isLogin) {
      console.log(isLogin);
      if (params.pathname === "/auth/login") {
        navigate("/catalogo");
      }
    }
  };

  useEffect(() => {
    fetchData();

    if (isLogin) {
      console.log(isLogin);
      if (params.pathname === "/auth/login") {
        navigate("/catalogo");
      }
    }
  }, [data]); // Dependencias vacías para ejecutar una vez al montar

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
      <Content className="site-layout">{children}</Content>
    </Layout>
  );
};

export default LayoutApp;
