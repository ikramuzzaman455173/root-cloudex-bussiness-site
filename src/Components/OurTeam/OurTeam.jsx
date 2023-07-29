import React from 'react'
import SectionTitle from '../SharedComponents/SectionTitle'
import TeamCard from './TeamCard'

const OurTeam = () => {
  return (
    <>
      <div className='my-40'>
        <SectionTitle title={"Our "} info={"Team"}/>
      </div>
      {/* Team members */}
      <TeamCard/>
    </>
  )
}

export default OurTeam

