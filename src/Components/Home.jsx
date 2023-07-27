import React from 'react'
const Home = () => {
  return (
    <>
      {/* ====add home backgound image===== */}
      {/* <div className="bg-[url('https://thebrightfuture.co/static/media/header.afc603ccc144602a1277.png')] bg-no-repeat bg-center bg-cover w-full h-screen  relative"> */}
      {/* <img src="/../src/assets/Images/BackgoundImages/home-bg.png" className='w-full h-screen bg-gradient-to-l from-blue-500 to-black' alt="" /> */}
      {/* </div> */}

      <div className="w-full absolute bg-center bg-cover h-screen m-auto py-16 px-4 top-0 group" style={{ backgroundImage: `url("/../src/assets/Images/BackgoundImages/home-bg.png")`, transition: 'background-image 0.5s ease-in-out', }} >
        <div className="absolute inset-0 bg-[#080F28] opacity-[0.9]"></div>
      </div>
    </>
  )
}

export default Home