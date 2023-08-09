"use client";
import React from "react";
import LandingCardComponent from "./LandingCardComponentContext";

import { StaticImageData } from "next/image";

type ILandingCardProps = {
  image: StaticImageData;
  altImage: string;
  header: string;
  text: string;
  description: string;
};

const LandingCardComposer = ({
  image,
  altImage,
  header,
  text,
  description,
}: ILandingCardProps) => {
  return (
    <LandingCardComponent>
      <LandingCardComponent.Image image={image} altImage={altImage} />
      <LandingCardComponent.Header header={header} />
      <LandingCardComponent.Description description={description} />
      <LandingCardComponent.Text text={text} />
      <LandingCardComponent.Button buttonTitle="More Info" />
    </LandingCardComponent>
  );
};

export default LandingCardComposer;
