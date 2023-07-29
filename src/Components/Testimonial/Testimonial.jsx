
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import SectionTitle from '../SharedComponents/SectionTitle';
const TeamCard = () => {
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
  const [slidesPerView, setSlidesPerView] = useState(3);
  const swiperRef = useRef(null);

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(3); // Large screens and above
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // medium screen size
      } else {
        setSlidesPerView(1); // small screen size
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial value
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='lg:mt-40 lg:mb-20 mt-20 mb-20'>
          <SectionTitle title={"Our Client "} info={"Says"} />
        </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonial?.map((item, i) => (
          <SwiperSlide key={i}>
            <div class="w-[330px] h-[300px] rounded-xl p-4 bg-[#121E34] overflow-hidden flex justify-center mx-auto items-center flex-col relative">

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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCard;
