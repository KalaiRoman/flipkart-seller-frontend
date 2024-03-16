import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getuserService } from '../../services/auth/auth_services';
import { ToastSuccess } from './../Toastmodel/ToastModal';

function Header() {

    const [user, setUser] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        const datas = async () => {
            try {
                const response = await getuserService();
                if (response) {
                    setUser(response?.user);
                }
            } catch (error) {
            }
        }
        datas();
    }, [])

    useEffect(() => {

    }, [user])


    const data = [
        {
            id: 1,
            name: "/home",
            title: "Dashboard"
        },
        {
            id: 2,
            name: "/product",
            title: "Product"
        },
        {
            id: 3,
            name: "/orders",
            title: "Orders"
        },
        {
            id: 4,
            name: "/chat",
            title: "Chat"
        },
        {
            id: 5,
            name: "/inventory",
            title: "Inventory"
        }
    ]
    const pathname = useLocation().pathname;

    const logout = () => {
        localStorage.clear();
        ToastSuccess("Logout User!!")
        setTimeout(() => {
            navigate("/");
            window.location.reload();
        }, 400);

    }
    return (
        <div className='w-[100%] border py-5'>
            <div className='w-[100%] flex'>
                <div className='w-[15%] flex justify-center content-center'>
                    logo
                </div>
                <div className='w-[70%] text-center mx-auto '>
                    <div className='flex gap-[13%] content-center text-center justify-center'>
                        {data?.map((item) => {
                            return (
                                <div className={`${pathname == item?.name ? "text-orange-600 " : ""} cursor`} onClick={() => window.location.assign(item?.name)}>
                                    {item?.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-[15%]'>
                    <div className='flex pl-10 gap-[20%]'>
                        <div className='text-[20px] cursor hover:text-orange-400' onClick={logout}>
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </div>
                        {user?.avatar ? <div className='' onClick={() => window.location.assign("/profile")}>
                            <img src={user?.avatar} alt="no image" className='w-[40px] h-[40px] rounded cursor border' />
                        </div> : <>
                            <div className='text-[20px] cursor hover:text-orange-400'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
