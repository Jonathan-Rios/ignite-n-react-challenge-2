// import { BaseCard } from "../components/BaseCard";
import { Header } from "@/components/Header";

import {
  BaseCard,
  Container,
  Content,
  ItemsButton,
  UserDataContainer,
} from "./styles";
import Image from "next/image";

import successImg from "@/assets/success.svg";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useStore } from "@/hooks/Store";
import { useEffect } from "react";

export default function Success() {
  const { addressData, selectedPayMethod, saveOnLocalStore, setCart } =
    useStore();

  useEffect(() => {
    setCart([]);

    saveOnLocalStore({
      cart: [],
    });
  }, []);

  function getPayMethod() {
    switch (selectedPayMethod) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "money":
        return "Dinheiro";
      default:
        return "Não informado";
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <section>
          <aside>
            <div>
              <ItemsButton
                kind="map"
                buttonType="round"
                onlyBadge={true}
                icon={<MapPin weight="fill" />}
              />
              <div>
                <p>
                  Entrega em{" "}
                  <strong>
                    {addressData?.street + ", " + addressData?.number}
                  </strong>
                </p>
                <p>
                  {addressData?.neighborhood +
                    " - " +
                    addressData?.city +
                    ", " +
                    addressData?.state}
                </p>
              </div>
            </div>

            <div>
              <ItemsButton
                kind="time"
                buttonType="round"
                onlyBadge={true}
                icon={<Timer weight="fill" />}
              />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <ItemsButton
                kind="money"
                buttonType="round"
                onlyBadge={true}
                icon={<CurrencyDollar weight="fill" />}
              />
              <div>
                <p>Pagamento na entrega</p>
                <strong>{getPayMethod()}</strong>
              </div>
            </div>
          </aside>
          <Image
            src={successImg}
            alt="Imagem de um entregador levando a encomenda"
            height={290}
          />
        </section>
      </Content>

      <footer />
    </Container>
  );
}
