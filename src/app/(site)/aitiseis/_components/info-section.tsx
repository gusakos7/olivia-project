"use client";
import { Button } from "@/components/ui/button";
import { Laptop, Pencil } from "lucide-react";
import { motion } from "motion/react";
// import * as motion from "framer-motion/client";

export const InfoSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-12 flex flex-col justify-center space-y-8 mb-16">
      <h2 className="text-gray-700 text-center text-3xl md:text-4xl">
        Υπηρεσίες οι οποίες Σίγουρα σας Ενδιαφέρουν!
      </h2>
      <p className="text-gray-400 text-center leading-7">
        Προσπαθούμε να σας δίνουμε ολοκληρωμένες λύσεις ως προς τις ανάγκες σας
        σχετικά με τις προκηρύξεις και τις αιτήσεις του ΑΣΕΠ.
      </p>

      <div className="flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:space-x-4 lg:justify-center xl:px-24">
        {/* card 1 */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-200px", once: true }}
          className="shadow-2xl rounded-lg flex flex-col space-y-8 items-center w-full p-8 lg:w-1/2"
        >
          <div className="rounded-full bg-blue-100 w-fit p-4">
            <Pencil className="w-10 h-10 text-blue-600" />
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-700 text-2xl text-center">
              Υπηρεσία Μτρώου ΑΣΕΠ
            </h4>
            <p className="text-gray-400 text-center">
              Σωστή συμπλήρωση του μητρώου σας στο ΑΣΕΠ.
            </p>
          </div>
          <Button className="bg-orange-400 text-lg py-6 rounded-full hover:bg-orange-600">
            ΜΗΤΡΩΟ ΑΣΕΠ
          </Button>
        </motion.div>

        {/* card 2 */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-200px", once: true }}
          className="shadow-2xl rounded-lg bg-orange-400 flex flex-col space-y-8 items-center w-full p-8 lg:w-1/2"
        >
          <div className="rounded-full bg-blue-50 w-fit p-4">
            <Laptop className="w-10 h-10 text-blue-600" />
          </div>
          <div className="space-y-4">
            <h4 className="text-white text-2xl text-center">
              Υπηρεσία Μτρώου ΑΣΕΠ
            </h4>
            <p className="text-gray-100 text-center">
              Σωστή συμπλήρωση του μητρώου σας στο ΑΣΕΠ.
            </p>
          </div>
          <Button className="bg-blue-600 text-lg py-6 rounded-full hover:bg-blue-600/80x">
            ΜΗΤΡΩΟ ΑΣΕΠ
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
