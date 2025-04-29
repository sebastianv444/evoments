import RevealOnScroll from "@/components/framerMotion/RevealOnScroll";
import { FaStripeS } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

function HomeSection3() {
  return (
    <section
      className="h-[120vh] sm:h-screen bg-[#24274f] flex 
    items-center justify-center"
    >
      <RevealOnScroll once={false} amount={0.3}>
        <div className="flex flex-col md:flex-row max-w-90 gap-18 md:max-w-245 lg:gap-18">
          <img
            src="/img-home/pagoHome.png"
            alt="img de pago seguro con evoments"
            className="md:m-0 w-58 h-55 md:w-110 md:h-100 
          drop-shadow-[0_0_15px_#6657f2] self-center"
          />
          <div>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl text-center">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                T
              </span>
              u pago,{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                N
              </span>
              uestra <br />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                P
              </span>
              rioridad
            </h2>
            <br />
            <p>
              Protegemos cada transacción, garantizando seguridad, rapidez,
              privacidad y facilidad de pago en todo momento. Nos comprometemos
              a ofrecerte una experiencia de pago confiable, sin complicaciones,
              diseñada para brindarte tranquilidad desde el primer clic hasta la
              confirmación final.
            </p>
            <br />
            <br />
            <div className="flex gap-11 sm:gap-13 flex-col md:flex-row flex-wrap">
              <div className="flex gap-3">
                <div
                  className="border-2 border-white rounded-4xl block p-[8px] self-center 
              bg-gradient-to-r from-indigo-500 to-purple-500 drop-shadow-[0_0_13px_#6657f2]"
                >
                  <FaStripeS className="text-xl" />
                </div>
                <p className="text-gray-300 leading-tight">
                  Protección de <br />
                  pagos con <b>stripe</b>
                </p>
              </div>
              <div className="flex gap-3">
                <div
                  className="self-center text-white rounded-full 
                drop-shadow-[0_0_14px_#036CDF] border-2 border-white"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5eabf935dc211f5fa80b51e8/6480582243738d559ea527c6_Uf2eCeF2Aj6IbZd9lGoVd79Q7IO2FtNTS0KD7RrpVso.webp"
                    alt=""
                    className="w-[39.5px]"
                  />
                </div>
                <p className="text-gray-300 leading-tight">
                  Facilidad de pago
                  <br />
                  con <b>ticketmaster</b>
                </p>
              </div>
              <div className="flex gap-3">
                <div
                  className="self-center bg-green-600 text-white p-[4px] rounded-full 
                drop-shadow-[0_0_10px_#18AE50] border-2 border-white"
                >
                  <MdOutlineVerifiedUser className="text-3xl" />
                </div>
                <p className="text-gray-300 leading-tight">
                  Verificación en <br />
                  cada pago
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default HomeSection3;
