import React from "react";
import MainCarousel from "../../components/Home/MainCarousel";
import HomeSectionCarousel from "../../components/Home/HomeSectionCarousel";
import mens_kurta from "../../Data/Men/men_kurta";
import mens_shirt from "../../Data/Men/men_shirt.json";
import women_dress from "../../Data/Women/women_dress.json";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <hr className="my-8 bg-gray-500 h-[2px]" />
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta" />
      <hr className="my-8 bg-gray-500 h-[2px]" />
      <HomeSectionCarousel data={mens_shirt} sectionName="Men's Shirt" />
      <hr className="my-8 bg-gray-500 h-[2px]" />
      <HomeSectionCarousel data={women_dress} sectionName="Women's Dress" />
    </>
  );
};

export default HomePage;
