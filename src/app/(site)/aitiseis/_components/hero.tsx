import { CircleCheck, TriangleAlert } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const unorderList = [
    {
      icon: <CircleCheck className="text-orange-400" />,
      text: "Αξιόπιστη Υποβολή Αιτήσεων ΑΣΕΠ",
    },
    {
      icon: <CircleCheck className="text-orange-400" />,
      text: "Ακρίβεια στη δήλωση των απαιτούμενων προσόντων",
    },
    {
      icon: <CircleCheck className="text-orange-400" />,
      text: "Εντός προθεσμίας",
    },
    {
      icon: <CircleCheck className="text-orange-400" />,
      text: "Επιλογή θέσεων με μεγαλύτερη πιθανότητα επιτυχίας",
    },
    {
      icon: <TriangleAlert className=" text-orange-400" />,
      text: "ΔΕΝ είναι απαραίτητο το Μητρώο ΑΣΕΠ για να κάνετε αιτήσεις. Καλέστε μας για λεπτομέρειες",
    },
  ];

  return (
    <section className="container mx-auto px-2 lg:px-12 py-12 flex flex-col items-center lg:flex-row space-y-8 lg:space-y-0  lg:space-x-12">
      {/* LEFT */}
      <div className="flex px-4 lg:w-1/2 justify-between lg:px-12 m-auto">
        <Image
          priority
          className="rounded-lg border shadow-2xl object-contain"
          src={"/images/asep-site.png"}
          alt="asep-website"
          width={2530}
          height={1599}
        />
      </div>
      {/* RIGHT */}
      <div className="lg:w-1/2 flex flex-col space-y-6 px-4">
        <h2 className="text-2xl">
          Αναλαμβάνουμε την Υποβολή της Αίτησης σας στο ΑΣΕΠ!
        </h2>
        <p className="text-sm text-gray-500 font-semibold leading-7">
          Τα biografika.gr αναλαμβάνουν την αίτησή σας σε διάφορες προκηρύξεις
          προσωπικού, μόνιμου αλλά και ορισμένου χρόνου, με υπευθυνότητα,
          συνέπεια, και, κυρίως, χωρίς λάθη!
        </p>
        <ul className="space-y-4">
          {unorderList.map((el, idx) => (
            <li
              key={idx}
              className="flex items-center leading-7 space-x-4 justify-start"
            >
              <div className="">{el.icon}</div>
              <p className="text-gray-400">{el.text}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-gray-500 text-lg">
              Κόστος Αίτησης για μόνιμους (Κ):{" "}
              <span className="underline decoration-orange-400 text-orange-400">
                40 €
              </span>
            </h3>
            <h4 className="text-lg italic text-gray-400">
              (55 € για μη εγγεγραμμένους)
            </h4>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-gray-500 text-lg">
              Κόστος Αίτησης για ΣΟΧ (Ορισμένου Χρόνου):{" "}
              <span className="underline decoration-orange-400 text-orange-400">
                70 €
              </span>
            </h3>
            <h4 className="text-lg italic text-gray-400">
              (100 € για μη εγγεγραμμένους)
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
