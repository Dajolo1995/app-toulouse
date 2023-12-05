import React, { useState } from "react";
import LayoutApp from "../../../components/layout";
import WhiteLogo from "../../../components/image/WhiteLogo";
import "../../../styles/stepOne.css";
import { Typography } from "../../../utils/Desing";
import FormLogin from "./components/FormLogin";
import { useGetCurrentUser, useLogin } from "../../../hooks/user";
import { useCreateOrder } from "../../../hooks/order";
import { SHOP_ID, REGISTER } from "../../../ViteConfg";
import { setOrderId } from "../../../utils/auth";
import { StatusOrder } from "../../../graphql/types.graphql"

const shopId = SHOP_ID;

const { Title, Text } = Typography;

const AuthLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // const [login] = useLogin();
  const [createOrder] = useCreateOrder();
  // const [getCurrent, { data }] = useGetCurrentUser();

  const generateOrder = async () => {
    const response = await createOrder({
      variables: {
        input: {
          shopId,
          status: StatusOrder.Pendding,
        },
      },
    });

    if (response?.data?.createOrder) {
      await setOrderId(response?.data?.createOrder?.order?._id);
    }
  };

  return (
    <LayoutApp>
      <div className="sx-box">
        <WhiteLogo width={200} />
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "0.84rem",
            margin: "10px 0",
          }}
        >
          Queremos ofrecerte las mejores prendas de nuestro catálogo, por favor
          ingresa tus datos de acceso
        </Text>
        <Title style={{ color: "#fff", textAlign: "center" }} level={3}>
          INGRESA A NUESTRO CATÁLOGO
        </Title>
        <FormLogin />
      </div>
    </LayoutApp>
  );
};

export default AuthLogin;
