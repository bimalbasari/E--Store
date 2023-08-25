
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiRupee } from 'react-icons/bi';

function PaymentPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const query = router.query;
    const [bill, setBill] = useState()
    const [spinners, setSpinners] = useState(false)
    const [payment, setPayment] = useState(false)
    const [selectedDate, setSelectedDate] = useState('');


    const onSubmit = (data) => {
        setSpinners(true)
        // Simulate payment processing (replace this with actual payment processing logic)
        setTimeout(() => {
            setPayment(true); // Payment successful
        }, 2000);
    };
    const confirmOrder = () => {

        router.push({
            pathname: "thank-you",
            query: query
        })
    }

    useEffect(() => {
        if (query.yourBill) { setBill(JSON.parse(query?.yourBill).grandTotal) }else{router.push("/")}

        // Get the current date in the format "YYYY-MM-DD"
        const currentDate = new Date().toISOString().split('T')[0];

        //  tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDate = tomorrow.toISOString().split('T')[0];

        setSelectedDate(tomorrowDate);
    }, []);
    return (
        <div className='sm:h-3/4 '>
            {!spinners ? (
                <div className="bg-gray-100 p-8 flex sm:h-auto h-screen items-center justify-center">
                    <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <h2 className="text-lg font-semibold">Card Details</h2>
                        </div>
                        <form id="paymentForm" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                {errors.cardNumber && <small className="text-red-600 rounded-md absolute bg-white p-1">Valid card number required </small>}
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input type="text" {...register("cardNumber", { required: true })} id="cardNumber" className="mt-1 block w-full border-gray-500 rounded-md shadow-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400 sm:text-sm" />
                            </div>
                            <div>
                                {errors.cardHolderName && <small className="text-red-600 rounded-md absolute bg-white p-1">Card holder name required </small>}
                                <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                                <input type="text" {...register("cardHolderName", { required: true })} id="cardHolderName" className="mt-1 block w-full border-gray-500 rounded-md shadow-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400 sm:text-sm" />
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    {errors.expirationDate && <small className="text-red-600 rounded-md absolute bg-white p-1"> Enter valid date </small>}
                                    <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
                                    <input type="date" min={selectedDate} max="2041-01-01" {...register("expirationDate", { required: true })} id="expirationDate" className="mt-1 block w-full border-gray-500 rounded-md shadow-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400 sm:text-sm" />
                                </div>
                                <div className="flex-1">
                                    {errors.cvv && <small className="text-red-600 rounded-md absolute bg-white p-1">Valid cvv required </small>}
                                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input type="text" {...register("cvv", { required: true })} id="cvv" className="mt-1 block w-full border-gray-500 rounded-md shadow-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-400">
                                    Pay Now {bill}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : payment ? (
                <div className="container bg-green-200 p-8 sm:h-3/4 h-screen rounded-lg shadow-lg ">
                    <div div className="text-green-500 text-4xl mb-4 ">
                        <p className="w-16 h-16 mx-auto">✔️</p>
                    </div >
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Payment Successful</h1>
                        <p className="text-lg text-gray-600 mb-4">Thank you!</p>
                        <button onClick={confirmOrder} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg font-semibold">Confirm order</button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center  gap-2 items-center sm:h-3/4 h-screen bg-blue-500">
                    <div className="animate-spin rounded-full border-t-8 border-b-8 border-white h-12 w-12"></div>
                    <strong className='text-xl text-white font-extrabold'> Processing...</strong>
                </div>
            )}
        </div>
    );
}

export default PaymentPage;

