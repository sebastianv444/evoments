function EntradaSection1({ color, event, img }) {
  const formattedDate = event?.fechaEvento
    ? new Date(event.fechaEvento).toLocaleDateString("es-ES")
    : "";

  return (
    <section className="h-screen w-full">
      <div
        className="h-65 4xl:h-130 w-full"
        style={{ backgroundColor: color }}
      ></div>
      <div className="w-full h-full pl-5 4xl:pl-110 4xl:pr-160 bg-gray-400/60 shadow-[0_-20px_30px_-10px_rgba(194,199,207)]">
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
          <div className="mt-20">
            <h2 className="text-3xl font-semibold">Entradas</h2>
            <div className="flex gap-5 flex-col">
              <div className="w-full bg-blue-200 h-30"></div>
              <div className="w-full bg-blue-200 h-30"></div>
              <div className="w-full bg-blue-200 h-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EntradaSection1;
