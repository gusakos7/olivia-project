import { CalendarDemo } from "@/components/calendar-demo";
import { CardWithForm } from "@/components/card-with-form";

export default function AitiseisPage() {
  return (
    <div className="">
      <div className="container mx-auto px-2 lg:px-12 my-12">
        {/* Title */}
        <h1 className="font-medium text-5xl text-slate-900 text-center">
          Εδώ οι καλές οι αιτήσεις
        </h1>
        {/* Cards Containers */}
        <section className="p-8 mt-12 flex justify-between space-x-4">
          <CardWithForm />
          <CalendarDemo />
        </section>
      </div>
    </div>
  );
}
