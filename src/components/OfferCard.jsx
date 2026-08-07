"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferCard({ offer, contact }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative aspect-[3875/5462] w-full overflow-hidden bg-gray-100">
        <Image
          src={offer.image}
          alt={offer.alt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <Link
          href={`tel:${contact.phone}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-[#9c6d4b]"
        >
          <Phone size={18} />
          Call Now
        </Link>

        <Link
          href={`https://wa.me/${contact.whatsapp}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(
            offer.title
          )}.`}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl border border-green-600 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </Link>
      </div>
    </article>
  );
}