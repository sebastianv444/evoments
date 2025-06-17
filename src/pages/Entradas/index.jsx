import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useLocation, useNavigate } from "react-router-dom";
import EntradaSection1 from "./Section1";
import { useEffect } from "react";

function Entradas() {
  useSmoothScroll();
  /* Esto es para recibir el color representativo de la imagen de la 
  portada del evento y usarla como fondo de la parte de arriba de de 
  EntradaSection1. */
  const location = useLocation();
  const color = location.state?.color || "#9b9b9b";
  const event = location.state?.event;
  const img = location.state?.img;
  console.log(event)
  /* Si el usuario entra directamente por la ruta sin pasar el objeto 
  'event', lo redirige. */
  const navigate = useNavigate();
  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);
  if (!event) {
    return null;
  }

  /* Hacer la petición aquí y pasarle los datos correctamente necesarios
    para mandarselo como un children a el componente <EntradaSection1/> */

  return (
    <>
      <EntradaSection1 color={color} event={event} img={img} />
    </>
  );
}

export default Entradas;
