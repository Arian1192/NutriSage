import React from "react";

type IButtonProps = {
  buttonTitle: string;
};

export const LandingButtonActionComponent = ({ buttonTitle }: IButtonProps) => {
  return (
    <button className="p-2 border text-xs rounded m-3 bg-emerald-500 font-semibold text-white ml-[160px] transition-all ease-linear delay-75 hover:bg-green-400 hover:shadow-lg">
      {buttonTitle}
    </button>
  );
};
