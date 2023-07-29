import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'
import TeamCard from './TeamCard'

const OurTeam = () => {
  return (
    <>
      <div className='mt-40 mb-16'>
        <SectionTitle title={"Meet Our "} info={"Team"}/>
      </div>
      {/* Team members */}
      <TeamCard/>
    </>
  )
}

export default OurTeam

