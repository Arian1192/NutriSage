import React from "react";
import { useAccordion } from "./AccordionComponentContext";

type IAccordionProps = {
  description: string;
};

export const AccordionDescription = ({ description }: IAccordionProps) => {
  const context = useAccordion();

  return (
    <p
      className={`text-[1.2rem] text-zinc-700 font-bold mt-5 max-sm:mt-2 ${
        !context?.Accordion && "text-white"
      }`}
    >
      {description}
    </p>
  );
};
