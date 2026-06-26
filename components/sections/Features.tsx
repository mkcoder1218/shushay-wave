import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURE_CARDS } from "@/lib/constants/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#f8ffe4] px-4 md:px-6 lg:px-10 xl:px-12 2xl:px-20"
    >
      <div
        className="absolute left-4 right-4 top-0 hidden h-full rounded-2xl bg-cover md:left-6 md:right-6 md:block md:h-[55%] lg:left-10 lg:right-10 xl:left-12 xl:right-12 2xl:left-20 2xl:right-20"
        style={{ backgroundImage: "url('/imgs/feattures-bg.png')" }}
      />
      <div className="absolute left-4 right-4 top-0 h-full rounded-2xl bg-[#1A5A45] bg-cover md:hidden md:h-[55%] md:left-6 md:right-6 lg:left-10 lg:right-10 xl:left-12 xl:right-12 2xl:left-20 2xl:right-20" />

      <Container className="relative py-12 md:py-14 lg:py-16 xl:py-16 2xl:py-20">
        <SectionHeading
          title="Digital Equb, Zero Cash Risk"
          titleClassName="text-center text-2xl text-[#85E040] md:text-transparent md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-[48px]"
          className="mb-10 md:mb-10 lg:mb-12 xl:mb-12 2xl:mb-16"
        />

        <div className="grid grid-cols-1 items-end gap-6 px-2 text-center md:grid-cols-2 md:px-4 lg:grid-cols-2 lg:px-5 xl:grid-cols-3 xl:px-4 2xl:px-6">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
