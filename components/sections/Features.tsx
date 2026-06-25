import Container from "@/components/ui/Container";

const CARDS = [
  {
    title: "Secure Cashless Equb Transactions",
    description: "Send and receive Equb payments safely – no cash, no risk.",
    image: "/imgs/phone 1.png",
    alt: "Payment screen",
  },
  {
    title: "Easy Equb Creation & Management",
    description:
      "Create or join Equb groups and manage everything in one place.",
    image: "/imgs/phone 1.png",
    alt: "Equb creation screen",
    center: true,
  },
  {
    title: "Smart Automated Contributions",
    description: "Stay on track with scheduled payments and instant reminders.",
    image: "/imgs/phone 1.png",
    alt: "Account screen",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#1A5A45] py-16 relative overflow-hidden"
    >
      {/* World map watermark */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: "url('/imgs/world-map.png')" }}
      />

      <Container className="relative">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#A8D5A2] mb-12">
          Digital Equb, Zero Cash Risk
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-6 flex flex-col gap-4 ${card.center ? "md:-mt-6" : ""}`}
            >
              {/* Center card: image on top, text below */}
              {card.center ? (
                <>
                  <div className="h-64 overflow-hidden rounded-xl">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#1A5A45] text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </>
              ) : (
                <>
                  <h3 className="text-[#1A5A45] text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                  <div className="h-56 overflow-hidden rounded-xl">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
