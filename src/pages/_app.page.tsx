import { globalStyles } from "../styles/globals";

globalStyles();

import { queryClient } from "../lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { StoreProvider } from "@/hooks/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}
