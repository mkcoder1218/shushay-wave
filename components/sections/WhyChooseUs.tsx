import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#f8ffe4] py-16 md:py-16 lg:py-20 xl:py-20 px-4 md:px-6 lg:px-10 xl:px-20"
    >
      <Container>
        <h2 className="text-[#1A5A45] text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-bold mb-8">
          Why Choose Wave Equb
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Card 1 — bright green gradient */}
          <div className="relative rounded-3xl w-full 2xl:w-200 overflow-hidden bg-gradient-to-b from-[#85E040] to-[#1A5A45] min-h-[340px] flex flex-col">
            <div className="p-6 md:p-6 lg:p-7 xl:p-8 text-center">
              <p className="text-[#1A5A45] text-base md:text-lg lg:text-xl xl:text-[28px] uppercase tracking-widest mb-3">
                You Only Need One App
              </p>
              <h3 className="text-white text-2xl md:text-2xl lg:text-4xl xl:text-[68px] font-bold leading-snug">
                Save smarter with a trusted digital Equb.
              </h3>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img
                src="/imgs/man.png"
                alt="Man using Wave Equb"
                className="w-full max-w-[260px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[220px] 2xl:max-w-none h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* Card 2 — darker green gradient */}
          <div className="relative rounded-3xl w-full 2xl:w-200 overflow-hidden bg-gradient-to-b from-[#1A5A45] to-[#85E040] min-h-[340px] flex flex-col">
            <div className="p-6 md:p-6 lg:p-7 xl:p-8 text-center">
              <p className="text-[#85E040] text-base md:text-lg lg:text-xl xl:text-[28px] uppercase tracking-widest mb-3">
                Simple Control
              </p>
              <h3 className="text-white text-2xl md:text-2xl lg:text-4xl xl:text-[68px] font-bold leading-snug">
                Easily manage your Equb with reliability.
              </h3>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img
                src="/imgs/phone 2.png"
                alt="Equb details screen"
                className="w-[250px] md:w-[180px] lg:w-[220px] xl:w-[200px] 2xl:w-150 object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Bottom card */}
        <div className="relative rounded-3xl overflow-hidden w-full min-h-[260px] flex flex-col md:flex-row items-center border border-black/10">
          <div className="w-full md:w-1/2 p-6 md:p-6 lg:p-7 xl:p-8 flex flex-col justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-20">
            <div className="flex items-center gap-5 text-[#85E040]">
              <img
                src="/icons/dollar-sign.svg"
                alt=""
                className="w-8 h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
              />
              <img
                src="/icons/grid.svg"
                alt=""
                className="w-8 h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
              />
              <img
                src="/icons/divide.svg"
                alt=""
                className="w-8 h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
              />
              <img
                src="/icons/trending-up.svg"
                alt=""
                className="w-8 h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
              />
            </div>
            <div>
              <h3 className="text-[#1A5A45] text-2xl md:text-2xl lg:text-3xl xl:text-[48px] font-bold mb-2">
                Save Anytime, Anywhere
              </h3>
              <p className="text-[#242424] text-base md:text-base lg:text-xl xl:text-[28px]">
                Stay connected to your Equb wherever you are, without limits.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end">
            <img
              src="/imgs/woman-2.png"
              alt="Woman using Wave Equb"
              className="w-full max-w-[260px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[220px] 2xl:max-w-none h-auto object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
