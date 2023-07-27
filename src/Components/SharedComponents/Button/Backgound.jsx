import React from 'react'

const Backgound = ({src}) => {
  return (
    <>

      <div className="w-full absolute bg-center bg-cover h-screen m-auto py-16 px-4 top-0 group" style={{ backgroundImage: `url(${src})`, transition: 'background-image 0.5s ease-in-out', }} >
        <div className="absolute inset-0 bg-[#080F28] opacity-[0.9]"></div>
      </div>
    </>
  )
}

export default Backgound