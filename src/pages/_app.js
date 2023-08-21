import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
export const GlobalData = createContext();
export default function App({ Component, pageProps }) {
  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  return (
    <GlobalData.Provider
      value={{
        products: products,
        setProducts: setProducts,
        user: user,
        setUser: setUser,
      }}
    >
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </Layout>
    </GlobalData.Provider>
  );
}
