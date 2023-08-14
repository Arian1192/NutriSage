import React, { ReactNode, createContext } from "react";
import { LandingImageCardComponent } from "./LandingImageCardComponent";
import { LandingHeaderCardComponent } from "./LandingHeaderCardComponent";
import { LandingTextCardComponent } from "./LandingTextCardComponent";
import LandingDescriptionCardComponent from "./LandingDescriptionCardComponent";
import { LandingButtonActionComponent } from "./LandingButtonActionComponent";
import { useRouter } from "next/navigation";

export const LandingCardComponentContext =
  createContext<ILandingCardComponentContext>({});

type Props = { children: ReactNode };

export interface ILandingCardComponentContext {
  handleClick?: (route: string) => void; // Aquí puedes definir el tipo adecuado de handleClick
  // Otros atributos/contexto si los tienes
}

const LandingCardComponent = ({ children }: Props) => {
  const router = useRouter();

  const handleClick = (route: string): void => {
    router.push(`/${route}`);
  };

  const value = {
    handleClick,
  };

  return (
    <LandingCardComponentContext.Provider value={{ handleClick }}>
      <div
        className="w-[250px] h-auto flex justify-center items-start flex-col bg-white rounded-md shadow-xl"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(1) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='hsla(0,0%,100%,1)'/%3E%3Cpath d='M3.25 10h13.5M10 3.25v13.5' stroke-linecap='square' stroke-width='1' stroke='hsla(259, 0%, 52%, 0.10)' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,0)' fill='url(%23a)'/%3E%3C/svg%3E\")",
        }}
      >
        {children}
      </div>
    </LandingCardComponentContext.Provider>
  );
};

LandingCardComponent.Image = LandingImageCardComponent;
LandingCardComponent.Header = LandingHeaderCardComponent;
LandingCardComponent.Text = LandingTextCardComponent;
LandingCardComponent.Description = LandingDescriptionCardComponent;
LandingCardComponent.Button = LandingButtonActionComponent;

export default LandingCardComponent;
