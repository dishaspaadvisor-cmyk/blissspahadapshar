"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function GallerySlider({ images }) {
  return (
    
    <section className="bg-[#F8F3ED] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14 flex items-center gap-5">
            
          <div className="h-px flex-1 bg-stone-400" />
          <h2 className="text-3xl font-semibold uppercase tracking-[4px] text-blue-600">
            Gallery
          </h2>
          <div className="h-px flex-1 bg-stone-400" />
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="overflow-hidden rounded-sm">
                <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
