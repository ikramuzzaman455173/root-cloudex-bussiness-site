import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'

const OurVission = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className='lg:mt-[170px] mt-[90px]'>
      <SectionTitle title="Our " info="Vission"/>
      </div>
      <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-20 mt-16'>
        {/* ====our misson div-1===== */}
        <div data-aos="fade-right" data-aos-duration="1500">
          <p className='mission-vission-title'>Our vision is to be a leading force in the software industry, driving digital transformation, and empowering businesses and individuals with innovative solutions that shape a brighter future.</p>

          <div className='flex lg:flex-row flex-col  lg:justify-start lg:items-start justify-center items-center'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Transforming Industries through Technology</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Empowering Businesses and Individuals</p>
          </div>
          </div>


          <div className='flex lg:flex-row flex-col  lg:justify-start lg:items-start justify-center items-center'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Global Leadership in Software Innovation</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Inspiring Digital Transformation</p>
          </div>
          </div>


          <div className='flex lg:flex-row flex-col  lg:justify-start lg:items-start justify-center items-center'>
          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Building a Sustainable Future</p>
          </div>

          <div className='our-misson-title-style group'>
              <img src="./assets/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Enriching Lives through Technology</p>
          </div>
          </div>


        </div>
        {/* ====our misson div-2===== */}
        <div data-aos="fade-left" data-aos-duration="1500">
          <img src="./assets/vission.png" className='w-[300px] h-[380px]' alt="our misson img" />
        </div>
      </div>
    </div>
  )
}

export default OurVission