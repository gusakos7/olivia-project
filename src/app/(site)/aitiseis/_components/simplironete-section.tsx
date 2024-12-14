import * as motion from "framer-motion/client";
import { Earth, Laptop, Lock, Users } from "lucide-react";
import Image from "next/image";

export const SimplironeteSection = () => {
  const boxServices = [
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Καθοδήγηση",
      text: "Ανάλογα με τα προσόντα σας, στοχεύουμε στις θέσεις με τη μεγαλύτερη πιθανότητα επιτυχίας!",
    },
    {
      icon: <Earth className="w-10 h-10" />,
      title: "Συμπλήρωση Μητρώου ΑΣΕΠ",
      text: "Τα προσόντα του υποψηφίου με τα αντίστοιχα δικαιολογητικά συμπληρώνονται κατάλληλα στα πεδία του μητρώου.",
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Υποβολή αιτήσεων",
      text: "Η αίτησή σας συμπληρώνεται με συνέπεια, ακρίβεια και, κυρίως, χωρίς λάθη!",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Επίκληση Δικαιολογητικών και προετοιμασία φακέλου ΑΣΕΠ",
      text: "Αναλαμβάνουμε τη διαδικασία επίκλησης δικαιολογητικών του μητρώου σας, αλλά και την τελική σύνταξη του φακέλου.",
    },
  ];
  return (
    <section className="bg-blue-600 mt-12 py-12">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col space-y-4">
        <h2 className="text-5xl text-orange-400 text-center py-8">
          Συμπληρώνετε συχνά αιτήσεις για το ΑΣΕΠ;
        </h2>
        <p className="text-white text-center leading-8">
          Εάν ενδιαφέρεστε να κάνετε συχνά αιτήσεις σε προκηρύξεις του δημοσίου
          τομέα, επικοινωνήστε με το γραφείο μας για να σας προτείνουμε
          οικονομικότερες και πιο αποτελεσματικές λύσεις!
        </p>
        <div className="flex items-center mx-auto py-4 md:space-x-12">
          <div className="grid w-full grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-2 xl:w-1/2">
            {boxServices.map((el, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start text-center space-y-6 mb-12"
              >
                <div className="text-blue-600 p-3 bg-white rounded-full">
                  {el.icon}
                </div>
                <h4 className="text-orange-400 text-xl">{el.title}</h4>
                <p className="text-white text-center text-sm">{el.text}</p>
              </div>
            ))}
          </div>
          {/* IMG ASEP e-services */}
          <motion.div
            className="xl:w-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              className="rounded-lg border shadow-2xl object-contain hidden xl:block"
              src={"/images/asep-e-services.png"}
              alt="asep-website"
              width={1919}
              height={1079}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
