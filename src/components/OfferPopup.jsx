"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle } from "lucide-react";
import { popupOffer, contact } from "@/data/siteData";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpen(true);
    }, 30000);

    const first = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(first);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

      <div className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-2xl animate-[popup_.4s_ease]">

        {/* Close */}

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:rotate-90"
        >
          <X className="text-red-500" />
        </button>

        {/* Badge */}

        <div className="absolute left-5 top-5 z-20 rounded-full bg-sky-500 px-5 py-2 font-bold text-white">
          {popupOffer.badge}
        </div>

        {/* Image */}

        <div className="relative h-72">
          <Image
            src={popupOffer.image}
            alt="Offer"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}

        <div className="p-7">

          <p className="text-sm font-semibold tracking-[6px] text-sky-500 uppercase">
            {popupOffer.heading}
          </p>

          <h2 className="mt-3 text-5xl font-serif text-sky-500">
            {popupOffer.title}
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            {popupOffer.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            {/* Call */}

            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-sky-500 py-4 font-semibold text-white transition hover:scale-105"
            >
              <Phone className=" animate-[shake_1s_ease-in-out_infinite]" />
              <span className="">
                Call
              </span>
            </a>

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              className="flex items-center justify-center gap-3 rounded-2xl   bg-[#18B84C] py-4 font-semibold text-white transition hover:scale-105"
            >
              <FaWhatsapp className=" animate-[shake_1s_ease-in-out_infinite]" />

              <span className=" ">
                WhatsApp
              </span>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}