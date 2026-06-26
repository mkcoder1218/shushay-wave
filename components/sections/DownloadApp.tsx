import Container from "@/components/ui/Container";
import AppStoreButtons from "@/components/ui/AppStoreButtons";

export default function DownloadApp() {
  return (
    <section className="bg-[#f8ffe4] py-12 md:py-16 relative overflow-hidden">
      {/* Outer background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/imgs/download-app-main-bg.png')" }}
      />

      {/* Phone image — desktop only, absolute positioned */}
      <div className="hidden md:flex absolute -top-1 md:right-120 z-10 items-end justify-end pr-4 md:pr-8">
        <img
          src="/imgs/phone-on-hand.png"
          alt="Hand holding phone with QR code"
          className="h-64 md:h-115"
        />
      </div>

      <Container className="relative px-4 md:mr-100 md:ml-100">
        <div className="relative rounded-3xl overflow-hidden min-h-[300px] md:min-h-[390px]">
          {/* Inner card background */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
            style={{ backgroundImage: "url('/imgs/download-app-bg.png')" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="flex-1 p-6 md:p-12 flex flex-col gap-4">
              <h2 className="text-white text-xl md:text-[36px] font-bold leading-snug">
                Download the Wave Equb App Now!
              </h2>
              <p className="text-white text-sm md:text-[18px] md:max-w-[560px]">
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
