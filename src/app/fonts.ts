import localFont from "next/font/local";

export const plusJakartaSans = localFont({
  src: [
    {
      path: "../assets/fonts/PlusJakartaSans-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const poetsenOne = localFont({
  src: "../assets/fonts/PoetsenOne-Regular.woff2",
  variable: "--font-poetsen-one",
  display: "swap",
});