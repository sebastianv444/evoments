import { useEffect, useState } from "react";
import CheckoutButton from "@/components/CheckoutButton";
import EvoApi from "@/services/MyAPI/EvoApi";

function EntradaSection1({ color, event, img }) {
  const formattedDate = event?.fechaEvento
    ? new Date(event.fechaEvento).toLocaleDateString("es-ES")
    : "";

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (!event.zonasEvento) return;
    const initial = {};
    event.zonasEvento.forEach((z) => {
      initial[z.id] = 0;
    });
    setQuantities(initial);
  }, [event]);

  const inc = (id) => {
    setQuantities((q) => ({
      ...q,
      [id]: Math.min(
        q[id] + 1,
        event.zonasEvento.find((z) => z.id === id).capacidad
      ),
    }));
  };
  const dec = (id) => {
    setQuantities((q) => ({ ...q, [id]: Math.max(q[id] - 1, 0) }));
  };

  const total = event.zonasEvento.reduce(
    (sum, z) => sum + quantities[z.id] * parseFloat(z.precioBase),
    0
  );

  const items = event.zonasEvento
    .map((z) => ({ zonaId: z.id, cantidad: quantities[z.id] }))
    .filter((x) => x.cantidad > 0);

  return (
    <section className="h-full w-full">
      <div
        className="h-65 4xl:h-130 w-full"
        style={{ backgroundColor: color }}
      ></div>
      <div className="w-full h-full pl-5 pr-5 4xl:pl-120 4xl:pr-160 bg-gray-400/60 shadow-[0_-20px_30px_-10px_rgba(194,199,207)]">
        <div className="flex flex-col 4xl:flex-row relative bottom-12 4xl:bottom-17 justify-between">
          <div className="flex items-center gap-6.5 4xl:gap-10">
            <img
              src={`${img}`}
              alt=""
              className="w-22 h-22 4xl:w-33 4xl:h-33 rounded-full object-cover border-3 border-black"
            />
            <div>
              <h1 className="text-[27px] 4xl:text-[41px] font-bold text-black">
                {event.titulo}
              </h1>
              <p>
                creado por:{" "}
                <span className="font-semibold">{event.creador.nombre}</span>
              </p>
            </div>
          </div>
          <h2 className="font-semibold text-[20px] 3xl:text-2xl mt-2 3xl:mt-0 4xl:self-center">
            {formattedDate}
          </h2>
        </div>
        <div>
          <p>{event.descripcion}</p>
          <div className="mt-15 pb-20 md:pb-34 3xl:pb-33 4xl:pb-83">
            {/* aqui van lo de las 3 secciones con o las que tenga el evento junto al boton de pagar */}
            <h2 className="text-3xl font-semibold">Entradas</h2>
            <div className="space-y-4 mt-6">
              {event.zonasEvento.map((z) => (
                <div
                  key={z.id}
                  className="flex items-center justify-between bg-white p-4 rounded shadow"
                >
                  <div>
                    <p className="font-semibold">{z.nombre}</p>
                    <p>€{parseFloat(z.precioBase).toFixed(2)}</p>
                    <p>Aforo: {z.capacidad}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dec(z.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="w-6 text-center">{quantities[z.id]}</span>
                    <button
                      onClick={() => inc(z.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-semibold">
                Total: €{total.toFixed(2)}
              </p>
              <CheckoutButton
                eventId={event.id}
                items={items}
                disabled={items.length === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EntradaSection1;
