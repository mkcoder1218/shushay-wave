import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer",
        {
          "bg-[#1A5A45] text-[#DCDCDC]": variant === "primary",
          "bg-white text-[#1A5A45] border-2 border-[#1A5A45]":
            variant === "secondary",
          "border-2 border-[#1A5A45] text-[#1A5A45]": variant === "outline",
          "px-4 py-2 text-base": size === "sm",
          "px-6 py-4 text-[20px]": size === "md",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
