import { SignedOut, SignIn } from "@clerk/clerk-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "react-simple-typewriter";

function Login() {
  return (
    <>
      <div className="flex w-full min-h-screen items-center justify-center bg-gradient-to-b from-[#24274f] to-[#55F1FF]">
        <Card className="w-full max-w-4xl h-11/12 max-h-[90vh] p-4 rounded-2xl shadow-2xl  flex flex-col md:flex-row gap-6  bg-white/20 backdrop-blur-md mt-40">
        
          {/*Caja del circulo */}
          <div className="hidden relative lg:flex min-h-full w-1/2 flex-col items-center justify-start rounded-2xl bg-gray-200 pt-8">
            <h1 className="text-4xl font-bold text-black mb-4 drop-shadow-lg text-center">
              ¡BIENVENIDO A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-20% to-cyan-300">
                <Typewriter words={["Evoments!"]} typeSpeed={100} cursor={false} />
              </span>
            </h1>
            <div className="w-60 h-60 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-full animate-spin" />
            <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg">
            <ul className="text-black/80 space-y-2 text-lg text-center mt-30">
              <li>✔️ Experiencias únicas</li>
              <li>✔️ Acceso exclusivo</li>
              <li>✔️ Eventos especiales</li>
            </ul>
            </div>
          </div>
          {/*Formulario */}
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <SignedOut>
              <SignIn
                signUpUrl={`${import.meta.env.VITE_BASEAPP_URL}/registrate`}
                appearance={{
                  elements: {
                    card: {
                      backgroundImage: "linear-gradient(to right, #FFFFFF, #55F1FF)",
                      backdropFilter: "blur(7px)",
                      borderRadius: "16px",
                      color: "white",
                    },
                    headerTitle: {
                      fontSize: "0px",
                      "&::after": {
                        content: "'Inicia Sesión'",
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        color: "#24274f",
                        display: "block",
                        marginBottom: "0.5rem"
                      }
                    },
                    headerSubtitle: {
                      fontSize: "0px",
                      "&::after": {
                        content: "'Accede a tu cuenta para comenzar'",
                        fontSize: "1rem",
                        color: "#24274f",
                        display: "block"
                      }
                    },
                    formButtonPrimary: {
                      backgroundColor: "#55F1FF",
                      color: "#24274f",
                      fontWeight: "600",
                      "&:hover": {
                        backgroundColor: "#3bc9db",
                      }
                    },
                  },
                }}
              />
            </SignedOut>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;