import Link from "next/link";
import { navigation } from "@/src/lib/site-data";

function ContactIcon({ type }: { type: "mail" | "phone" | "chat" | "pin" | "camera" }) {
  const common = "h-4 w-4";

  switch (type) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m5 7 7 6 7-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M7.5 4.5h3l1 4-2.2 2.2a14 14 0 0 0 7.7 7.7L16.2 16l4-1v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5.5 6.5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M5 18.5V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H9l-4 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M6.5 6h11a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7A2.5 2.5 0 0 1 6.5 6Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m7 9 5 4 5-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function Footer() {
  return (
    <footer className="border-t border-[#E5DED3] bg-[#171717] text-[#F7F5F0]">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="text-2xl font-semibold tracking-[0.12em]">LENSBYMARO</div>
          <p className="mt-4 max-w-xs text-sm text-[#D9D2C8]">
            Capturing real moments and turning them into timeless photographs and cinematic films across Nigeria.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-serif text-[#F7F5F0]">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-[#D9D2C8]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#B69A68]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif text-[#F7F5F0]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#D9D2C8]">
            <li className="flex items-center gap-2"><ContactIcon type="mail" /> hello@lensbymaro.com</li>
            <li className="flex items-center gap-2"><ContactIcon type="phone" /> +234 800 000 0000</li>
            <li className="flex items-center gap-2"><ContactIcon type="chat" /> WhatsApp</li>
            <li className="flex items-center gap-2"><ContactIcon type="pin" /> Nigeria-wide coverage</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif text-[#F7F5F0]">Follow</h3>
          <div className="mt-4 flex gap-3 text-[#F7F5F0]">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-[#3A3937] p-2 hover:border-[#B69A68]"><ContactIcon type="camera" /></a>
            <a href="https://wa.me/2348000000000" aria-label="WhatsApp" className="rounded-full border border-[#3A3937] p-2 hover:border-[#B69A68]"><ContactIcon type="chat" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2A2927]">
        <div className="section-shell flex flex-col gap-3 py-4 text-sm text-[#D9D2C8] md:flex-row md:items-center md:justify-between">
          <p>© 2025 LensByMaro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/booking-policy">Booking Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
