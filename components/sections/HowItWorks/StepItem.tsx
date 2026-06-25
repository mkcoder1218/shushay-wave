import { Step } from '@/types/feature';

interface StepItemProps {
  step: Step;
  isLast?: boolean;
}

export default function StepItem({ step, isLast = false }: StepItemProps) {
  return (
    <div className="relative flex gap-5">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="w-4 h-4 rounded-full bg-[#1A5A45] flex-shrink-0 mt-1" />
        {/* Dashed line */}
        {!isLast && (
          <div className="w-px flex-1 border-l-2 border-dashed border-[#1A5A45] my-1" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <h3 className="text-[#1A5A45] font-bold text-lg mb-1">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.description}</p>
        <p className="text-gray-500 text-sm">{step.details}</p>
      </div>
    </div>
  );
}
