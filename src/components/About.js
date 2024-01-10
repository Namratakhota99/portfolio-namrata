import React from 'react'
import Profile from '../assests/profile.jpg'
import { Styles } from '../utils/Style'
import Resume from '../assests/NAMRATA-KHOT.pdf'
import { FaDownload } from "react-icons/fa";
import '../App.css';


function About() {
    return (
        <div className="flex flex-wrap justify-center items-center mt-5 p-5" id='Home'>
            <div className='flex-1 p-0 m-0'>
                <span className={Styles.heroHeadText}>
                    Hi, I'm <span className='text-orange-600'>
                        Namrata Khot
                    </span>
                    <br />
                    <span className={Styles.heroSubText} >
                        I am Fresher Looking Out for a Job
                        <br/>
                        excited to kick-start my journey as a Java/Python Developer or Web Enthusiast.
                    </span>
                </span>
                <br></br>
                <div className='w-[14rem]'>
                    <a href={Resume}
                        download="Resume"
                        target='blank'
                        rel="noreferrer">
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500'>
                        <FaDownload className='text-lg mr-3 mt-1'/>Resume   
                        </div>
                    </a>
                </div>

            </div>
            <div className='flex flex-wrap'>
                <img src={Profile} alt="profile" className='element object-contain p-4 w-[30rem]' />
            </div>

        </div>
    )
}

export default About;