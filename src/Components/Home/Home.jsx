import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import DevelopSoftware from '../DevelopSoftware/DevelopSoftware'
import OurMisson from '../OurMisson/OurMisson'
import OurTeam from '../OurTeam/OurTeam'
import OurVission from '../OurVission/OurVission'
import OureTechnology from '../OureTechnology/OureTechnology'
import ServiceProvider from '../ServiceProvider/ServiceProvider'
import Container from '../SharedComponents/Container'
import Testimonial from '../Testimonial/Testimonial'
import Header from './Header/Header'
import Products from '../Products/Products'
const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#090d18] to-[#0b0024]'>
      <div className='z-20 relative my-20'>
        <Container>
          <Header/>
          <DevelopSoftware/>
          <ServiceProvider/>
          <Products/>
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
