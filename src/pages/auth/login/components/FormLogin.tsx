import React, { useState } from "react";
import { Form, Input, Typography, Button } from "../../../../utils/Desing";
import { login } from "../../../../interface/auth";

const { Item } = Form;
const { Password } = Input;
const { Text } = Typography;

interface props {
  handleSubmit: (values: login) => void;
  loading: boolean;
  REGISTER: string;
}

const FormLogin: React.FC<props> = ({ handleSubmit, loading, REGISTER }) => {
  const [stateForm, setStateForm] = useState({
    username: "",
    password: "",
  });

  return (
    <Form
      onFinish={() => handleSubmit(stateForm)}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      <Text style={{ color: "#fff" }}>Ingresa tu correo electrónico</Text>

      <Item
        style={{ marginBottom: "20px", marginTop: "10px" }}
        rules={[
          {
            required: true,
            message: "Por favor ingresa tu correo electrónico",
          },
        ]}
      >
        <Input
          disabled={loading}
          style={{
            backgroundColor: "#744546",
            color: "#fff",
            border: "none",
            width: "260px",
            height: "35px",
            borderRadius: "20px",
          }}
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) =>
            setStateForm({
              ...stateForm,

              username: e.target.value,
            })
          }
        />
      </Item>

      <Text style={{ color: "#fff" }}>Ingresa tu contraseña de acceso</Text>

      <Item>
        <Password
          disabled={loading}
          style={{
            backgroundColor: "#744546",
            color: "#fff",
            border: "none",
            width: "260px",
            height: "35px",
            borderRadius: "20px",
          }}
          placeholder="Ingresa tu contraseña"
          onChange={(e) =>
            setStateForm({
              ...stateForm,
              password: e.target.value,
            })
          }
        />
      </Item>

      <Button type="link" style={{ color: "#000" }}>
        ¿Olvidaste tu contraseña?
      </Button>

      <Item style={{ margin: "20px 0" }}>
        <Button
          htmlType="submit"
          type="primary"
          shape="circle"
          disabled={loading}
          style={{
            width: "260px",
            height: "35px",
            borderRadius: "20px",
            background: "#DC9F95",
            color: "#fff",
          }}
        >
          Ingresar
        </Button>
      </Item>

      {REGISTER === "true" ? (
        <Item>
          <Text style={{ color: "#fff" }}>Si no cuentas con usuario</Text>
          <Button type="link" style={{ color: "#DC9F95" }}>
            *Regístrate aquí*
          </Button>
        </Item>
      ) : null}
    </Form>
  );
};

export default FormLogin;
