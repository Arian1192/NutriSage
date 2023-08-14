"use client";
import React from "react";
import { AccordionComponent, useAccordion } from "./AccordionComponentContext";
import { AccordionContainer } from "./AccordionContainer";

type IAccordionProps = {
  header: string;
  description: string;
};

export const AccordionComposer = ({ header, description }: IAccordionProps) => {
  return (
    <AccordionComponent>
      <AccordionContainer header={header} description={description} />
    </AccordionComponent>
  );
};
