import PoortadaCreadorEvents from "@/pages/CreadorFormulario/PoortadaCreadorEvents";
import FormularioParaSerCreador from "./FormularioParaSerCreador";
function IndexCreador() {
  {/*Aqui  hacer que si esta logueado y el usuario es creador que te lleve a la pagina de crearEventos 
    Sino te muestre el formulario*/}
  return (
    <>
        <PoortadaCreadorEvents />
        <FormularioParaSerCreador />
    </>
    
  )
}

export default IndexCreador