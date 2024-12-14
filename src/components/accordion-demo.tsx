import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface Content {
  trigger: string;
  text: string;
}
interface AccordionDemoProps {
  content: Content[];
}

export const AccordionDemo: React.FC<AccordionDemoProps> = ({ content }) => {
  return (
    <Accordion type="single" collapsible className="w-full border px-4">
      {content.map((el, idx) => (
        <AccordionItem key={idx} value={idx.toString()}>
          <AccordionTrigger>{el.trigger}</AccordionTrigger>
          <AccordionContent>{el.text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
