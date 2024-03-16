import React from 'react'

function Orders() {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='p-4 w-[90%] mx-auto'>
                <div className='w-[100%] flex justify-start'>
                    <div className='button fw-bold mt-4'>Order Lists</div>
                </div>
                <div className='mt-10 w-[100%] h-[100%] py-3 px-5'>
                    {Array(10)?.fill(null).map((item, index) => {
                        return (
                            <div key={index} className='boxshadow mb-3 mt-3 p-3'>
                                <div className='flex w-[100%] content-center justify-center align-items-center'>
                                    <div className='w-[80%] flex gap-10'>
                                        <div>
                                            <img
                                                className='w-[100px] h-[100px] rounded-3xl cursor'
                                                src="https://dxkvlfvncvqr8.cloudfront.net/media/images/cms-banner/image_path/sparx-featured-product-thumb-1708604035.png" alt="no image" />
                                        </div>
                                        <div>
                                            shoe {index + 1}
                                        </div>
                                    </div>
                                    <div className='w-[20%] flex gap-[30px] content-center justify-center align-items-center'>
                                        <div className='mt-5 flex gap-[30%]'>
                                            <div className='cursor hover:text-green-500 text-2xl '>
                                                <i class="fa-solid fa-circle-check"></i>
                                            </div>
                                            <div className='cursor hover:text-orange-500 text-2xl'>
                                                <i class="fa-solid fa-eye"></i>
                                            </div>
                                            <div className='cursor hover:text-red-500 text-2xl'>
                                                <i class="fa-solid fa-circle-xmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Orders
