import Link from "next/link";
import { portfolioProjects } from "@/src/lib/site-data";

export default function PortfolioPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Portfolio</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Selected stories from the field.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolioProjects.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group overflow-hidden rounded-[24px] border border-[#E5DED3] bg-white shadow-[0_20px_50px_rgba(23,23,23,0.04)]">
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs uppercase tracking-[0.18em] text-[#E8DCC5]">{project.category}</div>
                <h2 className="mt-2 text-2xl font-serif">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
