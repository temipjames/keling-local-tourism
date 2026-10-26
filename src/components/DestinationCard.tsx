import Image from "next/image";
import { Destination } from "@/types";

interface DestinationCardProps {
  item: Destination;
}

function DestinationCard({ item }: DestinationCardProps) {
  return (
    <div className="relative group w-[260px] h-[200px] lg:w-[390px] lg:h-[300px] shrink rounded-xl overflow-hidden bg-indigo cursor-pointer shadow-lg hover:-translate-y-1 hover:ring hover:ring-saffron active:-translate-y-1 active:border active:border-saffron transition-all duration-200">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 1024px) 260px, 390px"
        className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 via-transparent to-transparent flex flex-col justify-end p-4 z-10 pointer-events-none">
        <span className="text-saffron font-bold text-xl">{item.name}</span>
        <p className="text-sand text-sm">{item.description}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
