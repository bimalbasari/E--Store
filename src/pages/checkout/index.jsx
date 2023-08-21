
import Head from "next/head"
import { BiRupee } from "react-icons/bi";
import { useForm } from "react-hook-form"
import { Country, State } from 'country-state-city';
import { Breadcrump } from "@/components/breadcrump/Breadcrump"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCartItems } from "@/utils/CartItesms";
import { getBillAddress, setBillAddress } from "@/utils/BillingAddres";


const Checkout = () => {

    const [address, setAddress] = useState(getBillAddress())
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({ defaultValues: address });
    const [cartItems, setCartItems] = useState(1)
    const [cart, setCart] = useState(getCartItems())
    const [bill, setBill] = useState("")
    const [saveaddres, setSaveAddress] = useState(false)
    const [card, setCard] = useState(false)
    const conutry = Country.getAllCountries()
    const myCountry = watch('country')?.slice(0, 2).toUpperCase()
    const MyStates = State.getStatesOfCountry(myCountry)
    const router = useRouter()
    const { buyAll, yourBill, quantity, product } = router.query

    const onSubmit = (data) => {
        if (saveaddres) {
            setBillAddress(data)
        }
        setCard(false)
        if (buyAll == true) {
            router.push({
                pathname: "/thank-you",
                query: {
                    buyAll: JSON.stringify("true"),
                    yourBill: yourBill,
                    address: JSON.stringify(data)
                }
            })
        } else {
            router.push({
                pathname: "/thank-you",
                query: {
                    buyAll: JSON.stringify("false"),
                    yourBill:yourBill,
                    quantity:quantity,
                    product: product,
                    address: JSON.stringify(data)
                }
            })
        }
    }

    useEffect(() => {
        if (yourBill != undefined) {

            setBill(JSON.parse(yourBill));

            if (buyAll === true) {
                setCartItems(cart.length)

            } else {
                setCartItems(quantity)
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
                            <input type="radio" value="cod" name="paymentMathod" onClick={() => setCard(false)} {...register("paymentMathod", { required: true })} />
                            <label className="mx-1">Cash on Delivery</label>
                        </div>

                        <div >
                            <input type="radio" value="card" name="paymentMathod" onClick={() => setCard(true)} {...register("paymentMathod", { required: true })} />
                            <label className="mx-1">Card</label>
                        </div>
                        {card && <div className="grid grid-cols-10 gap-4 border border-black w-3/4 p-4  my-2 bg-black text-white  rounded-md">
                            <div className="sm:col-span-4 col-span-8">
                                <label className="mx-1">Name on card</label><br />
                                <input type="text" className="border border-gray-400 rounded-sm w-full" />
                                <small>Full name as display on card</small>
                            </div>
                            <div className="sm:col-span-4 col-span-8">
                                <label className="mx-1">Card number</label><br />
                                <input type="number" className="border border-gray-400 rounded-sm w-full" />
                            </div>
                            <div className="sm:col-span-3 col-span-6 ">
                                <label className="mx-1">Expiration</label><br />
                                <input type="date" className="border border-gray-400 rounded-sm  w-full" />
                            </div>
                            <div className="sm:col-span-2 col-span-4">
                                <label className="mx-1">CVV</label><br />
                                <input type="password" className="border border-gray-400 rounded-sm w-full" />
                            </div>
                        </div>}
                    </div>

                </div>
                <div className="sm:col-span-2 col-span-6 flex flex-col" >
                    <h4 className="text-blue-400 font-semibold text-xl py-2">
                        <span>Your Cart</span>
                        <span className="mx-1">({cartItems})</span></h4>

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
                            <button type="submit" className="p-1 w-full text-white font-semibold text-center bg-blue-500 rounded">Order Place</button>
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