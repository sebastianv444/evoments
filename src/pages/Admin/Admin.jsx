import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/admin/eventos-pendientes`)
      .then(res => setEventos(res.data))
      .catch(err => console.error(err));
  }, []);

  const manejarAccion = async (id, accion) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/eventos/actualizarEstadoEvento`, {
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
    <div className='pt-40 bg-yellow-600 h-screen'>
      <h2 className="text-2xl font-bold mb-10 text-center">Eventos Pendientes</h2>
      {eventos.length === 0 ? (
        <p className="text-center text-gray-600">No hay eventos pendientes.</p>
      ) : (
        <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {eventos.map(evento => (
            <div key={evento.id} className="border p-4 rounded shadow bg-white">
              <h3 className="text-lg font-semibold mb-2">{evento.titulo}</h3>
              <p className="text-sm text-gray-600 mb-2">{evento.descripcion}</p>
              <p><strong>Localidad:</strong> {evento.venue.localidad}</p>
              <p><strong>Nombre de la zona:</strong> {evento.venue.nombre}</p>
              <p><strong className="text-red-600">Ubicación:</strong> {evento.venue.direccion}</p>
              <p><strong>Fecha:</strong> {new Date(evento.fechaEvento).toLocaleString()}</p>

              <div className="mt-4 space-x-2">
                <button
                  onClick={() => manejarAccion(evento.id, 'aceptar')}
                  className="px-4 py-1 bg-green-600 text-white rounded"
                >
                  Aceptar
                </button>
                <button
                  onClick={() => manejarAccion(evento.id, 'rechazar')}
                  className="px-4 py-1 bg-red-600 text-white rounded"
                >
                  Rechazar
                </button>
              </div>
            </div>
          ))}
        </div> 
      )}
      </div>
    </>
  );
}
