import Image from "next/image";
import { aboutData } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section className="bg-[#faf7f2] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          <div className="relative">
            <Image
              src={aboutData.image}
              alt={aboutData.title}
              width={550}
              height={650}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-sky-500 p-6 text-black shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm uppercase tracking-widest">
                Years Experience
              </p>
            </div>
          </div>

          <div>

            <span className="rounded-full  px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              About Our Spa
            </span>

            <h2 className="mt-6 text-5xl font-bold text-blue-600">
              {aboutData.title}
            </h2>

            <p className="mt-6 text-xl leading-9 text-black">
              {aboutData.subtitle}
            </p>

            <p className="mt-8 whitespace-pre-line leading-8 text-black">
              {aboutData.description}
            </p>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-28 grid gap-16 lg:grid-cols-2">

          <div>
            <h3 className="text-4xl text-gray-600 font-bold">
              {aboutData.journeyTitle}
            </h3>

            <p className="mt-6 whitespace-pre-line leading-8 text-gray-600">
              {aboutData.journeyDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">

            {aboutData.features.map((item) => (
              <div
                key={item}
                className="rounded-lg border text-gray-500 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-sky-500 hover:text-white"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}