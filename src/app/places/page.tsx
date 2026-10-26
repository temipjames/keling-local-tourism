import HeroSection from "@/components/HeroSection";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";

const cardOrder = ["9", "8", "1", "3", "4", "6", "7", "2", "5"];
const sortedCards = [...destinations].sort(
  (a, b) => cardOrder.indexOf(a.id) - cardOrder.indexOf(b.id),
);

export default function PlacesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection src="/images/arch_2.webp" alt="Banjul Landscape" />
      {/* Section 1 */}
      <section className="w-full">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">Find</span> Places To Tour
        </h2>
        <p className="max-w-2xl pb-2 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Browse our curated selection of excursions designed to show you the
          best of every district. Plan your perfect day trip or weekend getaway
          with our comprehensive guide to local attractions.
        </p>
        <div className="relative w-full">
          <div className="w-full py-4 overflow-x-auto scroll-smooth no-scrollbar">
            <div className="px-4 flex gap-4 w-max mx-auto">
              {sortedCards.map((item) => (
                <DestinationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-transparent to-sand z-10 pointer-events-none" />
        </div>
        {/* <p className="max-w-2xl py-2 px-4 mx-auto sm:text-center text-indigo text-sm md:text-base">
          Whether you are looking to trace the historic footpaths along the
          riverbanks or spend an afternoon wandering through the shaded canopy
          of our coastal nature reserves, every corner holds something worth
          staying for. Forget the hurried schedules and rigid itineraries—here,
          you set the pace. ​Take a moment to look closer at the details: the
          salt carried on the afternoon breeze, the vibrant hum of community
          markets, and the quiet hideaways known best by those who call this
          coast home. Use this collection as your compass, and let the real
          rhythm of the region guide your steps.
        </p> */}
      </section>
    </div>
  );
}
