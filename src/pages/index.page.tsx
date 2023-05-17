import { api } from "@/lib/axios";
import { GetServerSideProps } from "next";

export { default } from "./home";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get(`/coffees`); // Aguarde a resposta da requisição
    const coffees = response.data; // Obtenha os dados da resposta

    return {
      props: { coffees }, // Retorne um valor padrão em caso de erro
    };
  } catch (error) {
    console.error(`-Error fetching data:`, error);
    return {
      props: { coffees: [] }, // Retorne um valor padrão em caso de erro
    };
  }
};
