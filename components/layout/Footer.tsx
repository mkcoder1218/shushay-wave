import Link from "next/link";
import Container from "@/components/ui/Container";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import { FOOTER_MENU_LINKS, FOOTER_SOCIAL_LINKS } from "@/lib/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A19] text-white py-10 md:py-12 px-4 md:px-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="space-y-5">
            <img src="/icons/logo-2.svg" alt="Wave" />
            <p className="text-white text-sm md:text-[18px] leading-relaxed md:max-w-100">
              Discover a smarter way to save together. Scan to join your Equb,
              manage contributions, and enjoy secure, transparent group savings.
            </p>
            <AppStoreButtons />
          </div>

          {/* Links column — on mobile: Menu + Socials side by side, links in columns below */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:block md:space-y-6">
              {/* Menu */}
              <div className="md:mb-6">
                <p className="text-[14px] text-white font-semibold uppercase tracking-widest mb-3">
                  Menu
                </p>
                <div className="flex flex-col gap-y-2 md:flex-wrap md:flex-row md:gap-x-6">
                  {FOOTER_MENU_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-white text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Socials */}
              <div>
                <p className="text-[14px] text-white font-semibold uppercase tracking-widest mb-3">
                  Socials
                </p>
                <div className="flex flex-col gap-y-2 md:flex-wrap md:flex-row md:gap-x-6">
                  {FOOTER_SOCIAL_LINKS.map((item) => (
                    <Link key={item} href="#" className="text-white text-base">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div className="space-y-2 md:text-right">
            <p className="text-[14px] text-white font-semibold uppercase tracking-widest mb-3">
              Contact Info
            </p>
            <p className="text-white text-base">+251 91 225 2354</p>
            <p className="text-white text-base">info@Tilaequb.com</p>
            <p className="text-white text-base">Addis Ababa, Ethiopia</p>
            <div className="md:flex md:justify-end mt-6">
              <a
                href="mailto:info@Tilaequb.com"
                className="inline-flex items-center gap-3 bg-white text-[#1A5A45] text-base font-semibold pl-5 pr-2 py-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#1A5A45]">
                  <img src="/icons/arrow-nobg.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:mt-10 pt-6 text-white text-[14px]">
          © {new Date().getFullYear()} Wave Equb. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
