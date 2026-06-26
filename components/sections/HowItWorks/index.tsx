import Container from "@/components/ui/Container";
import StepItem from "./StepItem";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants/features";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#f8ffe4] overflow-hidden"
    >
      {/* World map watermark */}
      <div
        className="absolute inset-0 opacity-30 bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/imgs/map.png')" }}
      />

      <Container className="relative py-16 md:py-16 lg:py-20 xl:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Phone mockup — below steps on mobile, left column on desktop */}
          <div className="flex items-center justify-center">
            <img
              src="/imgs/phone mockup 2.png"
              alt="Wave Equb app screens"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full h-auto object-contain"
            />
          </div>

          {/* Steps — first on mobile */}
          <div className="">
            <p className="text-[#3C3C3C] text-[18px] font-medium mb-3">
              How It Works
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[56px] font-bold text-[#1A5A45] mb-10">
              Start saving with confidence in just a few simple steps.
            </h2>

            <div className="w-full md:w-full lg:w-[480px] xl:w-[577px]">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <StepItem
                  key={step.id}
                  step={step}
                  isLast={index === HOW_IT_WORKS_STEPS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
