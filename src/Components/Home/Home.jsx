import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import DevelopSoftware from '../DevelopSoftware/DevelopSoftware'
import OurMisson from '../OurMisson/OurMisson'
import OurProject from '../OurProject/OurProject'
import OurTeam from '../OurTeam/OurTeam'
import OurVission from '../OurVission/OurVission'
import OureTechnology from '../OureTechnology/OureTechnology'
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import Container from '../SharedComponents/Container'
import Testimonial from '../Testimonial/Testimonial'
import Header from './Header/Header'
const Home = () => {
  // const imageUrlSmall = "https://thebrightfuture.co/static/media/5512626.aabffe4a0c9b9f638ffb.jpg";
  // const imageUrlLarge = "https://thebrightfuture.co/static/media/header.afc603ccc144602a1277.png";
  return (
    <div className='bg-gradient-to-r from-[#090d18] to-[#0b0024]'>
      {/* ====add home backgound image===== */}
{/*
    <div className="w-full absolute bg-center bg-cover h-screen m-auto py-16 px-4 top-0 group" style={{ backgroundImage: `${bgUrl}`, transition: 'background-image 0.5s ease-in-out', }} >
        <div className="absolute inset-0 bg-[#080F28] opacity-[0.9]"></div>
      </div> */}
      {/* <div className='hidden md:block'>
      <Background src={imageUrlLarge}/>
      </div>
      <div className='md:hidden'>
      <Background  src={imageUrlSmall} />
      </div> */}
      {/* <Backgound src={"/.../assets/BackgoundImages/about-bg.jpg"} /> */}
      <div className='z-20 relative my-20'>
        <Container>
          <Header/>
          <DevelopSoftware/>
          <ServiceProvider/>
          <OurProject/>
          <OureTechnology/>
          <OurMisson/>
          <OurVission/>
          <OurTeam/>
          <Testimonial/>
          <ContactForm/>
        </Container>
      </div>
    </div>
  )
}
export default Home