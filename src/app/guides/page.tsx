import HeroSection from "@/components/HeroSection";
import { guides } from "@/data/guides";
import GuideCard from "@/components/GuideCard";

export default function GuidesPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection src="/images/river_2.jpg" alt="River Tour Guide" />
      {/* Section 1 */}
      <section className="w-full">
        <h2 className="pb-2 px-4 drop-shadow-lg text-center text-2xl lg:text-4xl font-heading font-bold uppercase tracking-wide text-indigo">
          <span className="text-saffron">Meet</span> Our Local Guides
        </h2>
        <p className="max-w-2xl pb-2 px-4 mx-auto text-center text-indigo text-sm md:text-base">
          Connect with friendly, knowledgeable experts who are passionate about
          sharing their home with you. Let our professional guides provide the
          insider stories and safety you need for a truly authentic experience.
        </p>
        <div className="relative w-full">
          <div className="w-full py-4 overflow-x-auto scroll-smooth no-scrollbar">
            <div className="px-4 flex gap-4 w-max mx-auto">
              {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-transparent to-sand z-10 pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
