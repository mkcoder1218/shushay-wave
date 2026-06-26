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

  return (
    <nav
      className={`sticky top-0 z-50 md:px-25 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <Container className="px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16 md:h-[136px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 z-10">
            <img src="/icons/1 1.svg" alt="Logo" className="h-10 md:h-full" />
          </Link>

          {/* Desktop Navigation — centered */}
          <div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-10"
            style={{ fontFamily: "var(--font-be-vietnam-pro)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A5A45] font-bold text-[20px] hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0 z-10">
            <Button variant="primary" size="md" className="rounded-full px-6">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg z-10 cursor-pointer"
            aria-label="Toggle menu"
          >
            <img
              src={mobileMenuOpen ? "/icons/x.svg" : "/icons/menu.svg"}
              alt={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile full-screen menu */}
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
