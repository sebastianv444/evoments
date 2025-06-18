import Footer from "@/components/footer";
import { SignUp } from "@clerk/clerk-react";
import { Typewriter } from "react-simple-typewriter";

function Registro() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#24274f] to-[#55F1FF] font-semibold flex justify-center items-center min-h-screen p-4 pt-40">
        <div className="bg-white p-4 rounded-xl shadow-2xl w-full max-w-[800px] relative overflow-hidden gap-6 md:gap-0 grid md:grid-cols-2">

          {/* Efecto de fondo diagonal */}
          <div className="hidden md:block absolute left-[60%] bottom-[-20%] bg-black w-[150%] h-[150%] rotate-[57deg] z-0" />

          {/* Formulario */}
          <div className="w-full">
            <SignUp
              signInUrl={`${import.meta.env.VITE_BASEAPP_URL}/login`}
              fallbackRedirectUrl="/sync"
              appearance={{
                elements: {
                  card: {
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                    padding: "1.5rem",
                  },
                  headerTitle: {
                    fontSize: "0px",
                    "&::after": {
                      content: "'Crea tu cuenta'",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#1a1a40",
                      display: "block",
                      marginBottom: "0.5rem",
                      textAlign: "center",
                    },
                  },
                  headerSubtitle: {
                    fontSize: "0px",
                    "&::after": {
                      content: "'Regístrate para comenzar'",
                      fontSize: "0.875rem",
                      color: "black",
                      display: "block",
                      textAlign: "center",
                      marginBottom: "1rem",
                    },
                  },
                  formButtonPrimary: {
                    backgroundColor: "#00c4ff",
                    color: "#1a1a40",
                    fontWeight: "700",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#00aacc",
                    },
                  },
                },
              }}
            />
          </div>

          {/* Texto lateral (arriba en md, abajo en mobile) */}
          <div className="w-full text-center md:text-right text-black md:text-white flex flex-col justify-center z-10">
            <h3 className="text-4xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-20% to-cyan-400">
              <Typewriter words={["Regístrate"]} typeSpeed={40} cursor={false} />
            </h3>
            <p className="text-sm leading-tight mt-2">
              Disfruta de los eventos que puedes ver en vivo, y si te animas... ¡crea los tuyos!
            </p> <br />
            <p className="text-sm leading-tight mt-1">
              Únete a nuestra comunidad y recibe acceso exclusivo a experiencias únicas.
            </p> <br />
            <p className="text-sm leading-tight mt-1">
              Es gratis, rápido y te abre las puertas a un mundo de entretenimiento.
            </p>
            <p className="text-base font-semibold mt-3 text-cyan-400 animate-pulse">
              Da el primer paso: haz clic en "Regístrate" y comienza a vivir algo extraordinario hoy mismo.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Registro;