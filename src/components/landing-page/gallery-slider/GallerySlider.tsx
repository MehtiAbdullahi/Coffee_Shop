"use client";

const images = [
  "/images/backgrounds/cup-coffee-bg.webp",
  "/images/backgrounds/coffee.webp",
  "/images/backgrounds/coffee2.webp",
  "/images/backgrounds/coffee3.webp",
  "/images/backgrounds/coffee4.webp",
  "/images/backgrounds/coffee-beans-bg.webp",
  "/images/backgrounds/coffee-machin.webp",
  "/images/backgrounds/coffee-machin2.webp",
  "/images/backgrounds/coffee-machine5.webp",
  "/images/backgrounds/coffee-machine4.webp",
  "/images/backgrounds/coffee-machine6.webp",
  "/images/backgrounds/coffee5.webp",
];

const galleryImages = Array.from(
  { length: 12 },
  (_, index) => images[index % images.length],
);

interface GallerySliderProps {
  reverse?: boolean;
}

export default function GallerySlider({ reverse = false }: GallerySliderProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden w-full overflow-hidden md:block">
        <div
          className={`flex w-max [animation:gallery-scroll_35s_linear_infinite] gap-4 py-8 ${
            reverse ? "[animation-direction:reverse]" : ""
          }`}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="grid w-[calc(50vw-1rem)] shrink-0 grid-cols-4 gap-4"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square w-full overflow-hidden rounded-xl ${
                    index % 4 === 0
                      ? "translate-y-4"
                      : index % 4 === 1
                        ? ""
                        : index % 4 === 2
                          ? "translate-y-4"
                          : "translate-y-8"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Coffee gallery ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & Mobile */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
        {images.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-xl">
            <img
              src={image}
              alt={`Coffee gallery ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
