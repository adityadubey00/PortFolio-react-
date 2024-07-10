import React from 'react'
import hero from'../assets/hero.jpg';

import { RiArrowRightSLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
 
const Home = () => {
  return (
    <div name="home
    " className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='w-3/5  mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row'>
            <div className='flex flex-col h-full justify-center md:3xl '>
                
                    <span className='text-4xl mt-44 md:mt-9 sm:7xl md:3xl font-bold text-white'>HI <br/> I AM A ADITYA DUBEY </span>
                    <TypeAnimation className='text-4xl sm:7xl font-bold text-white'
                    sequence ={[
                        'FULL STACK DEVLOPER',
                        2000,
                        'FRONT END DEVLOPER',
                        2000,
                        'BACKEND DEVLOPER',
                        2000,
                    
                    ]}
                    speed={50}
                    wrapper='span'
            repeat={Infinity}
                     />
                     <p className=' text-gray-500 py-4 max-w-md'>a passionate Web Developer with 1 year of experience in creating dynamic and responsive websites. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to build powerful full-stack applications.</p>
                     <div>
                        <button className='group w-fit  py-3 px-3 flex items-center rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'>
                            <RiArrowRightSLine size={25} />
                            </span>

                        </button>
                     </div>
            
            </div>
            <div className='shadow-green-400'>
                <img  className=' animate-profile  size-96 size-rounded-7xl mx-auto  w-3/5 md:w-full  '
                  src={hero} alt="" srcset="" />
            </div>
        </div>
        
    </div>
  )
}

export default Home 