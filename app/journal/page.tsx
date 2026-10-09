import Link from "next/link";
import { journalPosts } from "@/src/lib/site-data";

export default function JournalPage() {
  return (
    <div className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Journal</p>
        <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Ideas, stories, and behind-the-scenes inspiration.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {journalPosts.map((post) => (
          <article key={post.slug} className="card-shell overflow-hidden">
            <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#77736D]">{post.category}</p>
              <h2 className="mt-2 text-2xl font-serif text-[#171717]">{post.title}</h2>
              <p className="mt-3 text-sm text-[#4D4A46]">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-[#171717]">{post.date}</span>
                <Link href={`/journal/${post.slug}`} className="text-sm font-medium text-[#171717]">Read more →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
