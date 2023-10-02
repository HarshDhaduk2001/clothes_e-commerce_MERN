import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((i) => <HomeSectionCard product={i} />);

  return (
    <div className="px-4 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 pb-5">{sectionName}</h2>
      <div className="relative px-5">
        <AliceCarousel
          responsive={responsive}
          items={items}
          disableButtonsControls
          autoPlayInterval={1000}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== 0 && (
          <Button
            className="z-50 select-none"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
              hover: "",
            }}
            aria-label="previous"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            <NavigateBeforeIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== items.length - 5 && (
          <Button
            className="z-50 select-none"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              hover: "",
            }}
            aria-label="next"
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <NavigateBeforeIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
