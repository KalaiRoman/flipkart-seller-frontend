import React from 'react'
import { useLocation } from 'react-router-dom';

function Header() {


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
    return (
        <div className='w-[100%] border py-5'>
            <div className='w-[100%] flex'>
                <div className='w-[15%] flex justify-center content-center'>
                    logo
                </div>
                <div className='w-[70%] text-center mx-auto '>
                    <div className='flex gap-[13%] content-center text-center justify-center'>
                        {data?.map((item, index) => {
                            return (
                                <div className={`${pathname == item?.name ? "text-orange-600 fw-bold" : ""} cursor`} onClick={() => window.location.assign(item?.name)}>
                                    {item?.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-[15%]'>
                    <div className='flex pl-10 gap-[20%]'>
                        <div className='text-[20px] cursor hover:text-orange-400'>
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </div>
                        <div className='text-[20px] cursor hover:text-orange-400'>
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
