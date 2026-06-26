export default function Hero() {
  return (
    <section className="relative">
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="pt-10 md:pt-20 mb-4 text-3xl sm:text-4xl md:text-[64px] font-bold text-[#1A5A45] leading-tight"
          style={{ fontFamily: "var(--font-be-vietnam-pro)" }}
        >
          Transforming Equb For The Digital Age
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-[#242424] font-medium text-sm sm:text-base md:text-[18px]">
          Save Together, Access Funds Easily, And Manage Your Equb Anytime,
          Anywhere With Wave.
        </p>

        <div className="flex justify-center mb-6 md:mb-8">
          <button
            className="flex items-center gap-2 cursor-pointer h-12 md:h-[62px] pl-5 pr-2 rounded-xl bg-[#1A5A45] font-semibold text-white text-base md:text-[20px] hover:bg-[#154a38] transition-colors"
            style={{ fontFamily: "var(--font-be-vietnam-pro)" }}
          >
            <span>Get the App</span>
            <img
              src="/icons/Arrow.svg"
              alt=""
              className="h-8 w-8 md:h-9 md:w-9"
            />
          </button>
        </div>

        <div className="flex justify-center items-end">
          <img
            src="/imgs/hero-image.png"
            alt="Wave app on mobile devices"
            className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
