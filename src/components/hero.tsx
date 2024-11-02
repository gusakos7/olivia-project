import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-[5%] ">
      <div className="container mx-auto px-2 lg:px-12 flex flex-col space-y-8 items-center p-16">
        <h2 className="text-white font-bold text-5xl text-center ">
          Υπηρεσίες προς Ενδιαφερόμενους για τον ΑΣΕΠ
        </h2>
        <div className="flex p-4 justify-center space-x-8">
          <div className="flex-1 ml-12 bg-white rounded-lg shadow-xl">
            <Image
              src={"/images/christin-hume-hBuwVLcYTnA-unsplash.jpg"}
              width={6000}
              height={4000}
              className="object-cover rounded-lg shadow-2xl border-2 border-[#585c68]"
              alt="work picture"
            />
          </div>
          <div className="flex flex-col w-1/2 text-sm space-y-4 text-white">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              dignissimos aliquid harum quibusdam quod aspernatur ullam illum.
              Quisquam similique quaerat id asperiores repellendus aliquid magni
              mollitia unde? Libero, sit et.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              voluptatibus provident impedit, delectus aspernatur possimus
              consectetur vero beatae, quisquam, necessitatibus eaque eos porro
              animi molestias mollitia quaerat voluptatem facere eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}