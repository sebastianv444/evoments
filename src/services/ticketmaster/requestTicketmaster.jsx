import TicketmasterApi from "./ticketmasterApi";

export const getEventsByCity = async (city) => {
  try {
    const res = await TicketmasterApi.get(`/?city=${city}`);
    return res.data;
  } catch (error) {
    console.error("Error al conseguir los eventos por ciudad:", error.status);
    throw error;
  }
};

export const getEventsByFeaturedGuest = async (keyword) => {
  try {
    const res = await TicketmasterApi.get(`/?keyword=${keyword}`);
    return res.data;
  } catch (error) {
    console.error("Error al conseguir eventos por invitado destacado:", error);
    throw error;
  }
};

export const getEventsByCityAndFeaturedGuest = async (keyword, city) => {
  try {
    const res = await TicketmasterApi.get(`/?keyword=${keyword}&city=${city}`);
    return res.data;
  } catch (error) {
    console.error(
      "Error al conseguir eventos por invitado destacado y ciudad:",
      error
    );
    throw error;
  }
};

export const getEventsRecent = async (city, size, sort) => {
  try {
    const res = await TicketmasterApi.get(`/?city=${city}&size=${size}&sort=${sort}`);
    return res.data;
  } catch (error) {
    console.error(
      "Error al conseguir eventos por invitado destacado y ciudad:",
      error
    );
    throw error;
  }
};
