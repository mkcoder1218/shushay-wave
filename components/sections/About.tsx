import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — woman image */}
          <div className="flex justify-center">
            <img src="/imgs/woman.png" alt="Woman using Wave Equb app" />
          </div>

          {/* Right — text */}
          <div className="space-y-6">
            <p className="text-black font-bold text-[18px] pt-20">
              About the App
            </p>
            <h2 className="text-[96px] font-bold text-[#1A5A45]">Wave Equb</h2>

            <p className="text-[24px] text-[#242424]">
              Wave Equb modernizes the traditional equb system, making it
              easier, clearer, and faster to use. Users can save money together
              in a structured and secure manner using mobile technology—without
              confusion or risk. Every contribution and payout is recorded,
              visible, and easy to track.
            </p>

            <p className="text-[24px] text-[#242424]">
              With Wave Equb, users can effortlessly create or join Equb groups,
              set contribution amounts and schedules, and manage everything
              directly from their mobile device. The platform offers a fully
              cashless environment where all transactions are processed
              digitally, ensuring safety, accuracy, and convenience. Automated
              reminders and smart payment systems help users stay consistent
              with their contributions, minimizing delays or conflicts within
              the group.
            </p>

            <p className="text-[24px] text-[#242424]">
              Beyond just digitizing Equb, Wave Equb enhances the entire saving
              experience by merging technology with community trust. It empowers
              individuals to build better financial habits, supports groups in
              achieving their goals more efficiently, and opens access to
              structured savings for those who may lack traditional financial
              services.
            </p>

            <p className="text-[24px] text-[#242424]">
              By bridging tradition and technology, Wave Equb provides a
              smarter, safer, and more reliable way to save — anytime, anywhere.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
