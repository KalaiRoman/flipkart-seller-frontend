import React, { useState } from 'react'
import { signuplogo, Googleimage } from '../../Assests/images/index';
import { auth, providerGoogle } from '../../Config/FirebaseFile';
import { signInWithPopup } from 'firebase/auth';
import { ToastError, ToastSuccess } from '../../Middleware/Toastmodel/ToastModal';
import { GoogleRegister, Registerservice } from '../../services/auth/auth_services';
import { useNavigate } from 'react-router-dom';
function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        userName: "",
        passowrd: ""
    });
    const { email, password, userName } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSumbit = async () => {
        try {
            const data = {
                username: userName,
                email: email,
                password: password,
            }
            const backendResponse = await Registerservice(data);
            if (backendResponse) {
                ToastSuccess("Register Successfully")
                localStorage.setItem("flip-token", JSON.stringify(backendResponse?.token));

                setTimeout(() => {
                    navigate("/home")
                }, 500);
            }
        } catch (error) {
            ToastError(error?.response?.data?.message);
        }
    }

    const GoogleOauth = async () => {
        try {
            const response = await signInWithPopup(auth, providerGoogle);
            if (response) {
                const data = {
                    username: response?.user?.displayName,
                    email: response?.user?.email,
                    avatar: response?.user?.photoURL,
                }
                const backendResponse = await GoogleRegister(data);
                if (backendResponse) {
                    ToastSuccess("Login Successfully")
                    localStorage.setItem("flip-token", JSON.stringify(backendResponse?.token));
                    setTimeout(() => {
                        navigate("/otp", { state: { id: backendResponse?.user?._id } });
                    }, 300);
                }
            }

        } catch (error) {
            ToastError(error?.response?.data?.message);
        }
    }

    return (
        <div className='w-[100%] h-[100vh] overflow-hidden xs:overflow-auto xs:flex-row-reverse'>
            <div className='flex w-[100%] h-[100%] xs:flex-col '>
                <div className='w-[30%] border h-[100%] shadow-md  bg-[#FCF5ED] xs:w-[100%] flex content-center justify-center'>
                    <section className=" flex content-center justify-center dark:bg-gray-900 p-5">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center">
                                Create Account
                            </span>
                            <div className="w-full  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                            <input type="email"
                                                onChange={handleChange}
                                                value={userName}
                                                name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email"
                                                onChange={handleChange}
                                                value={email}
                                                name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password"
                                                onChange={handleChange}
                                                value={password}
                                                name="password" id="password" placeholder="*****" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>

                                        <button
                                            onClick={handleSumbit}
                                            className="w-full text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                        <button onClick={GoogleOauth} className="w-full flex gap-4 content-center justify-center bg-green-200 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <div>
                                                <img src={Googleimage} alt="no image"
                                                    className='w-[20px] h-[20px]'
                                                />
                                            </div>
                                        </button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account yet? <span className=" cursor font-medium text-primary-600 hover:text-orange-600" onClick={() => window.location.assign("/")}>Sign In</span>
                                        </p>
                                    </>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <div className='w-[70%] h-[100%]  flex  mx-auto content-center justify-center xs:[100%]'>
                    <div className='flex  justify-center content-center h-[100%]'>
                        <img src={signuplogo} alt="no image login"
                            className='w-[100%] h-[auto] object-contain p-[10%] xs:w-[100%] xs:h-[100%] '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
