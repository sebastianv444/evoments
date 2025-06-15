import { Form } from "react-router-dom";
import CrearEvento from "./CrearEvento";
import { PortadaCrearEventos } from "./portadaCrearEventos";

function IndexCrearEventos() {
  return (
    <>
      <PortadaCrearEventos />
      <CrearEvento />
    </>
  );
}

export default IndexCrearEventos;
