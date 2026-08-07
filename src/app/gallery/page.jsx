import GallerySlider from "@/components/GallerySlider";
import { galleryImages } from "@/data/siteData";

export const metadata = {
  title:
    "Spa Gallery | Bliss spa Hadapsar Pune | Luxury Massage & Wellness Centre",

  description:
    "Explore the Bliss spa gallery in Hadapsar, Pune. Discover our luxury massage rooms, couple spa suites, Thai massage, Swedish massage, aromatherapy, wellness treatments, premium interiors, and relaxing spa environment.",

  keywords: [
    "spa near me",
    "spa in Hadapsar Pune",
    "massage spa near me",
    "body spa near me",
    "luxury spa Pune",
    "couple spa Hadapsar",
    "best spa Hadapsar",
    "Thai massage Pune",
    "Swedish massage",
    "deep tissue massage",
    "massage centre Pune",
    "spa gallery",
    "wellness spa",
    "massage therapy",
    "body massage Pune",
    "spa experience",
    "massage spa Hadapsar",
    "best body spa Pune",
    "massage services Pune",
    "luxury massage spa",
  ],

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Bliss spa Gallery | Luxury Spa in Hadapsar Pune",
    description:
      "Browse our luxury spa gallery featuring elegant treatment rooms, premium interiors, couple spa suites, and professional massage therapies.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-[#F8F5F2]">
      {/* Gallery Slider */}
      <GallerySlider images={galleryImages} />

      {/* SEO Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-bold text-[#4B352B]">
            Luxury Spa & Massage Gallery in Hadapsar, Pune
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Welcome to the <strong>Bliss spa Gallery</strong>. Our gallery
            showcases beautifully designed treatment rooms, luxury massage
            suites, couple spa facilities, wellness therapy spaces, premium
            interiors, and a peaceful atmosphere crafted to deliver an
            unforgettable spa experience. Every corner of our spa is designed to
            provide comfort, elegance, and complete relaxation.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            Whether you're searching for a <strong>spa near me</strong>,
            <strong> body massage in Hadapsar</strong>,
            <strong> Thai massage</strong>,
            <strong> Swedish massage</strong>,
            <strong> deep tissue massage</strong>,
            <strong> aromatherapy massage</strong>,
            <strong> couple spa</strong>, or a
            <strong> luxury wellness center in Pune</strong>, Bliss spa
            offers exceptional services by experienced therapists in a hygienic,
            tranquil, and luxurious environment.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            Browse our gallery to explore our premium spa rooms, elegant
            interiors, soothing ambiance, private couple massage suites, and
            professional wellness facilities that make Bliss spa one of the
            preferred luxury spa destinations in Hadapsar, Pune.
          </p>

          {/* Address Card */}
          <div className="mt-12 rounded-2xl border border-stone-200 bg-[#F8F5F2] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#4B352B]">
              Visit Bliss spa
            </h3>

            <p className="mt-5 leading-8 text-gray-700">
              <strong>Address:</strong>
              <br />
              Shop No. 43,
              <br />
              Fortune Estates,
              <br />
              Solapur Road,
              <br />
              Indraprashtha Society,
              <br />
              Hadapsar,
              <br />
              Pune, Maharashtra 411028
            </p>

            <p className="mt-5 leading-8 text-gray-700">
              Conveniently located on Solapur Road in Hadapsar, Bliss spa is
              easily accessible from Magarpatta City, Amanora Park Town,
              Fatima Nagar, Sasane Nagar, Kharadi, Mundhwa, and nearby areas.
              Visit us for a rejuvenating spa experience in a luxurious and
              peaceful setting.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}