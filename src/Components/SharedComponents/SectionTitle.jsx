import React from 'react'

const SectionTitle = ({title,info}) => {
  return (
    <>
      <h3 className='text-2xl text-center text-white font-[500] lg:-mt-20'>{title}<span className='text-[#00D0FF] custom-drop-shadow'>{info}</span></h3>
      <div className='w-[5rem] h-[6px] rounded-md bg-[#3F83F8] mx-auto mt-2'></div>
    </>
  )
}

export default SectionTitle