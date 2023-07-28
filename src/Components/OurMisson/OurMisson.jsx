import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'

const OurMisson = () => {
  return (
    <>
      <div className='mt-[170px]'>
      <SectionTitle title="Our " info="Mission"/>
      </div>
      <div className='flex justify-center gap-20 mt-24'>
        {/* ====our misson div-1===== */}
        <div>
          <p className='w-[445px] h-[95px] text-[#92B7DB]'>Driving Innovation, Delivering Exceptional Experiences: Bright Future empowers businesses with cutting-edge software solutions, fostering collaboration and making a positive impact on society.</p>

          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Innovative Software Solutions</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Exceptional User Experiences</p>
          </div>
          </div>


          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Collaborative Partnerships</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Continuous Innovation and Adaptation</p>
          </div>
          </div>


          <div className='flex'>
          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Social Impact through Technology</p>
          </div>

          <div className='our-misson-title-style group'>
            <img src="/src/assets/Images/our-misson-icon.png" className='w-[38px] h-[38px] border-[1px] border-[#007BFF] rounded-md' alt="our misson icon png" />
            <p className='w-[200px] h-[47px] text-[#acacac]'>Customer Satisfaction and Success</p>
          </div>
          </div>


        </div>
        {/* ====our misson div-2===== */}
        <div className=''>
          <img src="https://www.thebrightfuture.co/static/media/vector(mission).348f6fc0aac443ef4554.png" className='w-[300px] h-[380px]' alt="our misson img" />
        </div>
      </div>
    </>
  )
}

export default OurMisson