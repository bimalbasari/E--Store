

const AddressFromm = () => {
    return (
        <form className="grid gap-2 grid-cols-6 bg-gray-100 p-2 font-medium text-gray-500 rounded">
            <div className="sm:col-span-3 col-span-6 flex flex-col">
                <label for="inputFastName" className="py-2" >First name</label>
                <input type="email" className=" border border-current px-1 rounded outline-none" />
            </div>
            <div className="sm:col-span-3 col-span-6 flex flex-col">
                <label for="inputLastName" className="py-2">Last name</label>
                <input type="text" className=" border border-current px-1 rounded outline-none" />
            </div>
            <div className="col-span-6 flex flex-col">
                <label for="inputMobile" className="py-2">Mobile</label>
                <input type="tel" className=" border border-current px-1 rounded outline-none" placeholder="987654321" />
            </div>
            <div className="col-span-6 flex flex-col">
                <label for="inputEmail" className="py-2">Email</label>
                <input type="email" className=" border border-current px-1 rounded outline-none" id="inputAddress" placeholder="abc@example.com" />
            </div>
            <div className="col-span-6 flex flex-col">
                <label for="inputAddress" className="py-2">Address </label>
                <input type="text" className=" border border-current px-1 rounded outline-none" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-span-6 flex flex-col">
                <label for="inputLandmark" className="py-2">Landmark</label>
                <input type="text" className=" border border-current px-1 rounded outline-none" placeholder="Near" />
            </div>

            <div className="col-span-6 sm:col-span-2 flex flex-col w-full">
                <label for="inputCountry" className="py-2">Country</label>
                <select className=" border border-current px-1 rounded outline-none">
                    <option selected>Choose...</option>
                    <option>India</option>
                </select>
            </div>
            <div className="col-span-6 sm:col-span-2 flex flex-col">
                <label for="inputState" className="py-2">State</label>
                <select className=" border border-current px-1 rounded outline-none">
                    <option selected>Choose...</option>
                    <option>Uttrakhand</option>
                </select>
            </div>
            <div className="col-span-6 sm:col-span-2 flex flex-col">
                <label for="inputZip" className="py-2">Zip</label>
                <input type="number" className=" border border-current px-1 rounded outline-none" />
            </div>

            <div className="col-span-6 bg-gray-300 p-2 rounded">
                <h4>Payment</h4>
                <input type="radio" />
                <label className="mx-1" for="gridCheck">
                    Cash on Delivery
                </label>
            </div>

            {/* <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div> */}
        </form>
    )
}

export default AddressFromm