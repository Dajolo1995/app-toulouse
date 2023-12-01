import React from "react";
import { Carousel } from "../../utils/Desing";
import PagesOne from "./components/PagesOne";
import PagesTwo from "./components/PagesTwo";

const Welcome: React.FC = () => {
  return (
    <Carousel effect="fade" autoplay autoplaySpeed={5000}>
      <PagesOne />
      <PagesTwo />
    </Carousel>
  );
};

export default Welcome;
