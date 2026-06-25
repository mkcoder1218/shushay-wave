import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16">
      <Container>
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          Why Choose Wave Equb
        </h2>

        {/* Top row — two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Card 1 — text left, man right */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-lime-400 to-[#1A5A45] min-h-[320px] flex flex-row items-center">
            {/* Text — left half */}
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">
                You Only Need One App
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
                Save smarter with a trusted digital Equb.
              </h3>
            </div>
            {/* Man image — right half, bottom aligned */}
            <div className="w-1/2 h-full flex items-end justify-center">
              <img
                src="/imgs/man.png"
                alt="Man using Wave Equb"
                className="h-64 object-contain object-bottom"
              />
            </div>
          </div>

          {/* Card 2 — phone left, text right */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A5A45] to-lime-400 min-h-[320px] flex flex-row items-center">
            {/* Phone mockup — left half, bottom aligned */}
            <div className="w-1/2 h-full flex items-end justify-center pb-0">
              <div className="w-40 bg-white rounded-t-[2rem] shadow-2xl overflow-hidden border-4 border-gray-200">
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-12 h-3 bg-gray-200 rounded-full" />
                </div>
                <div className="px-4 py-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">←</span>
                    <span className="text-[11px] font-semibold text-gray-800">
                      Equb Details
                    </span>
                    <div className="w-5 h-5 rounded-full bg-[#1A5A45] flex items-center justify-center">
                      <span className="text-white text-[8px]">●●</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center">
                    My Active Equb Name
                  </p>
                  <div className="flex items-center gap-1 flex-wrap">
                    <p className="text-lg font-bold text-gray-900">50,000 Br</p>
                    <span className="bg-lime-100 text-[#1A5A45] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                      PUBLIC EQUB
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-400">
                    5,000 Br → 5 Months
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-gray-300 text-[10px] font-semibold text-gray-700 py-1.5 rounded-full">
                      Invite
                    </button>
                    <button className="flex-1 bg-[#1A5A45] text-[10px] font-semibold text-white py-1.5 rounded-full">
                      Pay Now &rsaquo;
                    </button>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center">
                    Next Payment in{" "}
                    <span className="font-bold text-gray-700">24 Days</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Text — right half */}
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <p className="text-lime-300 text-xs font-semibold uppercase tracking-widest mb-3">
                Simple Control
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
                Easily manage your Equb with reliability.
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom card — text left, woman right */}
        <div className="relative rounded-2xl overflow-hidden bg-white min-h-[240px] flex flex-row items-center">
          {/* Text — left half */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-6 text-gray-500 text-xl mb-6">
              <span>$</span>
              <span>⊞</span>
              <span>÷</span>
              <span>↗</span>
            </div>
            <h3 className="text-[#1A5A45] text-2xl font-bold mb-2">
              Save Anytime, Anywhere
            </h3>
            <p className="text-gray-500 text-sm">
              Stay connected to your Equb wherever you are, without limits.
            </p>
          </div>
          {/* Woman image — right half, bottom aligned */}
          <div className="w-1/2 h-full flex items-end justify-center">
            <img
              src="/imgs/woman.png"
              alt="Woman using Wave Equb"
              className="h-56 object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
