"use client";

import { useState } from "react";
import SSAFooter from "@/assets/SSAFooter.webp";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "about us", href: "/about-us" },
  { label: "matches", href: "/matches" },
  { label: "programs", href: "/programs" },
  { label: "coaches", href: "/coaches" },
  { label: "amenities", href: "/amenities" },
  { label: "events", href: "/events" },
  { label: "news", href: "/news" },
  { label: "blogs", href: "/blogs" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-5000 border-b">
      <div className="px-4 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={SSAFooter} alt="SSAHeader" width={90} height={30} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="capitalize font-normal text-base hover:text-[#99b81c] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex border-[#99b81c] border px-6 py-2 text-[#99b81c] rounded-full text-center hover:bg-[#99b81c] hover:text-white transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md border border-[#99b81c]"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={22} color="#99b81c" />
          ) : (
            <Menu size={22} color="#99b81c" />
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 bg-white border rounded-xl p-4 shadow-sm">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="capitalize text-base py-2 border-b last:border-b-0"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full border-[#99b81c] border py-3 text-[#99b81c] rounded-full text-center hover:bg-[#99b81c] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
