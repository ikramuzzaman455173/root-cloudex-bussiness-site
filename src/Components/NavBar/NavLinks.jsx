import { NavLink, useLocation } from 'react-router-dom';
const NavLinks = ({ open }) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Project", link: "/Project" },
    { name: "Service", link: "/Service" },
  ];
  return (
    <>
      <ul className={`md:flex md:items-center lg:gap-10 md:pb-0 pb-12 text-[18px] lg:bg-transparent lg:mx-0  bg-navlinks-c text-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-15 lg:h-0 h-[500px]' : 'top-[-490px]'}`}>
        {Links.map((link) => (
          <li key={link.name} className='md:my-0 my-7 font-semibold text-center'>
            <NavLink to={link.link} className={({ isActive }) => isActive ? 'text-nav-link-color' : 'hover:text-nav-link-color '}>{link.name}</NavLink>
          </li>
        ))}
        <div className='lg:text-left text-center'>
        <button className='py-[8px] px-[24px] text-[16px]  bg-[#418cd2] fw-[600] text-white border-0 rounded-[0.25rem]'>Join Us</button>
        </div>
      </ul>
    </>
  )
}

export default NavLinks