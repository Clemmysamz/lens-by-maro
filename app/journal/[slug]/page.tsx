import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/src/lib/site-data";

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-shell py-20">
      <Link href="/journal" className="text-sm font-medium text-[#171717]">← Back to journal</Link>
      <article className="mt-8 rounded-[30px] border border-[#E5DED3] bg-white p-4 shadow-[0_25px_60px_rgba(23,23,23,0.06)] md:p-6">
        <img src={post.image} alt={post.title} className="h-[440px] w-full rounded-[24px] object-cover" />
        <div className="mt-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#77736D]">{post.category} · {post.date}</p>
          <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg text-[#4D4A46]">{post.excerpt}</p>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}
