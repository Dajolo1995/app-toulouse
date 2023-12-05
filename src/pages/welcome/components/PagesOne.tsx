import React from "react";
import "../../../styles/stepOne.css";
import WhiteLogo from "../../../components/image/WhiteLogo";
import TitleText from "../../../components/text/TitleText";
import ButtonSend from "../../../components/button/ButtonSend";
import IconFlag from "../../../components/icon/IconFlag";
import "../../../styles/stepOne.css";

const PagesOne: React.FC = () => {
  return (
    <div className="pagesOne">
      <WhiteLogo width={235} />

      <TitleText
        title="Ropa interior única"
        level={2}
        color="white"
        textAlign="center"
      />

      <TitleText
        title="Llévate las mejores prendas al mejor precio"
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

export default PagesOne;
