import { galleryImages } from "@/data/galleryImages";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Hero Seciton */}
      <HeroSection src="/images/cover_image_1.jpg" alt="Gallery Cover" />
      {/* gallery section */}
      <section className="w-full">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">View</span> Full Gallery
        </h2>
        <p className="max-w-2xl pb-6 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Browse a stunning collection of photographs capturing the beauty and
          energy of our travels. Get inspired for your next adventure by seeing
          the sights through the lens of our visitors.
        </p>
        {/* using tailwind to create a responsive grid */}
        {/* <div className="grid grid-cols-2 p-4 gap-4 rounded-2xl bg-[#d6ccb6] md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-36 md:h-48 lg:h-56 rounded-xl overflow-hidden bg-indigo group shadow-md hover:ring hover:ring-saffron hover:-translate-y-1 transition-all cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div> */}

        {/* Bento grid layout alternative (Defined in global.css) */}
        <div className="grid bento-grid p-4 gap-4 lg:p-6 lg:gap-6 mx-auto rounded-2xl bg-[#d6ccb6] max-w-[450px] md:max-w-[750px] lg:max-w-[1000px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative rounded-xl overflow-hidden bg-indigo border border-white group shadow-md hover:ring hover:ring-saffron hover:-translate-y-1 transition-all cursor-pointer"
              style={{ gridArea: image.id }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
