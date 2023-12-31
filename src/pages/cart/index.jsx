
import { Breadcrump } from "@/components/breadcrump/Breadcrump"
import { getCartItems, removeFromCart, updateCartItems } from "@/utils/CartItesms"
import Head from "next/head"
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/router"


const Cart = () => {
    const [apiCall, setApiCall] = useState(true);
    const [stock, setStock] = useState(0);
    const router = useRouter()
    const [cart, setCart] = useState(getCartItems());
    const [yourBill, setYourBill] = useState({
        subTotal: 0,
        gstAmount: 0,
        grandTotal: 0
    })


    const incrementQty = async (item) => {
        const newQty = item.qty + 1;

        if (apiCall) {
            setApiCall(false);
            try {
                let stockData = await fetch(`https://dummyjson.com/products/${item.id}`);
                stockData = await stockData.json();
                setStock(stockData.stock);

                setTimeout(function () {
                    setApiCall(true);
                }, 1000);

                if (stock == stockData.stock && newQty > stock) {
                    const productId = item.id;
                    updateCartItems(productId, stock);
                }
            } catch (error) {
                console.error('Error fetching stock:', error);
                setApiCall(true);
            }
        }

        if (newQty <= stock) {
            const productId = item.id;
            updateCartItems(productId, newQty);
        }

        setCart(getCartItems);
    };


    const decrementQty = (item) => {
        const newQty = item.qty - 1
        if (newQty > 0) {
            const productId = item.id;
            updateCartItems(productId, newQty);
            setCart(getCartItems)

        }
    }

    const removeHandler = (item) => {
        removeFromCart(item);
        setCart(getCartItems)
    }

    const buySingalProduct = (item) => {
        console.log(item)
        let total = item.price;
        let gstAmount = total * 20 / 100;
        setYourBill({ ...yourBill, subTotal: total, gstAmount: gstAmount, grandTotal: total + gstAmount })

        router.push({
            pathname: "/checkout",
            query: {
                buyAll: JSON.stringify(false),
                quantity: JSON.stringify(item.qty),
                product: JSON.stringify(item),
                yourBill: JSON.stringify(yourBill)

            }
        })

    }

    //buy  all product from cart
    const checkoutHandler = () => {
        router.push({
            pathname: "/checkout",
            query: {
                buyAll: JSON.stringify(true),
                yourBill: JSON.stringify(yourBill),
                quantity: JSON.stringify(cart.length),
                product: "",
            }
        })
    }


    useEffect(() => {
        let total = 0;
        let gstAmount = 0;
        cart.map((item) => {
            total += item.price * item.qty
        })
        gstAmount = total * 20 / 100;
        setYourBill({ ...yourBill, subTotal: total, gstAmount: gstAmount, grandTotal: total + gstAmount })
    }, [cart])


    return (
        <>
            <Head>
                <title>Your Cart</title>
            </Head>

            <Breadcrump title={"Your Cart"} />

            {cart.length > 0 ?
                <div className="sm:w-full">
                    <table className="sm:w-full table-auto  ">
                        <thead className="bg-gray-100 border-b-2 border-gray-200 w-full">
                            <tr className="w-full">
                                <th scope="col" className="sm:p-3 p-1 text-sm font-samibold tracking-wide ">Item</th>
                                <th scope="col" className="sm:p-3 p-1 text-sm font-samibold tracking-wide ">Price</th>
                                <th scope="col" className="sm:p-3 p-1 text-sm font-samibold tracking-wide ">Quantity</th>
                                <th scope="col" className="sm:p-3 p-1 text-sm font-samibold tracking-wide text-left ">Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart?.map((item) => (
                                <tr key={item.id} className="border-b" >
                                    <td scope="col" className="sm:p-3 p-1 text-sm text-gray-700 text-left">
                                        <div className="flex items-center justify-start  gap-3">
                                            <Image src={item?.image} className="rounded-full sm:h-12  sm:w-12 sm:block hidden" alt={item?.title} height={40} width={40} />
                                            {item?.title}
                                        </div>
                                    </td>

                                    <td scope="col" className="sm:p-3 p-1 text-sm text-gray-700 ">
                                        <span className="flex items-center">
                                            <BiRupee size={23} />{item?.price}
                                        </span>
                                    </td>

                                    <td scope="col" className="sm:p-3 p-1 text-sm text-gray-700 text-center">
                                        <div className="flex">
                                            <button
                                                className=" bg-gray-300  w-6 border-black border rounded-l  hover:bg-gray-400 font-bold sm:text-xl"
                                                onClick={() => decrementQty(item)}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                readOnly
                                                value={item.qty}
                                                className="sm:w-14 w-6 sm:pl-2 text-center outline-none border-gray-400 border "
                                            />
                                            <button
                                                className=" bg-gray-300   w-6 border-black border rounded-r hover:bg-gray-400 font-bold sm:text-xl"
                                                onClick={() => incrementQty(item)}
                                            >
                                                +
                                            </button>
                                        </div>

                                    </td>


                                    <td scope="col" className="sm:p-3 p-1 text-sm text-gray-700">
                                        <div className="flex items-center justify-between gap-1 ">
                                            <span className="flex items-center gap-0" >
                                                <BiRupee size={15} />{(item.price * item.qty).toFixed(2)}
                                            </span>
                                            <button onClick={() => buySingalProduct(item)} className="bg-green-500 p-1 rounded text-white font-semibold">Buy</button>
                                            <button onClick={() => removeHandler(item.id)} ><RiDeleteBin6Line size={28} className="p-1 text-red-600" /></button>
                                        </div>
                                    </td>
                                </tr>)
                            )}

                            <tr className="text-left">
                                <td className="hidden sm:block"></td>
                                <th className="border-b p-3" colSpan={2}>Subtotal</th>

                                <th className="border-b p-3" >
                                    <div className="flex items-center text-center"><BiRupee size={18} />{yourBill?.subTotal.toFixed(2)}
                                    </div>
                                </th>
                            </tr>
                            <tr className="text-left">
                                <td className="hidden sm:block"></td>
                                <th className="border-b p-3" colSpan={2}>20% GST</th>

                                <th className="border-b p-3" >
                                    <div className="flex items-center text-center"><BiRupee size={18} />{yourBill?.gstAmount?.toFixed(2)}
                                    </div>
                                </th>
                            </tr>
                            <tr className="text-left">
                                <td className="hidden sm:block"></td>
                                <th className="border-b p-3" colSpan={2}>Shipping Charges</th>

                                <th className="border-b text-left " >
                                    Free
                                </th>
                            </tr>
                            <tr className="text-left">
                                <td className="hidden sm:block"></td>
                                <th className="border-b p-3" colSpan={2}>Grand Total</th>

                                <th className="border-b p-3" >
                                    <div className="flex items-center text-center"><BiRupee size={18} />{yourBill?.grandTotal.toFixed(2)}
                                    </div>
                                </th>
                            </tr>
                            <tr className="text-right">
                                <td className="hidden sm:block"></td>
                                <th colSpan={3} className="p-3">
                                    <button onClick={checkoutHandler} className="bg-blue-600 px-2 py-1 text-white rounded hover:text-blue-600 hover:bg-white">Checkout</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div> : <div className="text-center font-semibold text-xl text-red-600"> Your Cart is Empty</div>}

        </>
    )


}


export default Cart
