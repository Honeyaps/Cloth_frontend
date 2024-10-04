import { useRef, useState } from "react";
import { Footer } from "../../userComponents/footer/footer";
import { Navbar } from "../../userComponents/navbar/navbar";
import { Alert } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import UserAPIService from "../../../../services/user_service";

export const FPOtp = () => {
    const [otpValues, setOtpValues] = useState(Array(4).fill(""));
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); 
    const email = location.state?.email;  

    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = e.target.value;
        setOtpValues(newOtpValues);

        if (e.target.value && index < otpValues.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const otp = parseInt(otpValues.join(""), 10);
        try {
            const response = await UserAPIService.FPverifyOtp({ otp, email });
            setSuccessMessage(response.data.message);
            navigate("/request-resetpassword/otp/reset-password", { state: { email } });
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5 text-center">
                <h1>OTP Verification</h1>
                <Alert variant="success" className="w-25 mx-auto mt-3">
                    We have sent a Verification code to your email -
                    {email}
                </Alert>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex justify-content-center">
                        {otpValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="mx-2 py-2 px-3 text-center"
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                style={{ width: "50px", textAlign: "center" }}
                            />
                        ))}
                    </div>
                    {error && <Alert variant="danger mt-3 mx-auto w-25">{error}</Alert>}
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    <button className="form_btn w-25 mt-2">Verify OTP</button>
                </form>
            </div>

            <Footer />
        </>
    );
};
