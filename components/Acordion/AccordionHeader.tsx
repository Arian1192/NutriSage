import { ArrowUp, ArrowDown } from "lucide-react";
import React from "react";
import { useAccordion } from "./AccordionComponentContext";
import { countReset } from "console";

type IAccordionHeader = {
  header: string;
};

export const AccordionHeader = ({ header }: IAccordionHeader) => {
  const context = useAccordion();



  return (
    <div
      className="w-full h-auto flex justify-between"
    
    >
      <h3 className="text-[1.2rem] text-zinc-800 w-[90%]">{header}</h3>
      {context?.Accordion ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};

// onClick={() => context?.setAccordion(!context?.Accordion)}
