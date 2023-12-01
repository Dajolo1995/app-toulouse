import React from "react";
import LogoWhite from "../../../assets/logoBlanco.png";
import TitleText from "../../../components/text/TitleText";
import ButtonSend from "../../../components/button/ButtonSend";
import IconFlag from "../../../components/icon/IconFlag";
import "../../../styles/stepOne.css";


const PagesTwo: React.FC = () => {
  return (
    <div className="pagesTwo">
      <img src={LogoWhite} alt="logo" width={235} />

      <TitleText
        title="Haz tus compras"
        level={2}
        color="white"
        textAlign="center"
      />

      <TitleText
        title="De forma rápida y segura"
        level={4}
        color="white"
        textAlign="center"
      />

      <ButtonSend
        type="primary"
        text="ENVÍOS A TODO EL PAÍS"
        icon={<IconFlag />}
        width="64px"
        background="#9A6F68"
        color="white"
        className="buttonSend"
      />

      <ButtonSend type="link" text="SALTAR" color="#DC9F95" />
    </div>
  );
};

export default PagesTwo;
