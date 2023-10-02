import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainCatoselData from "./MainCarouselData";

const MainCarousel = () => {
  const items = MainCatoselData.map((i) => (
    <img
      className="cursor-pointer"
      role="presentation"
      onClick={() => {}}
      src={i.image}
      alt={i.path}
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      disableDotsControls
    />
  );
};

export default MainCarousel;
