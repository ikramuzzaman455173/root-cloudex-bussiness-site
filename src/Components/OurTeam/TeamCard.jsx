


import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const TeamCard = () => {
  const teamMember = [
    {
      name: "Rafeu Ahammed",
      position: 'Ceo And Founder',
      email: 'admin@rootcloudex.com.bd',
      image: './assets/Team/ceo.webp'
    },
    {
      name: "Maruf Ali Khan",
      position: 'Managing Director',
      email: 'maruf@thebrightfuture.co',
    },
    {
      name: "Foysal Ahmed",
      position: 'Project Manager',
      email: 'foysal@thebrightfuture.co',
    },
    {
      name: "Regita Redhe",
      position: 'Account Manager',
      email: 'radhe@thebrightfuture.co',
    },
    {
      name: "Md. Abdur Rab",
      position: 'product designer',
      email: 'abdur@thebrightfuture.co',
    },
    {
      name: "Nazmul Hoque",
      position: 'product designer',
      email: 'nazmul@thebrightfuture.co',
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
        {teamMember?.map((team, i) => (
          <SwiperSlide key={i}>
            <div className="p-4 rounded-xl border-[#1E6DFF] border-[1px] bg-[#151A32] mx-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={team.image || './assets/placholder-img.avif'}
                  className="w-full border-[3px] border-white h-[250px] object-cover transition duration-300 transform hover:cursor-pointer hover:scale-[1.1]"
                  alt="team member image"
                />
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <h3 className="text-2xl text-white font-[500]">{team.name}</h3>
                <p className="text-[15px] text-[#1AC4D8]">{team.position}</p>
                <p className="text-[16px] text-[#9CA3AF] lowercase">{team.email}</p>
                <a href="https://www.linkedin.com/company/rootcloudex" target="_blank">
                  <FaLinkedinIn className="text-4xl my-4 bg-[#1E6DFF] text-[#161B33] p-2 rounded-md" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCard;
