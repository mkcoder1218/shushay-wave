import type { Step } from "@/types";

interface StepItemProps {
  step: Step;
  isLast?: boolean;
}

export default function StepItem({ step, isLast = false }: StepItemProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#1A5A45] flex-shrink-0 mt-1" />
        {!isLast && (
          <div className="w-px flex-1 border-l-2 md:border-l-4 border-dashed border-[#1A5A45] my-1 min-h-[40px]" />
        )}
      </div>

      <div className="pb-8">
        <h3 className="text-[#1A5A45] font-bold text-xl md:text-xl lg:text-2xl xl:text-[32px] mb-1">
          {step.title}
        </h3>
        <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg xl:text-[20px] font-medium leading-relaxed">
          {step.description} {step.details}
        </p>
      </div>
    </div>
  );
}
