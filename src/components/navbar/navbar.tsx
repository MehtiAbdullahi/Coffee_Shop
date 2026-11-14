"use client";
import Link from "next/link";

// icons
import CartNav from "@/assets/icons/cart.svg";
import NavLogo from "@/assets/icons/nav-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { useState } from "react";

const navLinks: string[] = ["Home", "Shop", "Blog", "About", "Contact"];

const Navbar = () => {
  const [showMbMenu, setShowMbMenu] = useState(false);

  return (
    <nav className="relative container mx-auto px-3 max-lg:px-0 max-md:px-3">
      <div className="flex items-center justify-between py-6 [&>div]:flex [&>div]:items-center">
        <div className="flex items-center">
          <NavLogo />
          <span className="text-nav_txt_cof font-PoetsenOne text-2xl font-normal tracking-wide sm:text-3xl">
            Cof<span className="text-nav_txt_fee">fee</span>
          </span>
        </div>
        <div
          className={`absolute top-0 right-0 left-0 z-10 md:relative md:flex md:w-full md:max-w-1/2 md:translate-y-0 ${showMbMenu ? "" : "-translate-y-full"} items-center justify-center bg-white p-5 shadow-md shadow-black/2 transition-all md:bg-white/0 md:shadow-none`}
        >
          <ul className="w-full justify-around md:flex">
            <div className="flex w-full cursor-pointer justify-end pb-5 md:hidden">
              <LuX size={28} onClick={() => setShowMbMenu(!showMbMenu)} />
            </div>
            {navLinks.map((i, index) => (
              <li
                className="text-primary md:hover:border-b-primary hover:bg-primary md:border-bg-primary cursor-pointer border-white text-center font-semibold transition-colors duration-200 max-md:py-5 max-md:hover:text-white md:border-b-2 md:hover:bg-transparent"
                key={index}
              >
                <Link href={`/${i}`}>{i}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="border-primary hidden w-full max-w-64 min-w-0 items-center justify-between rounded-3xl border bg-white px-3.5 py-1 md:flex">
            <input
              type="text"
              className="h-8 w-full truncate border-none pr-3 text-sm outline-none"
              placeholder="Search coffee..."
            />
            <SearchIcon />
          </div>
          <div className="relative z-0 cursor-pointer">
            <CartNav />
            <span className="bg-cart-count absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
              0
            </span>
          </div>
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setShowMbMenu(!showMbMenu)}
          >
            <LuMenu size="24px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
