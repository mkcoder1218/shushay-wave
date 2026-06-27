import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-x-hidden"
      containerClassName="relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8"
    >
      <h1
        className="mb-4 pt-10 text-3xl font-bold leading-tight text-green-primary sm:text-4xl md:pt-12 md:text-4xl lg:pt-16 lg:text-5xl xl:pt-20 xl:text-[64px]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Transforming Equb For The Digital Age
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-sm font-medium text-text-body sm:text-base md:text-base lg:text-lg xl:text-[18px]">
        Save Together, Access Funds Easily, And Manage Your Equb Anytime,
        Anywhere With Wave.
      </p>

      <div className="mb-6 flex justify-center md:mb-6 lg:mb-7 xl:mb-8">
        <Button
          className="h-12 gap-2 rounded-xl pl-5 pr-2 text-base text-white transition-colors hover:bg-green-hover md:h-12 lg:h-14 lg:text-lg xl:h-[62px] xl:text-[20px]"
          style={{ fontFamily: "var(--font-heading)" }}
          type="button"
        >
          <span>Get the App</span>
          <img src="/icons/Arrow.svg" alt="" className="h-8 w-8 lg:h-9 lg:w-9 xl:h-9 xl:w-9" />
        </Button>
      </div>

      <div className="flex items-end justify-center overflow-hidden">
        <img
          src="/imgs/hero-image.png"
          alt="Wave app on mobile devices"
          className="h-auto w-[150%] max-w-none md:w-full md:max-w-xl lg:max-w-2xl xl:max-w-full"
        />
      </div>
    </Section>
  );
}
