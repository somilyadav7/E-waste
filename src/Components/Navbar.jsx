import { Link } from 'react-router-dom';
import Logo from '../logo4.jpg';

function Navbar() {
  return (
    <div className='flex items-center justify-between border-b'>
      <div className='flex items-center'>
        <img className='h-12 w-auto mr-4' src={Logo} alt='Logo' />
      </div>

      <div className='flex flex-grow justify-center'>
        <Link to='/' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>Home</Link>
        <Link to='/about' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>About</Link>
        <Link to='/facilities' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>E-Facilities</Link>
        <Link to='/recycle' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>Recycle</Link>
        <Link to='/ewaste' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>E-Waste</Link>
        <Link to='/contact' className='text-black text-xl mx-4 hover:text-blue-400 focus:text-blue-400'>Contact Us</Link>
      </div>

      <div className='flex justify-end'>
        <Link to='/signin' className='text-black text-lg px-3 py-1 rounded-md border border-black hover:bg-blue-400 hover:text-white focus:bg-blue-400 focus:text-white mb-1'>
          Sign In
        </Link>
      </div>




      {/* Optional: Add other elements on the right side */}
    </div>
  );
}

export default Navbar;
