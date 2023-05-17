import { RegisterFormData } from "@/pages/cart/components/OrderForm";
import { CoffeeProduct } from "@/pages/home/components/Product";
import React, { createContext, useContext, useEffect, useState } from "react";

interface StoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextData {
  cart: StoreItem[];
  setCart: React.Dispatch<React.SetStateAction<StoreItem[]>>;

  productList: CoffeeProduct[];
  setProductList: React.Dispatch<React.SetStateAction<CoffeeProduct[]>>;

  deliveryTax: number;

  selectedPayMethod: IPayMethod;
  setSelectedPayMethod: React.Dispatch<React.SetStateAction<IPayMethod>>;

  addressData: RegisterFormData | undefined;
  setAddressData: React.Dispatch<
    React.SetStateAction<RegisterFormData | undefined>
  >;

  getLocalStoreData: () => any;
  saveOnLocalStore: (dataToSave: any) => void;
  addItemToCart(productId: number, quantity?: number): void;
  removeItemToCart(productId: number): void;
  handleChangeAmountOfCartItem(
    productId: number,
    option: "increase" | "decrease"
  ): void;
}

export interface StoreItem {
  productId: number;
  quantity: number;
}

export type IPayMethod = "credit" | "debit" | "money" | undefined;

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const deliveryTax = 3.5;
  const [cart, setCart] = useState<StoreItem[]>([]);
  const [productList, setProductList] = useState<CoffeeProduct[]>([]);
  const [addressData, setAddressData] = useState<RegisterFormData>();
  const [selectedPayMethod, setSelectedPayMethod] = useState<IPayMethod>();

  useEffect(() => {
    const existingData = getLocalStoreData();

    if (existingData?.address) {
      setAddressData(existingData.address);
    }

    if (existingData?.payMethod) {
      setSelectedPayMethod(existingData.payMethod);
    }
  }, []);

  useEffect(() => {
    if (cart.length) {
      saveOnLocalStore({ cart: cart });
    } else {
      const existingData = getLocalStoreData();

      if (existingData?.cart?.length) {
        setCart(existingData.cart);
      }
    }
  }, [cart]);

  function addItemToCart(productId: number, quantity = 1) {
    setCart((prevState) => {
      if (prevState.length) {
        if (prevState.find((item) => item.productId === productId)) {
          const updatedList = changeAmountOfStoreItem(productId, "increase");
          return { ...prevState, updatedList };
        }
      }

      return [...prevState, { productId, quantity: quantity }];
    });
  }

  function removeItemToCart(productId: number) {
    setCart((prevState) => {
      if (!prevState.length) {
        return prevState;
      }

      const filteredList = prevState.filter(
        (item) => item.productId !== productId
      );

      return filteredList;
    });
  }

  function changeAmountOfStoreItem(
    productId: number,
    option: "increase" | "decrease"
  ) {
    return cart.map((item) => {
      if (item.productId === productId) {
        if (option === "increase") {
          item.quantity++;
        } else {
          if (item.quantity !== 1) {
            item.quantity--;
          }
        }
      }

      return item;
    });
  }

  function handleChangeAmountOfCartItem(
    productId: number,
    option: "increase" | "decrease"
  ) {
    setCart(changeAmountOfStoreItem(productId, option));
  }

  function saveOnLocalStore(dataToSave: any) {
    const existingData = JSON.parse(
      localStorage.getItem("@coffeeDelivery-Ignite") || "{}"
    );

    const formattedData = {
      ...(existingData || {}),
      ...dataToSave,
    };

    localStorage.setItem(
      "@coffeeDelivery-Ignite",
      JSON.stringify(formattedData)
    );
  }

  function getLocalStoreData() {
    return JSON.parse(localStorage.getItem("@coffeeDelivery-Ignite") || "{}");
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,

        productList,
        setProductList,

        deliveryTax,

        selectedPayMethod,
        setSelectedPayMethod,

        addressData,
        setAddressData,

        getLocalStoreData,
        saveOnLocalStore,
        addItemToCart,
        removeItemToCart,
        handleChangeAmountOfCartItem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

function useStore(): StoreContextData {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
}

export { StoreProvider, useStore };
