import Image, { StaticImageData } from "next/image";

export type IImageProps = {
  image: StaticImageData;
  altImage: string;
};

export const LandingImageCardComponent = ({ image, altImage }: IImageProps) => {
  return (
    <Image
      src={image}
      alt={altImage}
      className="p-3 rounded-2xl"
    ></Image>
  );
};
