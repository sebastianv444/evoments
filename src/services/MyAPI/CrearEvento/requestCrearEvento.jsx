import EvoApi from "../EvoApi";

export const postCrearEvento = async (
  titulo,
  descripcion,
  fechaEvento,
  categoria,
  zonas
) => {
  try {
    const res = await EvoApi.post(`/api/crear/eventos`, {
      titulo,
      descripcion,
      fechaEvento,
      categoria,
      zonas,
    });
    
    return res.data;
    
  } catch (error) {
    console.error("Error al enviar el creador a la base de datos:", error.status);
  }
};