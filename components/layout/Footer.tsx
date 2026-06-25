import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — Logo + description + app stores */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <img src="icons/1 1.svg" alt="" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Discover a smarter way to save together. Scan to join your Equb,
              manage contributions, and enjoy secure, transparent group savings.
            </p>
            {/* App store badges */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-gray-700 rounded-lg px-3 py-2"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.18 23.76c.32.18.69.19 1.04.02l11.8-6.54-2.61-2.61-10.23 9.13zM.1 1.5C.04 1.73 0 1.98 0 2.25v19.5c0 .27.04.52.1.75l.06.06 10.93-10.93v-.26L.16 1.44.1 1.5zM20.67 10.4l-2.55-1.41-2.93 2.93 2.93 2.93 2.56-1.42c.73-.4.73-1.62-.01-2.03zM4.22.22L16.02 6.76l-2.61 2.61L3.18.24C3.53.07 3.9.08 4.22.22z" />
                </svg>
                <div>
                  <p className="text-[9px] text-gray-400 leading-none">
                    GET IT ON
                  </p>
                  <p className="text-xs font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black border border-gray-700 rounded-lg px-3 py-2"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[9px] text-gray-400 leading-none">
                    Download on the
                  </p>
                  <p className="text-xs font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Center — Menu + Socials */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3">
                Menu
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Home", "About", "How it works", "Features"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-300 text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3">
                Socials
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Telegram", "Instagram", "TikTok", "Facebook"].map((item) => (
                  <Link key={item} href="#" className="text-gray-300 text-sm">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact info + button */}
          <div className="space-y-2 md:text-right">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3">
              Contact Info
            </p>
            <p className="text-gray-300 text-sm">+251 91 225 2354</p>
            <p className="text-gray-300 text-sm">info@Tilaequb.com</p>
            <p className="text-gray-300 text-sm">Addis Ababa, Ethiopia</p>
            <div className="md:flex md:justify-end mt-4">
              <a
                href="mailto:info@Tilaequb.com"
                className="inline-flex items-center gap-2 bg-[#1A5A45] text-white text-sm font-semibold px-5 py-2 rounded-lg"
              >
                Contact Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Wave Equb. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
