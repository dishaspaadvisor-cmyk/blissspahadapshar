import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { heroData, offers, services } from "@/data/siteData";
import {  contact } from "@/data/siteData";
import GallerySlider from "@/components/GallerySlider";
import { galleryImages } from "@/data/siteData";
import OfferCard from "@/components/OfferCard";
import ContactCard from "@/components/ContactCard";
import GoogleReviews from "@/components/GoogleReviews";
import Image from "next/image";
import { reviews } from "@/data/siteData";
import AboutSection from "./about/page";


export default function Home() {
  return (
        <>
         <Hero data={heroData} />
               {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-blue-600 md:text-5xl">
              Explore Our services
            </h2>

            <p className="mt-4 text-gray-600">
              Choose from our premium massage and wellness therapies.
            </p>
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
      <AboutSection/>

       <GallerySlider images={galleryImages} />
           
   
      <section className="bg-[#F8F5F2] py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-14 flex items-center gap-6">
            <div className="h-px flex-1 bg-stone-400"></div>

            <h2 className="text-center text-4xl font-semibold uppercase tracking-[5px] text-blue-600">
              Special Offers
            </h2>

            <div className="h-px flex-1 bg-stone-400"></div>
          </div>

          {/* Offer Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

   
             {/* Contact Section */}
      <ContactCard />

      <GoogleReviews reviews={reviews} />


        
        </>
  );
}
