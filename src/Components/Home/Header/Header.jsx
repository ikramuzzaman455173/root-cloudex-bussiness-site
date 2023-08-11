import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter';
import AnimatonHeader from '../../../../public/headerAnimation.json'
import Lottie from 'lottie-react'
const Header = () => {
  return (
    <>
      {/* ====header div-1===== */}
      <div className="flex lg:flex-row md:flex-col flex-col lg:justify-center items-center relative lg:top-0 md:top-20 top-20"  data-aos="fade-right" data-aos-duration="1500">
        <div className='lg:text-left md:text-center text-center relative'>
          <p className='text-white lg:text-[18px] md:text-[16px] text-[14px]  fw-[700]'>YOU HAVE THE <span className='text-[#FFA500]'>IDEA</span></p>
          <h3 className='lg:text-[2.5rem] md:text-[2rem] text-[1.3rem] lg:font-[700] md:font-[500] font-[500] text-white'>WE HAVE THE <span className='text-[#FFA500]'>TECHNOLOGY</span></h3>
          <p className='text-white font-[500] lg:text-2xl md:text-xl text-xl'>Service we Provide</p>
          <div className='w-[3rem] h-[5px] rounded-md bg-nav-link-color block lg:ml-0 md:ml-[124px] ml-[50px]'></div>
            <h3 className=' font-[500] text-[18px]'>
            {' '}
            <span className='lg:text-white text-[#008cff] lg:block'>
              <div className="typewriter-container lg:bg-[#008CFF] bg-white p-2 lg:mt-4 lg:my-0 my-5 rounded-md inline-block">
                <Typewriter words={['Web Application Based Interface', 'Develop And Design', 'Client Management']} loop={true} cursor={<Cursor />} />
              </div>
            </span>
            <br />
          </h3>
        </div>
        {/* ====header div-2===== */}
        {/* Lottie Animation */}
        <div className='relative lg:top-0 md:-top-24 -top-16'>
          <div className='md:w-[550px] md:h-[550px] sm:w-[450px] sm:h-[450px] w-[350px] h-[350px]' data-aos="zoom-out" data-aos-duration="1500">
            <Lottie animationData={AnimatonHeader} loop={true}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header




