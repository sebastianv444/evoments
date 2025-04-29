import axios from "axios";

const TicketmasterApi = axios.create({
  baseURL: "http://localhost:4000/events",
  headers: { "Content-Type": "application/json" },
});

export default TicketmasterApi;