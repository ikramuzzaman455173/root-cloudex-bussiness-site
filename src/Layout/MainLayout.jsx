import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default MainLayout