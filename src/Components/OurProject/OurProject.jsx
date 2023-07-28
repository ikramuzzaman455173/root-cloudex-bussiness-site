// import React from 'react'
// import SectionTitle from '../SharedComponents/SectionTitle'
// import CardList from './CardList';

// const OurProject = () => {
//   const cards = [
//     {
//       id: 1,
//       image:'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/book-house.png',
//       title: 'Book House (Book selling platform)',
//       description: "Each one will work with a different type of data, the user cannot use the seller's or seller admin's data. No one can place any order without login in. Admin can make any seller an admin if he wants and Add a payment system.'",
//     },
//     {
//       id: 2,
//       image:'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png',
//       title: 'Ema-Jhon (Shopping Platform)',
//       description: "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
//     },
//     {
//       id: 3,
//       image:'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/doctors-portal.png',
//       title: 'Doctors-Portal',
//       description: "All site data is taken from MongoDB & Added Photo ReactAnyone with a login can provide some boy information data. Added authorization system to site. Added Photo React. Data sorting has been done so that the data does not become random.",
//     },
//   ];
//   return (
//     <>
//       <div className='relative mt-40'><SectionTitle title={"our "} info={"Projects"} /></div>
//       <ul id="cards">
//             <li className="card" id="card1">
//                 <div className="card-body">
//                     <h2>Card 1</h2>
//                 </div>
//             </li>
//             <li className="card" id="card2">
//                 <div className="card-body">
//                     <h2>Card 2</h2>
//                 </div>
//             </li>
//             <li className="card" id="card3">
//                 <div className="card-body">
//                     <h2>Card 3</h2>
//                 </div>
//             </li>
//             <li className="card" id="card4">
//                 <div className="card-body">
//                     <h2>Card 4</h2>
//                 </div>
//             </li>
//         </ul>
//     </>
//   )
// }

// export default OurProject


import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'

const OurProject = () => {
  const cards = [
    {
      id: 1,
      image: 'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/book-house.png',
      title: 'Book House (Book selling platform)',
      description: "Each one will work with a different type of data, the user cannot use the seller's or seller admin's data. No one can place any order without login in. Admin can make any seller an admin if he wants and Add a payment system.'",
    },
    {
      id: 2,
      image: 'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png',
      title: 'Ema-Jhon (Shopping Platform)',
      description: "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
    },
    {
      id: 3,
      image: 'https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/doctors-portal.png',
      title: 'Doctors-Portal',
      description: "All site data is taken from MongoDB & Added Photo ReactAnyone with a login can provide some boy information data. Added authorization system to site. Added Photo React. Data sorting has been done so that the data does not become random.",
    },
  ];

  return (
    <>
      <div className='relative mt-40 mb-20'>
        <SectionTitle title={"our "} info={"Projects"} />
      </div>
      <ul id="cards">
        {cards.map(card => (
          <li key={card.id} className="card w-[100%] h-[100px] group transform hover:skew-110" id={`card${card.id}`}>
            <div className="card-body border-2 border-[#008CFF] bg-[#121923] rounded-xl">
              <div className='flex justify-between items-center gap-10'>
                <img src={card.image} className='w-[300px] h-[200px] border-0 rounded-md' alt={card.title} />
                <div>
                  <h2 className='text-[#008CFF] text-3xl font-[500]'>{card.title}</h2>
                  <p className='text-[#86888A] text-[17px] mt-4'>{card.description}</p>
                </div>
              </div>
              <div className='flex justify-end items-center'>
              <button className='py-[8px] px-[12px] text-[16px] font-[500] bg-[#0d83e4bb] transition duration-300 hover:bg-[#007BFF] text-white w-[120px] rounded-lg'>Details</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='pt-32'>
      <button className="flex items-center justify-center mx-auto py-[8px] px-[20px] transition duration-300 opacity-[0.5] font-semibold tracking-wide rounded-md text-[#007BFF] hover:text-[#61B9FA] border-[1px] border-[#1a56db] hover:bg-[#0B2667]">See More</button>
      </div>
    </>
  )
}

export default OurProject
