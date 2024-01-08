import React from 'react'
import { Styles } from '../utils/Style'
import { project } from '../constants'
import Tilt from 'react-parallax-tilt'
// import { SiGithub, SiNetlify } from 'react-icons/si'

function Project() {
  return (
    <div>
      <div className='flex-row items-center justify-center pt-5 pl-5' id='Project'>
        <span className={Styles.sectionHeadText}>
          Projects
        </span>
        <hr className='w-[35%]'></hr>
        <div className={Styles.sectionText}>
        Following projects showcases my skills and experience through real-world examples
         of my work. Each project is briefly described . It reflects my ability to solve complex problems, work with different technologies, 
         and manage projects effectively.

        </div>
      </div>

      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {project.map((project) => (
          <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col  justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 
          p-3 rounded-xl border-2 border-violet-900'>
            <div>
              <div className=' justify-center items-center mb-3'>
                {/* <div className='h-[40px] w-[40px] m-3bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'> <a href={project.source_deploy_link} target='blank'> <SiNetlify

                  className='text-3xl font-boldtext-violet-600'></SiNetlify> </a> </div>
                <div className='h-[40px] w-[40px] m-3bg-slate-50 rounded-full shadow-1g shadow-orange-500 flex justify-center items-center'> <a href={project.source_code_link} target='blank'> <SiGithub

                  className=' text-3x1 font-bold text-violet-600' ></SiGithub> </a>
                </div> */}

                {/* </div> */}
                <div className='text-2xl text-violet-600 font-extrabold text-center mb-3'>
                  {project.name}
                </div>
                <img className='h-[200px] w-[250px] self-center border-2 border-pink-200 m-2
                rounded-2xl mb-3' src={project.image} alt={project.name} />

                
                <div className='text-center'>
                  <span className='text-orange-500'>
                    {project.decription}
                  </span>
                </div>
              </div>
            </div>
          </Tilt>
        ))
        }
      </div >

    </div >
  )
}

export default Project