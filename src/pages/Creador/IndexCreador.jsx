import PortadaCreadorEvents from "@/pages/Creador/PortadaCreadorEvents";
import FormularioParaSerCreador from "./FormularioParaSerCreador";
function IndexCreador() {
  {/*Aqui  hacer que si esta logueado y el usuario es creador que te lleve a la pagina de crearEventos 
    Sino te muestre el formulario*/}
  return (
    <>
        <PortadaCreadorEvents />
        <FormularioParaSerCreador />
    </>
    
  )
}

export default IndexCreador