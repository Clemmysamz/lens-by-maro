import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#77736D]">Contact</p>
          <h1 className="mt-4 text-5xl font-serif text-[#171717] md:text-6xl">Let’s plan your next story.</h1>
          <div className="mt-8 space-y-4 text-base text-[#4D4A46]">
            <p>Email: hello@lensbymaro.com</p>
            <p>Phone: +234 800 000 0000</p>
            <p>WhatsApp: +234 800 000 0000</p>
            <p>Service coverage: Lagos, Abuja, Benin City, Port Harcourt, Ibadan, and across Nigeria</p>
          </div>
          <div className="mt-8 flex gap-4">
            <Link href="/book" className="gold-button">Book a session</Link>
            <a href="https://wa.me/2348000000000" className="ghost-button">WhatsApp us</a>
          </div>
        </div>

        <form className="rounded-[28px] border border-[#E5DED3] bg-white p-6 shadow-[0_20px_60px_rgba(23,23,23,0.04)]">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-[#171717]">
              Full name
              <input className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" placeholder="Your name" />
            </label>
            <label className="text-sm text-[#171717]">
              Email address
              <input type="email" className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" placeholder="you@example.com" />
            </label>
            <label className="text-sm text-[#171717] md:col-span-2">
              Enquiry type
              <select className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5">
                <option>Wedding</option>
                <option>Brand</option>
                <option>Event</option>
                <option>General</option>
              </select>
            </label>
            <label className="text-sm text-[#171717] md:col-span-2">
              Message
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-[#D9D2C8] bg-[#F9F6F2] px-3 py-2.5" placeholder="Tell us about your project" />
            </label>
          </div>
          <button type="button" className="gold-button mt-6">Send enquiry</button>
        </form>
      </div>
    </div>
  );
}
