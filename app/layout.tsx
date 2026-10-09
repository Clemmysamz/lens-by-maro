import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LensByMaro | Photography & Videography in Nigeria",
  description:
    "Premium photography and videography for weddings, events, brands, and life-defining moments across Nigeria.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-[#F7F5F0] text-[#171717]">
        <div className="min-h-screen bg-[#F7F5F0]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
