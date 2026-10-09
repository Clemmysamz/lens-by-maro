import Link from "next/link";
import { services } from "@/src/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Our services</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Photography and film for every important chapter.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="card-shell overflow-hidden">
            <img src={service.image} alt={service.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#77736D]">{service.duration}</p>
              <h2 className="mt-3 text-3xl font-serif text-[#171717]">{service.title}</h2>
              <p className="mt-3 text-sm text-[#4D4A46]">{service.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-[#171717]">{service.price}</span>
                <Link href={`/services/${service.slug}`} className="text-sm font-medium text-[#171717]">Explore →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
