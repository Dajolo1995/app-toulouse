import React from "react";
import { Typography } from "../../utils/Desing";
import { TitleProps } from "../../interface/Witte";

const { Title } = Typography;

type ValidTextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

const TitleText: React.FC<TitleProps> = ({
  title,
  level,
  color,
  textAlign,
}) => {
  // Validate textAlign to ensure it's a valid value or undefined
  const validTextAlign =
    textAlign &&
    [
      "start",
      "end",
      "left",
      "right",
      "center",
      "justify",
      "match-parent",
    ].includes(textAlign)
      ? (textAlign as ValidTextAlign)
      : undefined;

  return (
    <Title level={level} style={{ color, textAlign: validTextAlign }}>
      {title}
    </Title>
  );
};

export default TitleText;
