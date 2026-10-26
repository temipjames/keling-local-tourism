import Image from "next/image";

interface HeroSectionProps {
  src: string;
  alt: string;
}

function HeroSection(image: HeroSectionProps) {
  return (
    <div className="w-full h-100 mb-4 md:h-130 md:mb-10 relative flex items-center justify-center overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        priority
        className="object-cover object-[50%_15%] absolute inset-0 animate-hero-zoo"
      />
      <div className="absolute bottom-0 left-0 w-full h-37.5 bg-gradient-to-b from-transparent to-sand z-10" />
    </div>
  );
}

export default HeroSection;
