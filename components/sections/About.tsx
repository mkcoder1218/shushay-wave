import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="bg-[#f8ffe4] py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="/imgs/woman.png"
              alt="Woman using Wave Equb app"
              className="w-full max-w-sm md:max-w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-3 pr-10">
            <p className="text-black text-[18px] font-bold md:pl-30">
              About the App
            </p>
            <h2 className="text-3xl md:text-[96px] md:pl-30 font-bold text-[#1A5A45] leading-tight">
              Wave Equb
            </h2>

            <p className="text-[#242424] text-base md:text-[24px] md:mt-20 leading-relaxed">
              Wave Equb modernizes the traditional equb system, making it
              easier, clearer, and faster to use. Users can save money together
              in a structured and secure manner using mobile technology—without
              confusion or risk. Every contribution and payout is recorded,
              visible, and easy to track.
            </p>

            <p className="text-[#242424] text-base md:text-[24px] leading-relaxed">
              With Wave Equb, users can effortlessly create or join Equb groups,
              set contribution amounts and schedules, and manage everything
              directly from their mobile device. The platform offers a fully
              cashless environment where all transactions are processed
              digitally, ensuring safety, accuracy, and convenience. Automated
              reminders and smart payment systems help users stay consistent
              with their contributions, minimizing delays or conflicts within
              the group.
            </p>

            <p className="text-[#242424] text-base md:text-[24px] leading-relaxed">
              Beyond just digitizing Equb, Wave Equb enhances the entire saving
              experience by merging technology with community trust. It empowers
              individuals to build better financial habits, supports groups in
              achieving their goals more efficiently, and opens access to
              structured savings for those who may lack traditional financial
              services.
            </p>

            <p className="text-[#242424] text-base md:text-[24px] leading-relaxed">
              By bridging tradition and technology, Wave Equb provides a
              smarter, safer, and more reliable way to save — anytime, anywhere.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
