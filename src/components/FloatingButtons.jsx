"use client";

import { Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/siteData";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-[999] flex flex-col gap-4">

        {/* Call Button */}
        <a
          href={`tel:${contact.phone}`}
          aria-label="Call Bliss spa"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition hover:scale-110"
        >
          {/* Ping */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-30"></span>

          {/* Shake */}
          <Phone
            size={28}
            className="relative z-10 animate-[shake_1s_ease-in-out_infinite]"
          />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Bliss spa"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        >
          {/* Ping */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>

          {/* Shake */}
          <FaWhatsapp
            size={30}
            className="relative z-10 animate-[shake_1s_ease-in-out_infinite]"
          />
        </a>

      </div>
    </>
  );
}