import "../styles/css/fonts.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { globalStyles } from "../styles/globals";

globalStyles();

import type { AppProps } from "next/app";
import { StoreProvider } from "@/hooks/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />

      <ToastContainer />
    </StoreProvider>
  );
}
