import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen ,setIsMenuOpen] = useState(false)
    const toggleMenu = ()=>{
      setIsMenuOpen(isMenuOpen)
    };

  return (
    <div>
      <nav className='bg-[#F5F5F5] P-6'>
        <div className='flex justify-between items-center h-16 '>
          {/* Name of the hub */}
          <h2 className='font-bold text-xl text-whit'>TechMentorHub</h2>

          {/* Menu for larger devices */}
           <div className='md:flex hidden gap-8  font-semibold items-center '>
             <Link to={"/find a mentor"} className='text-[#2557A7] hover:text-[#1BCFB4]'>Find a mentor</Link>
             <Link to={"/be a mentor"} className='text-[#2557A7] hover:text-[#1BCFB4]'>Be a mentor</Link>
              {/* buttons for signup and login */}
                <button className='rounded-lg bg-[#2557A7] hover:bg-[#1BCFB4] px-3 py-2 '>Sign up</button>
                <button className='rounded-lg bg-[#2557A7] hover:bg-[#1BCFB4] px-4 py-2'>Login</button>
            
           </div>

           {/* Menu button for  small devices */}


           


        </div>
      </nav>
    </div>
  )
}

export default Navbar