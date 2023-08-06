import React from 'react'
import OurMisson from '../Components/OurMisson/OurMisson'
import OurVission from '../Components/OurVission/OurVission'

const About = () => {
  return (
    <>
      <div className="pt-[9rem] pb-[5rem]">
        <OurVission/>
        <OurMisson />
      </div>

    </>
  )
}

export default About