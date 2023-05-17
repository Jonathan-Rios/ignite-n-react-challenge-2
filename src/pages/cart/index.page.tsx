import { Header } from "@/components/Header";
import OrderForm, {
  RegisterFormData,
  registerFormSchema,
} from "./components/OrderForm";
import PayMethod from "./components/PayMethod";
import { SelectedCoffees } from "./components/SelectedCoffees";

import { Container, Form, UserDataContainer } from "./styles";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CoffeeProduct } from "../home/components/Product";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useStore } from "@/hooks/Store";

export interface ISelectedCoffees extends CoffeeProduct {
  quantity: number;
}

export default function Cart() {
  const router = useRouter();
  const {
    setAddressData,
    selectedPayMethod,
    setSelectedPayMethod,

    saveOnLocalStore,
    getLocalStoreData,
    setCart,
  } = useStore();

  const [total, setTotal] = useState<number>(0);
  const [selectedCoffees, setSelectedCoffees] = useState<ISelectedCoffees[]>(
    []
  );

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleSetAddress = async (data: RegisterFormData) => {
    toast.success("Pedido registrado com sucesso!", {
      position: "bottom-right",
    });

    setAddressData(data);

    saveOnLocalStore({
      address: data,
      payMethod: selectedPayMethod,
    });

    router.push("/success");
  };

  useEffect(() => {
    const localData = getLocalStoreData();

    if (localData) {
      setSelectedPayMethod(localData.payMethod);
      setValue("cep", localData?.address?.cep || "");
      setValue("street", localData?.address?.street || "");
      setValue("number", localData?.address?.number || "");
      setValue("complement", localData?.address?.complement || "");
      setValue("neighborhood", localData?.address?.neighborhood || "");
      setValue("city", localData?.address?.city || "");
      setValue("state", localData?.address?.state || "");
    }
  }, []);

  return (
    <Container>
      <Header />

      <Form onSubmit={handleSubmit(handleSetAddress)}>
        <UserDataContainer>
          <OrderForm errors={errors} register={register} />

          <PayMethod
            selectedPayMethod={selectedPayMethod}
            setSelectedPayMethod={setSelectedPayMethod}
          />
        </UserDataContainer>

        <SelectedCoffees
          total={total}
          setTotal={setTotal}
          selectedCoffees={selectedCoffees}
          setSelectedCoffees={setSelectedCoffees}
        />
      </Form>

      <footer />
    </Container>
  );
}
