import OfferCard from "@/components/OfferCard";
import { offers, contact } from "@/data/siteData";

export const metadata = {
  title:
    "Spa Offers in Hadapsar Pune | Best Massage Spa Deals | Bliss Spa",
  description:
    "Discover exclusive spa and massage offers at Bliss Spa, Shop No. 43, Fortune Estates, Solapur Rd, Indraprashtha Society, Hadapsar, Pune. Enjoy luxury body massage, Thai massage, deep tissue massage, couple spa packages, aromatherapy, wellness therapies, and premium spa experiences at affordable prices.",

  keywords: [
    "spa near me",
    "spa in Hadapsar Pune",
    "massage spa Hadapsar",
    "body spa near me",
    "massage spa near me",
    "couple spa in Hadapsar",
    "best spa Hadapsar",
    "best massage spa Pune",
    "luxury spa Pune",
    "luxury massage spa",
    "body massage in Hadapsar",
    "Thai massage Pune",
    "deep tissue massage",
    "sports massage",
    "aromatherapy spa",
    "spa wellness center",
    "massage center Hadapsar",
    "spa & massage services",
    "body massage center",
    "spa experience",
    "massage near me",
    "wellness spa Pune",
    "luxury spa near me",
    "best body spa Pune",
    "couples spa Pune",
    "nearest spa centre",
    "spa days near me",
    "massage therapy",
  ],

  openGraph: {
    title: "Luxury Spa Offers | Bliss Spa Hadapsar Pune",
    description:
      "Book premium massage therapies and exclusive spa offers at Bliss Spa, Hadapsar Pune.",
    type: "website",
  },

  alternates: {
    canonical: "/offers",
  },
};

export default function OffersPage() {
  return (
    <main className="bg-[#F8F5F2]">

      {/* Hero Section */}


      {/* Offers */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex items-center gap-6">

            <div className="h-px flex-1 bg-stone-400"></div>

            <h2 className="text-center text-4xl font-semibold uppercase tracking-[5px] text-blue-600">
              Exclusive Massage & Spa Offers
            </h2>

            <div className="h-px flex-1 bg-stone-400"></div>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                contact={contact}
              />
            ))}
          </div>

        </div>

      </section>

      {/* SEO Content */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="mb-6 text-4xl font-bold text-blue-600">
            Best Spa & Massage Offers in Hadapsar, Pune
          </h2>

          <p className="leading-8 text-gray-700">
            Bliss Spa is one of the leading luxury wellness destinations
            in Hadapsar, Pune. Whether you are searching for a spa near me,
            body massage near me, luxury spa in Pune, Thai massage,
            deep tissue massage, sports massage, aromatherapy, couple spa,
            or premium wellness therapies, we provide personalized treatments
            in a peaceful and hygienic environment.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            Conveniently located at <strong>Shop No. 43, Fortune Estates,
            Solapur Rd, Indraprashtha Society, Hadapsar,
            Pune, Maharashtra 411028</strong>,
            our experienced therapists deliver premium massage services using
            authentic techniques and high-quality essential oils to help you
            relax, recover, and rejuvenate.
          </p>

          <h3 className="mt-10 text-2xl font-semibold text-blue-600">
            Our Popular Spa Services
          </h3>

          <ul className="mt-6 grid gap-3 md:grid-cols-2 text-gray-700">
            <li>✓ Swedish Massage</li>
            <li>✓ Thai Massage</li>
            <li>✓ Deep Tissue Massage</li>
            <li>✓ Couple Spa Packages</li>
            <li>✓ Aroma Therapy</li>
            <li>✓ Body Polish</li>
            <li>✓ Hot Stone Massage</li>
            <li>✓ Luxury Body Spa</li>
            <li>✓ Sports Massage</li>
            <li>✓ Wellness Therapies</li>
          </ul>

        </div>
      </section>

    </main>
  );
}