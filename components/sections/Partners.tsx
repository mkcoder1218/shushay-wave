import Container from "@/components/ui/Container";
import { PARTNERS } from "@/lib/constants/partners";

export default function Partners() {
  return (
    <section className="bg-white py-4 md:py-5">
      <Container>
        <div className="grid grid-cols-3 place-items-center gap-6 md:grid-cols-1 md:flex md:items-center md:justify-center md:gap-8 lg:gap-12 xl:gap-20">
          {PARTNERS.map(({ id, name, logo }) => (
            <img
              key={id}
              src={logo}
              alt={name}
              className="h-auto w-auto md:max-h-10 lg:max-h-12 xl:max-h-none"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
