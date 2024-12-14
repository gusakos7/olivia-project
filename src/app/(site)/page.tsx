// import { AccordionDemo } from "@/components/accordion-demo";
import Details from "@/components/details";
import Hero from "@/components/hero";
import { PageWrapper } from "@/components/page-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Details />
      <PageWrapper className="flex flex-col space-y-12  lg:flex-row lg:space-x-4 lg:space-y-0 my-12">
        {/* <div className="container mx-auto px-2 lg:px-12 flex flex-col space-y-12  lg:flex-row lg:space-x-4 lg:space-y-0 my-12 "> */}
        {/* <AccordionDemo /> */}
        {/* <AccordionDemo /> */}
        {/* </div> */}
      </PageWrapper>
    </div>
  );
}
