"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
const ids = links.map((l) => l.id);

const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 380, damping: 32 } as const;

/* ------------------------------------------------------------------ */
/*  Scroll-spy: سکشن فعال بر اساس اسکرول                               */
/* ------------------------------------------------------------------ */
function useScrollSpy() {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [active, setActive] as const;
}

/* ------------------------------------------------------------------ */
/*  NavMenu                                                            */
/*  open / onClose: وضعیت منوی موبایل که از همون دکمه‌ی همبرگری        */
/*  Navbar خودت کنترل می‌شه. در دسکتاپ منو همیشه نمایان است.          */
/* ------------------------------------------------------------------ */
type NavMenuProps = {
  open?: boolean;
  onClose?: () => void;
};

const NavMenu = ({ open = false, onClose }: NavMenuProps) => {
  const [active, setActive] = useScrollSpy();
  const [hovered, setHovered] = useState<string | null>(null);

  // قفل اسکرول و بستن با Esc وقتی منوی موبایل بازه
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const goTo = (e: React.MouseEvent, id: string, fromMobile = false) => {
    e.preventDefault();
    setActive(id);
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      history.replaceState(null, "", `#${id}`);
    };
    if (fromMobile) {
      onClose?.();
      setTimeout(scroll, 300); // بعد از بسته شدن پنل و آزاد شدن اسکرول
    } else {
      scroll();
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* ============================ Desktop ============================ */}
      <nav aria-label="Main" className="hidden w-full md:block">
        <ul
          onMouseLeave={() => setHovered(null)}
          className="relative flex w-full items-center justify-around"
        >
          {links.map((l, i) => {
            const isActive = active === l.id;
            return (
              <motion.li
                key={l.id}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.06,
                  ease: EASE,
                }}
                className="flex-1"
              >
                <a
                  href={`#${l.id}`}
                  onClick={(e) => goTo(e, l.id)}
                  onMouseEnter={() => setHovered(l.id)}
                  onFocus={() => setHovered(l.id)}
                  onBlur={() => setHovered(null)}
                  aria-current={isActive ? "location" : undefined}
                  className={`focus-visible:ring-primary/50 relative isolate block rounded-xl px-4 py-2.5 text-center font-semibold transition-colors duration-300 outline-none focus-visible:ring-2 ${
                    isActive
                      ? "text-primary"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {hovered === l.id && (
                    <motion.span
                      layoutId="nav-hover"
                      transition={SPRING}
                      className="bg-primary/10 absolute inset-0 -z-10 rounded-xl"
                    />
                  )}
                  <span className="relative">{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={SPRING}
                      className="bg-primary shadow-primary/40 absolute inset-x-5 bottom-0 h-0.5 rounded-full shadow-[0_0_10px]"
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* ============================= Mobile ============================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              aria-hidden
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={{
                hidden: { opacity: 0, y: -40, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                    staggerChildren: 0.06,
                    delayChildren: 0.12,
                  },
                },
                exit: {
                  opacity: 0,
                  y: -30,
                  scale: 0.97,
                  transition: { duration: 0.22, ease: "easeIn" },
                },
              }}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-x-0 top-3 z-50 mx-auto w-[95%] overflow-hidden rounded-3xl bg-white/90 p-3 shadow-2xl shadow-black/25 backdrop-blur-2xl"
            >
              {/* نور تزئینی */}
              <div
                aria-hidden
                className="bg-primary/15 pointer-events-none absolute -top-16 -right-10 size-48 rounded-full blur-3xl"
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0 },
                }}
                className="relative flex items-center justify-between px-3 pt-1 pb-3"
              >
                <span className="text-primary/60 text-xs font-semibold tracking-[0.2em] uppercase">
                  Menu
                </span>
                <motion.button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                  className="text-primary bg-primary/10 grid size-10 cursor-pointer place-items-center rounded-full"
                >
                  <X className="size-5" />
                </motion.button>
              </motion.div>

              <ul className="relative flex flex-col gap-1">
                {links.map((l, i) => {
                  const isActive = active === l.id;
                  return (
                    <motion.li
                      key={l.id}
                      variants={{
                        hidden: { opacity: 0, x: -24 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.45, ease: EASE },
                        },
                      }}
                    >
                      <a
                        href={`#${l.id}`}
                        onClick={(e) => goTo(e, l.id, true)}
                        aria-current={isActive ? "location" : undefined}
                        className={`relative isolate flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-semibold transition-colors duration-300 outline-none active:scale-[0.98] ${
                          isActive
                            ? "text-white"
                            : "text-primary hover:bg-primary/10"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active"
                            transition={SPRING}
                            className="bg-primary absolute inset-0 -z-10 rounded-2xl"
                          />
                        )}
                        <span className="flex items-center gap-4">
                          <span
                            className={`text-xs tabular-nums ${
                              isActive ? "text-white/70" : "text-primary/40"
                            }`}
                          >
                            0{i + 1}
                          </span>
                          {l.label}
                        </span>
                        <ArrowUpRight
                          className={`size-5 transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0"
                          }`}
                        />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default NavMenu;
