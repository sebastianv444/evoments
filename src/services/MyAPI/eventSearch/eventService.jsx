import EvoApi from "../EvoApi";

export const searchEvents = async (q) => {
  try {
    const res = await EvoApi.get("/api/events/search", { params: { q } });
    return res.data.events;
  } catch (error) {
    console.error("Error buscando eventos:", error);
    return [];
  }
};