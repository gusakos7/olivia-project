import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight } from "lucide-react";

export const FormSection = () => {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4 lg:px-12 space-y-12 flex flex-col xl:flex-row xl:space-y-0">
        <div className="max-w-lg lg:w-1/2 mx-auto xl:my-auto space-y-2">
          <h4 className="text-center text-lg md:text-2xl lg:text-4xl font-semibold text-orange-400">
            Στοιχεία Επικοινωνίας για την Υπηρεσία Αιτήσεων ΑΣΕΠ
          </h4>
          <p className="text-center text-white text-sm md:text-base leading-8">
            Αναλαμβάνουμε να σας καλέσουμε εντός 2 ωρών ( σε εργάσιμο ωράριο,
            Δευτέρα – Παρασκευή 10:00 – 20:00 ) σχετικά με το αίτημα σας!
          </p>
        </div>
        <div className="w-full px-4  mx-auto space-y-8 lg:w-2/3 xl:w-1/2">
          <h4 className="text-2xl text-center md:text-4xl text-orange-400 font-semibold">
            Υπηρεσίες Αιτήσεων
          </h4>
          <form action="" className="flex flex-col space-y-4">
            <div className="flex flex-col w-full">
              <Label className="text-white mb-2" htmlFor="name">
                Ονοματεπώνυμο
              </Label>
              <Input
                className="bg-white rounded-full py-8 text-xl px-4"
                type="text"
                placeholder="Ονοματεπώνυμο"
                id="name"
              />
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="flex flex-col w-full">
                <Label className="text-white mb-2" htmlFor="phoneNumber">
                  Τηλέφωνο
                </Label>
                <Input
                  className="bg-white rounded-full py-8 text-xl px-4"
                  type="text"
                  placeholder="Τηλέφωνο"
                  id="phoneNumber"
                />
              </div>
              <div className="flex flex-col w-full">
                <Label className="text-white mb-2" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="bg-white rounded-full py-8 text-xl px-4"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              <div className="flex flex-col w-full">
                <Label className="text-white mb-2" htmlFor="prokiriksi">
                  Προκήρυξη
                </Label>
                <Input
                  className="bg-white rounded-full py-8 text-xl px-4"
                  type="text"
                  placeholder="Προκήρυξη"
                  id="prokiriksi"
                />
              </div>
              <div className="flex flex-col w-full">
                <Label className="text-white mb-2" htmlFor="email">
                  Κωδικός Θέσης Ενδιαφέροντος
                </Label>
                <Input
                  className="bg-white rounded-full py-8 text-xl px-4"
                  type="email"
                  placeholder="Κωδικός"
                  id="email"
                />
              </div>
            </div>
            <h5 className="text-white">Ενδιαφέρομαι επιπλέον:</h5>
            <div className="space-x-2  text-white flex items-center">
              <Checkbox className="bg-white" id="mitroo" />
              <Label className="text-lg" htmlFor="mitroo">
                Υπηρεσία Μητρώου ΑΣΕΠ
              </Label>
            </div>
            <div className="space-x-2  text-white flex items-center">
              <Checkbox className="bg-white" id="enimerosi" />
              <Label className="text-lg" htmlFor="enimerosi">
                Υπηρεσία Ενημέρωσης ΑΣΕΠ
              </Label>
            </div>
            <div className="space-x-2  text-white flex items-center">
              <Checkbox className="bg-white" id="eggrafi" />
              <Label className="text-lg" htmlFor="eggrafi">
                Εγγραφή στη βάση Πελατών
              </Label>
            </div>
            <Button className="flex text-white bg-orange-400 text-lg rounded-full py-6 hover:bg-orange-600">
              <ArrowLeftRight />
              Αποστολή
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
