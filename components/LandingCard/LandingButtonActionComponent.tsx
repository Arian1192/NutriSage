import { useContext } from "react";
import {
  ILandingCardComponentContext,
  LandingCardComponentContext,
} from "./LandingCardComponentContext";
import { ButtonProps } from "../ui/button";
type IButtonProps = {
  buttonTitle: string;
  path: string;
};

export const LandingButtonActionComponent = ({
  buttonTitle,
  path,
}: IButtonProps) => {
  const { handleClick } = useContext<ILandingCardComponentContext>(
    LandingCardComponentContext
  );

  return (
    <button
      onClick={() => handleClick!(path)}
      className="p-2 border text-xs rounded m-3 bg-emerald-500 font-semibold text-white ml-[160px] transition-all ease-linear delay-75 hover:bg-green-400 hover:shadow-lg"
    >
      {buttonTitle}
    </button>
  );
};
