"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const getIndex = (offset: number) =>
    (active + offset + TESTIMONIALS.length) % TESTIMONIALS.length;

  return (
    <section
      id="testimonials"
      className="bg-bg-section py-16 md:py-16 lg:py-20 xl:py-24 max-w-full"
    >
      <div className="mb-12 px-4 text-center">
        <p className="mb-2 text-[18px] font-medium text-green-primary">
          Testimonials
        </p>
        <h2 className="text-3xl font-bold text-green-primary md:text-3xl lg:text-4xl xl:text-[56px]">
          What Our Customers Are Saying
        </h2>
      </div>

      <div className="relative mx-auto flex w-full items-center justify-center gap-3 overflow-hidden px-4 md:w-full lg:w-[90%] xl:w-full xl:max-w-[1200px] xl:gap-4 2xl:w-400 2xl:max-w-none 2xl:gap-4">
        {/* Left side card */}
        <div className="hidden h-[380px] flex-shrink-0 rounded-3xl bg-[#1a1a1a] p-6 lg:block lg:w-[min(100%,640px)] xl:w-[min(100%,680px)] 2xl:h-[449px] 2xl:w-200">
          <TestimonialCard
            testimonial={TESTIMONIALS[getIndex(-1)]}
            className="h-full"
            quoteClassName="text-sm leading-relaxed text-gray-300 lg:text-lg xl:text-[24px]"
            nameClassName="text-sm font-bold text-white lg:text-base xl:text-[20px]"
            companyClassName="text-xs text-gray-500 lg:text-sm xl:text-[16px]"
            avatarClassName="h-9 w-9 rounded-full object-cover"
          />
        </div>

        <div className="relative w-full flex-shrink-0 lg:w-[min(100%,640px)] xl:w-[min(100%,680px)] 2xl:w-200">
          <button
            onClick={prev}
            className="absolute cursor-pointer left-4 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-colors hover:bg-gray-100 lg:left-16"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            key={active}
            className="flex min-h-[280px] h-auto flex-col justify-between rounded-3xl bg-green-accent/30 p-8 shadow-xl md:p-8 lg:h-[380px] lg:p-9 xl:p-9 2xl:h-[449px] 2xl:p-10"
          >
            <TestimonialCard
              testimonial={TESTIMONIALS[active]}
              quoteClassName="text-center text-sm leading-relaxed text-[#1a2e1a] md:text-base lg:text-lg xl:text-[24px]"
              nameClassName="text-sm font-bold text-[#1a2e1a] lg:text-base xl:text-[20px]"
              companyClassName="text-xs text-[#1a2e1a]/70 lg:text-sm xl:text-[16px]"
              avatarClassName="h-12 w-12 rounded-full object-cover"
            />
          </div>

          <button
            onClick={next}
            className="absolute cursor-pointer right-4 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-colors hover:bg-gray-100 lg:right-16"
            aria-label="Next testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right side card */}
        <div className="hidden h-[380px] flex-shrink-0 rounded-3xl bg-gray-100 p-6 lg:block lg:w-[min(100%,640px)] xl:w-[min(100%,680px)] 2xl:h-[449px] 2xl:w-200">
          <TestimonialCard
            testimonial={TESTIMONIALS[getIndex(1)]}
            className="h-full"
            quoteClassName="text-sm leading-relaxed text-gray-700 lg:text-lg xl:text-[24px]"
            nameClassName="text-sm font-bold text-[#1A1A1A] lg:text-base xl:text-[20px]"
            companyClassName="text-xs text-gray-500 lg:text-sm xl:text-[16px]"
            avatarClassName="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
