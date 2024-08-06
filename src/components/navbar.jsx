import react from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar(){
  return <div className='w-full flex justify-center fixed z-30'>
    <nav className='nav flex items-center justify-around my-4 gap-1 md:my-8 md:gap-6 text-[#574B60] drop-shadow-2xl w-auto px-1 md:px-4 md:py-2 rounded-full'>
    <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-0 poppins-medium text-sm md:text-base md:px-3 md:py-2 rounded-md md:poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-1 text-sm md:text-base py-0 poppins-medium md:px-3 md:py-2 rounded-md md:poppins-semibold'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-0 poppins-medium md:px-3 text-sm md:text-base md:py-2 rounded-md md:poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-1 py-0 poppins-medium text-sm md:text-base md:px-3 md:py-2 rounded-md md:poppins-semibold'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-0 poppins-medium md:px-3 md:py-2 rounded-md md:poppins-semibold text-sm md:text-base'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-1 py-0 poppins-medium md:px-3 md:py-2 rounded-md text-sm md:text-base md:poppins-semibold'
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-0 poppins-medium text-sm md:text-base md:px-3 md:py-2 rounded-md md:poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-1 py-0 poppins-medium md:px-3 md:py-2 rounded-md text-sm md:text-base md:poppins-semibold'
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/literature"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-0 text-sm md:text-base poppins-medium md:px-3 md:py-2 rounded-md md:poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 text-sm md:text-base px-1 py-0 poppins-medium md:px-3 md:py-2 rounded-md md:poppins-semibold'
        }
      >
        Literature
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-1 py-1 poppins-medium text-sm md:text-base md:px-3 md:py-2 rounded-md md:poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 text-sm md:text-base px-1 py-1 poppins-medium md:px-3 md:py-2 rounded-md md:poppins-semibold'
        }
      >
        Blog
      </NavLink>
</nav>
</div>

}

export default Navbar;
