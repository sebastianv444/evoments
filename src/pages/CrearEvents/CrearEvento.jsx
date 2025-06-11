import { useState } from "react";
import { useForm } from "react-hook-form";

function CrearEvento() {
    const [paso, setpaso] = useState(1);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className="flex w-full min-h-screen items-center justify-center bg-gradient-to-b from-[#0B0F1A] to-[#6C63FF]">
                <div className="max-w-xl w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-xl rounded-2xl animate-fade-in">

                        {paso === 1 && (
                            <div>
                                <div className="mb-4 text-xl font-bold text-center">Evento</div>
                                <div className="space-y-4">
                                    <label>Nombre:</label>
                                    <input
                                        type="text"
                                        {...register("nombre", { required: true })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Nombre del evento"
                                    />

                                    <label>Descripción del evento:</label>
                                    <input
                                        type="text"
                                        {...register("descripción", { required: true })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Descripción del evento"
                                    />

                                    <label>Fecha del Evento</label>
                                    <input
                                        type="date"
                                        {...register("FechaEvento", { required: true })}
                                        className="w-full p-2 border rounded"
                                    />

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

                        {paso === 2 && (
                            <div>
                                <div className="mb-4 text-xl font-bold text-center">Zona de evento</div>
                                <div className="space-y-4">
                                    <label>Capacidad del evento:</label>
                                    <input
                                        type="number"
                                        {...register("capacidad", { required: true, min: 50, max: 100000 })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Capacidad del evento"
                                    />

                                    <label>Precio entradas base:</label>
                                    <input
                                        type="number"
                                        {...register("Preciobase", { required: true, min: 10 })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Entradas normales"
                                    />

                                    <label>Precio entradas VIP:</label>
                                    <input
                                        type="number"
                                        {...register("PrecioVip", { required: true, min: 10 })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Entradas VIP"
                                    />

                                    <button
                                        type="button"
                                        className="btn w-full"
                                        onClick={() => setpaso(1)}
                                    >
                                        Anterior
                                    </button>

                                    <button type="submit" className="btn w-full">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        )}
            </form>

            {(Object.keys(errors).length > 0) && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded space-y-1 text-sm">
                    {errors.nombre && <div>El nombre es requerido</div>}
                    {errors.descripción && <div>La descripción es requerida</div>}
                    {errors.capacidad?.type === "required" && <div>La capacidad del evento es requerida</div>}
                    {errors.capacidad?.type === "max" && <div>No caben tantas personas en el recinto</div>}
                    {errors.capacidad?.type === "min" && <div>El mínimo de invitados tiene que ser más de 50 personas</div>}
                    {errors.Preciobase?.type === "required" && <div>El precio base de las entradas es requerido</div>}
                    {errors.Preciobase?.type === "min" && <div>El precio mínimo ha de ser 10€</div>}
                </div>
            )}
        </div >
  </div >
</>






    // const [paso, setpaso] = useState(1);
    // const [titulo, settitulo] = useState("");
    // const [descripcion, setdescripcion] = useState("");
    // const [fecha, setfecha] = useState("");
    // const [capacidad, setcapacidad] = useState("");
    // const handleSend = () => {

    //     if (paso === 1) {
    //         if (titulo == "" || descripcion == "") {
    //             alert("Por favor completa todos los campos del paso 1.");
    //             return;
    //         }
    //         setpaso(2);
    //     }
    //     if (paso === 2) {
    //         if (fecha == "" || capacidad == "") {
    //             alert("Por favor completa todos los campos del paso 2.");
    //             return;
    //         }else if( capacidad < 1000){
    //             alert(`La capacidad tiene que ser como mínimo 1000 personas`);
    //                 return;
    //         }else if( capacidad > 10000 ){
    //             alert(`La capacidad tiene que ser como mínimo 1000 personas`);
    //                 return;
    //         }
    //         setpaso(3);
    //     }
    // };
    // return (
    //     <>

    //         <div className="flex w-full min-h-screen items-center justify-center bg-gradient-to-b from-[#0B0F1A] to-[#6C63FF]">
    //             <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl animate-fade-in">
    //                 <div className="mb-4 text-xl font-bold text-center">Paso {paso}</div>
    //                 {paso === 1 && (
    //                     <div className="space-y-4">
    //                         <input
    //                             className="w-full p-2 border rounded"
    //                             value={titulo}
    //                             onChange={(e) => settitulo(e.target.value)}
    //                             placeholder="Título del evento"
    //                         />
    //                         <input
    //                             className="w-full p-2 border rounded"
    //                             value={descripcion}
    //                             onChange={(e) => setdescripcion(e.target.value)}
    //                             placeholder="Descripción del evento"
    //                         />
    //                         <button className="btn w-full" onClick={handleSend}>
    //                             Siguiente
    //                         </button>
    //                     </div>
    //                 )}
    //                 {paso === 2 && (
    //                     <div className="space-y-4">
    //                         <label>Fecha del evento:
    //                         <input
    //                             type="date"
    //                             className="w-full p-2 border rounded"
    //                             value={fecha}
    //                             onChange={(e) => setfecha(e.target.value)}
    //                             />
    //                         </label>
    //                         <label>Capacidad del evento:
    //                         <input
    //                             type="number"
    //                             className="w-full p-2 border rounded"
    //                             value={capacidad}
    //                             onChange={(e) => setcapacidad(e.target.value)}
    //                         />
    //                             </label>
    //                         <button className="btn w-full" onClick={() => setpaso(1)}>Anterior</button>
    //                         <button className="btn w-full" onClick={() => handleSend()}>Siguiente</button>
    //                     </div>
    //                 )}
    //                 {paso === 3 && (
    //                     <div className="space-y-4">
    //                         <input className="w-full p-2 border rounded" placeholder="Entradas normales" />
    //                         <textarea className="w-full p-2 border rounded" placeholder="Entradas vip" />
    //                         <button className="btn w-full" onClick={() => setpaso(2)}>Anterior</button>
    //                         <button className="btn w-full" onClick={() => alert('Enviado')}>Enviar</button>
    //                     </div>
    //                 )}

    //             </div>
    //         </div>
    //     </>
    // )
    )}
export default CrearEvento