import Container from "@/components/ui/Container";
import { FEATURE_CARDS } from "@/lib/constants/features";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#f8ffe4] px-4 md:px-20"
    >
      {/* Green top zone */}
      <div
        className="absolute top-0 left-4 right-4 md:left-20 md:right-20 h-full md:h-[55%] bg-cover rounded-2xl"
        style={{ backgroundImage: "url('/imgs/feattures-bg.png')" }}
      />

      <Container className="relative py-12 md:py-20">
        <h2 className="text-center text-2xl md:text-[48px] font-bold text-transparent mb-10 md:mb-16">
          Digital Equb, Zero Cash Risk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end text-center px-2 md:px-6">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl w-full md:max-h-[628px] md:max-w-[473px] p-6 shadow-xl flex flex-col gap-4 ${card.center ? "md:-mt-8" : ""}`}
            >
              {card.center ? (
                <div className="overflow-hidden min-h-100 md:min-h-[628px] flex items-end pb-8 md:pb-16">
                  <div className="absolute top-152 left-17  md:top-42 md:left-185 overflow-hidden rounded-xl flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full max-w-[200px] md:max-w-none h-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#1A5A45] text-lg md:text-[32px] font-bold">
                      {card.title}
                    </h3>
                    <p className="text-[#242424] text-sm md:text-[18px] md:px-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <h3 className="text-[#1A5A45] text-lg md:text-[32px] font-bold md:px-10">
                    {card.title}
                  </h3>
                  <p className="text-[#242424] text-sm md:text-[18px] md:px-8">
                    {card.description}
                  </p>
                  <div className="overflow-hidden rounded-xl flex items-center justify-center mt-4 md:mt-0">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full max-w-[200px] md:max-w-none h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
