import Container from "@/components/ui/Container";

export default function Partners() {
  return (
    <section className="bg-white py-4 md:py-5">
      <Container>
        <div className="grid grid-cols-3 place-items-center gap-8 md:flex md:justify-center md:items-center md:gap-20">
          <img src="/imgs/partners/tele-birr.png" alt="Telebirr" />
          <img src="/imgs/partners/cbe-birr.png" alt="CBE Birr" />
          <img src="/imgs/partners/chapa.png" alt="Chapa" />
          <img src="/imgs/partners/m-pesa.png" alt="M-PESA" />
          <img src="/imgs/partners/kacha.png" alt="Kacha" />
          <img src="/imgs/partners/santim-pay.png" alt="Santim Pay" />
        </div>
      </Container>
    </section>
  );
}
