import { AccordionDemo } from "@/components/accordion-demo";
import Details from "@/components/details";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Details />
      <div className="container mx-auto px-2 lg:px-12 flex lg:flex-row flex-col space-y-0 lg:space-x-4 lg:space-y-0 my-12 ">
        <AccordionDemo />
        <AccordionDemo />
      </div>
    </div>
  );
}
