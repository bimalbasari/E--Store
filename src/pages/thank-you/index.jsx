import { getCartItems, removeFromCart } from "@/utils/CartItesms"
import Cookies from "js-cookie"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiRupee } from "react-icons/bi"
const { useRouter } = require("next/router")

const ThankYou = () => {
    const router = useRouter()
    const [allProduct, setAllProduct] = useState('')
    const [items, setItems] = useState(1)
    const [cart, setCart] = useState()
    const [bill, setBill] = useState()
    const [BillingAddres, setBillAddress] = useState()
    console.log(allProduct)
    const { buyAll, yourBill, quantity, product, address } = router.query
    const query = router.query
    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }
    useEffect(() => {
        setAllProduct(JSON.parse(buyAll))
        if (!allProduct) {
            // console.log(quantity, yourBill, product, "singalProduct")
            setCart(JSON.parse(product))
            setItems(JSON.parse(quantity))
            setBill(JSON.parse(yourBill))
            setBillAddress(JSON.parse(address))
            removeFromCart(cart?.id)
        } else {
            setCart(getCartItems())
            setBill(JSON.parse(yourBill))
            setBillAddress(JSON.parse(address))
            Cookies.remove('cartItems')
        }


    }, [allProduct])
    return (
        <>
            <Head>
                <title>Your  Invoice</title>
            </Head>


            <section className="bg-gray-100 w-full h-full">
                <h1 className="pt-5 text-center text-2xl font-bold">Thank you for shopping</h1>

                <div className="sm:w-2/3 w-full mx-auto mt-8 sm:p-8 p-1 bg-white rounded shadow-lg ">

                    <div className="flex justify-between mb-4">
                        <div className="text-lg font-semibold">Your  Invoice</div>
                        <div className="text-gray-600">{getCurrentDate()}</div>
                    </div>


                    <div className="mb-4">
                        <h2 className="text-xl  mb-2">Billing Details</h2>
                        <div className="font-semibold">
                            <p className="text-xl">Shipping Address:</p>
                            <div>
                                <p><strong>{BillingAddres?.firstName} {BillingAddres?.lastName}</strong></p>
                                <p><strong>Mobile:</strong> {BillingAddres?.mobile}</p>
                                <p><strong>Email:</strong> {BillingAddres?.email}</p>
                            </div>
                            <p><strong>State:</strong>{BillingAddres?.state}</p>
                            <p><strong>Country:</strong>{BillingAddres?.country}</p>
                            <div className="sm:flex gap-1 ">
                                <p><strong>Address:</strong>{BillingAddres?.address}</p>
                                <p><strong>Zip:</strong> {BillingAddres?.zip}</p>
                                <p><strong>Landmark:</strong> {BillingAddres?.landmark}</p>
                            </div>
                            <p><strong>Payment: </strong>{BillingAddres?.paymentMathod}</p>
                        </div>
                    </div>


                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Invoice Items</h2>
                        <table className="w-full p-8 bg-gray-300 min-h-full">
                            <thead className="bg-gray-400 p-2">
                                <tr className="border-b">
                                    <th className="text-left">Product</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Quantity</th>
                                    <th className="text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-200 p-2">
                                {allProduct && cart?.map((item, index) => (
                                    <tr key={index} className="border-b p-1 px-2 ">
                                        <td>{item.title}</td>
                                        <td className="text-right">{item.price}</td>
                                        <td className="text-right">{item.qty}</td>
                                        <td className="text-right">{item.price * item.qty}</td>
                                    </tr>
                                ))}

                                {!allProduct && <tr className="border-b p-1">
                                    <td>{cart?.title}</td>
                                    <td className="text-right">{cart?.price}</td>
                                    <td className="text-right">{items}</td>
                                    <td className="text-right">{cart?.price * items}</td>
                                </tr>}

                            </tbody>
                        </table>
                        <ul className="rounded overflow-hidden border border-t-2 border-dotted border-black mt-2">
                            <li className="flex justify-between  p-1 border-b border-gray-200 ">
                                <div className="flex items-center text-sm">Subtotal (<BiRupee />)</div>
                                <strong>{bill?.subTotal}</strong>
                            </li>
                            <li className="flex justify-between  p-1  border-b-2 border-gray-300 ">
                                <div className="flex items-center text-sm">GST 20% (<BiRupee />)</div>
                                <strong>{bill?.gstAmount}</strong>
                            </li>
                            <li className="flex justify-between  p-1  border-gray-200 ">
                                <div className="flex items-center text-sm">Total (<BiRupee />)</div>
                                <strong>{bill?.grandTotal}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full text-center mt-4">
                    <Link href="/" className=" mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold">Continue to Shoping</Link>
                </div>

            </section>


        </>
    )
}
export default ThankYou