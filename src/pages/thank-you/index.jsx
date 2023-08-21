import { getCartItems } from "@/utils/CartItesms"
import Head from "next/head"
import { useEffect, useState } from "react"
import { BiRupee } from "react-icons/bi"

const { useRouter } = require("next/router")

const ThankYou = () => {
    const router = useRouter()
    const [singleProduct, setSingleProduct] = useState(true)
    const [items, setItems] = useState(1)
    const [cart, setCart] = useState()
    const [bill, setBill] = useState()
    const [BillingAddres, setBillAddress] = useState()
    const { buyAll, yourBill, quantity, product, address } = router.query
    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }
    useEffect(() => {
        setSingleProduct(JSON.parse(buyAll))
        if (singleProduct === false) {
            setItems(JSON.parse(quantity))
            setBill(JSON.parse(yourBill))
            setCart(JSON.parse(product))
            setBillAddress(JSON.parse(address))
        } else {
            setBill(JSON.parse(yourBill))
            setBillAddress(JSON.parse(address))
            setCart(getCartItems())
        }


    }, [])
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
                        <div className="text-gray-600">Date: {getCurrentDate()}</div>
                    </div>


                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
                        <div>
                            <p className="font-semibold">Shipping Address:</p>
                            <p>Name:{BillingAddres?.firstName} {BillingAddres?.lastName}</p>
                            <p>Landmark:{BillingAddres?.landmark}</p>
                            <p>Address:{BillingAddres?.address}</p>
                            <p>Zip:{BillingAddres?.zip}</p>
                            <p>Satate:{BillingAddres?.state}</p>
                            <p>Country:{BillingAddres?.country}</p>
                            <p>Mobile:{BillingAddres?.mobile}</p>
                            <p>Email:{BillingAddres?.email}</p>
                            <p>Payment:{BillingAddres?.paymentMathod}</p>
                        </div>

                    </div>


                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Invoice Items</h2>
                        <table className="w-full">
                            <thead className="bg-gray-400">
                                <tr className="border-b">
                                    <th className="text-left">Product</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Quantity</th>
                                    <th className="text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {singleProduct && cart?.map((item, index) => (
                                    <tr key={index} className="border-b p-1">
                                        <td>{item.title}</td>
                                        <td className="text-right">{item.price}</td>
                                        <td className="text-right">{item.qty}</td>
                                        <td className="text-right">{item.price * item.qty}</td>
                                    </tr>
                                ))}

                                {!singleProduct && <tr className="border-b p-1">
                                    <td>{cart?.title}</td>
                                    <td className="text-right">{cart?.price}</td>
                                    <td className="text-right">{items}</td>
                                    <td className="text-right">{cart?.price * items}</td>
                                </tr>}

                            </tbody>
                        </table>
                        <ul className="rounded overflow-hidden ">
                            <li className="flex justify-between  p-1 border-b border-gray-200 ">
                                <div className="flex items-center text-sm">Subtotal (<BiRupee />)</div>
                                <strong>{bill?.subTotal}</strong>
                            </li>
                            <li className="flex justify-between  p-1  border-b border-gray-200 ">
                                <div className="flex items-center text-sm">GST 20% (<BiRupee />)</div>
                                <strong>{bill?.gstAmount}</strong>
                            </li>
                            <li className="flex justify-between  p-1 border-b border-gray-200 ">
                                <div className="flex items-center text-sm">Total (<BiRupee />)</div>
                                <strong>{bill?.grandTotal}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}
export default ThankYou