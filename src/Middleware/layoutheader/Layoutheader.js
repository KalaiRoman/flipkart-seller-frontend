import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
function Layoutheader({ children }) {
    const pathname = useLocation()?.pathname;


    return (
        <div className='w-[100%] h-[100vh] overflow-y-auto'>
            <div className='w-[100%] h-[100%]'>
                {pathname == "/" || pathname == "/sign-up" || pathname == "/forget-password" ? <></> : <>
                    <div className='w-[100%] '>
                        <Header />
                    </div>
                </>}
                <div className='w-[100%]'>
                    {children}
                </div>
                <div className='w-[100%] '>
                    {pathname == "/" || pathname == "/sign-up" || pathname == "/forget-password" ? <></> : <>
                        <div>
                            <Footer />
                        </div>
                    </>}
                </div>
            </div>



        </div>
    )
}

export default Layoutheader
