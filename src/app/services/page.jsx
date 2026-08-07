import ServiceCard from "@/components/ServiceCard";
import { services, contact } from "@/data/siteData";

export const metadata = {
  title: "Spa Services | Bliss Spa Hadapsar Pune",
  description:
    "Discover luxury spa and massage services at Bliss Spa Hadapsar Pune including Swedish Massage, Thai Massage, Balinese Massage, Couple Spa, Aromatherapy, Hot Stone Massage, Body Scrub and more.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF7F4]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E8D3C4] to-[#F7ECE5] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#B68663] shadow">
            Premium Wellness
          </span>

          <h1 className="mt-6 text-4xl font-bold text-blue-600 md:text-6xl">
            Our Spa Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Relax, and refresh yourself with our luxurious spa
            therapies at <strong>Bliss Spa</strong>, the premier luxury massage and wellness centre in <strong>Hadapsar, Pune</strong>. 
            Our experienced therapists provide personalized treatments including Swedish Massage, Thai Massage, Deep Tissue Massage, 
            Couple Spa, Aromatherapy, and Hot Stone Therapy designed to improve your physical and mental well-being.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-blue-600 md:text-5xl">
              Explore Our services
            </h2>

   
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                contact={contact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Relax?
          </h2>

          <p className="mt-4 text-lg text-white/90">
            Book your spa appointment today and enjoy a luxurious wellness
            experience at Bliss Spa Hadapsar Pune.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contact.phone}`}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-[#B68663] transition hover:bg-gray-100"
            >
               Call Now
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Bliss%20Spa,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#B68663]"
            >
               WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}