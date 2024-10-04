import { useNavigate, useLocation } from "react-router-dom";
import { Footer } from "../../userComponents/footer/footer";
import { Navbar } from "../../userComponents/navbar/navbar";
import UserAPIService from "../../../../services/user_service";
import { useState } from "react";

export const FPresetPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;  

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await UserAPIService.FPpassReset({ email, password });
            setSuccessMessage(response.data.message);
            navigate('/');
        } catch (error) {
            setError(error.response.data.message);
        }
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
                            type="password"
                            name="newPassword"
                            className="col-md-12"
                            id="newPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="col-md-12 text-start">
                            Confirm Password <span className='text-danger'>*</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="col-md-12"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className='text-danger'>{error}</p>}
                    {successMessage && <p className='text-success'>{successMessage}</p>}
                    <button type='submit' className='form_btn mt-2 w-100'>Save</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
