import Link from "next/link";
import { founderProfile, services } from "@/src/lib/site-data";

export default function AboutPage() {
  return (
    <div className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-[#E5DED3] bg-white p-3 shadow-[0_25px_60px_rgba(23,23,23,0.06)]">
          <img src={founderProfile.image} alt="Maro" className="h-[540px] w-full rounded-[24px] object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">About LensByMaro</p>
          <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">A studio for stories worth keeping.</h1>
          <p className="mt-6 text-lg text-[#4D4A46]">
            LensByMaro exists to make visual storytelling feel honest, elevated, and deeply personal. We work with couples, families, brands, and teams who want imagery that feels as alive as the moments themselves.
          </p>
          <p className="mt-4 text-base text-[#4D4A46]">
            Our approach blends editorial composition, documentary authenticity, and cinematic movement. The result is a gallery that feels immersive, warm, and completely true to your story.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/portfolio" className="gold-button">View portfolio</Link>
            <Link href="/book" className="ghost-button">Request a booking</Link>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
          <h3 className="text-2xl font-serif text-[#171717]">Mission</h3>
          <p className="mt-3 text-sm text-[#4D4A46]">To preserve meaningful moments with refined artistry, calm professionalism, and human warmth.</p>
        </div>
        <div className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
          <h3 className="text-2xl font-serif text-[#171717]">Vision</h3>
          <p className="mt-3 text-sm text-[#4D4A46]">To become Nigeria’s preferred destination for timeless photography and story-led films.</p>
        </div>
        <div className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
          <h3 className="text-2xl font-serif text-[#171717]">Approach</h3>
          <p className="mt-3 text-sm text-[#4D4A46]">We combine direction, documentary care, and thoughtful post-production to create visual narratives.</p>
        </div>
      </div>

      <div className="mt-20 rounded-[30px] bg-[#171717] p-8 text-[#F7F5F0] md:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#D2B884]">Our process</p>
            <h2 className="mt-4 text-4xl font-serif md:text-5xl">From planning to final delivery, we stay present and intentional.</h2>
          </div>
          <div className="space-y-5 text-sm text-[#D9D2C8]">
            <p>1. Discovery and creative brief — we understand your story, timing, and visual direction.</p>
            <p>2. Planning and preparation — from location to moodboards, every detail is mapped with care.</p>
            <p>3. Coverage and direction — we guide the shoot while allowing real emotion to unfold naturally.</p>
            <p>4. Editing and delivery — polished imagery and films designed for meaningful viewing.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-4xl font-serif text-[#171717]">Coverage across Nigeria</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Lagos', 'Abuja', 'Benin City', 'Port Harcourt', 'Ibadan', 'Enugu', 'Asaba', 'Warri', 'Owerri', 'Uyo', 'Calabar', 'Kano'].map((city) => (
            <span key={city} className="rounded-full border border-[#D9D2C8] bg-white px-4 py-2 text-sm text-[#171717]">{city}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
