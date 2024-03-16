import React, { useEffect, useState } from 'react'
import { getproductServices } from '../../services/product_service/product_service';
import { useNavigate } from 'react-router-dom';

function Products() {


    const navigate = useNavigate();

    const [data, setData] = useState([]);


    useEffect(() => {
        const response = async () => {
            try {
                const responseData = await getproductServices();

                if (responseData) {
                    setData(responseData?.data);

                }


            } catch (error) {

            }
        }

        response();
    }, [])

    return (
        <div className='w-[100%] h-[100%]'>
            <div className='p-4 w-[90%] mx-auto'>
                <div className='w-[100%] flex justify-end'>
                    <button className='button' onClick={() => window.location.assign("/addproduct")}>+ Add Product</button>
                </div>
                <div className='boxshadow mt-10 w-[100%] h-[100%] py-3 px-5'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='boxshadow mb-3 mt-3 p-3'>
                                <div className='flex w-[100%] content-center justify-center align-items-center'>
                                    <div className='w-[80%] flex gap-10'>
                                        <div>
                                            <img
                                                className='w-[80px] h-[80px] rounded cursor object-contain border p-2'
                                                src={item?.thumbimage} alt="no image" />
                                        </div>
                                        <div>
                                            {item?.productname}
                                        </div>
                                    </div>
                                    <div className='w-[20%] flex gap-[30px] content-center justify-center align-items-center'>
                                        <div className='mt-5 flex gap-[30%]'>
                                            <div className='cursor hover:text-green-500 text-2xl ' onClick={() => navigate("/addproduct", { state: { productid: item?._id } })}>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                            </div>
                                            <div className='cursor hover:text-orange-500 text-2xl'>
                                                <i class="fa-solid fa-eye"></i>
                                            </div>
                                            <div className='cursor hover:text-red-500 text-2xl'>
                                                <i class="fa-solid fa-trash"></i>
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

export default Products
