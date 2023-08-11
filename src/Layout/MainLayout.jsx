import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from '../Components/SharedComponents/ScrollBottomToTop';
import PageLoader from '../Components/SharedComponents/PageLoader';
import ParticleBg from '../Components/PagePartiCles/ParticleBG'
const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  return (
    <div className='bg-gradient-to-r from-[#090d18] to-[#0b0024]'>
      {isLoading ? <PageLoader /> : <>
        <NavBar />
        <div className='min-h-[calc(100vh-140px)] bg-gradient-to-r from-[#090d18] to-[#0b0024]'>
          <ScrollToTopButton />
          <Outlet></Outlet>
        </div>
        <Footer />
        <div className='relative z-[50]'>
          <ParticleBg />
        </div>
      </>}
    </div>
  )
}
export default MainLayout