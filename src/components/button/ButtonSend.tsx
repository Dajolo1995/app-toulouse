import React from "react";
import { Button } from "../../utils/Desing";
import { buttonProps } from "../../interface/button";
import "../../styles/stepOne.css";

const ButtonSend: React.FC<buttonProps> = ({
  text,
  color,
  icon,
  onClick,
  type,
  background,
}) => {
  return (
    <Button
      onClick={onClick}
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
