import Section from "@/components/ui/Section";
import clsx from "clsx";

const aboutParagraphs = [
  "Wave Equb modernizes the traditional equb system, making it easier, clearer, and faster to use. Users can save money together in a structured and secure manner using mobile technology—without confusion or risk. Every contribution and payout is recorded, visible, and easy to track.",
  "With Wave Equb, users can effortlessly create or join Equb groups, set contribution amounts and schedules, and manage everything directly from their mobile device. The platform offers a fully cashless environment where all transactions are processed digitally, ensuring safety, accuracy, and convenience. Automated reminders and smart payment systems help users stay consistent with their contributions, minimizing delays or conflicts within the group.",
  "Beyond just digitizing Equb, Wave Equb enhances the entire saving experience by merging technology with community trust. It empowers individuals to build better financial habits, supports groups in achieving their goals more efficiently, and opens access to structured savings for those who may lack traditional financial services.",
  "By bridging tradition and technology, Wave Equb provides a smarter, safer, and more reliable way to save — anytime, anywhere.",
];

export default function About() {
  return (
    <Section id="about" className="bg-bg-section py-16 2xl:pt-10">
      <div className="grid items-center gap-0 md:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="order-2 flex justify-center md:order-1 md:justify-start">
          <img
            src="/imgs/woman.png"
            alt="Woman using Wave Equb app"
            className="h-auto w-full max-w-sm object-contain  md:max-w-md lg:max-w-lg xl:max-w-full"
          />
        </div>

        <div className="order-1 space-y-3 pr-10 md:order-2 md:pr-4 lg:pr-8 xl:pr-10">
          <p className="text-[12px] lg:text-[18px] font-bold text-black md:pl-0 lg:pl-16 xl:pl-16 2xl:pl-30 font-heading">
            About the App
          </p>
          <h2
            className={clsx(
              "font-heading text-[32px] font-bold text-green-primary md:pl-0",
              "lg:pl-16 xl:pl-16  2xl:pl-30 2xl:text-[96px]",
            )}
          >
            Wave Equb
          </h2>

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base text-text-body 2xl:text-[24px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
