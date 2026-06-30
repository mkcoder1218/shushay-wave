import Container from "@/components/ui/Container";
import clsx from "clsx";

export default function WhyChooseUs() {
  const bottomIcons = [
    "/icons/dollar-sign.svg",
    "/icons/grid.svg",
    "/icons/divide.svg",
    "/icons/trending-up.svg",
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-bg-section py-16 md:py-16 lg:py-20 xl:py-20 px-4 md:px-6 lg:px-10 xl:px-20"
    >
      <Container>
        <h2 className="text-green-primary text-[32px] 2xl:text-[56px] font-bold mb-5">
          Why Choose Wave Equb
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Card 1 */}
          <div
            className={clsx(
              "relative rounded-3xl w-full overflow-hidden bg-gradient-to-b",
              "from-green-accent to-green-primary min-h-[340px] flex flex-col",
            )}
          >
            <div className="p-6 md:p-6 lg:p-7 xl:p-8 text-center">
              <p
                className={clsx(
                  "text-green-primary text-base 2xl:text-[28px] uppercase mb-3",
                )}
              >
                You Only Need One App
              </p>
              <h3
                className={clsx(
                  "text-white text-[32px] lg:text-[48px] 2xl:text-[68px] font-bold",
                  "mx-auto max-w-[376px] md:max-w-[725px]",
                )}
              >
                Save smarter with a trusted digital Equb.
              </h3>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img
                src="/imgs/man.png"
                alt="Man using Wave Equb"
                className={clsx(
                  "w-full max-w-[260px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[220px]",
                  "2xl:max-w-[320px] h-auto object-contain object-bottom",
                )}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={clsx(
              "relative rounded-3xl w-full overflow-hidden  flex flex-col",
              "bg-gradient-to-b from-green-primary to-green-accent min-h-[340px]",
            )}
          >
            <div className="p-6 md:p-6 lg:p-7 xl:p-8 text-center">
              <p className="text-green-accent text-base 2xl:text-[28px] uppercase  mb-3">
                Simple Control
              </p>
              <h3
                className={clsx(
                  "text-white text-[32px] lg:text-[48px] 2xl:text-[68px] xl:px-5 font-bold",
                  "mx-auto max-w-[376px] md:max-w-[725px]",
                )}
              >
                Easily manage your Equb with reliability.
              </h3>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <img
                src="/imgs/phone 4.png"
                alt="Equb details screen"
                className="w-[250px] md:w-[180px] lg:w-[220px] xl:w-[200px] 2xl:w-[280px] object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Bottom card */}
        <div
          className={clsx(
            "relative rounded-3xl overflow-hidden w-full min-h-[260px] flex flex-col",
            "md:flex-row items-center border border-black/10",
          )}
        >
          <div
            className={clsx(
              "w-full md:w-1/2 p-6 md:p-6 lg:p-7 xl:p-8 flex flex-col",
              "justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-20",
            )}
          >
            <div className="flex items-center gap-5 text-green-accent">
              {bottomIcons.map((icon) => (
                <img
                  key={icon}
                  src={icon}
                  alt=""
                  className="w-8 h-8 lg:w-9 lg:h-9 xl:w-auto xl:h-auto"
                />
              ))}
            </div>
            <div>
              <h3 className="text-green-primary text-2xl md:text-2xl lg:text-3xl 2xl:text-[48px] font-bold mb-2">
                Save Anytime, Anywhere
              </h3>
              <p className="text-text-body text-base md:text-base lg:text-xl 2xl:text-[28px]">
                Stay connected to your Equb wherever you are, without limits.
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "absolute bottom-0 -right-10 w-full  md:bottom-0",
              "md:-right-10 md:w-[60%] flex justify-end pointer-events-none",
              "xl:right-0 xl:bottom-0",
              "2xl:relative 2xl:bottom-auto 2xl:right-auto 2xl:w-1/2",
            )}
          >
            <img
              src="/imgs/woman-2.png"
              alt="Woman using Wave Equb"
              className="w-full md:w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
