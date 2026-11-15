import React from "react";
import Hero from "@/components/hero/Hero";
import CoffeeBeans from "../components/coffee-beans/CoffeeBeans";
import FavouriteCoffee from "@/components/favourite-coffee/FavoriteCoffee";
import ProductShop from "@/components/product-shop/ProductShop";

const HeroPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CoffeeBeans />
        <FavouriteCoffee />
        <ProductShop />
      </main>
    </>
  );
};

export default HeroPage;
