import React, { useState,useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import NavButtonClose from '../SharedComponents/Button/NavButtonClose';
import NavButtonBar from '../SharedComponents/Button/NavButtonBar';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='shadow-md dark:border-b-[1px] dark:rounded-md w-full fixed z-20 top-0 left-0'>
      <div className='md:flex md:items-center lg:justify-between border-border-c border-b-2 bg-nav-color lg:gap-32  py-4 md:px-10 px-7'>
        {/* logo section */}
        <Link to='/'>
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img className='w-[12rem]' src="https://thebrightfuture.co/static/media/logo.44f52001f3cd1a27b78c.png" alt="site logo" />
          </div>
        </Link>
        {/* Menu icon */}
        <div onClick={handleToggle} className='absolute right-8 top-6  font-semibold cursor-pointer md:hidden w-7 h-7'>
          {open ? <NavButtonClose/> : <NavButtonBar/>}
        </div>
        {/* link items */}
        <NavLinks open={open} />
      </div>
    </div>
  );
};

export default NavBar;