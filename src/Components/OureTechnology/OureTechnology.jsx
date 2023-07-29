import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'
import Services from './Services'

const OureTechnology = () => {
  return (
    <>
      <div className='lg:mt-48 lg:mb-24 mt-24 mb-24'>
        <SectionTitle title={"Our Technology "} info={"And Tools"}/>
      </div>
      <Services />
    </>
  )
}

export default OureTechnology

