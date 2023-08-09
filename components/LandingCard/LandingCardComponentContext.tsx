"use client";

import { ReactNode, createContext } from "react";
import { LandingImageCardComponent } from "./LandingImageCardComponent";
import { LandingHeaderCardComponent } from "./LandingHeaderCardComponent";
import { LandingTextCardComponent } from "./LandingTextCardComponent";
import LandingDescriptionCardComponent from "./LandingDescriptionCardComponent";
import { LandingButtonActionComponent } from "./LandingButtonActionComponent";
const LandingCardComponentContext = createContext({});

type Props = { children: ReactNode };

const LandingCardComponent = ({ children }: Props) => {
  return (
    <LandingCardComponentContext.Provider value={""}>
      <div className="w-[250px] h-auto flex justify-center items-start  flex-col bg-white rounded-md shadow-xl">
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
