import { useNavigate } from "react-router-dom";
import { Footer } from "../../userComponents/footer/footer"
import { Navbar } from "../../userComponents/navbar/navbar"


export const FPEmail = () => {
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/request-resetpassword/otp');
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
                            required
                        />
                    </div>

                    <button type='submit' className='form_btn mt-2 w-100'>
                        Submit
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}