import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  // Por o Front e Back estarem no mesma porta, não precisa colocar o endereço completo
});
