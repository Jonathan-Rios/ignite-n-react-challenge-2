import { MapPinLine } from "phosphor-react";
import { RoundedCard } from "./styles";
import { Product } from "./Product";
import { useStore } from "@/hooks/Store";
import { Fragment, useEffect } from "react";
import { currencyBRLFormat } from "@/utils/format";
import { CoffeeProduct } from "@/pages/home/components/Product";
import { ISelectedCoffees } from "../../index.page";

interface SelectedCoffeesProps {
  total: number;
  setTotal: (total: number) => void;
  selectedCoffees: ISelectedCoffees[];
  setSelectedCoffees: (selectedCoffees: ISelectedCoffees[]) => void;
}

export function SelectedCoffees({
  total,
  setTotal,
  setSelectedCoffees,
  selectedCoffees,
}: SelectedCoffeesProps) {
  const { cart, deliveryTax, productList } = useStore();

  useEffect(() => {
    function getSelectedCoffees() {
      if (!productList) {
        return;
      }

      const newCoffees = cart.map((item) => {
        const coffee = productList.find(
          (coffee) => coffee.id === item.productId
        );

        return {
          ...coffee,
          quantity: item.quantity,
        };
      });

      setSelectedCoffees(newCoffees as ISelectedCoffees[]);
    }

    getSelectedCoffees();
  }, [cart, productList, setSelectedCoffees]);

  useEffect(() => {
    const total = selectedCoffees.reduce((acc, coffee) => {
      return acc + coffee.price * coffee.quantity;
    }, 0);

    setTotal(total);
  }, [selectedCoffees, setTotal]);

  return (
    <RoundedCard>
      <h3>Cafés selecionados</h3>

      <section>
        {selectedCoffees.length ? (
          selectedCoffees.map((coffee, index) => (
            <Fragment key={coffee.id}>
              {index > 0 && <hr />}
              <Product coffee={coffee} />
            </Fragment>
          ))
        ) : (
          <h2>Nenhum produto no carrinho</h2>
        )}
        <hr />

        <footer>
          <div>
            Total de itens
            <span>{currencyBRLFormat.format(total)}</span>
          </div>

          <div>
            Entrega
            <span>{currencyBRLFormat.format(deliveryTax)}</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>{currencyBRLFormat.format(total + deliveryTax)}</strong>
          </div>

          <button type="submit">CONFIRMAR PEDIDO</button>
        </footer>
      </section>
    </RoundedCard>
  );
}
