"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/src/lib/site-data";

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DED3] bg-[#F7F5F0]/90 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-[0.1em] text-[#171717]">
          LENSBYMARO
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#171717] md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#B69A68]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/book" className="gold-button">
            Book a Session
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((prev) => !prev)} className="rounded-full border border-[#D9D2C8] p-2 md:hidden" aria-label="Toggle navigation">
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E5DED3] bg-[#F7F5F0] md:hidden">
          <div className="section-shell flex flex-col gap-4 py-4 text-base text-[#171717]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1">
                {item.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setOpen(false)} className="gold-button w-full">
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
