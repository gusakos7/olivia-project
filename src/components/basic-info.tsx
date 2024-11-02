"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, useScroll } from "framer-motion";

export const BasicInfo = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-blue-600 origin-left z-10"
      />
      <div className="bg-blue-600 text-sm ">
        <section className="container mx-auto px-2 space-x-8 sm:space-x-0 lg:px-12 flex justify-center sm:justify-between py-1 ">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-orange-400" />
              <span className="text-white hidden sm:block">
                (+30) 699999999
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-white hidden sm:block">
                Kapou sto argostoli{" "}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-orange-400" />
            <span className="text-white hidden sm:block">olive@press.com</span>
          </div>
        </section>
      </div>
    </>
  );
};
