import type { Metadata } from "next";
// import { Roboto_Flex } from "next/font/google";
// import { BasicInfo } from "@/components/basic-info";
// import { NavBar } from "@/components/nav-bar";

import "./globals.css";
// import { Footer } from "@/components/footer";
// import { connectDB } from "@/db/connection";

// const robotoFlex = Roboto_Flex({
//   subsets: ["greek", "latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // await connectDB();
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body
        className={`${robotoFlex.className} antialiased w-[100%] overflow-x-hidden`}
      >
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <BasicInfo />
            <NavBar />
            {children}
          </div>
          <Footer />
        </div>
      </body> */}
    </html>
  );
}
