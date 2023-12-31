import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'

const OurMisson = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className='lg:mt-[170px] mt-[90px]'>
      <SectionTitle title="Our " info="Mission"/>
      </div>
      <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-20 mt-16'>
        {/* ====our misson div-1===== */}
        <div data-aos="fade-right" data-aos-duration="1500">
          <p className='mission-vission-title'>Driving Innovation, Delivering Exceptional Experiences: Root Cloudex empowers businesses with cutting-edge software solutions, fostering collaboration and making a positive impact on society.</p>

          <div className='flex lg:flex-row  flex-col  lg:justify-start lg:items-start justify-center items-center'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Innovative Software Solutions</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Exceptional User Experiences</p>
          </div>
          </div>


          <div className='flex lg:flex-row lg:justify-start lg:items-start justify-center items-center flex-col'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Collaborative Partnerships</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Continuous Innovation and Adaptation</p>
          </div>
          </div>


          <div className='flex lg:flex-row lg:justify-start lg:items-start justify-center items-center flex-col'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Social Impact through Technology</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Customer Satisfaction and Success</p>
          </div>
          </div>


        </div>
        {/* ====our misson div-2===== */}
        <div>
          <img src="./assets/mission.png" data-aos="fade-left" data-aos-duration="1500" className='w-[300px] h-[380px]' alt="our misson img" />
        </div>
      </div>
    </div>
  )
}

export default OurMisson