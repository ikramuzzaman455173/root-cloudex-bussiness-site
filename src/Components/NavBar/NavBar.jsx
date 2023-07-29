import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import NavButtonClose from '../SharedComponents/Button/NavButtonClose';
import NavButtonBar from '../SharedComponents/Button/NavButtonBar';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

    const handleNavLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='shadow-md dark:border-b-[1px] dark:rounded-md w-full fixed z-[40] top-0 left-0'>
      <div className='md:flex md:items-center lg:justify-between md:justify-between bg-nav-color border-b-2 border-border-c lg:gap-32 py-4 md:px-10 px-7'>
        {/* logo section */}
        <Link to='/'>
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img className='w-[12rem]' src="/src/assets/Images/logo/For Website.png" alt="site logo" />
          </div>
        </Link>
        {/* Menu icon */}
        <div onClick={handleToggle} className='absolute text-[#A6ADBB] right-8 top-6  font-semibold cursor-pointer md:hidden w-7 h-7'>
          {open ? <NavButtonClose/> : <NavButtonBar/>}
        </div>
        {/* link items */}
        <NavLinks open={open} handleNavLinkClick={handleNavLinkClick} />
      </div>
    </div>
  );
};

export default NavBar;
