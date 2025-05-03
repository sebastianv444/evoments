import { fadeInLeft, fadeInRight } from "@/components/framerMotion/MotionVariants";
import RevealOnScroll from "@/components/framerMotion/RevealOnScroll";
import ButtonMotion from "@/components/myButtons/ButtonMotion";

function Section3() {
  return (
    <section
      className="h-[100vh] md:h-[9ñ0vh] gap-8 xl:gap-17 bg-[#24274f] flex
    flex-wrap-reverse md:flex-row items-center justify-center p-6 text-white"
    >
      <RevealOnScroll once={false} amount={0.3} variant={fadeInLeft}>
        <div className="max-w-130 mb-30 md:mb-0">
          <h1 className="text-3xl md:text-[38px] font-bold mb-4">
            Empezar a{" "}
            <span className="text-[#027ECF] border-3 px-1 py-0 border-blue-500">
              Crear
            </span>
          </h1>
          <p>
            ¿Listo para transformar tu pasión en experiencias inolvidables? Con
            Evoments, diseñar tu propio evento es tan fácil como un par de
            clics. Crea, personaliza y gestiona cada detalle, desde la estética
            hasta la venta de entradas, en una plataforma intuitiva y segura.
            Únete a nuestra comunidad de organizadores y conecta con asistentes
            ávidos de vivir momentos únicos. ¡Empieza hoy mismo y conviértete en
            el arquitecto de tus propias experiencias!
          </p>
          <br />
          <ButtonMotion className="px-3.5 py-2.5 md:px-6 md:py-3">
            Crear Evento
          </ButtonMotion>
        </div>
      </RevealOnScroll>
      <RevealOnScroll once={false} amount={0.4} variant={fadeInRight}>
        <div>
          <img
            src="/img-home/createEventLogo2-Home.png"
            alt=""
            className="w-165 xl:w-200"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Section3;
