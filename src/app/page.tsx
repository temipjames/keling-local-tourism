import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const popularSpots = destinations.filter(
    (item) => item.category === "popular",
  );
  const historySpots = destinations.filter(
    (item) => item.category === "history",
  );
  const natureSpots = destinations.filter((item) => item.category === "nature");

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Hero SEction */}
      <HeroSection src="/images/cover_image_7_cropped.jpg" alt="KelingKeling Cover" />
      {/* Section 1 */}
      <section className="w-full pb-6 mb-6">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">Discover</span> Popular Sites
        </h2>
        <p className="max-w-2xl pb-2 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Explore the most iconic landmarks and must-see destinations across the
          Smiling Coast. From bustling city centers to serene coastal retreats,
          there are the locations ever traveler loves.
        </p>
        <div className="relative w-full">
          <div className="w-full py-4 overflow-x-auto scroll-smooth no-scrollbar">
            <div className="px-4 flex gap-4 w-max mx-auto">
              {popularSpots.map((item) => (
                <DestinationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-transparent to-sand z-10 pointer-events-none" />
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full pb-6 mb-6">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">Explore</span> History & Culture
        </h2>
        <p className="max-w-2xl pb-2 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Uncover the deep-rooted heritage and vibrant traditions that shape the
          Gambian way of life. Visit ancient monuments and local museums to
          journey through the stories of our past.
        </p>
        <div className="relative w-full">
          <div className="w-full py-4 overflow-x-auto scroll-smooth no-scrollbar">
            <div className="px-4 flex gap-4 w-max mx-auto">
              {historySpots.map((item) => (
                <DestinationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-sand z-10 pointer-events-none" />
        </div>
      </section>
      {/* Section 3 */}
      <section className="w-full pb-6 mb-6">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">Experience</span> Nature & Wildlife
        </h2>
        <p className="max-w-2xl pb-2 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Immerse yourself in lush tropical forests and witness exotic animals
          in their natural habitats. From rare birds to playful primates,
          discover the incredible biodiversity that makes our region unique.
        </p>
        <div className="relative w-full">
          <div className="w-full py-4 overflow-x-auto scroll-smooth no-scrollbar">
            <div className="px-4 flex gap-4 w-max mx-auto">
              {natureSpots.map((item) => (
                <DestinationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-sand z-10 pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
