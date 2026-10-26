import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Keling",
  description:
    "Trade the tour bus for the side streets. Experience the real unfiltered Gambian coast from a local's perspective.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden bg-sand text-indigo">
        <Header />
        <main className="flex-grow w-full max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
