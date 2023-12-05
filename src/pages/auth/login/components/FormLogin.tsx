import React from "react";
import {
  Form,
  Input,
  Typography,
  Button,
} from "../../../../utils/Desing";

const { Item } = Form;
const { Password } = Input;
const { Text } = Typography;

const FormLogin: React.FC = () => {
  return (
    <Form>
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
        />
      </Item>

      <Text style={{ color: "#fff" }}>Ingresa tu contraseña de acceso</Text>

      <Item>
        <Password
          style={{
            backgroundColor: "#744546",
            color: "#fff",
            border: "none",
            width: "260px",
            height: "35px",
            borderRadius: "20px",
          }}
          placeholder="Ingresa tu contraseña"
        />
        
      </Item>


      <Button type="link" style={{ color: "#000" }}>
        ¿Olvidaste tu contraseña?
      </Button>


      <Item  style={{margin:"20px 0"}} >
        <Button
          htmlType="submit"
          type="primary"
          shape="circle"
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

      <Item>
        <Text style={{ color: "#fff" }}>Si no cuentas con usuario</Text>
        <Button type="link" style={{ color: "#DC9F95" }}>
        *Regístrate aquí*
        </Button>
      </Item>
    </Form>
  );
};

export default FormLogin;
