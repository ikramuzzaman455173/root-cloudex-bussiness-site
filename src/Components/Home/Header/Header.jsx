import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter';
import AnimatonHeader from '../../../../public/headerAnimation.json'
import Lottie from 'lottie-react'
const Header = () => {
  return (
    <>
      {/* ====header div-1===== */}

      <div className="flex lg:flex-row md:flex-col flex-col lg:justify-center items-center relative lg:-top-[9rem] md:-top-[2rem]">
        <div className='lg:text-left md:text-center text-center'>
          <p className='text-white text-[18px] fw-semibold'>YOU HAVE THE <span className='text-[#FFA500]'>IDEA</span></p>
          <h3 className='text-[2.5rem] font-[500] text-white'>WE HAVE THE <span className='text-[#FFA500]'>TECHNOLOGY</span></h3>
          <p className='text-white font-[500] text-2xl'>Service Provider</p>
          <div className='w-[3rem] h-[5px] rounded-md bg-nav-link-color lg:block hidden'></div>
          <h3 className=' font-[500] text-[18px]'>
            {' '}
            <span className='text-[#656C7A] lg:block hidden'>
              <Typewriter words={['Web Application Based Interface', 'Develop And Design', 'Client Management']} loop={true} cursor={<Cursor />} />
            </span>
            <br />
          </h3>
        </div>
        {/* ====header div-2===== */}
        {/* Lottie Animation */}
        <div className='relative lg:top-0 md:-top-24 -top-24'>
          <div className='md:w-[550px] md:h-[550px] sm:w-[450px] sm:h-[450px] w-[350px] h-[350px]'>
            <Lottie animationData={AnimatonHeader} loop={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
