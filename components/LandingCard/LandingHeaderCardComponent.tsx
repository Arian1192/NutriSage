import React from "react";

export type IHeaderProps = {
  header?: string;
};

export const LandingHeaderCardComponent = ({ header }: IHeaderProps) => {
  return <h3 className="text-xl text-zinc-700 mt-2 ml-5">{header!}</h3>;
};
