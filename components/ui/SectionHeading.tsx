import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  titleClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  titleClassName,
  eyebrowClassName,
  descriptionClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-10 md:mb-12",
        align === "left" ? "text-left" : "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            "mb-2 text-[18px] font-medium text-[#1A5A45]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={clsx(
          "text-[#1A5A45] text-3xl font-bold md:text-3xl lg:text-4xl xl:text-[56px] whitespace-pre-line",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={clsx(
            "mx-auto mt-4 max-w-2xl text-base text-[#242424] md:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
