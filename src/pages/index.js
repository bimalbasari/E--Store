import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Banner from "@/components/banner/Banner";
import ProductCard from "@/components/cards/ProductCard";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { GlobalData } from "./_app";

export default function Home({ products }) {
  const { setProducts } = useContext(GlobalData);
  useEffect(() => {
    setProducts(products);
  }, [products]);
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <main className={inter.className}>
        <div>
          <Banner />
        </div>

        <div className="mb-4 bg-gray-100 shadow-md">
          <h4 className="text-center p-2 uppercase">Products</h4>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-2">
          {products &&
            products.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  let products = [];

  try {
    const responce = await fetch("https://dummyjson.com/products");
    const result = await responce.json();
    products = result.products;
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
  return {
    props: {
      products,
    },
  };
};
