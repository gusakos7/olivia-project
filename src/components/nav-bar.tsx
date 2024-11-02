"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  const LINKS = [
    { label: "Αρχική", href: "/" },
    { label: "Αιτήσεις", href: "/aitiseis" },
    { label: "Μητρώο", href: "/mitroo" },
  ];
  return (
    <section className="container px-2 lg:px-12 mx-auto flex items-center justify-between py-4">
      {/* Logo */}
      <div className="p-4 rounded-lg shadow flex cursor-pointer">
        MY LOGO BABE
      </div>
      <nav className="flex space-x-4">
        {LINKS.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={cn(
              "text-base px-2 py-1 hover:bg-gray-100 hover:rounded  transition-all duration-300",
              pathname === link.href ? " text-orange-400 " : ""
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
};
