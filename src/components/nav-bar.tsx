"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Drawer,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
export const NavBar = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width:768px)");

  const LINKS = [
    { label: "Αρχική", href: "/" },
    { label: "Αιτήσεις", href: "/aitiseis" },
    { label: "Μητρώο", href: "/mitroo" },
  ];
  return (
    <section className="container px-2 lg:px-12 mx-auto flex items-center justify-between py-4">
      {/* Logo */}
      <div className="p-4 rounded-lg shadow flex cursor-pointer">
        <Link href={"/"}>MY LOGO BABE</Link>
      </div>
      {isDesktop ? (
        <nav className="space-x-4 flex">
          {LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={cn(
                "text-base px-2 py-1 hover:bg-gray-100 hover:rounded  transition-all duration-300",
                pathname === link.href ? " text-orange-400 " : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : (
        <Drawer direction="right">
          <DrawerTrigger>
            <Menu className="w-6 h-6 cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="py-8 px-2">
            <DrawerHeader>
              <DrawerTitle>Link Options</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
              {LINKS.map((link, idx) => (
                <DrawerClose key={idx} asChild className="text-center">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base px-2 py-1 hover:bg-gray-100 hover:rounded  transition-all duration-300",
                      pathname === link.href ? " text-orange-400 " : ""
                    )}
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              ))}
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline" className="w-full">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}

      {/* <Nav />
      <div className="block lg:hidden">
        <HamburgerMenu />
      </div> */}
    </section>
  );
};
