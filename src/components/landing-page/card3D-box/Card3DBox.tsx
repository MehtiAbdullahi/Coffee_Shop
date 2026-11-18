import { Card3D, Card3DBody, Card3DItem } from "../ui/card-3d";
import { ArrowUpRightIcon } from "lucide-react";

const Card3DBox = ({ src, title, date, countComments }) => {
  return (
    <span>
      <Card3D className="h-full w-full min-w-0 p-6">
        <Card3DBody className="bg-card text-card-foreground flex h-full w-full max-w-sm flex-col">
          <Card3DItem className="w-full shrink-0" translateZ={40}>
            <img
              alt="A wooden boat on a turquoise mountain lake"
              className="aspect-[16/10] w-full rounded-t-xl object-cover shadow-2xl"
              src={src}
            />
          </Card3DItem>

          <div className="bg-products-bg border-border flex flex-1 flex-col rounded-b-xl border-2 p-5">
            <Card3DItem
              className="text-muted-foreground line-clamp-2 min-h-12 text-[18px] font-bold"
              translateZ={20}
            >
              {title}
            </Card3DItem>

            <div className="mt-auto flex items-center justify-between gap-2 pt-5 text-sm">
              <Card3DItem translateZ={60}>{date}</Card3DItem>

              <Card3DItem translateZ={60}>{countComments} - Comment</Card3DItem>
            </div>
          </div>
        </Card3DBody>
      </Card3D>
    </span>
  );
};

export default Card3DBox;
