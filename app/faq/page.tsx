import { faqItems } from "@/src/lib/site-data";

export default function FaqPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">FAQ</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Questions clients ask before booking.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#77736D]">{item.category}</p>
            <h2 className="mt-3 text-2xl font-serif text-[#171717]">{item.question}</h2>
            <p className="mt-3 text-sm text-[#4D4A46]">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
