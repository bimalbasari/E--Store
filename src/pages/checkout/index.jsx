
import Head from "next/head"
import { BiRupee } from "react-icons/bi";
import { useForm } from "react-hook-form"
import { Country, State } from 'country-state-city';
import { Breadcrump } from "@/components/breadcrump/Breadcrump"
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCartItems } from "@/utils/CartItesms";
import { getBillAddress, setBillAddress } from "@/utils/BillingAddres";
import Link from "next/link";
import { GlobalData } from "../_app";
import Cookies from "js-cookie";


const Checkout = () => {
    const [address, setAddress] = useState(getBillAddress())
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: address });
    const [buytItems, setBuyItems] = useState(1);
    const [bill, setBill] = useState("")
    const [saveaddres, setSaveAddress] = useState(false);
    const [paymentMathod, setPaymentMathod] = useState("/thank-you")
    const conutry = Country.getAllCountries()
    const myCountry = watch('country')?.slice(0, 2).toUpperCase()
    const MyStates = State.getStatesOfCountry(myCountry);

    const router = useRouter()

    const { buyAll, yourBill, quantity, product } = router.query

    const onSubmit = (data) => {
        if (saveaddres) {
            setBillAddress(data)
        }
        let token = Cookies.get("token")
        token = token && JSON.parse(token)

        if (!token) {
            router.push("/login")
        } else {

            if (buyAll == true) {
                router.push({
                    pathname: paymentMathod,
                    query: {
                        buyAll: JSON.stringify("true"),
                        yourBill: yourBill,
                        address: JSON.stringify(data)
                    }
                })
            } else {
                router.push({
                    pathname: paymentMathod,
                    query: {
                        buyAll: buyAll,
                        yourBill: yourBill,
                        quantity: quantity,
                        product: product,
                        address: JSON.stringify(data)
                    }
                })
            }
        }
    }

    useEffect(() => {
        if (watch("paymentMathod") == "card") {
            setPaymentMathod("/payment")
        }
        if (yourBill != undefined) {
            setBill(JSON.parse(yourBill));
            setBuyItems(quantity)
            if (watch("paymentMthod") == "card") {

            }

        } else {
            router.push("/cart")
        }

    }, [])

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Breadcrump title="Checkout" />
            <form className="grid gap-3 grid-cols-6" onSubmit={handleSubmit(onSubmit)} >

                <div className="grid gap-2 grid-cols-6 sm:col-span-4 col-span-6  bg-blue-100 p-2 font-medium text-gray-500 rounded">
                    <div className="sm:col-span-3 col-span-6 flex flex-col">
                        {errors.firstName && <small className="text-red-600 rounded-md absolute bg-white p-1">First name require </small>}
                        <label className="py-2" >First name</label>
                        <input type="text" className=" border border-current px-1 rounded outline-none" id="firstName" {...register("firstName", { required: true })} />
                    </div>
                    <div className="sm:col-span-3 col-span-6 flex flex-col">
                        {errors.lastName && <small className="text-red-600 rounded-md absolute bg-white p-1">Last name require </small>}
                        <label className="py-2">Last name</label>
                        <input type="text" className=" border border-current px-1 rounded outline-none" id="lastName" {...register("lastName", { required: true })} />
                    </div>
                    <div className="col-span-6 flex flex-col">
                        {errors.mobile && <small className="text-red-600 rounded-md absolute bg-white p-1">valid 10 digit mobile number required </small>}
                        <label className="py-2">Mobile</label>
                        <input type="tel" className=" border border-current px-1 rounded outline-none" placeholder="+91" id="mobile" {...register("mobile", { required: true })} />
                    </div>
                    <div className="col-span-6 flex flex-col">
                        {errors.email && <small className="text-red-600 rounded-md absolute bg-white p-1">Enter a valid Email </small>}
                        <label className="py-2">Email</label>
                        <input type="email" className=" border border-current px-1 rounded outline-none" placeholder="abc@example.com" id="email" {...register("email", { required: true })} />
                    </div>
                    <div className="col-span-6 flex flex-col">
                        {errors.address && <small className="text-red-600 rounded-md absolute bg-white p-1">Adress is  require </small>}
                        <label className="py-2">Address </label>
                        <input type="text" className=" border border-current px-1 rounded outline-none" placeholder="Apartment, studio, or floor" id="address" {...register("address", { required: true })} />
                    </div>
                    <div className="col-span-6 flex flex-col">
                        {errors.landmark && <small className="text-red-600 rounded-md absolute bg-white p-1">Landmrk is require </small>}
                        <label className="py-2">Landmark</label>
                        <input type="text" className=" border border-current px-1 rounded outline-none" placeholder="Near" id="landmark" {...register("landmark", { required: true })} />
                    </div>

                    <div className="col-span-6 sm:col-span-2 flex flex-col w-full">
                        {errors.country && <small className="text-red-600 rounded-md absolute bg-white p-1">Country is require </small>}
                        <label className="py-2">Country</label>
                        <select className=" border border-current px-1 rounded outline-none" name="country"  {...register("country", { required: true })}>
                            <option value="">Choose...</option>
                            {conutry.map(e => <option key={e.name} value={e.name}>{e.name}</option>)}

                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-2 flex flex-col">
                        {errors.state && <small className="text-red-600 absolute rounded-md bg-white p-1 ">State is  require </small>}
                        <label className="py-2">State</label>
                        <select className=" border border-current px-1 rounded outline-none" name="state" {...register("state", { required: true })}>
                            <option value="">Choose...</option>
                            {MyStates?.map((e) => (
                                <option key={e.name} value={e.name}>{e.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-2 flex flex-col">
                        {errors.zip && <small className="text-red-600 rounded-md absolute bg-white p-1">Zip code is require </small>}
                        <label className="py-2">Zip</label>
                        <input type="number" className=" border border-current px-1 rounded outline-none" id="zip" {...register("zip", { required: true })} />
                    </div>

                    <div className="col-span-6  p-2  my-2 bg-white rounded">
                        {errors.paymentMathod && <small className="text-red-600 rounded-md absolute bg-white p-1">Select a payment mathod </small>}
                        <h4>Payment</h4>

                        <div >
                            <input type="radio" value="cod" name="paymentMathod" onClick={()=>setPaymentMathod("thank-you")}  {...register("paymentMathod", { required: true })} />
                            <label className="mx-1">Cash on Delivery</label>
                        </div>

                        <div >
                            <input type="radio" value="card" name="paymentMathod" onClick={()=>setPaymentMathod("/payment")} {...register("paymentMathod", { required: true })} />
                            <label className="mx-1">Card</label>
                        </div>
                    </div>

                </div>
                <div className="sm:col-span-2 col-span-6 flex flex-col" >
                    <h4 className="text-blue-400 font-semibold text-xl py-2">
                        <span>Your Cart</span>
                        <span className="mx-1">({buytItems})</span></h4>

                    <div>
                        <ul className="rounded overflow-hidden  border border-gray-200">
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
                        <div className="border border-gray-200 p-1 rounded my-2">
                            <button type="submit" className="p-1 w-full text-white font-semibold text-center bg-blue-500 rounded">Place Order</button>
                        </div>
                        <div className="border border-gray-200 p-1 rounded my-2">
                            <button type="submit" onClick={() => setSaveAddress(true)} className="p-1 w-full text-white font-semibold text-center bg-yellow-500 rounded">Save address & Order </button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Checkout

/**
 * http://localhost:3000/checkout?buyAll=false&quantity=1&product=%7B%22id%22%3A2%2C%22title%22%3A%22iPhone+X%22%2C%22description%22%3A%22SIM-Free%2C+Model+A19211+6.5-inch+Super+Retina+HD+display+with+OLED+technology+A12+Bionic+chip+with+...%22%2C%22price%22%3A899%2C%22discountPercentage%22%3A17.94%2C%22rating%22%3A4.44%2C%22stock%22%3A34%2C%22brand%22%3A%22Apple%22%2C%22category%22%3A%22smartphones%22%2C%22thumbnail%22%3A%22https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F2%2Fthumbnail.jpg%22%2C%22images%22%3A%5B%22https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F2%2F1.jpg%22%2C%22https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F2%2F2.jpg%22%2C%22https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F2%2F3.jpg%22%2C%22https%3A%2F%2Fi.dummyjson.com%2Fdata%2Fproducts%2F2%2Fthumbnail.jpg%22%5D%7D&yourBill=%7B%22subTotal%22%3A899%2C%22gstAmount%22%3A179.8%2C%22grandTotal%22%3A1078.8%7D
 */