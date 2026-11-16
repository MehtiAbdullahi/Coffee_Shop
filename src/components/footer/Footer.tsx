import React from "react";

// Icons
import NavLogo from "@/assets/icons/nav-logo.svg";
import Emain from "@/assets/icons/mail.svg";
import PinAlt from "@/assets/icons/pin-alt.svg";
import Phone from "@/assets/icons/phone.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Youtube from "@/assets/icons/youtube.svg";
import Pinterest from "@/assets/icons/pinterest.svg";
import { TbCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="container mx-auto mt-28 px-6">
      <div className="flex flex-row-reverse flex-wrap justify-around gap-10 [&>div]:flex [&>div]:flex-1 [&>div]:shrink-0 [&>div]:flex-col">
        <div className="gap-5">
          <h3 className="text-2xl font-bold text-nowrap">Join our news letter</h3>
          <input
            type="text"
            className="border-border-2 w-full max-w-120 min-w-0 rounded-xl border-2 bg-white px-2 py-3 font-semibold"
            placeholder="Email"
          />
          <button className="bg-primary cursor-pointer rounded-xl px-8 py-4 font-semibold text-white max-[426px]:px-6 max-[426px]:py-2">
            Subscribe
          </button>
        </div>
        <div className="">
          <h3 className="text-nowrap text-2xl font-semibold">Follow Us</h3>
          <ul className="[&>li]:my-6 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
            <li>
              <Facebook />
              <span>Facebook</span>
            </li>
            <li>
              <Twitter />
              <span>Twitter</span>
            </li>
            <li>
              <Instagram />
              <span>Instagram</span>
            </li>
            <li>
              <Youtube />
              <span>Youtube</span>
            </li>
            <li>
              <Pinterest />
              <span>Pinterest</span>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold text-nowrap">Quick Link</h3>
          <ul className="[&>li]:my-6 [&>li]:flex [&>li]:items-center">
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Food Menu</li>
            <li>Gallery</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex-col">
          <div className="flex items-center">
            <NavLogo />
            <span className="text-nav_txt_cof font-PoetsenOne text-2xl font-normal tracking-wide sm:text-3xl">
              Cof<span className="text-nav_txt_fee">fee</span>
            </span>
          </div>
          <ul className="[&>li]:my-6 [&>li]:flex [&>li]:items-center [&>li]:gap-2">
            <li>
              <PinAlt />
              <span>123, Pall Mall, USA california</span>
            </li>
            <li>
              <Emain />
              <span>coffee@gmail.com</span>
            </li>
            <li>
              <Phone />
              <span>012-34-78940</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-border mt-10 border-t-2 p-10">
        <span className="flex items-center justify-center text-center leading-8">
          <TbCopyright />
          Copyright all right reserved 2024
        </span>
      </div>
    </section>
  );
};

export default Footer;
