"use client";
import Link from "next/link";

// icons
import CartNav from "@/assets/icons/cart.svg";
import NavLogo from "@/assets/icons/nav-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MotionHighlight, MotionHighlightItem } from "../ui/motion-highlight";

interface navLinksTypes {
  title: string;
  href: string;
}

const navLinks: navLinksTypes[] = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [showMbMenu, setShowMbMenu] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="container mx-auto px-3 max-lg:px-0 max-md:px-3">
      <div className="mt-5 flex items-center justify-between rounded-full px-5 py-2 [&>div]:flex [&>div]:items-center">
        <div className="flex items-center gap-2">
          <NavLogo />
          <span className="text-nav_txt_cof font-PoetsenOne text-2xl font-normal tracking-wide sm:text-4xl">
            Cof<span className="text-nav_txt_fee">fee</span>
          </span>
        </div>
        <div
          className={`absolute top-0 right-0 left-0 z-10 md:relative md:flex md:w-full md:max-w-1/2 md:translate-y-0 ${showMbMenu ? "" : "-translate-y-full"} items-center justify-center bg-white p-5 shadow-md shadow-black/2 transition-all md:bg-white/0 md:shadow-none`}
        >
          <ul className="w-full justify-around md:flex">
            <MotionHighlight
              hover
              highlightClassName="rounded-none max-md:text-whtie md:bg-transparent bg-primary md:border-b-2 border-primary"
              className="flex w-full items-center justify-around"
            >
              <ul className="w-full justify-around md:flex">
                <div className="flex w-full cursor-pointer justify-end pb-5 md:hidden">
                  <LuX size={28} onClick={() => setShowMbMenu(!showMbMenu)} />
                </div>

                {navLinks.map(({ href, title }) => (
                  <li
                    key={href}
                    className={`text-primary md:border-bg-primary cursor-pointer border-white text-center font-semibold transition duration-200 max-md:hover:text-white md:border-b-2 md:hover:bg-transparent ${pathname === href && "md:border-b-primary hover:border-transparent md:border-b-2"}`}
                  >
                    <MotionHighlightItem value={href} asChild>
                      <Link
                        className="focus-visible:ring-ring/50 flex flex-col gap-1 rounded-xl p-6 outline-none focus-visible:ring-[3px] md:p-2"
                        href={href}
                      >
                        {title}
                      </Link>
                    </MotionHighlightItem>
                  </li>
                ))}
              </ul>
            </MotionHighlight>
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
            <Link href="/cart">
              <CartNav />
              <span className="bg-cart-count absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                0
              </span>
            </Link>
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
