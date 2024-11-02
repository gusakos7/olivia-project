import { Mail, MapPin, Phone } from "lucide-react";

export const BasicInfo = () => {
  return (
    <div className="bg-blue-600 text-sm ">
      <section className="container mx-auto px-2 lg:px-12 flex justify-between py-1 ">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-orange-400" />
            <span className="text-white">(+30) 699999999</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-orange-400" />
            <span className="text-white">Kapou sto argostoli </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-orange-400" />
          <span className="text-white">olive@press.com</span>
        </div>
      </section>
    </div>
  );
};
