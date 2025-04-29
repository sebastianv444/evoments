import axios from "axios";

const TicketmasterApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/events`,
  headers: { "Content-Type": "application/json" },
});

export default TicketmasterApi;
