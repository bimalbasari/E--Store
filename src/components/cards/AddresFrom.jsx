

const AddressFromm = () => {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">First Name</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Mobile</label>
                <input type="tel" className="form-control" id="inputAddress" placeholder="987654321" />
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputAddress" placeholder="abc@example.com" />
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address </label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Landmark</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Near" />
            </div>

            <div className="col-md-4">
                <label for="inputState" className="form-label">Country</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>India</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Uttrakhand</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <h4>Payment</h4>
                    <input className="form-check-input" type="radio" id="gridCheck" />
                    <label className="form-check-label" for="gridCheck">
                        Cash on Delivery
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}

export default AddressFromm