import { useNavigate } from "react-router-dom";
import { Footer } from "../../userComponents/footer/footer"
import { Navbar } from "../../userComponents/navbar/navbar"


export const FPresetPass = () => {
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5 text-center">
                <h1>Reset Password</h1>
                <form className='p-4 w-50 mx-auto' onSubmit={handleSubmit}>
                    <p className='text-center'>
                        Enter your new password to ensure the security of your account.
                    </p>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="col-md-12 text-start">
                            New Password <span className='text-danger'>*</span>
                        </label>
                        <input
                            type="text"
                            name="newPassword"
                            className="col-md-12"
                            id="newPassword"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="col-md-12 text-start">
                            Confirm Password <span className='text-danger'>*</span>
                        </label>
                        <input
                            type="text"
                            name="confirmPassword"
                            className="col-md-12"
                            id="confirmPassword"
                            required
                        />
                    </div>

                    <button type='submit' className='form_btn mt-2 w-100'>
                        Save
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}