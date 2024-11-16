import axios from "axios";

// URL base de tu backend
const API_URL = "http://localhost:8080/api/reservas"; // Cambia si usas otro puerto o dominio

// Instancia de Axios configurada
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
