import React from "react";
import { Card3D, Card3DBody } from "../ui/card-3d";

// Icons
import Heart from "@/assets/icons/heart.svg";
import Star from "@/assets/icons/star.svg";
import Star1 from "@/assets/icons/star-1.svg";

type ProductBoxProps = {
  src?: string;
  title?: string;
  price?: string;
  rating?: number; // ۰ تا ۵
};

const ProductBox = ({
  src = "/images/products/coffee4.webp",
  title = "Barista",
  price = "$200",
  rating = 4,
}: ProductBoxProps) => {
  return (
    <span>
      <Card3D className="h-full w-full min-w-0 p-2 md:p-6">
        {/* group/card: برای اینکه عکس بفهمد موس روی پنل پایین است */}
        <Card3DBody className="group/card bg-card text-card-foreground flex h-full w-full max-w-sm flex-col transform-3d">
          {/* ================= عکس ================= */}
          {/* این لایه فقط وقتی موس روی پنل پایین است، عقب می‌رود */}
          <div className="group/img relative w-full shrink-0 transition-transform duration-300 ease-out transform-3d hover:group-has-[[data-panel]:hover]/card:translate-y-2 hover:group-has-[[data-panel]:hover]/card:-translate-z-10 hover:group-has-[[data-panel]:hover]/card:brightness-90">
            {/* با هاور روی عکس: کمی جلو می‌آید و داخل قاب زوم می‌شود */}
            <div className="overflow-hidden rounded-t-xl shadow-lg transition-all duration-300 ease-out group-hover/img:translate-z-8 group-hover/img:scale-[1.03] group-hover/img:shadow-2xl">
              <img
                src={src}
                alt={title}
                className="aspect-square w-full cursor-pointer object-cover transition-transform duration-500 ease-out group-hover/img:scale-110"
              />
            </div>

            <button
              type="button"
              aria-label="Add to favorites"
              className="absolute top-5 right-5 z-10 translate-z-16"
            >
              <Heart className="cursor-pointer transition hover:scale-125 hover:rotate-12" />
            </button>
          </div>

          {/* ================= پنل پایین ================= */}
          {/* لایه‌ی بیرونی ثابت است (برای جلوگیری از پرش هاور) */}
          <div
            data-panel
            className="group/panel flex flex-1 flex-col transform-3d"
          >
            {/* لایه‌ی داخلی با هاور بالا و جلو می‌آید */}
            <div className="bg-products-bg border-border flex flex-1 flex-col rounded-b-xl border-2 p-2 transition-all duration-300 ease-out transform-3d group-hover/panel:-translate-y-3 group-hover/panel:translate-z-14 group-hover/panel:rounded-xl group-hover/panel:shadow-2xl sm:px-5 sm:py-2">
              <div className="flex flex-wrap items-center justify-between gap-2 sm:py-3">
                <span className="text-md font-bold md:text-xl">{title}</span>
                <span>{price}</span>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-center gap-4 py-3 sm:justify-between sm:gap-2">
                <button
                  type="button"
                  className="bg-primary cursor-pointer rounded-sm p-2 text-[12px] font-semibold text-nowrap text-white transition hover:brightness-110 active:scale-95 sm:text-sm md:px-4 md:py-2"
                >
                  Add to cart
                </button>

                <div className="flex basis-[35%] justify-between">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < rating ? <Star key={i} /> : <Star1 key={i} />,
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card3DBody>
      </Card3D>
    </span>
  );
};

export default ProductBox;
