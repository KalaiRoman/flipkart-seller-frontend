import React, { useState, useEffect } from 'react'
import { getuserService, updateImageService, updateService } from '../../services/auth/auth_services';
import { ToastSuccess } from '../../Middleware/Toastmodel/ToastModal';

function Profile() {

    const [user, setUser] = useState([]);



    const [name, setName] = useState("")
    const [Image, setImage] = useState("");

    const [progress, setProgress] = useState(0);

    const handleChangeImage = (e) => {
        const files = e.target.files[0];
        if (files) {
            setImage(URL.createObjectURL(files));
            updateImageProfile(files);
        }
    }



    useEffect(() => {
        const datas = async () => {
            try {
                const response = await getuserService();
                if (response) {
                    setUser(response?.user);
                    setName(response?.user?.username)
                    setImage(response?.user?.avatar)
                }
            } catch (error) {
            }
        }
        datas();
    }, []);


    const updateUser = async () => {
        const data = {
            username: name
        }

        const response = await updateService(data, {
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(progress);

            },
        }).then((res) => {
            if (res) {
                ToastSuccess("Update Profile")

            }
        })




    }

    const updateImageProfile = async (files) => {
        const appendImage = new FormData();
        appendImage.append("image", files);

        const upadte = await updateImageService(appendImage);

        if (upadte) {
            ToastSuccess("updateImage successfully")
        }
    }
    return (
        <div className='w-[100%] mt-5 h-[100vh] overflow-hidden flex flex-col align-items-center justify-center content-center'>
            <div className='h-[100vh] flex-col align-items-center justify-content-center content-center text-center mx-auto'>

                <input type="file" id="image" onChange={handleChangeImage} className='d-none' />
                <div>
                    <label htmlFor='image'>

                        <img src={Image} alt="no image"
                            className='w-[150px] h-[150px] rounded-full cursor border'
                        />
                    </label>

                </div>
                <div className='mt-4'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="text" value={user?.email} disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target?.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>

                <div className='mt-4'>
                    <button onClick={updateUser}
                        className='bg-orange-500 p-3 rounded fw-bold text-white cursor w-[100%]'
                    >Update Profile</button>
                </div>
            </div>


        </div>
    )
}

export default Profile
