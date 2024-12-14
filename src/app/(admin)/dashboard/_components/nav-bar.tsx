"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <Input type="text" placeholder="Search..." className="w-64" />
          <Button variant="default">Search</Button>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-black">
            Services
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
