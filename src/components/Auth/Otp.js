import React, { useEffect, useState } from 'react'
import { ToastError } from '../../Middleware/Toastmodel/ToastModal';
import { Otpimage } from '../../Assests/images';
import { OtpEnter } from '../../services/auth/auth_services';
import { useNavigate, useLocation } from 'react-router-dom';

function Otp() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const [otp, setOtp] = useState("");

    const handleSubmit = async () => {
        const data = {
            otp: otp,
            userid: state?.id
        }
        const response = await OtpEnter(data);

        if (response) {
            navigate("/home");
        }
        else {
            ToastError("Wrong Otp!!")
        }
    }
    useEffect(() => {
    }, [state?.id, otp]);

    useEffect(() => {
        if (otp?.length == 6) {
            handleSubmit();
        }
    }, [otp])

    console.log(otp?.length)
    return (
        <div className='w-[100%] h-[100vh] overflow-hidden flex content-center justify-center align-items-center'>
            <div className='w-[60%]'>
                <img src={Otpimage} alt="no image"
                    className='w-[100%] h-[400px] object-contain'
                />
            </div>
            <div className='w-[40%] flex content-center flex-col bg-orange-300 h-[100%] align-items-center justify-center'>
                <div className='w-[80%] mx-auto'>
                    <div className='text-center mb-5 mt-2 fw-bold text-2xl'>
                        OTP
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Otp</label>
                        <input type="email"
                            onChange={(e) => {
                                var regex = /[0-9]|\./;
                                if (e.target.value === "" || regex.test(e?.target?.value)) {
                                    setOtp(e.target.value)
                                }
                                else {
                                    ToastError("Please Enter Numbers Only!!!")
                                }
                            }
                            }
                            value={otp}
                            maxLength={7}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*-*-*-*-*-*" required />
                    </div>
                    <div className='mt-3'>
                        <button className='bg-orange-500 p-2 rounded cursor text-white w-[35%]' onClick={handleSubmit}>Submit Otp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp
