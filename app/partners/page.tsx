import { partners } from "@/src/lib/site-data";

export default function PartnersPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Partners</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Creative partners and trusted collaborators.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <article key={partner.name} className="rounded-[26px] border border-[#E5DED3] bg-white p-6 text-center">
            <img src={partner.logo} alt={partner.name} className="mx-auto h-20 w-auto object-contain" />
            <h2 className="mt-5 text-2xl font-serif text-[#171717]">{partner.name}</h2>
            <p className="mt-2 text-sm text-[#77736D]">{partner.category}</p>
            <p className="mt-4 text-sm text-[#4D4A46]">{partner.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
