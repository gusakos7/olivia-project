import React from "react";
import { BasicInfo } from "@/components/basic-info";
import { NavBar } from "@/components/nav-bar";
import { Roboto_Flex } from "next/font/google";
import { Footer } from "@/components/footer";

const robotoFlex = Roboto_Flex({
  subsets: ["greek", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${robotoFlex.className} antialiased w-[100%] overflow-x-hidden`}
    >
      <BasicInfo />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
