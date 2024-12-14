import * as motion from "framer-motion/client";

export const DiadikasiaAitisis = () => {
  return (
    <section className="container mx-auto px-4 lg:px-12 flex flex-col space-y-2">
      <h2 className=" py-12 text-5xl text-orange-400 w-full text-center">
        Διαδικασία Αίτησης
      </h2>
      <motion.div
        initial={{ translateY: 200, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        // viewport={{ amount: "all" }}
        className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-stretch lg:space-x-4"
      >
        <div className="border-4 border-blue-600 rounded-xl  p-6 md:w-2/3 lg:w-1/3 space-y-2">
          <h4 className="font-semibold text-xl text-gray-600">Βήμα 1</h4>
          <p className="text-sm text-gray-400 leading-7">
            Επικοινωνείτε και δηλώνετε ενδιαφέρον για την προκήρυξη που έχετε
            δει! Η ομάδα μας διαβάζει με προσοχή την ανακοίνωση, τις θέσεις και
            τα απαιτούμενα προσόντα. Σας ενημερώνει εάν έχετε όλα τα απαραίτητα
            στοιχεία και ζητάει τα δικαιολογητικά που χρειάζονται.
          </p>
        </div>
        <div className="border-4 border-blue-600 rounded-xl p-6 md:w-2/3 lg:w-1/3 space-y-2">
          <h4 className="font-semibold text-xl text-gray-600">Βήμα 2</h4>
          <p className="text-sm text-gray-400 leading-7">
            Συγκεντρώνετε όλα τα δικαιολογητικά που έχουν ζητηθεί, τα στέλνετε
            στο e-mail μας σε σωστή μορφή και προεξοφλείτε την υπηρεσία. Ο
            συνεργάτης που έχει αναλάβει την αίτηση ελέγχει αν τα έγγραφα είναι
            σωστά και σας ενημερώνει.
          </p>
        </div>
        <div className="border-4 border-blue-600 rounded-xl p-6 md:w-2/3 lg:w-1/3 space-y-2">
          <h4 className="font-semibold text-xl text-gray-600">Βήμα 3</h4>
          <p className="text-sm text-gray-400 leading-7">
            Εντός της προθεσμίας υποβολής αιτήσεων που έχει ανακοινωθεί, ο
            συνεργάτης μας συμπληρώνει την αίτησή σας. Μόλις αυτή υποβληθεί
            επιτυχώς, λαμβάνετε ειδοποίηση στο προσωπικό σας e-mail, αντίγραφο
            αυτής, καθώς και απόδειξη πληρωμής για την υπηρεσία.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
