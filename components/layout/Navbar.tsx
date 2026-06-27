"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants/features";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 md:px-8 lg:px-16 xl:px-25 transition-colors duration-300 ${
        mobileMenuOpen
          ? "bg-white shadow-sm"
          : scrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
      }`}
    >
      <Container className="px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-3 md:gap-4 h-16 md:h-20 lg:h-28 xl:h-[136px]">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/icons/logo-1.svg" alt="Logo" className="h-10 md:h-12 lg:h-16 xl:h-full" />
          </Link>

          <div
            className="hidden md:flex flex-1 justify-center items-center gap-3 md:gap-4 lg:gap-6 xl:gap-10 min-w-0 px-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-green-primary font-bold text-sm lg:text-base xl:text-[20px] hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block shrink-0">
            <Button variant="primary" size="sm" className="rounded-full xl:px-6 xl:py-4 xl:text-[20px]">
              Download App
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            <img
              src={mobileMenuOpen ? "/icons/x.svg" : "/icons/menu.svg"}
              alt={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6"
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col py-6 px-6 space-y-2 border-t border-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-black text-[20px] py-2 px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
