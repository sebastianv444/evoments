import ButtonMotion from "@/components/myButtons/ButtonMotion";
import { Typewriter } from "react-simple-typewriter";

function HomeSection1({ children }) {
  return (
    <section
      className="h-screen 2xl:h-[102vh] 3xl:h-screen flex items-center p-5 md:p-7 lg:p-20 bg-cover bg-top-left
      bg-[url(/background-home/fondo-home-2.png)] text-white"
    >
      <div className="max-w-110 2xl:max-w-130 3xl:max-w-155 2xl:mt-9">
        <h1 className="text-4xl font-bold 2xl:text-[39px] 3xl:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-20% to-cyan-400">
            <Typewriter words={["Crea"]} typeSpeed={40} cursor={false} />
          </span>
          <Typewriter words={[", "]} typeSpeed={40} cursor={false} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">
            <Typewriter words={["descubre"]} typeSpeed={40} cursor={false} />
          </span>
          <Typewriter words={[" y vive"]} typeSpeed={40} cursor={false} />
          <br />
          <Typewriter
            words={[" eventos únicos con"]}
            typeSpeed={40}
            cursor={false}
          />
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-600 from-30%">
            <Typewriter
              words={[" Evoments"]}
              typeSpeed={190}
              cursor={false}
              delaySpeed={1000}
            />
          </span>
          <Typewriter
            words={[""]}
            typeSpeed={160}
            cursor
            cursorStyle="|"
            delaySpeed={1000}
          />
        </h1>
        <br />
        <p>
          Nuestro objetivo es conectar a organizadores con usuarios que buscan
          experiencias únicas, permitiendo que estos puedan adquirir entradas de
          forma rápida, interactiva y sin complicaciones.
        </p>
        <br />
        <div className="flex gap-5 mt-2 md:mt-0">
          <ButtonMotion to={"/events"} className="">
            Explorar Eventos
          </ButtonMotion>
          <ButtonMotion
            className="bg-transparent border-blue-600 
          border-3 hover:bg-blue-700"
          >
            Crea el tuyo
          </ButtonMotion>
        </div>
      </div>
      {children}
    </section>
  );
}

export default HomeSection1;
