import { createContext } from "react";
import { Props } from "@/types/Props";
import { useState, useContext } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDescription } from "./AccordionDescription";

type IAccordionComponentContext = {
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
  Accordion: boolean;
};

export const AccordionContext =
  createContext<IAccordionComponentContext | null>(null);

export const AccordionComponent = ({ children }: Props) => {
  const [Accordion, setAccordion] = useState(false);

  return (
    <AccordionContext.Provider value={{ Accordion, setAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
};

// Crear el customHook para usar el contexto en lugar de llamar directamente al contexto.

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      "useAccordion must be used within an AccordionContextProvider"
    );
  }

  return context;
};

AccordionComponent.Header = AccordionHeader;
AccordionComponent.Description = AccordionDescription;
