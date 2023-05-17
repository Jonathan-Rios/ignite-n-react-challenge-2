import { ShoppingCart } from "phosphor-react";
import { CartButton, Container, QuantityControl } from "./styles";
import Image from "next/image";
import { Fragment, useState } from "react";
import { currencyBRLFormat } from "@/utils/format";
import { useStore } from "@/hooks/Store";
import { toast } from "react-toastify";

// import coffeeImg from "@/assets/coffees/americano.png";

type CoffeeCategory =
  | "Tradicional"
  | "Gelado"
  | "Com Leite"
  | "Especial"
  | "Alcoólico";

export interface CoffeeProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categories: CoffeeCategory[];
}

interface ProductProps {
  coffee: CoffeeProduct;
}

export function Product({ coffee }: ProductProps) {
  const { id, name, price, description, image, categories } = coffee;

  const { addItemToCart } = useStore();

  const [quantity, setQuantity] = useState<number>(1);

  function handleAddItemToCart(productId: number) {
    addItemToCart(productId, quantity);

    setQuantity(1);

    toast.success("Item adicionado ao carrinho!", {
      position: "bottom-right",
    });
  }

  function handleQuantity(option: "increase" | "decrease") {
    setQuantity((prevState) => {
      if (prevState === 1 && option === "decrease") return prevState;

      return option === "increase" ? prevState + 1 : prevState - 1;
    });
  }

  return (
    <Container>
      <Image
        src={image}
        alt={`Imagem da bebida: ${name}`}
        quality={100}
        width={120}
        height={120}
      />

      <div>
        {categories?.length &&
          categories.map((category, index) => (
            <span key={category}>{category}</span>
          ))}
      </div>

      <h4>{name}</h4>
      <p>{description}</p>

      <footer>
        <span>
          R$
          <strong>{currencyBRLFormat.format(price).slice(3)}</strong>
        </span>

        <QuantityControl>
          <button
            onClick={() => handleQuantity("decrease")}
            disabled={quantity === 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantity("increase")}>+</button>
        </QuantityControl>

        <CartButton
          buttonType="box"
          icon={<ShoppingCart weight="fill" />}
          onClick={() => handleAddItemToCart(id)}
        />
      </footer>
    </Container>
  );
}
