import { useNavigate } from "react-router-dom";
import { Footer } from "../../userComponents/footer/footer"
import { Navbar } from "../../userComponents/navbar/navbar"
import UserAPIService from "../../../../services/user_service";
import { useState } from "react";


export const FPEmail = () => {
    const [formData, setFormData] = useState({
        email: '' 
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate(); 

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await UserAPIService.FPemailVerify({ email: formData.email });
            setSuccessMessage(response.data.message);
            navigate('/request-resetpassword/otp', { state: { email: formData.email } });
        } catch (error) {
            setError(error.response.data.message);
        }

        
    };
    return (
        <>
            <Navbar />

            <div className="container mt-5 text-center">
                <h1>Forget Password ?</h1>
                <form className='p-4 w-50 mx-auto' onSubmit={handleSubmit}>
                    <p className='text-center'>
                        Please enter the email address used to create your account, and we'll send you a link to reset your password.
                    </p>
                    <div className="mb-3">
                        <label htmlFor="email" className="col-md-12 text-start">
                            Email <span className='text-danger'>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="col-md-12"
                            id="email"
                            value={formData.email}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    {error && <p className='text-danger text-start'>{error}</p>}
                    {successMessage && <p className='text-success text-start'>{successMessage}</p>}

                    <button type='submit' className='form_btn mt-2 w-100'>
                        Submit
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}