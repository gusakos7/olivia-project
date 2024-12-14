import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 flex flex-col justify-center p-4">
      {/* CONTACT SECTION */}
      <div className="container mx-auto px-2 lg:px-12 flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between border-b border-gray-500">
        {/* BOX 1 */}
        <div className="w-full border-b md:border-b-0 border-gray-500 flex flex-col justify-center items-center md:items-stretch md:flex-row  md:h-full md:border-r p-4 md:p-8 space-y-10 md:space-y-0 md:space-x-6">
          {/* Icon */}
          <div className="md:flex md:items-center">
            <Phone className="text-orange-400 w-10 h-10 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col space-y-4 md:justify-center md:space-y-2">
            {/* Title */}
            <h4 className="font-bold text-orange-400">Καλέστε μας</h4>

            {/* Text */}
            <p className="text-center space-y-1 font-mono text-white">
              2102102102
            </p>
          </div>
        </div>
        {/* BOX 2 */}
        <div className="w-full border-b md:border-b-0 border-gray-500 flex flex-col justify-center items-center md:items-stretch md:flex-row  md:h-full md:border-r p-4 md:p-8 space-y-10 md:space-y-0 md:space-x-6">
          {/* Icon */}
          <div className="md:flex md:items-center">
            <Mail className="text-orange-400 w-10 h-10 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col space-y-4 md:justify-center md:space-y-2">
            {/* Title */}
            <h4 className="font-bold text-orange-400">Στείλτε μας email</h4>

            {/* Text */}
            <p className="text-center space-y-1 font-mono text-white">
              hello@people.com
            </p>
          </div>
        </div>
        {/* BOX 3 */}
        <div className="w-full border-gray-500 flex flex-col justify-center items-center md:items-stretch md:flex-row  md:h-full p-4 md:p-8 space-y-10 md:space-y-0 md:space-x-6">
          {/* Icon */}
          <div className="md:flex md:items-center">
            <MapPin className="text-orange-400 w-10 h-10 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col space-y-4 md:justify-center md:space-y-2">
            {/* Title */}
            <h4 className="font-bold text-orange-400">Επισκεφθείτε μας</h4>

            {/* Text */}
            <p className="text-center space-y-1 font-mono text-white">
              Διευθυνση, 23
            </p>
          </div>
        </div>
      </div>
      {/* INFO SECTION */}
      <div className="container mx-auto px-2 lg:px-12 m-2 border-b border-gray-500 flex flex-col items-center md:flex-row md:justify-between py-16 md:py-8 md:space-x-12">
        {/* Logo */}
        <div className="p-4 my-4 md:my-0 bg-white rounded-lg shadow cursor-pointer">
          <Link href={"/"}>MY LOGO BABE</Link>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:gap-4 ">
          {/* BOX 1 */}
          <nav className="space-y-4 p-4">
            {/* Title */}
            <h4 className="font-bold text-orange-400 text-lg">Μετάβαση σε</h4>
            <ul className="text-white space-y-1">
              <li className="hover:text-orange-400 flex items-center justify-start">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/aitiseis"}>Υπηρεσία Αιτήσεων ΑΣΕΠ</Link>
              </li>
              <li className="hover:text-orange-400 flex items-center">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/mitroo"}>Υπηρεσία Μητρώων ΑΣΕΠ</Link>
              </li>
              <li className="hover:text-orange-400 flex items-center ">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/"}>Υπηρεσία Ενημερώσεων ΑΣΕΠ</Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4 p-4">
            {/* Title */}
            <h4 className="font-bold text-orange-400 text-lg">Χρήσιμα Links</h4>
            <ul className="text-white space-y-1">
              <li className="hover:text-orange-400 flex items-center justify-start">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/aitiseis"}>Επικοινωνία</Link>
              </li>
              <li className="hover:text-orange-400 flex items-center">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/mitroo"}>Όροι χρήσης</Link>
              </li>
              <li className="hover:text-orange-400 flex items-center ">
                <ChevronRight className="w-5 h-5 font-semibold text-orange-400 mr-4" />
                <Link href={"/"}>Πολιτική Απορρήτου</Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4 p-4">
            {/* Title */}
            <h4 className="font-bold text-orange-400 text-lg">Newsletter</h4>
            <p className="text-white">Δηλώστε το email σας για επικοινωνία!</p>
          </nav>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="container mx-auto px-2 lg:px-12 flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between text-white font-light py-4">
        <p>&#169; 2024 Copyrights reserved.</p>
        <p>Βιογραφικά υπηρεσίες ΑΣΕΠ</p>
      </div>
    </footer>
  );
};
