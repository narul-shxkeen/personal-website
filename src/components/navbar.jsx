import react from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar(){
  return <div className='w-full flex justify-center fixed z-30'>
    <nav className='nav flex items-center justify-around my-8 gap-6 text-[#574B60] drop-shadow-2xl w-auto px-4  py-2 rounded-full'>
    <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/literature"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        Literature
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? 'text-white bg-[#97bfad] px-3 py-2 rounded-md poppins-semibold'
            : 'text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md poppins-semibold'
        }
      >
        Blog
      </NavLink>
</nav>
</div>

}

export default Navbar;
