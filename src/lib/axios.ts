import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_URL}/api`,
  // Por o Front e Back estarem no mesma porta, não precisa colocar o endereço completo
});
