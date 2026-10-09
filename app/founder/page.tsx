import Link from "next/link";
import { founderProfile } from "@/src/lib/site-data";

export default function FounderPage() {
  return (
    <div className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-[#E5DED3] bg-white p-3 shadow-[0_25px_60px_rgba(23,23,23,0.06)]">
          <img src={founderProfile.image} alt={founderProfile.name} className="h-[540px] w-full rounded-[24px] object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Founder & CEO</p>
          <h1 className="mt-3 text-5xl font-serif text-[#171717] md:text-6xl">{founderProfile.name}</h1>
          <p className="mt-3 text-xl text-[#77736D]">{founderProfile.title}</p>
          <p className="mt-6 text-lg text-[#4D4A46]">{founderProfile.bio}</p>
          <p className="mt-4 text-base text-[#4D4A46]">
            Maro brings a documentary eye, elevated creative choices, and a commitment to genuine emotional storytelling. LensByMaro was built to make meaningful memories feel immersive, beautifully edited, and long-lasting.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/book" className="gold-button">Work with us</Link>
            <Link href="/portfolio" className="ghost-button">See recent work</Link>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-[26px] border border-[#E5DED3] bg-white p-8">
          <h2 className="text-3xl font-serif text-[#171717]">Creative philosophy</h2>
          <p className="mt-4 text-base text-[#4D4A46]">A strong story is never only about the frame — it is about the feeling, the rhythm, and the truth carried through the image. We focus on quiet details, real emotion, and timeless composition.</p>
        </div>
        <div className="rounded-[26px] border border-[#E5DED3] bg-white p-8">
          <h2 className="text-3xl font-serif text-[#171717]">Why LensByMaro</h2>
          <p className="mt-4 text-base text-[#4D4A46]">The studio was built to bring artistic direction, editorial polish, and genuine care to every client relationship. Every story deserves to be told with clarity, grace, and intention.</p>
        </div>
      </div>
    </div>
  );
}
