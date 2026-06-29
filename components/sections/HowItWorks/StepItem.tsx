import type { Step } from "@/types";
import clsx from "clsx";

interface StepItemProps {
  step: Step;
  isLast?: boolean;
}

export default function StepItem({ step, isLast = false }: StepItemProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-green-primary flex-shrink-0 mt-1" />
        {!isLast && (
          <div
            className={clsx(
              "w-px flex-1 border-l-2 md:border-l-4 border-dashed",
              "border-green-primary my-1 min-h-[40px]",
            )}
          />
        )}
      </div>

      <div className="pb-8">
        <h3 className="text-green-primary font-bold text-[24px] 2xl:text-[32px] mb-1">
          {step.title}
        </h3>
        <p className="text-text-muted text-base 2xl:text-[20px] font-medium">
          {step.description} {step.details}
        </p>
      </div>
    </div>
  );
}
