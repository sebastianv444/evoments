import { useState } from "react";

function CrearEvento() {
    const [paso, setpaso] = useState(1);
    const [titulo, settitulo] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [fecha, setfecha] = useState("");
    const [capacidad, setcapacidad] = useState("");
    const handleSend = () => {
        
        if (paso === 1) {
            if (titulo == "" || descripcion == "") {
                alert("Por favor completa todos los campos del paso 1.");
                return;
            }
            setpaso(2);
        }
        if (paso === 2) {
            if (fecha == "" || capacidad == "") {
                alert("Por favor completa todos los campos del paso 2.");
                return;
            }else if( capacidad < 1000){
                alert(`La capacidad tiene que ser como mínimo 1000 personas`);
                    return;
            }else if( capacidad > 10000 ){
                alert(`La capacidad tiene que ser como mínimo 1000 personas`);
                    return;
            }
            setpaso(3);
        }
    };
    return (
        <>
            <div className="flex w-full min-h-screen items-center justify-center bg-gradient-to-b from-[#0B0F1A] to-[#6C63FF]">
                <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl animate-fade-in">
                    <div className="mb-4 text-xl font-bold text-center">Paso {paso}</div>
                    {paso === 1 && (
                        <div className="space-y-4">
                            <input
                                className="w-full p-2 border rounded"
                                value={titulo}
                                onChange={(e) => settitulo(e.target.value)}
                                placeholder="Título del evento"
                            />
                            <input
                                className="w-full p-2 border rounded"
                                value={descripcion}
                                onChange={(e) => setdescripcion(e.target.value)}
                                placeholder="Descripción del evento"
                            />
                            <button className="btn w-full" onClick={handleSend}>
                                Siguiente
                            </button>
                        </div>
                    )}
                    {paso === 2 && (
                        <div className="space-y-4">
                            <label>Fecha del evento:
                            <input
                                type="date"
                                className="w-full p-2 border rounded"
                                value={fecha}
                                onChange={(e) => setfecha(e.target.value)}
                                />
                            </label>
                            <label>Capacidad del evento:
                            <input
                                type="number"
                                className="w-full p-2 border rounded"
                                value={capacidad}
                                onChange={(e) => setcapacidad(e.target.value)}
                            />
                                </label>
                            <button className="btn w-full" onClick={() => setpaso(1)}>Anterior</button>
                            <button className="btn w-full" onClick={() => handleSend()}>Siguiente</button>
                        </div>
                    )}
                    {paso === 3 && (
                        <div className="space-y-4">
                            <input className="w-full p-2 border rounded" placeholder="Entradas normales" />
                            <textarea className="w-full p-2 border rounded" placeholder="Entradas vip" />
                            <button className="btn w-full" onClick={() => setpaso(2)}>Anterior</button>
                            <button className="btn w-full" onClick={() => alert('Enviado')}>Enviar</button>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default CrearEvento