import React,{ useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {ExpandCircleDownIcon as ExpandCircleDown} from '@mui/icons-material/ExpandCircleDown';

function Navbar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive
            ? 'text-white bg-[#97bfad]'
            : 'text-gray-700 hover:text-white hover:bg-gray-700'
        } px-1 py-0 poppins-medium text-sm md:text-base md:px-3 md:py-2 rounded-md md:poppins-semibold`
      }
    >
      {children}
    </NavLink>
  );


  return   <div className='w-full flex justify-center fixed z-30'>
  <nav className='nav flex items-center justify-around my-4 gap-1 md:my-8 md:gap-6 text-[#574B60] drop-shadow-2xl w-auto px-1 md:px-4 md:py-2 rounded-full'>
    {isMobile ? (
      <>
        <button onClick={toggleMenu} className="md:hidden">
          <ExpandCircleDown size={24} />
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-4 rounded-b-lg shadow-md">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/resume">Resume</NavItem>
            <NavItem to="/literature">Literature</NavItem>
            <NavItem to="/blog">Blog</NavItem>
          </div>
        )}
      </>
    ) : (
      <>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/resume">Resume</NavItem>
        <NavItem to="/literature">Literature</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </>
    )}
  </nav>
</div>

}

export default Navbar;
