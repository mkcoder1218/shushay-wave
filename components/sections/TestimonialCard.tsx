import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  quoteClassName?: string;
  nameClassName?: string;
  companyClassName?: string;
  avatarClassName?: string;
}

export default function TestimonialCard({
  testimonial,
  className,
  quoteClassName,
  nameClassName,
  companyClassName,
  avatarClassName,
}: TestimonialCardProps) {
  return (
    <div className={`flex flex-col justify-between h-full ${className ?? ""}`}>
      <p className={quoteClassName}>{testimonial.quote}</p>
      <div className="mt-6 flex items-end justify-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={avatarClassName}
        />
        <div>
          <p className={nameClassName}>{testimonial.name}</p>
          <p className={companyClassName}>{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
