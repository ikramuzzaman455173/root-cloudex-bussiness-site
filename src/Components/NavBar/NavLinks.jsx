import { NavLink, useLocation } from 'react-router-dom';
import NavButton from '../SharedComponents/Button/NavButton';
const NavLinks = ({ open,handleNavLinkClick }) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Project", link: "/Project" },
    { name: "Service", link: "/Service" },
    { name: "Products", link: "/product" },
    { name: "About", link: "/about" },
  ];
  return (
    <>
      <ul className={`md:flex md:items-center lg:gap-10 md:gap-10 md:pb-0 pb-12 text-[18px] lg:bg-transparent lg:mx-0  bg-navlinks-c text-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in  ${open ? 'top-15 lg:h-0 h-[500px] border-b-2' : 'top-[-490px]'}`}>
        {Links.map((link) => (
          <li key={link.name} className='md:my-0 my-7 font-semibold text-center relative'>
            <NavLink to={link.link} onClick={handleNavLinkClick} className={({ isActive }) => isActive ? 'text-nav-link-color isActive' : 'hover:text-nav-link-color'}>{link.name}</NavLink>
          </li>
        ))}
        <div className='lg:text-left text-center'>
          {/* <button className='py-[8px] px-[24px] text-[16px]  bg-[#418cd2] font-[500] text-white border-0 rounded-[0.25rem]'>Join Us</button> */}
          <NavButton value={"Appoitment"} padding={"px-5"} />
        </div>
      </ul>
    </>
  )
}

export default NavLinks