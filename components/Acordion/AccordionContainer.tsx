import React from "react";
import { AccordionComponent, useAccordion } from "./AccordionComponentContext";

type IAccordionContainerProps = {
  header: string;
  description: string;
};

export const AccordionContainer = ({
  header,
  description,
}: IAccordionContainerProps) => {
  const context = useAccordion();

  return (
    <div
      onMouseEnter={() => context?.setAccordion(!context?.Accordion)}
      onMouseLeave={() => context?.setAccordion(!context?.Accordion)}
      className={`p-5 w-full mt-2 rounded-lg
        ${
          !context?.Accordion
            ? "transition-colors linear delay-100 border border-emerald-200"
            : "transition-colors linear delay-100 bg-green-400 shadow-lg border border-zinc-300"
        }`}
    >
      <AccordionComponent.Header header={header} />
      {context?.Accordion && (
        <AccordionComponent.Description description={description} />
      )}
    </div>
  );
};
