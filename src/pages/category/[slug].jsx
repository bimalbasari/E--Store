import ProductCard from "@/components/cards/ProductCard";
import { Breadcrump } from "@/components/breadcrump/Breadcrump";
import Head from "next/head";
import { useRouter } from "next/router";

const CategoryProducts = ({ products }) => {
  const router = useRouter();
  const categoryName = router?.query?.slug;

  return (
    <>
      <Head>
        <title>{categoryName}</title>
      </Head>

      <main className="md-4">
        <Breadcrump title={`${categoryName?.toLocaleUpperCase()} - products`} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-2">
          
          {products &&
            products.map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const category = context.params.slug;
  let products = [];

  try {
    const responce = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

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

export default CategoryProducts;
