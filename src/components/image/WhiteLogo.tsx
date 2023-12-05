import React from "react";
import Logo from "../../assets/logoBlanco.png";

interface props {
  width: number;
}

const WhiteLogo: React.FC<props> = ({width}) => {
  return <img src={Logo} alt="logoBlanco" width={width} />;
};

export default WhiteLogo;
