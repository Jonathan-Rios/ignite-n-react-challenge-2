import { Trash } from "phosphor-react";
import { Container, QuantityControl, RemoveButton } from "./styles";
import Image from "next/image";
import { currencyBRLFormat } from "@/utils/format";
import { useStore } from "@/hooks/Store";
import { ISelectedCoffees } from "@/pages/cart/index.page";

type CoffeeCategory =
  | "Tradicional"
  | "Gelado"
  | "Com Leite"
  | "Especial"
  | "Alcoólico";

interface ProductProps {
  coffee: ISelectedCoffees;
}

export function Product({ coffee }: ProductProps) {
  const { id, name, price, image, quantity } = coffee;
  const { handleChangeAmountOfCartItem, removeItemToCart } = useStore();

  return (
    <Container>
      <Image
        src={image}
        alt={`Imagem da bebida: ${name}`}
        quality={100}
        width={64}
        height={64}
      />

      <div>
        <h4>{name}</h4>

        <div>
          <QuantityControl>
            <button
              type="button"
              onClick={() => handleChangeAmountOfCartItem(id, "decrease")}
              disabled={quantity === 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() => handleChangeAmountOfCartItem(id, "increase")}
            >
              +
            </button>
          </QuantityControl>

          <RemoveButton type="button" onClick={() => removeItemToCart(id)}>
            <Trash />
            Remover
          </RemoveButton>
        </div>
      </div>

      <span>
        <strong>{currencyBRLFormat.format(quantity * price)}</strong>
        <p>{`${quantity} x ${currencyBRLFormat.format(price)}`}</p>
      </span>
    </Container>
  );
}
