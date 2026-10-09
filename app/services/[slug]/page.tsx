import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/src/lib/site-data";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="section-shell py-20">
      <Link href="/services" className="text-sm font-medium text-[#171717]">← Back to services</Link>
      <article className="mt-8 overflow-hidden rounded-[30px] border border-[#E5DED3] bg-white p-4 shadow-[0_25px_60px_rgba(23,23,23,0.06)] md:p-6">
        <img src={service.image} alt={service.title} className="h-[440px] w-full rounded-[24px] object-cover" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#77736D]">{service.duration}</p>
            <h1 className="mt-3 text-5xl font-serif text-[#171717] md:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg text-[#4D4A46]">{service.description}</p>
            <div className="mt-8 rounded-[24px] bg-[#F6F1EA] p-6">
              <h2 className="text-2xl font-serif text-[#171717]">Deliverables</h2>
              <ul className="mt-4 space-y-2 text-sm text-[#4D4A46]">
                <li>• Professional editorial coverage and direction</li>
                <li>• High-resolution image delivery</li>
                <li>• Editing, curation, and mood-driven storytelling</li>
                <li>• Delivery timeline according to package scope</li>
              </ul>
            </div>
          </div>

          <aside className="rounded-[24px] border border-[#E5DED3] bg-[#F9F6F2] p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-[#77736D]">Starting at</div>
            <div className="mt-2 text-4xl font-serif text-[#171717]">{service.price}</div>
            <div className="mt-6 space-y-3 text-sm text-[#4D4A46]">
              <p><strong>Availability:</strong> Available across Nigeria</p>
              <p><strong>Turnaround:</strong> 2-4 weeks depending on package</p>
              <p><strong>Booking:</strong> Enquire for custom coverage</p>
            </div>
            <Link href="/book" className="gold-button mt-8 w-full">Book this service</Link>
          </aside>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
