// Icons
import Trash from "@/assets/icons/SVGRepo_iconCarrier.svg";

import { NumberCounter } from "@/components/number-counter/NumberCounter";
import Link from "next/link";
import { Motions, TitleMotion } from "@/components/motions/Motions";

const CartPage = () => {
  return (
    <section className="container mx-auto my-12 px-12 md:my-24">
      <h2 className="mb-12 text-center text-4xl font-bold">
        <TitleMotion
          title="Cart"
          amount={0.4}
          titleClass="text-primary text-xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-4xl xl:text-5xl"
          classMotion="mx-auto max-w-5xl px-4 text-center"
        />
      </h2>
      <div className="flex gap-12 bg-white px-6 py-12 max-md:flex-col">
        <Motions classMotion="basis-[50%]" ease="smooth" x={-20}>
          <span className="font-semibold">Product</span>
          <div className="border-t-border mt-6 flex items-center gap-2 border-t pt-6 max-md:flex-wrap max-md:justify-center">
            <img
              src="/images/products/coffee5.webp"
              alt="product"
              className="border-border h-auto w-28 rounded-sm border"
            />
            <span className="text-md text-center font-bold lg:text-xl">
              Barista Coffee Bean - Hard Roast
            </span>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            <input
              type="text"
              className="border-border flex-1 rounded-md border-2 px-4 py-2"
              placeholder="Coupon code"
            />
            <button className="border-primary text-primary cursor-pointer rounded-md border-2 bg-transparent px-4 py-2 text-sm font-semibold transition-transform duration-300 hover:scale-105 active:scale-100">
              Apply Coupon
            </button>
          </div>
        </Motions>
        <Motions
          x={20}
          ease="smooth"
          classMotion="flex basis-[50%] flex-col gap-12 [&>div]:flex"
        >
          <div className="border-b-border justify-between border-b pb-6 [&>span]:font-semibold">
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <Trash className="cursor-pointer" />
          <div className="items-center justify-center gap-6 max-sm:flex-col sm:justify-between sm:gap-2">
            <span className="font-semibold">$15.99</span>
            <div className="">
              <NumberCounter initialValue={1} min={1} max={20} />
            </div>
            <span className="font-semibold">$15.99</span>
          </div>
          <div className="[&>div]:border-b-border flex-col gap-4 [&>div]:flex [&>div]:justify-between [&>div]:border-b [&>div]:pb-6">
            <div className="">
              <span>Price:</span>
              <span className="font-semibold">$15.99</span>
            </div>
            <div className="">
              <span>Shipping</span>
              <span className="font-semibold">$5</span>
            </div>
            <div className="">
              <span>Total:</span>
              <span className="font-semibold">$20.99</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 lg:mt-8">
            <button className="bg-primary md:hover:shadow-primary/30 relative inline-flex scale-100 cursor-pointer items-center gap-2 overflow-hidden rounded-md px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 max-lg:mx-auto">
              <Link
                href="/payment"
                className="md:text-md relative z-10 text-sm"
              >
                Continue Shopping
              </Link>
              {/* Hover shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
            <button className="border-primary text-primary relative inline-flex scale-100 cursor-pointer items-center gap-2 overflow-hidden rounded-md border-2 bg-transparent px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-100 max-lg:mx-auto">
              <span className="md:text-md relative z-10 text-sm">
                Proceed to Checkout
              </span>
            </button>
          </div>
        </Motions>
      </div>
    </section>
  );
};

export default CartPage;
