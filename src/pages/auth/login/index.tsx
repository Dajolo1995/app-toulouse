import React, { useState } from "react";
import LayoutApp from "../../../components/layout";
import WhiteLogo from "../../../components/image/WhiteLogo";
import "../../../styles/stepOne.css";
import { Typography } from "../../../utils/Desing";
import FormLogin from "./components/FormLogin";
import { useLogin } from "../../../hooks/user";
import { useCreateOrder } from "../../../hooks/order";
import { SHOP_ID, REGISTER } from "../../../ViteConfg";
import { setOrderId, setToken } from "../../../utils/auth";
import { StatusOrder } from "../../../graphql/types.graphql";
import showModalError from "../../../utils/Errors";
import { login } from "@/interface/auth";
import { useNavigate } from "react-router-dom";

const shopId = SHOP_ID;

const { Title, Text } = Typography;

// type FormValues = {
//   username: string;
//   password: string;
// };

const AuthLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [login] = useLogin();
  const [createOrder] = useCreateOrder();




  const generateOrder = async () => {
    console.log("generateOrder", shopId);
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

  const handleSubmit = async (values: login) => {
    try {
      setLoading(true);
      const response = await login({
        variables: {
          input: { ...values },
        },
      });

      if (response.data?.login?.user?.shop?._id !== shopId) {
        showModalError({
          text: "El usuario no tiene acceso a este punto, valide con el administrador",
        });
        setLoading(false);

        return;
      }

      if (response?.data?.login) {
        await setToken(response?.data?.login?.access_token);
        await generateOrder();
      }

      navigate("/catalogo")
    } catch (error) {
      setLoading(false);
      showModalError({ text: error?.message });
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
        <FormLogin
          handleSubmit={handleSubmit}
          REGISTER={REGISTER}
          loading={loading}
        />
      </div>
    </LayoutApp>
  );
};

export default AuthLogin;
