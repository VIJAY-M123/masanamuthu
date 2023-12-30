
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
//import NavbarLink from "./NavbarLink";
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import Shiva from "../../Image/shiva.png"

function NavBar1() {
  const [open,setOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    // Store the active link in local storage
    localStorage.setItem('activeLink', pathname);
  }, [pathname]);

  return (
    <nav className='bg-gray-200 fixed w-full z-20'>
      <div className='flex items-center justify-around font-medium'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          {/* <TempleHinduIcon className='md:cursor-pointer h-9' size={30} color='#ff0000'/> */}
          <img src={Shiva} className='h-10 w-10' alt='log0.png'/>
          <div className='flex justify-center items-center md:hidden' onClick={()=>setOpen(!open)}>
          {open ? (<CloseIcon fontSize="large"/>):(<MenuIcon fontSize="large"/>)}
          </div>
         
        </div>
        <ul className='md:flex hidden uppercase items-center gap-2'>
          <li>
            <Link to="/home" className={`py-7 px-3 inline-block hover:text-green-400 focus:text-[#FF0000] ${
          pathname === '/home' ? 'text-[#FF0000]' : ''
        }`} >Home</Link>

            <Link to="/group" className={`py-7 px-3 inline-block hover:text-green-400 focus:text-[#FF0000]  ${
          pathname === '/group' ? 'text-[#FF0000]' : ''
        }`}>Group</Link>


            <Link to="/image" className={`py-7 px-3 inline-block hover:text-green-400 focus:text-[#FF0000]
             ${
              pathname === '/image' ? 'text-[#FF0000]' : ''
            }`}>Image</Link>

<Link to="/video" className={`py-7 px-3 inline-block hover:text-green-400 focus:text-[#FF0000]
             ${
              pathname === '/video' ? 'text-[#FF0000]' : ''
            }`}>Video</Link>

          </li>
          {/* <NavbarLink/> */}
          <li>
            <Link to="/about" className={`py-7 px-3 inline-block hover:text-green-400 focus:text-[#FF0000]  ${
          pathname === '/about' ? 'text-[#FF0000]' : ''
        }`}>Abouts</Link>
          </li>
        </ul>
        <div className='md:block hidden'>
        <Button variant="outlined">LOGIN</Button>
        </div>

        {/* // mobile view */}
        <ul className={`md:hidden fixed h-full w-full bg-gray-300 bottom-0 py-0 pl-4 duration-500 top-[76px] ${open ? "left-0":"left-[-100%]"}`}>
          <li className='flex flex-col'>
            <Link to="/home" className={`py-3 px-3 inline-block hover:text-green-400 focus:text-[#FF0000] ${
          pathname === '/home' ? 'text-[#FF0000]' : ''
        }`} onClick={()=>setOpen(false)}>Home</Link>

            <Link to="/group" className={`py-3 px-3 inline-block hover:text-green-400 active:text-red-400 focus:text-[#FF0000] ${
          pathname === '/group' ? 'text-[#FF0000]' : ''
        }`} onClick={()=>setOpen(false)}>Group</Link>
        

            <Link to="/image" className={`py-3 px-3 inline-block hover:text-green-400 focus:text-[#FF0000] ${
          pathname === '/image' ? 'text-[#FF0000]' : ''
        }`} onClick={()=>setOpen(false)}>Image</Link>

            <Link to="/video" className={`py-3 px-3 inline-block hover:text-green-400 focus:text-[#FF0000]
             ${
              pathname === '/video' ? 'text-[#FF0000]' : ''
            }`} onClick={()=>setOpen(false)}>Video</Link>

            <Link to="/about" className={`py-3 px-3 inline-block hover:text-green-400 active:text-red-400 focus:text-[#FF0000] ${
          pathname === '/about' ? 'text-[#FF0000]' : ''
        }`} onClick={()=>setOpen(false)}>About</Link>

          </li>
          {/* <NavbarLink/> */}
          <div className='py-5 '>
        <Button variant="outlined">LOGIN</Button>
        </div>
        </ul>
       
        {/* // mobile view */}
      </div>
    </nav>
  )
}

export default NavBar1