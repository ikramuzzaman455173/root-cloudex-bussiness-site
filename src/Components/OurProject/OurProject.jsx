import React from 'react';
import SectionTitle from '../SharedComponents/SectionTitle';

const OurProject = () => {
  const cards = [
    {
      id: 1,
      image: "./assets/placholder-img.avif",
      title: 'Book House (Book selling platform)',
      description: "Each one will work with a different type of data, the user cannot use the seller's or seller admin's data. No one can place any order without login in. Admin can make any seller an admin if he wants and Add a payment system.'",
    },
    {
      id: 2,
      image: "./assets/placholder-img.avif",
      title: 'Ema-Jhon (Shopping Platform)',
      description: "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
    },
    {
      id: 3,
      image: "./assets/placholder-img.avif",
      title: 'Doctors-Portal',
      description: "All site data is taken from MongoDB & Added Photo ReactAnyone with a login can provide some boy information data. Added authorization system to site. Added Photo React. Data sorting has been done so that the data does not become random.",
    },
  ];

  return (
    <>
      <div className='relative lg:mt-40 md:mt-24 mt-28 mb-20 md:mb-16 lg:mb-20'>
        <SectionTitle title={"our "} info={"Projects"} />
      </div>
      <ul id="cards">
        {cards.map(card => (
          <li key={card.id} className="card w-[100%] h-[100px] group transform hover:skew-110" id={`card${card.id}`}>
            <div className="card-body border-2 border-[#008CFF] bg-[#121923] rounded-xl">
              <div className='flex lg:flex-row lg:justify-between justify-center flex-col items-center gap-10'>
                <img src={card.image} className='lg:w-[300px] lg:h-[200px] w-full h-full border-0 rounded-md' alt={card.title} />
                <div>
                  <h2 className='text-[#008CFF] lg:text-3xl md:text-2xl text-xl font-[500]'>{card.title}</h2>
                  <p className='text-[#86888A] lg:text-[17px] text-[15px] mt-4'>{card.description}</p>
                </div>
              </div>
              <div className='flex justify-end items-center lg:mt-0 mt-5'>
              <button className='py-[8px] px-[12px] text-[16px] font-[500] bg-[#0d83e4bb] transition duration-300 hover:bg-[#007BFF] text-white w-[120px] rounded-lg'>Details</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='lg:pt-32 md:pt-[450px] pt-[400px]'>
      <button className="flex items-center justify-center mx-auto py-[8px] px-[20px] transition duration-300 opacity-[0.5] font-semibold tracking-wide rounded-md text-[#007BFF] hover:text-[#61B9FA] border-[1px] border-[#1a56db] hover:bg-[#0B2667]">See More</button>
      </div>
    </>
  )
}

export default OurProject