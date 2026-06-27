import Link from "next/link";
import Container from "@/components/ui/Container";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import { FOOTER_MENU_LINKS, FOOTER_SOCIAL_LINKS } from "@/lib/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white py-10 md:py-10 lg:py-11 xl:py-12 px-4 md:px-6 lg:px-8 xl:px-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <img src="/icons/logo-2.svg" alt="Wave" />
            <p className="text-white text-sm md:text-sm lg:text-base xl:text-[18px] leading-relaxed md:max-w-full lg:max-w-80 xl:max-w-100">
              Discover a smarter way to save together. Scan to join your Equb,
              manage contributions, and enjoy secure, transparent group savings.
            </p>
            <AppStoreButtons />
          </div>

          {/* Links — Menu + Socials side by side on mobile */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:block md:space-y-6">
              <div className="md:mb-6">
                <p className="text-[14px] font-semibold uppercase tracking-widest mb-3">Menu</p>
                <div className="flex flex-col gap-y-2 md:flex-wrap md:flex-row md:gap-x-6">
                  {FOOTER_MENU_LINKS.map((item) => (
                    <Link key={item.label} href={item.href} className="text-white text-base">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-widest mb-3">Socials</p>
                <div className="flex flex-col gap-y-2 md:flex-wrap md:flex-row md:gap-x-6">
                  {FOOTER_SOCIAL_LINKS.map((item) => (
                    <Link key={item} href="#" className="text-white text-base">{item}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2 md:text-right">
            <p className="text-[14px] font-semibold uppercase tracking-widest mb-3">Contact Info</p>
            <p className="text-white text-base">+251 91 225 2354</p>
            <p className="text-white text-base">info@Tilaequb.com</p>
            <p className="text-white text-base">Addis Ababa, Ethiopia</p>
            <div className="md:flex md:justify-end mt-6">
              <a
                href="mailto:info@Tilaequb.com"
                className="inline-flex items-center gap-3 bg-white text-green-primary text-base font-semibold pl-5 pr-2 py-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-primary">
                  <img src="/icons/arrow-nobg.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:mt-8 lg:mt-9 xl:mt-10 pt-6 text-white text-[14px]">
          © {new Date().getFullYear()} Wave Equb. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
