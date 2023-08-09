import React from "react";

type IDescriptionProps = {
  description: string;
};

const LandingDescriptionCardComponent = ({
  description,
}: IDescriptionProps) => {
  return (
    <p className="text-xs text-emerald-400 font-bold ml-5">{description}</p>
  );
};

export default LandingDescriptionCardComponent;
