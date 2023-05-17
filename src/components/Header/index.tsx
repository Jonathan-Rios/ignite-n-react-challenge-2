import { CartButton, Container, LocalButton, LogoButton } from "./styles";
import Image from "next/image";

import logoImg from "@/assets/logo.svg";

import { useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useRouter } from "next/router";
import { useStore } from "@/hooks/Store";

export function Header() {
  const { addressData } = useStore();

  const router = useRouter();
  const { cart } = useStore();

  function handleCart() {
    router.push("/cart");
  }
  function handleHome() {
    router.push("/");
  }

  function getAddress() {
    if (addressData) {
      return `${addressData.city}, ${addressData.state}`;
    }

    return "Endereço não cadastrado";
  }

  return (
    <Container>
      <LogoButton type="button" onClick={handleHome}>
        <Image src={logoImg} alt="logo da todo list" />
      </LogoButton>

      <div>
        <LocalButton>
          <MapPin weight="fill" />
          {getAddress()}
        </LocalButton>

        <CartButton
          buttonType="box"
          icon={<ShoppingCart weight="fill" />}
          onClick={handleCart}
        >
          {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </CartButton>
      </div>
    </Container>
  );
}
