import { TableDemo } from "@/components/table-demo";
import * as motion from "framer-motion/client";

export default function MitrooPage() {
  return (
    <motion.div
      // className="container mx-auto px-2 lg:px-2 my-8"
      className="container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="bg-red-600">sd</div>
      <h1 className="text-4xl text-center mb-12">why not a table?</h1>
      <TableDemo />
    </motion.div>
  );
}
