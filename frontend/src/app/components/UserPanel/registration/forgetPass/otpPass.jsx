import { useState } from "react";
import { Footer } from "../../userComponents/footer/footer"
import { Navbar } from "../../userComponents/navbar/navbar"
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const FPOtp = () => {
    const [otpValues, setOtpValues] = useState(Array(4).fill(""));

    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = e.target.value;
        setOtpValues(newOtpValues);

        if (e.target.value && index < otpValues.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }   
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const otp = parseInt(otpValues.join(""));

        navigate('/request-resetpassword/otp/reset-password');

        try {} catch (error) {}
    }

    return (
        <>
            <Navbar />

            <div className="container mt-5 text-center">
                <h1>OTP Verification</h1>
                <Alert variant="success" className='w-25 mx-auto mt-3'>
            We have sent a Verification code to your email - 
            {/* {formData.email}. */}
          </Alert>
                <form onSubmit={handleSubmit} >
                    <div className="mb-3 d-flex justify-content-center">
                        {otpValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="mx-2 py-2 px-3 text-center"
                                value={value}
                                style={{ width: '50px', textAlign: 'center' }}
                            />
                        ))}
                    </div>
                    <button className="form_btn w-25 mt-2">
                        Send
                    </button>
                </form>
            </div>

            <Footer />
        </>
    )
}