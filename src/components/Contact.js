import React from 'react'
import { Styles } from '../utils/Style'
import contact from '../assests/contact.png'

function Contact() {
    return (
        <div>
            <div className='flex-row items-center justify-center pt-5 pl-5' id='Contact'>
                <span className={Styles.sectionHeadText}>
                    Contact Us
                </span>
                <hr className='w-[35%]'></hr>

            </div>
            <div className='mt-5'>
                <div className='flex flex-wrap flex-row justify-around'>
                    <div className='lg:w-[40%]'>
                        <form className='m-5 flex flex-col gap-3'>
                            <label className='flex flex-col gap-3'>
                                <span className='text-violet-700 font-medium mb-2'> Your Name</span>
                                <input tyep='text'
                                    name="name"
                                    placeholder='your name ' className='bg-orange-200 py-4 px-6 placeholder:text-secondary 
                                text-orange-500 rounded-lg outline-none border-none font-medium'></input>
                            </label>

                            <label className='flex flex-col gap-3'>
                                <span className='text-violet-700 font-medium mb-2'>Your Email</span>
                                <input tyep='email'
                                    name="email"
                                    placeholder='your email' className='bg-orange-200 py-4 px-6 placeholder:text-secondary 
                                text-orange-500 rounded-lg outline-none border-none font-medium'></input>
                            </label>

                            <label className='flex flex-col gap-3'>
                                <span className='text-violet-700 font-medium mb-2'> Your Message</span>
                                <textarea row={5}
                                    name="text"
                                    placeholder='Your Message' className='bg-orange-200 py-4 px-6 placeholder:text-secondary 
                                text-orange-500 rounded-lg outline-none border-none font-medium'></textarea>
                            </label>

                            <button tyep="submit" className='bg-slate-100 hover:shadow-orange-300 py-3 
                            px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black 
                            font-bold shadow-md shadow-primary'>Submit</button>
                        </form>
                    </div>
                    <div className='lg:w-[50%]'>
                        <img src={contact} alt="any image" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact