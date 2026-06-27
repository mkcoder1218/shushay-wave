import type { FeatureCard as FeatureCardType } from "@/types";

interface FeatureCardProps {
  card: FeatureCardType;
}

export default function FeatureCard({ card }: FeatureCardProps) {
  return (
    <div
      key={card.title}
      className={`flex flex-col gap-4 rounded-2xl bg-white p-6 pb-0 shadow-xl ${card.center ? "2xl:-mt-8" : ""}`}
    >
      {card.center ? (
        <div className="flex min-h-100 flex-col justify-end lg:items-end overflow-hidden pb-8 md:min-h-[400px] md:pb-10 lg:min-h-[500px] lg:pb-12 xl:min-h-[480px] xl:pb-10 2xl:min-h-[628px] 2xl:flex-row 2xl:pb-16">
          <div className="overflow-hidden rounded-xl absolute left-1/2 -translate-x-1/2 top-155 min-[400px]:top-148 2xl:left-196 2xl:top-50 2xl:translate-x-0 2xl:mx-0 2xl:mb-0 2xl:shrink-0">
            {" "}
            <img
              src={card.image}
              alt={card.alt}
              className="h-auto w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[260px] 2xl:max-w-none"
            />
          </div>
          <div className="relative z-10 w-full">
            <h3 className="text-lg font-bold text-[#1A5A45] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-[32px]">
              {card.title}
            </h3>
            <p className="text-sm text-[#242424] md:px-2 md:text-sm lg:px-3 lg:text-base xl:px-2 xl:text-base 2xl:px-5 2xl:text-[18px]">
              {card.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between overflow-hidden 2xl:h-[628px]">
          <div>
            <h3 className="text-lg font-bold text-[#1A5A45] md:px-4 md:text-xl lg:px-6 lg:text-2xl xl:px-4 xl:text-2xl 2xl:px-10 2xl:text-[32px]">
              {card.title}
            </h3>
            <p className="text-[18px] text-[#242424] md:px-3 md:text-sm lg:px-5 lg:text-base xl:px-3 xl:text-base 2xl:px-8 2xl:text-[18px]">
              {card.description}
            </p>
          </div>

          <div className="flex items-end justify-center overflow-hidden rounded-xl">
            <img
              src={card.image}
              alt={card.alt}
              className="h-auto max-w-[200px] bg-cover md:max-w-[220px] lg:max-w-[260px] xl:max-w-[240px] 2xl:max-w-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
