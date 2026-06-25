export default function Hero() {
  return (
    <section className="overflow-hidden border-b-2  bg-gradient-to-r from-lime-50 via-lime-200 to-white">
      <div className="mx-auto max-w-7xl px-6  text-center">
        <h2 className="mb-4 text-5xl font-bold text-[#1A5A45] pt-20">
          Transforming Equb For The Digital Age
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-600">
          Save together, access funds easily, and manage your Equb <br />{" "}
          anytime, anywhere with Wave.
        </p>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 cursor-pointer rounded-lg bg-[#1A5A45] px-6 py-3 font-medium text-white">
            <span>Get the App</span>
            <img src="/icons/Arrow.svg" alt="" className="h-8 w-8" />
          </button>
        </div>
        <div className="flex items-end mt-5">
          <img src="/imgs/hero-image.png" alt="" />
        </div>
      </div>
    </section>
  );
}
