import react from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return <div className='w-full flex justify-center fixed z-30'>
    <div className='nav flex items-center justify-center my-8 gap-4 text-[#574B60] drop-shadow-2xl w-auto px-8 py-2 rounded-full'>
  <Link to="/"><h1 className='poppins-semibold text-xl'>Home</h1></Link>
<h1 className='poppins-semibold text-xl'>Projects</h1>
<h1 className='poppins-semibold text-xl'>Experiences</h1>
<h1 className='poppins-semibold text-xl'>Literature</h1>
<h1 className='poppins-semibold text-xl'>Blog</h1>
</div>
</div>

}

export default Navbar;