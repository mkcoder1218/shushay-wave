import Container from "@/components/ui/Container";
import AppStoreButtons from "@/components/ui/AppStoreButtons";
import clsx from "clsx";

export default function DownloadApp() {
  return (
    <section className="bg-bg-section py-12 md:py-14 lg:py-16 relative overflow-hidden">
      {/* Outer background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/imgs/download-app-main-bg.png')" }}
      />

      {/* Phone image — desktop only*/}
      <div
        className={clsx(
          "z-10 hidden md:flex items-end justify-end pointer-events-none ",
          "absolute -top-1 md:top-3.5 md:right-25 lg:right-20 lg:top-3.5",
          "xl:right-25 xl:top-6 2xl:-top-1.5 2xl:right-75",
          "min-[120rem]:-top-1 min-[120rem]:right-120",
        )}
      >
        <img
          src="/imgs/phone-on-hand.png"
          alt="Hand holding phone with QR code"
          className="h-85 lg:h-100 xl:h-100 2xl:h-115 w-auto object-contain "
        />
      </div>

      <Container className="relative px-4 md:mx-4 lg:mx-8 xl:mx-12 2xl:mx-50 min-[120rem]:mx-100">
        <div
          className={clsx(
            "relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-[300px]",
            "lg:min-h-[350px] xl:min-h-[360px] 2xl:min-h-[390px]",
          )}
        >
          {/* Inner card background */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
            style={{ backgroundImage: "url('/imgs/download-app-bg.png')" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div
              className={clsx(
                "flex-1 p-6 md:p-8 lg:p-10 xl:p-10 2xl:p-12 flex flex-col gap-4",
                "md:max-w-[58%] lg:max-w-[55%] xl:max-w-[52%] 2xl:max-w-none",
              )}
            >
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-[36px] font-bold">
                Download the Wave Equb App Now!
              </h2>
              <p
                className={clsx(
                  "text-white text-sm md:text-base lg:text-base xl:text-base",
                  "2xl:text-[18px] lg:max-w-[480px] 2xl:max-w-[560px]",
                )}
              >
                Discover a smarter way to save together. Scan to join your Equb,
                manage contributions, and enjoy secure, transparent group
                savings.
              </p>
              <AppStoreButtons className="mt-2" />
            </div>

            {/* Phone image — mobile only, inline below text */}
            <div className="md:hidden flex justify-center w-full pb-0">
              <img
                src="/imgs/phone-on-hand.png"
                alt="Hand holding phone with QR code"
                className="h-72"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
