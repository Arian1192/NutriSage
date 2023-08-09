/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "../ui/card";

interface ILandigCardProps {
  TextTitle: string;
  TextDescription: string;
  imgSrc: StaticImageData;
  TextContentDescription: string;
}

export const LandingCardComponent = ({
  TextTitle,
  TextDescription,
  imgSrc,
  TextContentDescription,
}: ILandigCardProps) => {
  return (
    <Card className="w-[360px] lg:w-[500px] md:h-[300px] h-auto flex flex-col lg:flex-row ">
      <Image
        src={imgSrc}
        alt={TextTitle}
        className="w-1/3 object-cover max-sm:w-full  sm:rounded-t-md "
      />
      <div className="w-[100%] h-auto flex flex-col border justify-center items-center">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl font-bold text-zinc-700">
            {TextTitle}
          </CardTitle>
          <CardDescription className="text-zinc-600">
            {TextDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-zinc-600 text-center text-sm">{TextContentDescription}</CardContent>
      </div>
    </Card>
  );
};
