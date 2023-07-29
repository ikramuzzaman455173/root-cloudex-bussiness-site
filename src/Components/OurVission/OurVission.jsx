import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'

const OurVission = () => {
  return (
    <>
      <div className='mt-[170px]'>
      <SectionTitle title="Our " info="Vission"/>
      </div>
      <div className='flex justify-center gap-20 mt-24'>
        {/* ====our misson div-1===== */}
        <div>
          <p className='w-[445px] h-[95px] text-[#92B7DB]'>Our vision is to be a leading force in the software industry, driving digital transformation, and empowering businesses and individuals with innovative solutions that shape a brighter future.</p>

          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Transforming Industries through Technology</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Empowering Businesses and Individuals</p>
          </div>
          </div>


          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Global Leadership in Software Innovation</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Inspiring Digital Transformation</p>
          </div>
          </div>


          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Building a Sustainable Future</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Enriching Lives through Technology</p>
          </div>
          </div>


        </div>
        {/* ====our misson div-2===== */}
        <div>
          <img src="https://www.thebrightfuture.co/static/media/vector(vission).905c59aa72f1f49efce3.png" className='w-[300px] h-[380px]' alt="our misson img" />
        </div>
      </div>
    </>
  )
}

export default OurVission
