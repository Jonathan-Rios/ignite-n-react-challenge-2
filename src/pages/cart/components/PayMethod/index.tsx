import { Bank, CreditCard, MapPinLine, Money } from "phosphor-react";
import { BaseCard } from "../../styles";
import { PayMethodButton, PayMethodContent } from "./styles";
import { IPayMethod } from "@/hooks/Store";

interface PayMethodProps {
  selectedPayMethod: string | undefined;
  setSelectedPayMethod: (payMethod: IPayMethod) => void;
}

export default function PayMethod({
  selectedPayMethod,
  setSelectedPayMethod,
}: PayMethodProps) {
  return (
    <BaseCard>
      <PayMethodContent>
        <header>
          <MapPinLine />
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>

        <section>
          <PayMethodButton
            type="button"
            active={selectedPayMethod === "credit"}
            onClick={() => setSelectedPayMethod("credit")}
          >
            <CreditCard /> Cartão de crédito
          </PayMethodButton>

          <PayMethodButton
            type="button"
            active={selectedPayMethod === "debit"}
            onClick={() => setSelectedPayMethod("debit")}
          >
            <Bank /> cartão de débito
          </PayMethodButton>

          <PayMethodButton
            type="button"
            active={selectedPayMethod === "money"}
            onClick={() => setSelectedPayMethod("money")}
          >
            <Money />
            dinheiro
          </PayMethodButton>
        </section>
      </PayMethodContent>
    </BaseCard>
  );
}
