import { AccordionDemo } from "@/components/accordion-demo";
import Image from "next/image";

export const FAQSection = () => {
  const accordionFAQ = [
    {
      trigger: "Δεν έχω ξανακάνει αίτηση, πως ξεκινάω;",
      text: "Μια τηλεφωνική επαφή μαζί μας θα σας δώσει άμεσα απαντήσεις για τα πρώτα βήματα που χρειάζεται να ακολουθήσετε.",
    },
    {
      trigger: "Μπορώ να κάνω αίτηση σε όλες τις προκηρύξεις;",
      text: "Σας προτείνουμε να κάνετε αίτηση για θέσεις στις οποίες έχετε μεγαλύτερη πιθανότητα επιτυχίας σύμφωνα με τα προσόντα και τα μόριά σας.",
    },
    {
      trigger: "Αναλαμβάνετε εσείς την έκδοση των εγγράφων;",
      text: "Δεν αναλαμβάνουμε εμείς την έκδοση των εγγράφων αλλά σας εξηγούμε αναλυτικά πώς θα συγκεντρώσετε τα δικαιολογητικά και ποια από αυτά χρειάζονται μετάφραση ή επικύρωση.",
    },
  ];

  const accordionPayment = [
    {
      trigger: "Πόσο κοστίζει η κάθε αίτηση;",
      text: "Η αίτηση για Μόνιμο Προσωπικό κοστίζει 40 ευρώ για εγγεγραμμένους πελάτες και 55 ευρώ για μη εγγεγραμμένους. Επίσης, η αίτηση για Συμβάσεις Ορισμένου Χρόνου κοστίζει 70 ευρώ για εγγεγραμμένους πελάτες και 100 ευρώ για μη εγγεγραμμένους.",
    },
    {
      trigger: "Πότε γίνεται η πληρωμή;",
      text: "Μετά την τηλεφωνική επικοινωνία με την ομάδα μας και την ενημέρωση για τα απαραίτητα δικαιολογητικά γίνεται προεξόφληση της αίτησης. Η πολιτική αυτή εξαλείφει τη πιθανή αμέλεια ή καθυστέρηση πληρωμής που μπορεί να προκύψει και διατηρεί το εργασιακό μας κόστος στο ελάχιστο.",
    },
    {
      trigger: "Ποιες είναι οι μέθοδοι πληρωμής;",
      text: "Με τραπεζική κατάθεση (Alpha Bank, Eurobank, Εθνική, Πειραιώς). Με μετρητά ή πιστωτική/χρεωστική κάρτα στο γραφείο μας, κατόπιν ραντεβού.",
    },
  ];

  const accordionProcess = [
    {
      trigger:
        "Είδα μια προκήρυξη που με ενδιαφέρει αλλά λήγει αύριο, την αναλαμβάνετε;",
      text: "Καθώς το σύστημα του ΑΣΕΠ αντιμετωπίζει συχνά τεχνικά ζητήματα και οφείλουμε να είμαστε συνεπείς στην υποβολή της αίτησης, δεν αναλαμβάνουμε να την υποβάλουμε τελευταία στιγμή!",
    },
    {
      trigger:
        "Πληρώνετε εσείς το παράβολο για τις αιτήσεις μόνιμου προσωπικού;",
      text: "Μέσω των κωδικών taxisnet εκδίδουμε το e-παράβολο ώστε να είναι έγκυρο και στη συνέχεια σας ενημερώνουμε να το πληρώσετε εσείς.",
    },
    {
      trigger: "Πώς είμαι σίγουρος ότι η αίτηση έχει υποβληθεί;",
      text: "Μόλις ο συνεργάτης ολοκληρώσει την υποβολή της αίτησής σας, σας αποστέλλει στο e-mail που έχετε δηλώσει αντίγραφο της αίτησης σε μορφή pdf.",
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-12 py-12 space-y-12">
      <div className="flex flex-col space-y-4 lg:flex-row-reverse lg:justify-between lg:space-y-0">
        <div>
          <Image
            className="object-contain"
            src={"/images/faq.jpg"}
            alt="asep-website"
            width={1000}
            height={801}
          />
        </div>
        <div className="flex flex-col space-y-4 w-full">
          <h3 className="text-2xl text-gray-700">Σχετικές Ερωτήσεις</h3>
          <p className="text-sm text-gray-400 leading-7 w-3/4 lg:w-full">
            Παρακάτω εμφανίζονται ενδεχόμενες απορίες σχετικά με την Υπηρεσία
            Αιτήσεων ΑΣΕΠ. Μη διστάσετε να επικοινωνήσετε μαζί μας για οτιδήποτε
            άλλο σας απασχολεί!
          </p>
          <AccordionDemo content={accordionFAQ} />
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4">
        <div className="flex flex-col space-y-4 w-full">
          <h4 className="text-xl font-semibold text-gray-700">
            Πληροφορίες σχετικά με την πληρωμή
          </h4>
          <AccordionDemo content={accordionPayment} />
        </div>
        <div className="flex flex-col space-y-4 w-full">
          <h4 className="text-xl font-semibold text-gray-700">
            Πληροφορίες σχετικά με την πληρωμή
          </h4>
          <AccordionDemo content={accordionProcess} />
        </div>
        {/* <div className="flex flex-col space-y-4 w-full">
          <h4 className="text-xl font-semibold text-gray-700">Διαδικασία</h4>
          <AccordionDemo content={accordionProcess} />
        </div> */}
      </div>
    </section>
  );
};
