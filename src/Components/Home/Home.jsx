import React from 'react'
import DevelopSoftware from '../DevelopSoftware/DevelopSoftware'
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import Background from '../SharedComponents/Button/Backgound'
import Container from '../SharedComponents/Container'
import Header from './Header/Header'
import OurProject from '../OurProject/OurProject'
import OurMisson from '../OurMisson/OurMisson'
import OureTechnology from '../OureTechnology/OureTechnology'
import OurVission from '../OurVission/OurVission'
const Home = () => {
  const imageUrlSmall = "https://thebrightfuture.co/static/media/5512626.aabffe4a0c9b9f638ffb.jpg";
  const imageUrlLarge = "https://thebrightfuture.co/static/media/header.afc603ccc144602a1277.png";
  return (
    <div className='bg-[#020A1C] '>
      {/* ====add home backgound image===== */}
{/*
    <div className="w-full absolute bg-center bg-cover h-screen m-auto py-16 px-4 top-0 group" style={{ backgroundImage: `${bgUrl}`, transition: 'background-image 0.5s ease-in-out', }} >
        <div className="absolute inset-0 bg-[#080F28] opacity-[0.9]"></div>
      </div> */}
      <div className='hidden md:block'>
      <Background src={imageUrlLarge}/>
      </div>
      <div className='md:hidden'>
      <Background  src={imageUrlSmall} />
      </div>
      {/* <Backgound src={"/../src/assets/Images/BackgoundImages/about-bg.jpg"} /> */}
      <div className='z-20 relative my-[12rem]'>
        <Container>
          <Header />
          <DevelopSoftware />
          <ServiceProvider />
          <OurProject />
          <OurMisson />
          <OureTechnology />
          <OurVission/>
        </Container>
      </div>
    </div>
  )
}
export default Home