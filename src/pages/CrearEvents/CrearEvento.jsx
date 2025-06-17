import { postCrearEvento } from "@/services/MyAPI/CrearEvento/requestCrearEvento";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function CrearEvento() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [paso, setpaso] = useState(1);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const ZonaTipo = watch("ZonaTipo");

  const onSubmit = async (data) => {
    const {
      titulo,
      descripcion,
      fechaEvento,
      categoria,
      zonas,
      nombreLugar,
      direccionLugar,
      localidad,
      capacidadLugar,
      descripcionLugar,
    } = data;

    try {
      const response = await postCrearEvento(
        titulo,
        descripcion,
        fechaEvento,
        categoria,
        zonas,
        user.id,
        nombreLugar,
        direccionLugar,
        localidad,
        capacidadLugar,
        descripcionLugar
      );

      /* console.log(
        titulo,
        descripcion,
        fechaEvento,
        categoria,
        zonas,
        user.id,
        nombreLugar,
        direccionLugar,
        localidad,
        capacidadLugar,
        descripcionLugar
      ); */
      if (
        (response && response.success) ||
        (response && response.status === 200)
      ) {
        navigate("/dashboard/mis-eventos");
        console.log(response);
      }
      console.log("Evento creado con éxito:", response);
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      console.error("Error al crear el evento:", msg);
    }
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-gradient-to-b from-[#0E172B] to-[#6C63FF]">
      <div className="max-w-xl w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white shadow-xl rounded-2xl animate-fade-in"
        >
          {paso === 1 && (
            <div>
              <div className="mb-4 text-xl font-bold text-center">Evento</div>
              <div className="space-y-4">
                <label>Título:</label>
                <input
                  type="text"
                  {...register("titulo", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Nombre del evento"
                />
                {errors?.titulo && (
                  <p className="text-red-500 text-sm">El título es requerido</p>
                )}

                <label>Descripción del evento:</label>
                <input
                  type="text"
                  {...register("descripcion", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Descripcion del evento"
                />
                {errors?.descripcion && (
                  <p className="text-red-500 text-sm">
                    La descripción es requerida
                  </p>
                )}

                <label>Fecha del Evento:</label>
                <input
                  type="date"
                  {...register("fechaEvento", { required: true })}
                  min={
                    new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                  className="w-full p-2 border rounded"
                />
                {errors?.fechaEvento && (
                  <p className="text-red-500 text-sm">La fecha es requerida</p>
                )}

                <label>Categoría del evento:</label>
                <select
                  {...register("categoria")}
                  defaultValue="OTROS"
                  className="w-full p-2 border rounded"
                >
                  <option value="DEPORTE">Deporte</option>
                  <option value="CONCIERTO">Concierto</option>
                  <option value="SOCIAL">Social</option>
                  <option value="CORPORATIVO">Corporativo</option>
                  <option value="EDUCATIVO">Educativo</option>
                  <option value="OTROS">Otros</option>
                </select>

                <div className="relative w-full">
                  <label className="flex items-center gap-4 mb-2">
                    ¿Qué zonas quieres que haya?
                    <div className="relative border rounded-full p-1 bg-blue-600 group w-6 h-6 flex items-center justify-center">
                      <span className="text-white cursor-pointer">i</span>
                      <div className="absolute hidden group-hover:block bg-white text-black text-sm border rounded p-2 shadow-lg w-64 z-10">
                        Si deseas tener todas las zonas, elige "Premium".
                        <br />
                        Si deseas dos zonas, elige "VIP".
                      </div>
                    </div>
                  </label>
                  <select
                    {...register("ZonaTipo")}
                    defaultValue="general"
                    className="w-full p-2 border rounded"
                  >
                    <option value="general">General</option>
                    <option value="vip">VIP</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn w-full"
                  onClick={handleSubmit(() => setpaso(2))}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {paso === 2 && (
            <div>
              <div className="mb-4 text-xl font-bold text-center">
                Zona de evento
              </div>
              <div className="space-y-4">
                {(() => {
                  let zonas = [];
                  if (ZonaTipo === "vip") zonas = ["General", "VIP"];
                  else if (ZonaTipo === "premium")
                    zonas = ["General", "VIP", "Premium"];
                  else zonas = ["General"];

                  return zonas.map((zona, index) => {
                    let min = 10;
                    let max = 100000;

                    if (zona === "General") {
                      min = 50;
                      max = 100000;
                    } else if (zona === "VIP") {
                      min = 10;
                      max = 500;
                    } else if (zona === "Premium") {
                      min = 10;
                      max = 200;
                    }

                    return (
                      <div
                        key={index}
                        className="border border-gray-300 rounded p-4 mb-4"
                      >
                        <input
                          type="hidden"
                          {...register(`zonas.${index}.nombreZona`)}
                          value={zona}
                        />

                        <label>Capacidad de la zona {zona}:</label>
                        <input
                          type="number"
                          {...register(`zonas.${index}.capacidad`, {
                            required: "La capacidad es requerida",
                            min: {
                              value: min,
                              message: `La capacidad mínima para ${zona} es ${min}`,
                            },
                            max: {
                              value: max,
                              message: `La capacidad máxima para ${zona} es ${max}`,
                            },
                          })}
                          className="w-full p-2 border rounded"
                          placeholder={`Capacidad zona ${zona}`}
                        />
                        {errors?.zonas?.[index]?.capacidad && (
                          <p className="text-red-500 text-sm">
                            {errors.zonas[index].capacidad.message}
                          </p>
                        )}

                        <label>Precio entradas {zona}:</label>
                        <input
                          type="number"
                          {...register(`zonas.${index}.precioEntrada`, {
                            required: "El precio es requerido",
                            min: {
                              value: 10,
                              message: `El precio mínimo para ${zona} es 10`,
                            },
                          })}
                          className="w-full p-2 border rounded"
                          placeholder={`Precio zona ${zona}`}
                        />
                        {errors?.zonas?.[index]?.precioEntrada && (
                          <p className="text-red-500 text-sm">
                            {errors.zonas[index].precioEntrada.message}
                          </p>
                        )}
                      </div>
                    );
                  });
                })()}

                <button
                  type="button"
                  className="btn w-full"
                  onClick={() => setpaso(1)}
                >
                  Anterior
                </button>

                <button
                  type="button"
                  className="btn w-full"
                  onClick={() => setpaso(3)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* PASO 3 */}
          {paso === 3 && (
            <div>
              <div className="mb-4 text-xl font-bold text-center">
                Ubicacion
              </div>
              <div className="space-y-4">
                <label>Nombre:</label>
                <input
                  type="text"
                  {...register("nombreLugar", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Nombre del evento"
                />
                {errors?.nombreLugar && (
                  <p className="text-red-500 text-sm">El nombre es requerido</p>
                )}

                <label>Dirección:</label>
                <input
                  type="text"
                  {...register("direccionLugar", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Dirección del evento"
                />
                {errors?.direccionLugar && (
                  <p className="text-red-500 text-sm">
                    La dirección es requerida
                  </p>
                )}

                <label>Localidad:</label>
                <input
                  type="text"
                  {...register("localidad", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Localidad de tu evento"
                />
                {errors?.localidad && (
                  <p className="text-red-500 text-sm">
                    La localidad es requerida
                  </p>
                )}

                <label>Capacidad Total:</label>
                <input
                  type="text"
                  {...register("capacidadLugar", { required: true })}
                  className="w-full p-2 border rounded"
                  placeholder="Localidad de tu evento"
                />
                {errors?.capacidadLugar && (
                  <p className="text-red-500 text-sm">
                    La capacidad total del lugar es requerida
                  </p>
                )}

                <label>Descripcion: (opcional)</label>
                <input
                  type="text"
                  {...register("descripcionLugar", { required: false })}
                  className="w-full p-2 border rounded"
                  placeholder="Localidad de tu evento"
                />
                {errors?.capacidadLugar && (
                  <p className="text-red-500 text-sm">
                    La descripción es requerida
                  </p>
                )}

                <button
                  type="button"
                  className="btn w-full"
                  onClick={handleSubmit(() => setpaso(2))}
                >
                  anterior
                </button>
                <button type="submit" className="btn w-full">
                  Enviar
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CrearEvento;
