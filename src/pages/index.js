import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Banner from "@/components/utils/Banner"
import ProductCard from '@/components/cards/ProductCard'
import Head from 'next/head'


export default function Home({ products }) {


  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <main className={inter.className}>

        <div className='w-full h-full'>
          <Banner />
        </div>

        <div className='my-2 bg-gray-100 shadow-md'>
          <h4 className='text-center p-2 uppercase'>Products</h4>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-2">

          {
            products && products.map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>)
            })
          }

        </div>

      </main>
    </>
  )
}


export const getServerSideProps = async () => {
  let products = []

  try {

    const responce = await fetch("https://dummyjson.com/products");

    const result = await responce.json();

    products = result.products

  }

  catch (err) {
    console.log(err)
    return { notFound: true }

  }
  return {
    props: {
      products
    }
  }
}