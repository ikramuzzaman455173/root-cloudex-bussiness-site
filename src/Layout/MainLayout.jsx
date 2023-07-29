import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ParticleBg from '../Components/PagePartiCles/ParticleBG'
const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet></Outlet>
      </div>
      <Footer />
      <div className='relative z-[50]'>
      {/* <ParticleBg /> */}
      </div>
    </>
  )
}
export default MainLayout