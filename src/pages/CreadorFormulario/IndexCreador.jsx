import PoortadaCreadorEvents from "@/pages/CreadorFormulario/PoortadaCreadorEvents";
import Section2 from "./FormularioParaSerCreador";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function IndexCreador() {
  useSmoothScroll()
  {/*Aqui  hacer que si esta logueado y el usuario es creador que te lleve a la pagina de crearEventos 
    Sino te muestre el formulario*/}
  return (
    <>
        <PoortadaCreadorEvents />
        <Section2 />
    </>
    
  )
}

export default IndexCreador