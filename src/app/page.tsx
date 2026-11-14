import React from "react";
import Hero from "@/components/hero/Hero";
import CoffeeBeans from "../components/coffee-beans/CoffeeBeans";
import FavouriteCoffee from "@/components/favourite-coffee/FavoriteCoffee";

const HeroPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CoffeeBeans />
        <FavouriteCoffee />
      </main>
    </>
  );
};

export default HeroPage;
