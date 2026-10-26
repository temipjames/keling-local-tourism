import Image from "next/image";
import { TourGuide } from "@/types";

interface GuideCardProps {
  guide: TourGuide;
}

function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="relative group w-65 h-50 lg:w-97.5 lg:h-75 shrink rounded-xl overflow-hidden bg-indigo cursor-pointer shadow-lg hover:-translate-y-1 hover:ring hover:ring-saffron active:-translate-y-1 active:border active:border-saffron transition-all duration-200">
      <Image
        src={guide.image}
        alt={guide.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 via-transparent to-transparent flex flex-col justify-end p-4 z-10 pointer-events-none">
        <span className="text-saffron font-bold text-xl">{guide.name}</span>
        <p className="text-sand text-sm">Rating: {guide.rating}</p>
      </div>
    </div>
  );
}

export default GuideCard;
