import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell py-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">404</p>
      <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">This page could not be found.</h1>
      <p className="mt-5 text-lg text-[#4D4A46]">The story you were looking for may have moved or no longer exists.</p>
      <Link href="/" className="gold-button mt-8">Return home</Link>
    </div>
  );
}
