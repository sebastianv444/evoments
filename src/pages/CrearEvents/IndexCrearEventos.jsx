import { Form } from "react-router-dom";
import CrearEvento from "./CrearEvento";
import { PortadaCrearEventos } from "./portadaCrearEventos";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function IndexCrearEventos() {
  useSmoothScroll();
  return (
    <>
      <PortadaCrearEventos />
      <CrearEvento />
    </>
  );
}

export default IndexCrearEventos;
