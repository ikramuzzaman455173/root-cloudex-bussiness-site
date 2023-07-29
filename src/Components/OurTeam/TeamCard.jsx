// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaLinkedinIn } from 'react-icons/fa';
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SharedComponents/SectionTitle';
const TeamCard = () => {
  const teamMember = [
    {
      name: "Mahadi Hasan",
      position: 'Ceo And Founder',
      email: 'info@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/mahadi.d26ec93f8e2568232b6e.jpg'
    },
    {
      name: "Maruf Ali Khan",
      position: 'Managing Director',
      email: 'maruf@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/maruf.56a3403b65de5208767f.jpeg'
    },
    {
      name: "Foysal Ahmed",
      position: 'Project Manager',
      email: 'foysal@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/Foysal.83666e68d421a86e1ceb.png'
    },
    {
      name: "Regita Redhe",
      position: 'Account Manager',
      email: 'radhe@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/accountManager.26c9fd4ca8f0a13919db.jpeg'
    },
    {
      name: "Md. Abdur Rab",
      position: 'product designer',
      email: 'abdur@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/Abdur_rab_1.b5b86b3a60feecb16733.jpg'
    },
    {
      name: "Nazmul Hoque",
      position: 'product designer',
      email: 'nazmul@thebrightfuture.co',
      image: 'https://www.thebrightfuture.co/static/media/nezamul.5c6c52af51018468f0c6.jpeg'
    },
  ]
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {teamMember?.map((team, i) => (<SwiperSlide>
          <div key={i} className="p-4 rounded-xl border-[#1E6DFF] border-[1px] bg-[#151A32] mx-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src={team.image}
                className="w-full h-[250px] object-cover transition duration-300 transform hover:cursor-pointer hover:scale-[1.1]"
                alt="team member image"
              />
            </div>
            <div className='p-4 flex flex-col justify-center items-center'>
              <h3 className='text-2xl text-white font-[500]'>{team.name}</h3>
              <p className='text-[15px] text-[#1AC4D8]'>{team.position}</p>
              <p className='text-[16px] text-[#9CA3AF] lowercase'>{team.email}</p>
              <a href="https://www.linkedin.com" target='_blank'>
                <FaLinkedinIn className='text-4xl my-4 bg-[#1E6DFF] text-[#161B33] p-2 rounded-md' />
              </a>
            </div>
          </div>
        </SwiperSlide>))}

      </Swiper>

      {/* </div> */}
    </>
  );
};

export default TeamCard;