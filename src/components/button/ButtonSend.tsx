import React from "react";
import { Button } from "../../utils/Desing";
import { buttonProps } from "../../interface/button";
import "../../styles/stepOne.css";
import { useNavigate } from "react-router-dom";

const ButtonSend: React.FC<buttonProps> = ({
  text,
  color,
  icon,
  type,
  background,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Usa la función navigate para ir a otro path
    navigate("/catalogo");
  };

  return (
    <Button
      onClick={handleClick}
      icon={icon}
      style={{
        background: `${background}`,
        color: `${color}`,
        width: `400px`,
        height: `50px`,
      }}
      type={type}
    >
      {text}
    </Button>
  );
};

export default ButtonSend;
