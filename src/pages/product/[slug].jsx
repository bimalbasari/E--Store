import Head from "next/head";
import Image from "next/image";
import { Breadcrump } from "@/components/breadcrump/Breadcrump";
import { BiRupee } from "react-icons/bi";
import { useState } from "react";
import { addToCart } from "@/utils/CartItesms";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SingalProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [curImage, setCurImage] = useState(product?.thumbnail);
  const [myProduct, setMyProduct] = useState({
    price: product.price,
    id: product.id
  })
  const router = useRouter()

  const buySingalProduct = () => {
    router.push({
      pathname: "/checkout",
      query: {
        buyAll: JSON.stringify(false),
        yourCart: JSON.stringify(myProduct)
      }
    })

  }

  return (

    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main>
        <Breadcrump title={product.title} />
        <div className="sm:flex w-full gap-12 mt-4">
          <div>
            <Image
              src={curImage}
              width={350}
              height={300}
              alt={product?.title}
              className="border border-gray-500 object-fill rounded h-56"
            />

            <div className="mt-1 flex  justify-center items-center gap-1">
              {product &&
                product.images.map((img) => (
                  <Image
                    src={img}
                    onClick={() => setCurImage(img)}
                    width={55}
                    height={50}
                    className="border p-1 border-gray-500 object-contain rounded cursor-pointer w-12 h-12"
                  />
                ))}
            </div>
          </div>

          <div>
            <h2 className="font-bold">{product?.title}</h2>
            <small>Stocks: {product.stock}</small>
            <h4 className="flex items-center gap-0 font-semibold">
              Price: <BiRupee size={20} />
              {product?.price}
            </h4>

            <b className="mt-2">Description:</b>
            <p className="text-sm">{product?.description}</p>

            <div className="flex gap-3 mt-2">
              <b>Qty:</b>
              <div className="">
                <button
                  className=" bg-gray-300  w-6 border-black border rounded-l  hover:bg-gray-400"
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  readOnly
                  value={quantity}
                  className="w-14 pl-2 text-center outline-none border-gray-400 border "
                />
                <button
                  className=" bg-gray-300   w-6 border-black border rounded-r hover:bg-gray-400"
                  onClick={() =>
                    setQuantity(
                      quantity < product.stock ? quantity + 1 : product.stock
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                className="bg-yellow-500 text-sm  w-24 font-semibold p-1 rounded-md"
                onClick={() => {
                  addToCart(product, quantity),
                    toast.success("Item add in cart");
                }}
              >
                Add To Cart
              </button>
              <button className="bg-green-500 text-sm  w-24 font-semibold p-1 rounded-md" onClick={buySingalProduct}>
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>

  );
};

export default SingalProduct;

export const getServerSideProps = async (context) => {
  const productId = context.params.slug;
  let product;

  try {
    const responce = await fetch(`https://dummyjson.com/products/${productId}`);

    product = await responce.json();
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
  return {
    props: {
      product,
    },
  };
};
