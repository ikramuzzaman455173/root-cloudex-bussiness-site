import React from 'react'
import Backgound from '../SharedComponents/Button/Backgound'
const Home = ({bgUrl}) => {
  return (
    <>
      {/* ====add home backgound image===== */}
{/*
    <div className="w-full absolute bg-center bg-cover h-screen m-auto py-16 px-4 top-0 group" style={{ backgroundImage: `${bgUrl}`, transition: 'background-image 0.5s ease-in-out', }} >
        <div className="absolute inset-0 bg-[#080F28] opacity-[0.9]"></div>
      </div> */}
      <Backgound src={"/../src/assets/Images/BackgoundImages/home-bg.png"} />
      {/* <Backgound src={"/../src/assets/Images/BackgoundImages/about-bg.jpg"} /> */}
    </>
  )
}
export default Home

