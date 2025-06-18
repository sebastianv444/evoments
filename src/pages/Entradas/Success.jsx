import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ButtonMotion from "@/components/myButtons/ButtonMotion";

function Success() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionId = params.get("session_id");
    if (sessionId) {
      axios
        .post("/api/your-backend-endpoint", { session_id: sessionId })
        .then((response) => {})
        .catch((error) => {});
    }
  }, [location.search]);

  return (
    <section className="h-screen w-full flex-col bg-blue-950 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center max-w-150 gap-11">
        <img src="/assets/check.png" alt="" className="w-60" />
        <p className="text-white text-[17px] ">
          ¡Gracias por tu compra! Hemos procesado tu pedido con éxito y ya hemos
          enviado tu entrada al correo electrónico que nos proporcionaste. Te
          recomendamos revisar también tu carpeta de spam o promociones por si
          el mensaje no aparece en la bandeja principal. Guarda bien la entrada,
          ya que la necesitarás para acceder al evento. Si tienes alguna duda o
          no has recibido el correo, puedes contactarnos y estaremos encantados
          de ayudarte. ¡Esperamos que disfrutes del evento y que tengas una gran
          experiencia!
        </p>
        <ButtonMotion to="/events">
            Ir a eventos
        </ButtonMotion>
      </div>
    </section>
  );
}

export default Success;
