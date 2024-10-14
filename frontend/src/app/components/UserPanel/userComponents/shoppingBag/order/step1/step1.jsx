export const Step1 = () => {
    return (
        <div>
            <h4>Personal Information</h4>
            <form>

                <div className="mb-3">
                    <label htmlFor="email" className="col-md-12">Email</label>
                    <input type="email" name="email" id="email" className="col-md-12" />
                </div>

                <div className="mb-3">
                    <label htmlFor="mobileno" className="col-md-12">Mobile Number</label>
                    <input type="tel" name="mobileno" id="mobileno" className="col-md-12" />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="col-md-12">Address</label>
                    <textarea name="" id="" className="col-md-12" style={{ height: '40px'}}></textarea>    
                </div>

                <button type="submit" className="form_btn w-100">Next</button>
            </form>
        </div>
    )

}