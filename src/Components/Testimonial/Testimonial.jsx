// import React from 'react'
// import SectionTitle from '../SharedComponents/SectionTitle'

// const Testimonial = () => {
//   const testimonial = [
//     {
//       name: 'EspftRain',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
//       image: '/src/assets/Images/company/company-1.jpg',
//     },
//     {
//       name: 'Fcwina',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
//       image: '/src/assets/Images/company/company-3.jpg',
//     },
//     {
//       name: 'Ai Carrer Expart',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
//       image: '/src/assets/Images/company/company-3.jpg',
//     },
//     {
//       name: 'Cgl Consulting Co',
//       info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
//       image: '/src/assets/Images/company/company-4.jpg',
//     },
//   ]
//   return (
//     <>
// <div className='mt-40 mb-20'>
//   <SectionTitle title={"Our Client "} info={"Says"} />
// </div>

// <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//   {testimonial?.map((item, i) => <div key={i} class="w-[300px] h-[300px] rounded-xl p-4 bg-[#121E34] overflow-hidden flex justify-center items-center flex-col relative">

//     <div class="bg-[#1795F0] w-[150px] rounded-full h-[150px] flex justify-end items-end p-8 text-white absolute left-[-70px] top-[-70px] qut"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></div>

//     <div className='flex transform rotate-[90deg] absolute top-[65%] -left-7'>
//       <div className='bg-white w-[1.5rem] h-[5px]'></div>
//       <div className='bg-[#008CFF]  w-[2.5rem] h-[5px]'></div>
//     </div>

//     <div className='flex transform rotate-[90deg] absolute top-[25%] -right-7'>
//       <div className='bg-white w-[1.5rem] h-[5px]'></div>
//       <div className='bg-[#008CFF]  w-[2.5rem] h-[5px]'></div>
//     </div>


//     <h3 className='font-[500] my-2 text-xl text-white pt-16'>{item.name}</h3>
//     <p className='text-justify text-[#9CA3AF] text-[15px] w-[250px]'>{item.info}</p>
//     <img src={item.image} className='w-[75px] mt-5 h-[75px] rounded-full border-4 border-[#008CFF] mb-5' alt="company image" />
//   </div>)}
// </div>

//     </>
//   )
// }

// export default Testimonial


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SharedComponents/SectionTitle';
const Testimonial = () => {
  const testimonial = [
    {
      name: 'EspftRain',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
      image: '/src/assets/Images/company/company-1.jpg',
    },
    {
      name: 'Fcwina',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
      image: '/src/assets/Images/company/company-3.jpg',
    },
    {
      name: 'Ai Carrer Expart',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
      image: '/src/assets/Images/company/company-3.jpg',
    },
    {
      name: 'Cgl Consulting Co',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem autem ex numquam aliquam at?',
      image: '/src/assets/Images/company/company-4.jpg',
    },
  ]
  return (
    <>
      <div className='mt-40 mb-20'>
        <SectionTitle title={"Our Client "} info={"Says"} />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonial?.map((item, i) => <SwiperSlide>
          <div key={i} class="w-[300px] h-[300px] rounded-xl p-4 bg-[#121E34] overflow-hidden flex justify-center items-center flex-col relative">

            <div class="bg-[#1795F0] w-[150px] rounded-full h-[150px] flex justify-end items-end p-8 text-white absolute left-[-70px] top-[-70px] qut"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></div>

            <div className='flex transform rotate-[90deg] absolute top-[65%] -left-7'>
              <div className='bg-white w-[1.5rem] h-[5px]'></div>
              <div className='bg-[#008CFF]  w-[2.5rem] h-[5px]'></div>
            </div>

            <div className='flex transform rotate-[90deg] absolute top-[25%] -right-7'>
              <div className='bg-white w-[1.5rem] h-[5px]'></div>
              <div className='bg-[#008CFF]  w-[2.5rem] h-[5px]'></div>
            </div>


            <h3 className='font-[500] my-2 text-xl text-white pt-16'>{item.name}</h3>
            <p className='text-justify text-[#9CA3AF] text-[15px] w-[250px]'>{item.info}</p>
            <img src={item.image} className='w-[75px] mt-5 h-[75px] rounded-full border-4 border-[#008CFF] mb-5' alt="company image" />
          </div>
        </SwiperSlide>)}
      </Swiper>

      {/* </div> */}
    </>
  );
};

export default Testimonial;

