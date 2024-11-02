import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-[5%] ">
      <div className="container mx-auto px-2 lg:px-12 flex flex-col space-y-8 items-center p-16">
        <h2 className="text-white text-lg md:text-3xl font-bold lg:text-5xl text-center ">
          Υπηρεσίες προς Ενδιαφερόμενους για τον ΑΣΕΠ
        </h2>
        <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row m-8 lg:m-0 p-4 lg:justify-center lg:space-x-8">
          <div className="lg:w-1/2 bg-white rounded-lg shadow-xl">
            <Image
              priority
              src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={6000}
              height={4000}
              className="object-cover rounded-lg shadow-2xl border-2 border-[#585c68]"
              alt="work picture"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 text-xs lg:text-sm space-y-4 p-4 text-white">
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
