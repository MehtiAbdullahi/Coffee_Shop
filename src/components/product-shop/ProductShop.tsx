import React from "react";
import ProductBox from "../product-box/ProductBox";

const ProductShop = () => {
  return (
    <section className="container mx-auto my-24">
      <div className="">
        <div className="px-4 text-center">
          <h2 className="text-primary mb-8 text-2xl leading-10 font-bold sm:mb-12 sm:text-5xl sm:leading-16 lg:mb-16 lg:text-7xl lg:leading-24">
            Our Special Coffee Beans Coffee kits
          </h2>
          <p className="text-primary text-sm leading-6 text-balance sm:text-2xl sm:leading-12">
            {`"
            Discover our special coffee beans and expertly crafted coffee kits. Perfect for brewing café-
            quality coffee at home. Elevate your mornings with premium flavors and artisanal blends. Shop
            now and savor the difference!"`}
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-6 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Product Box */}
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          {/* Product Box */}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="bg-primary cursor-pointer rounded-sm px-6 py-4 text-sm font-semibold text-white">
            View All Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShop;
