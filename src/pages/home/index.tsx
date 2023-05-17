import { Header } from "@/components/Header";
import { Hero } from "./components/Hero";
import { CoffeeProduct, Product } from "./components/Product";
import { Container, Content } from "./styles";
import { useEffect } from "react";
import { useStore } from "@/hooks/Store";

interface HomeProps {
  coffees: CoffeeProduct[];
}

export default function Home({ coffees }: HomeProps) {
  const { setProductList } = useStore();

  useEffect(() => {
    setProductList(coffees);
  }, [coffees]);

  return (
    <Container>
      <Header />
      <Hero />

      <Content>
        <h3>Nossos cafés</h3>

        <section>
          {coffees?.map((coffee) => (
            <Product key={coffee.id} coffee={coffee} />
          ))}
        </section>
      </Content>

      <footer />
    </Container>
  );
}
