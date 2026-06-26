import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article" | "main";
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={className}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}
