import React from "react";

export type ITextProps = {
  text?: string;
};

export const LandingTextCardComponent = ({ text }: ITextProps) => {
  return <p className="text-[10px] text-left   text-zinc-700 mx-5 mt-2 ">{text!}</p>;
};
