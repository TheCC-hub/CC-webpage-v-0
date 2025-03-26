"use client"
import React, { useState } from 'react'
import Chat from './chat';
import { IoMdClose } from 'react-icons/io';
import { BsChat } from 'react-icons/bs';

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='z-50 fixed bottom-5 right-5 w-fit h-fit'>

            {isOpen ?
                <div className="rounded-xl overflow-hidden shadow-lg h-[500px] bg-gradient-to-br from-[#F9F7FE] dark:from-[#1E1B29] via-[#F2E9FC] dark:via-[#2C2A3F] to-[#E8F2FE] dark:to-[#3A3750] w-[400px] flex items-center justify-center">
                    <div onClick={() => setIsOpen(!isOpen)} className='absolute top-3 cursor-pointer right-4 z-50 text-xl text-white'><IoMdClose /></div>
                    <Chat />
                </div> :
                <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center gap-2 bg-black text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 transition">
                    <BsChat />
                </div>
            }
        </div>
    )
}
