import type { FeatureCard as FeatureCardType } from "@/types";
import clsx from "clsx";

interface FeatureCardProps {
  card: FeatureCardType;
}

export default function FeatureCard({ card }: FeatureCardProps) {
  return (
    <div
      key={card.title}
      className={clsx(
        "relative flex flex-col gap-4 rounded-2xl bg-white p-6 pb-0 shadow-xl",
      )}
    >
      {card.center ? (
        <div className="flex h-full flex-col justify-between overflow-visible 2xl:h-[628px]">
          <div className="flex items-start justify-center rounded-xl">
            <img
              src={card.image}
              alt={card.alt}
              className="h-auto max-w-[200px] bg-cover md:max-w-[220px] lg:max-w-[260px] xl:max-w-[240px] 2xl:max-w-none -mt-12 md:-mt-14 2xl:-mt-16 relative z-10"
            />
          </div>
          <div className="pb-8 lg:pb-10 2xl:pb-12">
            <h3 className="font-bold text-[#1A5A45] md:px-4 md:text-xl lg:px-6 text-[24px] 2xl:px-10 2xl:text-[32px]">
              {card.title}
            </h3>
            <p
              className={clsx(
                "text-[18px] text-[#242424] md:px-3 md:text-sm lg:px-5",
                "lg:text-base xl:px-3 xl:text-base 2xl:px-8 2xl:text-[18px]",
              )}
            >
              {card.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between overflow-hidden 2xl:h-[628px]">
          <div>
            <h3 className="font-bold text-[#1A5A45] md:px-4 md:text-xl lg:px-6 text-[24px] 2xl:px-10 2xl:text-[32px]">
              {card.title}
            </h3>
            <p
              className={clsx(
                "text-[18px] text-[#242424] md:px-3 md:text-sm lg:px-5",
                "lg:text-base xl:px-3 xl:text-base 2xl:px-8 2xl:text-[18px]",
              )}
            >
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
