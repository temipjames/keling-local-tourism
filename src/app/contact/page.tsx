import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-indigo">
      <div className="w-full h-[300px] relative rounded-2xl overflow-hidden mb-8">
        <Image
          src="/images/Gambia_Black_Circle.png"
          alt="Contact Cover"
          fill
          sizes="100vw"
          priority
          className="object-cover drop-shadow-md"
        />
      </div>

      <section className="flex flex-col items-center text-center">
        <Link
          href="https://www.maps.google.com"
          target="_blank"
          className="text-indigo text-lg font-semibold hover:underline mb-2"
        >
          Bijilo, WCR, The Gambia
        </Link>
        <h2 className="text-3xl font-bold uppercase tracking-wide mb-6">
          Contact Information
        </h2>

        <div className="w-full border-t border-b border-indigo py-6 my-4 flex justify-center px-8 max-w-lg mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/mailicon.png"
                alt="email"
                width={35}
                height={35}
              />
              <a
                href="mailto:info@kelingkeling.com"
                className="hover:text-saffron transition-colors"
              >
                info@keling.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/phoneicon.png"
                alt="phone 1"
                width={35}
                height={35}
              />
              <a
                href="tel:2203040506"
                className="hover:text-saffron transition-colors"
              >
                +220 304 0506
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/phoneicon.png"
                alt="phone 2"
                width={35}
                height={35}
              />
              <a
                href="tel:2203040507"
                className="hover:text-saffron transition-colors"
              >
                +220 304 0507
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instalogocircle.png"
              alt="Instagram"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedinlogoheader.png"
              alt="LinkedIn"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/fblogocircle.png"
              alt="Facebook"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/ytlogocircle.png"
              alt="YouTube"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/tiktok-icon-grey-white-round-33px.png"
              alt="TikTok"
              width={35}
              height={35}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
