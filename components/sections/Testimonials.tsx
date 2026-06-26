"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  const getIndex = (offset: number) =>
    (active + offset + TESTIMONIALS.length) % TESTIMONIALS.length;

  return (
    <section id="testimonials" className="bg-[#f8ffe4] py-16 md:py-24">
      <div className="text-center mb-12 px-4">
        <p className="text-[#1A5A45] text-[18px] font-medium mb-2">
          Testimonials
        </p>
        <h2 className="text-[#1A5A45] text-3xl md:text-[56px] font-bold">
          What Our Customers Are Saying
        </h2>
      </div>

      {/*  w-full on mobile, fixed on desktop */}
      <div className="w-full md:w-400 overflow-hidden relative flex items-center justify-center gap-4 px-4 mx-auto">
        {/* Left card — peek (desktop only, unchanged) */}
        <div className="hidden lg:block md:w-100 flex-shrink-0 rounded-3xl bg-[#1a1a1a] p-6 min-h-[280px] h-[449px] overflow-hidden">
          <p className="text-gray-300 text-sm md:text-[24px] leading-relaxed">
            {TESTIMONIALS[getIndex(-1)].quote}
          </p>
          <div className="flex items-end justify-center gap-3 mt-6">
            <img
              src={TESTIMONIALS[getIndex(-1)].avatar}
              alt={TESTIMONIALS[getIndex(-1)].name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-white text-sm md:text-[20px] font-bold">
                {TESTIMONIALS[getIndex(-1)].name}
              </p>
              <p className="text-gray-500 text-xs md:text-[16px]">
                {TESTIMONIALS[getIndex(-1)].company}
              </p>
            </div>
          </div>
        </div>

        {/* Center card —  full width on mobile */}
        <div className="relative w-full lg:w-200 flex-shrink-0">
          {/*  button closer to edge on mobile */}
          <button
            onClick={prev}
            className="cursor-pointer absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
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

          {/*  h-auto on mobile so content isn't clipped */}
          <div className="rounded-3xl bg-[#85E0404D] p-8 md:p-10 min-h-[280px] h-auto md:h-[449px] flex flex-col justify-between shadow-xl">
            <p className="text-[#1a2e1a] text-sm md:text-[24px] leading-relaxed text-center">
              {TESTIMONIALS[active].quote}
            </p>
            <div className="flex items-end justify-center gap-3 mt-6">
              <img
                src={TESTIMONIALS[active].avatar}
                alt={TESTIMONIALS[active].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-[#1a2e1a] text-sm md:text-[20px] font-bold">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-[#1a2e1a]/70 text-xs md:text-[16px]">
                  {TESTIMONIALS[active].company}
                </p>
              </div>
            </div>
          </div>

          {/*  button closer to edge on mobile */}
          <button
            onClick={next}
            className="cursor-pointer absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
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

        {/* Right card — peek (desktop only, unchanged) */}
        <div className="hidden lg:block md:w-100 flex-shrink-0 rounded-3xl bg-gray-100 p-6 min-h-[280px] h-[449px] overflow-hidden">
          <p className="text-gray-700 text-sm text-[24px] leading-relaxed text-center">
            {TESTIMONIALS[getIndex(1)].quote}
          </p>
          <div className="flex items-end justify-center gap-3 mt-6">
            <img
              src={TESTIMONIALS[getIndex(1)].avatar}
              alt={TESTIMONIALS[getIndex(1)].name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-[#1A1A1A] text-sm md:text-[20px] font-bold">
                {TESTIMONIALS[getIndex(1)].name}
              </p>
              <p className="text-gray-500 text-xs md:text-[16px]">
                {TESTIMONIALS[getIndex(1)].company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
