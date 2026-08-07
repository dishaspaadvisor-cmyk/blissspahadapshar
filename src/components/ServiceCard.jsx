"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceCard({ service, contact }) {
  return (
    <article className="group overflow-hidden rounded-2xl border  bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition object-top duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {service.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-blue-600">
          {service.name}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-blue-600">
          {service.description}
        </p>

        {/* Duration */}
        <div className="mt-5 flex items-center gap-2 text-gray-500">
          <Clock size={18} />
          <span>{service.duration}</span>
        </div>



        {/* Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link
            href={`tel:${contact.phone}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-sky-500"
          >
            <Phone size={18} />
            Call Now
          </Link>

          <Link
            href={`https://wa.me/${contact.whatsapp}?text=Hi%20Royal%20Oak%20Spa,%20I%20want%20to%20book%20${encodeURIComponent(
              service.name
            )}.`}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-xl border border-green-600 px-4 py-3 font-medium text-green-700 transition hover:bg-green-600 hover:text-white"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}