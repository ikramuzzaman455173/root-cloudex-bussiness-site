import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'
import TeamCard from './TeamCard'

const OurTeam = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className='lg:mt-40  lg:mb-16 mt-20 mb-10'>
        <SectionTitle title={"Meet Our "} info={"Team"}/>
      </div>
      {/* Team members */}
      <TeamCard/>
    </div>
  )
}

export default OurTeam

