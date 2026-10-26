import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex-grow w-full max-w-6xl mx-auto mt-20 bg-indigo text-sand flex flex-col">
      <div className="w-full p-8 flex justify-center bg-sand">
        <Image
          src="/images/keling_logo.png"
          alt="Keling Logo"
          width={200}
          height={70}
          className="object-contain"
        />
      </div>
      <div className="py-8 mx-6 flex flex-col items-center text-center border-b border-sand/30">
        <p className="pb-2">
          Stay updated with the latest tour stories from our free online
          magazine!
        </p>
        <div className="w-full max-w-md p-4 flex gap-2 text-indigo">
          <input
            id="newletter"
            type="email"
            placeholder="Your Email Address"
            autoComplete="true"
            className="w-full p-4 bg-white rounded-lg text-center text-sm lg:text-base shadow-white/50 shadow-sm outline-none"
          ></input>
          <button
            id="sub-btn"
            type="button"
            className="p-3 bg-saffron rounded-lg text-sm font-bold cursor-pointer hover:shadow-md transition-all"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-12 mx-6 md:px-12 flex flex-col border-b border-sand/30">
        <h4 className="px-2 pb-2 uppercase tracking-wider font-bold">
          About Us
        </h4>
        <p className="px-2 text-justify">
          Keling was built for the wanderers who prefer the siide streets to the
          main roads. We're a small collective dedicated to uncovering the quiet
          corners and vibrant pulses of our coast. No generic tours, no tourist
          traps&mdash;just the honest, local rhythm of the places we call home.
          Our mission is to bridge the gap between being a visitor and
          belonging, stripping away the "must-see" lists to focus on the
          textures and the hidden corners that make a destination truly unique.
        </p>
      </div>
      <div className="pt-12 pb-8 mx-6 flex flex-col items-center gap-2">
        <div className="flex justify-center gap-6 text-center text-sm">
          <Link href="#" className="hover:text-saffron transition-colors">
            FAQs
          </Link>
          <Link href="#" className="hover:text-saffron transition-colors">
            Cookie Policy
          </Link>
          <Link href="#" className="hover:text-saffron transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-saffron transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="pt-4 text-sm opacity-80">
          &copy; Keling {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
