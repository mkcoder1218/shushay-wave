"use client";

import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8ffe4] py-16 md:py-32 flex justify-center"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start md:w-[1446px]">
          {/* Left — contact info */}
          <div className="space-y-6 md:space-y-8 md:max-w-[538px]">
            <div>
              <h2 className="text-[#1A5A45] text-3xl md:text-[64px] font-bold mb-4">
                Let&apos;s Talk
              </h2>
              <p className="text-[#242424] text-base md:text-[20px] leading-relaxed">
                Have questions, feedback, or want to get started? Our team is
                here to assist you.
              </p>
            </div>

            {/* Email & Socials */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
              <div>
                <h3 className="text-[#1A5A45] text-xl md:text-[32px] font-bold mb-1">
                  Email
                </h3>
                <p className="text-[#242424] text-sm md:text-[16px] break-words">
                  Waveafricansocial@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-[#1A5A45] text-lg md:text-xl font-bold mb-2">
                  Socials
                </h3>
                <ul className="space-y-1">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <li key={social}>
                      <a
                        href="#"
                        className="text-[#242424] text-sm md:text-[16px] underline underline-offset-2 hover:text-gray-300 transition-colors"
                      >
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="space-y-4 w-full md:max-w-[578px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-[#242424] text-sm md:text-[18px] mb-1 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                aria-label="Name"
                className="w-full bg-[#E5E5E5] rounded-xl px-4 md:px-5 h-14 md:h-[65px] text-gray-800 text-sm md:text-[18px] outline-none focus:ring-2 focus:ring-[#1A5A45]"
              />
            </div>

            <div>
              <label className="text-[#242424] text-sm md:text-[18px] mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-[#E5E5E5] rounded-xl px-4 md:px-5 h-14 md:h-[65px] text-gray-800 text-sm md:text-[18px] outline-none focus:ring-2 focus:ring-[#1A5A45]"
              />
            </div>

            <div>
              <label className="text-[#242424] text-sm md:text-[18px] mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full bg-[#E5E5E5] rounded-xl px-4 md:px-5 py-4 h-[160px] md:h-[211px] text-gray-800 text-sm md:text-[18px] outline-none resize-none focus:ring-2 focus:ring-[#1A5A45]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1A5A45] cursor-pointer text-white font-medium h-12 md:h-[56px] rounded-xl text-base md:text-[20px] hover:bg-[#154a38] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
