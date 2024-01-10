import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
    return (
        <div>
            <div className='w-[screen] bg-black justify-evenly'>
                <div className='flex flex-row p-2 justify-around '>
                    <a href='https://www.linkedin.com/in/namrata-khot-976a301bb/' target='blank' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                            <FaLinkedin className='text-white' />
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>LinkedIn</span>
                    </a>

                </div>

                <div className='flex flex-row p-2 flex-wrap justify-around'>
                    <a href='namratak448@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                            <MdEmail className='text-white' />
                            
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>namratak4488@gamil.com</span>
                    </a>

                </div>

                <div className='flex flex-row p-2 flex-wrap justify-around'>
                    <a href='//' target='blank' className='text-lg flex flex-row text-violet-300'>
                        <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                            <BiSolidPhoneCall className='text-white' />
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>9876543210</span>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default Footer