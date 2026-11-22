export type ImageSide = "left" | "right";

export interface StorySectionData {
  id: string;
  title: string;
  paragraphs: string[];
  image: { src: string; alt: string };
  imageSide: ImageSide;
}

export const HERO = {
  title: "Who We Are",
  paragraphs: [
    "Welcome to our coffee shop! We are passionate about providing the finest coffee beans and coffee kits to enhance your brewing experience. Our journey began with a love for coffee and a mission to share that love with coffee enthusiasts worldwide.",
    "Every product we offer is carefully selected to ensure the highest quality and sustainability. From freshly roasted beans to premium brewing kits, we are here to make your coffee moments special.",
  ],
  slides: [
    { src: "/images/backgrounds/we.webp", name: "Coffee 1" },
    { src: "/images/backgrounds/coffee-machin2.webp", name: "Coffee 2" },
    { src: "/images/backgrounds/we-2.webp", name: "Coffee 3" },
    { src: "/images/backgrounds/coffee5.webp", name: "Coffee 4" },
  ],
};

export const SECTIONS: StorySectionData[] = [
  {
    id: "simple",
    title: "Coffee made simple",
    paragraphs: [
      "At our coffee shop, we believe that great coffee doesn't have to be complicated. Our mission is to simplify the coffee-making experience for everyone, from beginners to seasoned baristas. By offering thoughtfully designed tools, high-quality beans, and step-by-step guidance, we aim to make every cup of coffee a delight.",
      "Whether you're perfecting your espresso technique or enjoying a simple pour-over, we're here to ensure that the process is as enjoyable as the result. Because at the heart of it all, coffee should be simple, accessible, and delicious.",
    ],
    image: { src: "/images/backgrounds/we-1.webp", alt: "Coffee machine" },
    imageSide: "left",
  },
  {
    id: "home",
    title: "Just good coffee at home",
    paragraphs: [
      "We know exactly what it's like to long for the perfect cup of coffee at home. So you buy an espresso machine and you immediately discover that it is not as easy as it seems…",
      "How do you actually make a nice coffee? This question leads to you drowning in an abundance of information and tools, but your coffee still doesn't taste good.",
      "We worked our way through the tools and information and that's where the idea was born. With Barista-Essentials we make delicious coffee at home accessible to everyone with the best tools, service and information for you, the home barista.",
    ],
    image: { src: "/images/backgrounds/we-2.webp", alt: "Coffee machine" },
    imageSide: "right",
  },
  {
    id: "accessible",
    title: "Accessible to everyone",
    paragraphs: [
      "We pay a lot of attention to product development so that we can offer the best quality for an accessible price. We try to offer as many sizes as possible so that tools are available for every espresso machine.",
      "Of course, we stay on top of new products and techniques and add them when we see they can help home baristas.",
      "We also answer your questions and share information every day. Our passion is helping our fellow home baristas and that includes excellent service with honest advice!",
    ],
    image: { src: "/images/backgrounds/we-3.webp", alt: "Coffee machine" },
    imageSide: "left",
  },
  {
    id: "development",
    title: "Product development",
    paragraphs: [
      "We develop our own tools in order to offer the best price-quality ratio to our fellow home baristas.",
      "It often starts with a carefully chosen basic tool and then we start working on a new design based on your feedback and insights from us and experts. This way we continuously improve our products.",
      "For example, together with Studio Jawel, we have improved almost our entire basic line of tools and given them a new look. Think of the tamper, tamping mat, dosing ring/cup, coffee distributor, portafilter, and WDT tool!",
    ],
    image: { src: "/images/backgrounds/we-4.webp", alt: "Coffee machine" },
    imageSide: "right",
  },
];
