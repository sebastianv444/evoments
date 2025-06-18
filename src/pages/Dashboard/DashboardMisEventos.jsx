import RevealOnScroll from "@/components/framerMotion/RevealOnScroll"
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import EventosCreadorCard from "./EventosCreadorCard";
function DashboardMisEventos() {
  const [eventos, setEventos] = useState([]);
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Cargando...</div>;

  // Email del usuario logueado
  const email = user.primaryEmailAddress?.emailAddress;
  
    useEffect(() => {
      if (!user) return;
      axios.post(`${import.meta.env.VITE_API_URL}/api/eventos-creadores/eventosDelCreador`,{
        email
      })
        .then(res => setEventos(res.data))
        .catch(err => console.error(err));
    }, [user]);

    const manejarAccion = async (id, accion) => {
        try {
          await axios.post(`${import.meta.env.VITE_API_URL}/api/eventos-creadores/cambiarEventocreador`, {
            id,
            accion,
          });
          setEventos(prev => prev.filter(evento => evento.id !== id));
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <>
      {eventos.map((e) => (
      <RevealOnScroll once={false} amount={0.2}>
        <EventosCreadorCard event={e} onAction={manejarAccion}/>
    </RevealOnScroll>
      ))}
    </>
    
  )
}

export default DashboardMisEventos