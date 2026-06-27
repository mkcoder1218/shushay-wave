"use client";

import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-bg-section py-16 md:py-20 lg:py-24 xl:py-32 flex justify-center"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20 items-start w-full 2xl:w-[1446px] max-w-full">
          {/* Left — contact info */}
          <div className="space-y-6 md:space-y-6 lg:space-y-7 xl:space-y-8 md:max-w-full lg:max-w-[480px] xl:max-w-[538px]">
            <div>
              <h2 className="text-green-primary text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold mb-4">
                Let&apos;s Talk
              </h2>
              <p className="text-text-body text-base md:text-base lg:text-lg xl:text-[20px] leading-relaxed">
                Have questions, feedback, or want to get started? Our team is here to assist you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-6 lg:gap-7 xl:gap-8">
              <div>
                <h3 className="text-green-primary text-xl md:text-xl lg:text-2xl xl:text-[32px] font-bold mb-1">
                  Email
                </h3>
                <p className="text-text-body text-sm md:text-sm lg:text-base xl:text-[16px] break-words">
                  Waveafricansocial@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-green-primary text-lg md:text-lg lg:text-xl font-bold mb-2">
                  Socials
                </h3>
                <ul className="space-y-1">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <li key={social}>
                      <a
                        href="#"
                        className="text-text-body text-sm md:text-sm lg:text-base xl:text-[16px] underline underline-offset-2 hover:text-gray-300 transition-colors"
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
            className="space-y-4 w-full md:max-w-full lg:max-w-[500px] xl:max-w-[578px]"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-text-body text-sm md:text-base lg:text-base xl:text-[18px] mb-1 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  className="w-full bg-input-bg rounded-xl px-4 md:px-4 lg:px-5 h-14 md:h-14 lg:h-16 xl:h-[65px] text-gray-800 text-sm md:text-base lg:text-base xl:text-[18px] outline-none focus:ring-2 focus:ring-green-primary"
                />
              </div>
            ))}

            <div>
              <label className="text-text-body text-sm md:text-base lg:text-base xl:text-[18px] mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full bg-input-bg rounded-xl px-4 md:px-4 lg:px-5 py-4 h-[160px] md:h-[160px] lg:h-[180px] xl:h-[211px] text-gray-800 text-sm md:text-base lg:text-base xl:text-[18px] outline-none resize-none focus:ring-2 focus:ring-green-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-primary cursor-pointer text-white font-medium h-12 md:h-12 lg:h-14 xl:h-[56px] rounded-xl text-base md:text-base lg:text-lg xl:text-[20px] hover:bg-green-hover transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
