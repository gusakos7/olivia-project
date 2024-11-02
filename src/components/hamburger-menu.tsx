"use client";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@radix-ui/react-popover";
import React, { useState } from "react";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu } from "lucide-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col justify-center items-center"
    >
      hello
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
      ></span>
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      ></span>
      <span
        className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
      ></span>
    </button>
  );
};

export const HamburgerMenu = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");

  return isDesktop ? (
    ""
  ) : (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu className="w-6 h-6 cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
