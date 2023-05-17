import { Container, ItemsButton } from "./styles";

import Image from "next/image";

import introImage from "@/assets/intro.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Hero() {
  return (
    <Container>
      <div>
        <h3>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h3>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <section>
          <span>
            <ItemsButton
              kind="cart"
              buttonType="round"
              onlyBadge={true}
              icon={<ShoppingCart weight="fill" />}
            />
            Compra simples e segura
          </span>

          <span>
            <ItemsButton
              kind="pack"
              buttonType="round"
              onlyBadge={true}
              icon={<Package weight="fill" />}
            />
            Embalagem mantém o café intacto
          </span>

          <span>
            <ItemsButton
              kind="time"
              buttonType="round"
              onlyBadge={true}
              icon={<Timer weight="fill" />}
            />
            Entrega rápida e rastreada
          </span>

          <span>
            <ItemsButton
              kind="coffee"
              buttonType="round"
              onlyBadge={true}
              icon={<Coffee weight="fill" />}
            />
            O café chega fresquinho até você
          </span>
        </section>
      </div>

      <Image src={introImage} alt="Imagem de um copo de café" />
    </Container>
  );
}
