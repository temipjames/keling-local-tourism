"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Places", href: "/places" },
  { name: "Tour Guides", href: "/guides" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="flex-grow max-w-6xl mx-auto w-full flex flex-col">
      <div className="flex items-center justify-between p-2 bg-sand">
        <Image
          src="/images/keling_logo.png"
          alt="Keling Logo"
          width={150}
          height={50}
          priority
          className="object-contain sm:w-50"
        />
        {/* <div className="flex gap-2"> */}
        {/* <button className="px-4 py-1.5 rounded-full text-indigo border-2 border-indigo text-sm font-bold md:text-base cursor-pointer hover:bg-indigo hover:text-sand transition-all">
            Sign Up
          </button> */}
        <button className="px-6 py-1 rounded-full bg-saffron text-indigo border-1 border-indigo shadow-md text-sm md:text-base cursor-pointer hover:brightness-90 transition-all">
          Sign up
        </button>
        {/* </div> */}
      </div>

      <nav className="flex bg-indigo text-sand text-sm font-semibold md:text-base">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              className={`py-3 flex-grow border-x-[0.5px] border-indigo-dark text-center transition-all ${isActive ? "text-saffron pointer-events-none" : "hover:bg-indigo-dark"}`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
