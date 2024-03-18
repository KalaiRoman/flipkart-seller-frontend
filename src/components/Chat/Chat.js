import React, { useEffect, useState } from 'react'
import { chatUserService, getAllusersService, getuserService } from '../../services/auth/auth_services';
import './Chat.scss';
import { ToastError, ToastSuccess } from '../../Middleware/Toastmodel/ToastModal';
function Chat() {
    const [users, setUsers] = useState([]);

    const [currentuserid, setCurrentUserId] = useState("");
    const [currentusers, setCurrentUsers] = useState({});

    useEffect(() => {
        const datas = async () => {
            try {
                const response = await getAllusersService();

                if (response) {
                    setUsers(response?.adminuser);
                    ToastSuccess("ka")
                }
            } catch (error) {
                ToastError("eerkl")
            }
        }
        datas();
    }, []);

    const datas = [
        {
            id: 1,
            message: "kalai",
            type: "send"
        },
        {
            id: 2,
            message: "kalai",
            type: "received"
        },
        {
            id: 3,
            message: "kalai",
            type: "received"
        },
        {
            id: 4,
            message: "kalai",
            type: "send"
        }
    ];

    const [message, setMessages] = useState("");
    const handleSumitmessage = async () => {
        try {

            const data = {
                message: message,
                type: "receiver",
                userid: currentusers?._id
            }
            const response = await chatUserService(data);
            if (response) {
                ToastSuccess("success messages");
                setMessages("");
            }
        } catch (error) {

        }
    }

    const singleUserid = async (id) => {
        setCurrentUserId(id);
        try {

            const response = await getuserService();
            if (response) {
                setCurrentUsers(response?.user);
            }

        } catch (error) {

        }
    }
    return (
        <div className='main-chat w-[100%] mt-4 mb-5  overflow-hidden'>
            <div className='w-[100%] h-[100%] '>
                <div className='flex w-[80%] mx-auto gap-1 h-[70vh]'>
                    <div className='w-[30%] border p-2'>
                        {users?.map((item, index) => {
                            return (
                                <div className={`border p-3 rounded cursor mt-2 mb-2 ${currentuserid == item?._id ? "border-color-red" : ""}`} key={index}>
                                    <div className={`flex gap-3 `} onClick={() => singleUserid(item?._id)}>
                                        <div className='w-[20%]'>
                                            <img src={item?.avatar} alt="no image" className='w-[40px] h-[40px] rounded-full object-cover' />
                                        </div>
                                        <div className='w-[80%]'>
                                            <div className='flex justify-between w-[100%] '>
                                                <div>
                                                    {item?.username}
                                                </div>
                                                <div>
                                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[70%] border '>
                        <div className='w-[100%] h-[100vh]'>
                            <div className='p-3'>
                                {users[0]?.username}
                            </div>
                            <div className='h-[52%] border overflow-auto right-chat-box'>
                                {currentusers?.chat?.map((item, index) => {
                                    return (
                                        <div className='w-[100%]' key={index}>
                                            <div className={`${item?.type !== "sender" ? "sender-message" : "receiver-message"}`} key={index}>
                                                <div className={`${item?.type !== "sender" ? "sender-messagess" : "receiver-messagess"}`}>
                                                    {item?.message}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='h-[10%] mt-2'>
                                <div className='flex w-[100%] content-center align-items-center justify-center text-center'>
                                    <div className='w-[90%]'>
                                        <input type="text" placeholder='Message here!!!...'
                                            className='border w-[90%] rounded-full'
                                            value={message}
                                            onChange={(e) => setMessages(e?.target?.value)}
                                        />
                                    </div>
                                    <div onClick={handleSumitmessage} className=' cursor flex align-items-center justify-center h-[100%] border content-center'>
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
