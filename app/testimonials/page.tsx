import { testimonials } from "@/src/lib/site-data";

export default function TestimonialsPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Testimonials</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">What our clients say.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card-shell p-6">
            <div className="flex gap-1 text-[#B69A68]">
              {Array.from({ length: item.rating }).map((_, index) => (
                <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="m12 2.8 2.5 5.1 5.6.8-4 3.9 1 5.5L12 0v2.8Zm-6 0 2.5 5.1 5.6.8-4 3.9 1 5.5L6 0v2.8Z" /></svg>
              ))}
            </div>
            <p className="mt-5 text-lg text-[#4D4A46]">“{item.quote}”</p>
            <div className="mt-6 border-t border-[#EAE1D6] pt-4">
              <div className="font-medium text-[#171717]">{item.name}</div>
              <div className="text-sm text-[#77736D]">{item.event}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
