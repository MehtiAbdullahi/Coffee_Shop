"use client";
import Link from "next/link";

// icons
import CartNav from "@/assets/icons/cart.svg";
import NavLogo from "@/assets/icons/nav-logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import { LuMenu } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionHighlight, MotionHighlightItem } from "../ui/motion-highlight";
import { cn } from "cn";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <nav className="relative container mx-auto h-25 px-3 max-lg:px-0 max-md:px-3">
      <div
        className={cn(
          "mt-5 flex items-center justify-between px-5 py-2 [&>div]:flex [&>div]:items-center",
          scrolled &&
            "fixed right-0 left-0 z-20 mx-6 rounded-full shadow-sm shadow-black/10 backdrop-blur-sm xl:mx-48",
        )}
      >
        <div className="flex items-center lg:gap-2">
          <NavLogo />
          <span className="coffee-logo font-PoetsenOne text-2xl font-normal tracking-wide lg:text-3xl xl:text-4xl">
            Cof<span>fee</span>
          </span>
        </div>
        <div
          className={cn(
            "absolute inset-x-0 top-0 z-10 flex items-center justify-center py-3 transition-all duration-300",

            "bg-white shadow-md shadow-black/5",

            "md:relative md:w-full md:max-w-1/2 md:translate-y-0 md:bg-transparent md:shadow-none lg:p-5",

            !showMbMenu && "-translate-y-full max-md:-top-10",

            scrolled &&
              "fixed inset-x-0 z-50 mx-auto w-[95%] rounded-2xl bg-white shadow-md shadow-black/10 backdrop-blur-3xl",
          )}
        >
          <ul className="w-full justify-around md:flex">
            <MotionHighlight
              hover
              highlightClassName="rounded-none max-md:text-whtie md:bg-transparent bg-primary md:border-b-2 border-primary"
              className="flex w-full items-center justify-around"
            >
              <ul className="w-full justify-around md:flex">
                <div className="flex w-full cursor-pointer justify-end p-5 md:hidden">
                  <LuX size={28} onClick={() => setShowMbMenu(!showMbMenu)} />
                </div>

                {navLinks.map(({ href, title }) => (
                  <MotionHighlightItem key={href} value={href} asChild>
                    <li
                      className={`text-primary max-md:hover:bg-primary cursor-pointer p-1 text-center font-semibold transition duration-200 max-md:py-6 max-md:hover:text-white ${pathname === href && "md:border-b-primary max-md:bg-primary max-md:text-white md:border-b-2"}`}
                    >
                      <Link className="lg:p-2" href={href}>
                        {title}
                      </Link>
                    </li>
                  </MotionHighlightItem>
                ))}
              </ul>
            </MotionHighlight>
          </ul>
        </div>
        <div className="flex items-center gap-2 lg:gap-5">
          <div
            className={cn(
              "border-border hidden w-full max-w-96 min-w-0 items-center justify-between rounded-3xl border bg-white px-3.5 py-1 transition duration-150 hover:border-black/50 md:flex",
              scrolled && "bg-white/50",
            )}
          >
            <input
              type="text"
              className="h-8 w-full truncate border-none pr-3 text-sm text-gray-500 outline-none"

              placeholder="Search coffee..."
            />
            <SearchIcon />
          </div>
          <div
            className={cn(
              "border-border relative z-0 flex cursor-pointer items-center justify-center rounded-full border bg-white p-2 transition duration-150 hover:border-black/50",
              scrolled && "bg-white/50",
            )}
          >
            <Link href="/cart" className="">
              <CartNav />
              <span className="bg-cart-count absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full pl-[1px] text-xs text-white">
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
