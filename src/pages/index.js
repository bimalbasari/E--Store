
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Banner from "@/components/Banner"


export default function Home() {


  return (
    <main className={inter.className}>
      <Banner />

      <h1>hello</h1>
    </main>
  )
}
