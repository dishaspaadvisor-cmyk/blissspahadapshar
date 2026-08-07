import ContactCard from "@/components/ContactCard";

export const metadata = {
  title:
    " Bliss Spa  | Luxury Spa in Hadapsar Pune",

  description:
    "Bliss Spa , Hadapsar Pune for luxury spa treatments including Swedish Massage, Thai Massage, Deep Tissue Massage, Couple Spa, Aroma Therapy, Hot Stone Massage, Body Spa, and premium wellness therapies. Call or WhatsApp now for instant booking.",

  keywords: [
    "Bliss Spa  Contact",
    "Spa in Hadapsar Pune",
    "Massage Centre Hadapsar",
    "Luxury Spa Pune",
    "Body Spa Hadapsar",
    "Thai Massage Pune",
    "Swedish Massage Hadapsar",
    "Deep Tissue Massage Pune",
    "Couple Spa Pune",
    "Massage Spa Near Me",
    "Spa Near Me",
    "Luxury Massage Spa Pune",
    "Body Massage Hadapsar",
    "Wellness Spa Pune",
    "Massage Therapy Pune",
    "Aroma Therapy Pune",
    "Hot Stone Massage Pune",
    "Sports Massage Pune",
    "Best Spa Hadapsar",
    "Spa Booking Pune",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Bliss Spa  | Luxury Spa in Hadapsar Pune",
    description:
      "Book your luxury spa experience at Bliss Spa , Hadapsar Pune. Contact us today for premium massage therapies and wellness treatments.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}

      <section className="bg-[#F8F5F2] pt-32 pb-20 text-blue-600">
        <div className="mx-auto max-w-7xl px-6 text-center">



          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Contact Bliss Spa
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-700">
            Experience complete relaxation at <strong>Bliss Spa </strong>,
            one of the leading luxury wellness destinations in
            <strong> Hadapsar, Pune</strong>. Our professional therapists
            specialize in Swedish Massage, Thai Massage, Deep Tissue Massage,
            Couple Spa, Aroma Therapy, Hot Stone Massage, Sports Massage,
            Body Spa Treatments, and personalized wellness therapies designed
            to rejuvenate your body and mind.

            <br />
            <br />

          </p>

        </div>
      </section>

      {/* Contact Form */}

      <ContactCard />

      {/* SEO Content */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-4xl font-bold text-blue-600">
            Visit Bliss Spa  in Hadapsar Pune
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Whether you're searching for a <strong>spa near me</strong>,
            <strong> massage spa in Hadapsar</strong>,
            <strong> body massage near me</strong>,
            <strong> luxury spa in Pune</strong>, or a
            <strong> couple spa experience</strong>, Bliss Spa  provides
            premium wellness services with exceptional hospitality and highly
            trained therapists.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            We are committed to delivering a relaxing and luxurious experience
            through authentic massage techniques, premium essential oils,
            private treatment rooms, and personalized therapies tailored to
            your wellness needs.
          </p>


        </div>
      </section>
    </>
  );
}