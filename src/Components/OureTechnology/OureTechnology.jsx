import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'
import Services from './Services'
import Contact from '../ContactForm/ContactForm'

const OureTechnology = () => {
  return (
    <>
      <div className='my-40'>
        <SectionTitle title={"Our Technology "} info={"And Tools"}/>
      </div>
      <Services />
      <Contact/>
    </>
  )
}

export default OureTechnology
