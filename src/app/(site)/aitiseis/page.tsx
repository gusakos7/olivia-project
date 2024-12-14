import * as motion from "framer-motion/client";
import { Hero } from "./_components/hero";
import { DiadikasiaAitisis } from "./_components/diadikasia-aitisis";
import { SimplironeteSection } from "./_components/simplironete-section";
import { GoogleSection } from "./_components/google-section";
import { FAQSection } from "./_components/faq-section";
import { FormSection } from "./_components/form-section";
import { InfoSection } from "./_components/info-section";

export default function AitiseisPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {/* Title */}
      <section className="bg-blue-700">
        <h1 className="font-semibold text-5xl text-orange-400 container mx-auto px-2 lg:px-12 py-8 text-center">
          Υπηρεσίες Αιτήσεων ΑΣΕΠ
        </h1>
      </section>

      {/* Hero */}
      <Hero />

      {/* ΔΙΑΔΙΚΑΣΙΑ ΑΙΤΗΣΗΣ */}
      <DiadikasiaAitisis />

      {/* Συμπλγρωνετε συχνα αιτησεις για το ΑΣΕΠ */}
      <SimplironeteSection />

      {/* Google review */}
      <GoogleSection />

      {/* FAQ */}
      <FAQSection />

      {/* Form section */}
      <FormSection />

      {/* Info */}
      <InfoSection />
    </motion.div>
  );
}
