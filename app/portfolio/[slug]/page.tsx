import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/src/lib/site-data";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="section-shell py-20">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/portfolio" className="text-sm font-medium text-[#171717]">← Back to portfolio</Link>
        <span className="rounded-full border border-[#D9D2C8] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#77736D]">{project.category}</span>
      </div>

      <div className="overflow-hidden rounded-[32px] border border-[#E5DED3] bg-white p-3 shadow-[0_25px_60px_rgba(23,23,23,0.06)]">
        <img src={project.image} alt={project.title} className="h-[540px] w-full rounded-[24px] object-cover" />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.6fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">{project.location} · {project.year}</p>
          <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg text-[#4D4A46]">{project.description}</p>
        </div>
        <aside className="rounded-[24px] border border-[#E5DED3] bg-white p-6">
          <h3 className="text-xl font-serif text-[#171717]">Project details</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#4D4A46]">
            <li><strong className="text-[#171717]">Category:</strong> {project.category}</li>
            <li><strong className="text-[#171717]">Location:</strong> {project.location}</li>
            <li><strong className="text-[#171717]">Year:</strong> {project.year}</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}
