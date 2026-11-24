"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUp,
  Check,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

// Icons
import NavLogo from "@/assets/icons/nav-logo.svg";
import { Motions } from "@/components/motions/Motions";

const EASE = [0.22, 1, 0.36, 1] as const;

const schema = z.object({
  email: z.email("Please enter a valid email address"),
});
type FormValues = z.infer<typeof schema>;

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Food Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Twitter", href: "#", Icon: FaXTwitter },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Youtube", href: "#", Icon: FaYoutube },
  { label: "Pinterest", href: "#", Icon: FaPinterestP },
];

const contacts = [
  { Icon: MapPin, text: "123, Pall Mall, USA california", href: undefined },
  { Icon: Mail, text: "coffee@gmail.com", href: "mailto:coffee@gmail.com" },
  { Icon: Phone, text: "012-34-78940", href: "tel:+0123478940" },
];

const colVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ------------------------------------------------------------------ */
/*  Newsletter                                                         */
/* ------------------------------------------------------------------ */
const Newsletter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    toast.success("You’re subscribed!", {
      description: `We’ll send the latest updates to ${data.email}`,
    });
    reset();
  };

  return (
    <Motions
      y={40}
      scale={0.98}
      amount={0.3}
      duration={0.8}
      ease="smooth"
      classMotion="bg-primary relative overflow-hidden rounded-3xl px-6 py-10 text-white shadow-2xl shadow-black/20 sm:px-12 sm:py-14"
    >
      {/* دایره‌های تزئینی */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-10 size-72 rounded-full border border-white/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-6 size-48 rounded-full border border-white/10"
      />

      <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-md">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Join our news letter
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
            New blends, brewing tips and special offers, straight to your inbox.
            No spam, unsubscribe any time.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-lg"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "newsletter-error" : undefined}
                {...register("email")}
                className="w-full min-w-0 rounded-xl border-2 border-white/30 bg-white/15 px-4 py-3.5 font-semibold text-white placeholder-white/70 backdrop-blur-md transition-colors outline-none focus:border-white aria-invalid:border-red-300"
              />
            </div>
            <button className="text-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-semibold shadow-lg shadow-black/10 transition-all hover:scale-105 active:scale-100 disabled:cursor-not-allowed disabled:opacity-80 max-[426px]:px-6">
              {isSubmitting ? (
                <Loader2 className="size-5 animate-spin" />
              ) : isSubmitSuccessful ? (
                <Check className="size-5" />
              ) : null}
              Subscribe
            </button>
          </div>

          <div className="mt-2 min-h-6 text-left text-sm">
            <AnimatePresence mode="wait">
              {errors.email && (
                <Motions
                  key="error"
                  id="newslatter-error"
                  role="alert"
                  y={-6}
                  duration={0.2}
                  classMotion="text-red-100"
                >
                  <p>{errors.email.message}</p>
                </Motions>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </Motions>
  );
};

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
const Footer = () => {
  const reduced = useReducedMotion();

  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });

  return (
    <footer className="container mx-auto mt-28 px-6 pb-6" id="contact">
      <Newsletter />

      {/* ستون‌ها */}
      <motion.div
        initial={reduced ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16"
      >
        {/* برند + تماس */}
        <motion.div
          variants={colVariants}
          className="sm:col-span-2 lg:col-span-1"
        >
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Coffee home"
          >
            <NavLogo />
            <span className="text-nav_txt_cof font-PoetsenOne text-2xl font-normal tracking-wide sm:text-3xl">
              Cof<span className="text-nav_txt_fee">fee</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 opacity-70">
            Freshly roasted beans, brewed with care, from our family to your
            cup.
          </p>
          <ul className="mt-6 space-y-4">
            {contacts.map(({ Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary grid size-10 shrink-0 place-items-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                {href ? (
                  <a
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* لینک‌ها */}
        <motion.nav variants={colVariants} aria-label="Quick links">
          <h3 className="text-xl font-semibold text-nowrap sm:text-2xl">
            Quick Link
          </h3>
          <ul className="mt-6 space-y-4">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group hover:text-primary inline-flex items-center gap-2 transition-colors"
                >
                  <ArrowRight className="text-primary -ml-6 size-4 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
                  <span className="relative">
                    {l.label}
                    <span className="bg-primary absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* شبکه‌های اجتماعی */}
        <motion.div variants={colVariants}>
          <h3 className="text-xl font-semibold text-nowrap sm:text-2xl">
            Follow Us
          </h3>
          <ul className="mt-6 space-y-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  aria-label={label}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="bg-primary/10 text-primary group-hover:bg-primary grid size-10 place-items-center rounded-xl transition-colors duration-300 group-hover:text-white">
                    <Icon className="size-4" />
                  </span>
                  <span className="group-hover:text-primary transition-colors">
                    {label}
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* نوار پایین */}
      <div className="border-border flex flex-col items-center justify-between gap-4 border-t-2 pt-8 sm:flex-row">
        <span className="flex items-center gap-1.5 text-center text-sm leading-8 opacity-80">
          © {new Date().getFullYear()} Coffee. All rights reserved.
        </span>

        <motion.button
          type="button"
          onClick={backToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          className="border-primary/30 text-primary hover:bg-primary grid size-11 cursor-pointer place-items-center rounded-full border transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
