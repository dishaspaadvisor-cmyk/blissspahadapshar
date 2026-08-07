"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/siteData";

export default function Navbar({ data }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src={data.logo}
            alt="Bliss spa"
            width={180}
            height={80}
            priority
            className="h-auto w-[140px] sm:w-[170px] lg:w-[190px]"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {data.links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-blue-700 transition hover:text-[#b88463]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop WhatsApp */}
          <a
            href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
              "Hello Bliss spa, I would like to book an appointment."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#1EA952]"
          >
            <FaWhatsapp
              size={18}
              className="animate-[shake_1.2s_ease-in-out_infinite]"
            />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-blue-700 transition hover:bg-gray-100 lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col border-t border-gray-100">

          {data.links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-gray-100 px-6 py-4 text-gray-700 transition hover:bg-gray-50 hover:text-[#b88463]"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile WhatsApp Button */}
          <div className="p-5">
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                "Hello Bliss spa, I would like to book an appointment."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-semibold text-white shadow-lg transition hover:bg-[#1EA952]"
            >
              <FaWhatsapp
                size={18}
                className="animate-[shake_1.2s_ease-in-out_infinite]"
              />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}