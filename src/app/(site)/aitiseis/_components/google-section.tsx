import Image from "next/image";
import Link from "next/link";

export const GoogleSection = () => {
  return (
    <section className="bg-sky-100 py-12">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col items-center space-y-8">
        <h2 className="text-4xl font-bold text-center">
          Δείτε τι λένε οι πελάτες μας στην Google!
        </h2>
        <nav className="">
          <Link
            href={"#"}
            className="text-3xl font-semibold text-purple-600 underline"
          >
            Αξιολόγηση
          </Link>
        </nav>
        <Image
          className="object-contain w-1/2 md:w-1/4 lg:w-1/5"
          src={"/images/google-logo-w.webp"}
          alt="asep-website"
          width={1200}
          height={406}
        />
      </div>
    </section>
  );
};
