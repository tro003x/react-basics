import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li> )
    return (
        <nav className='flex justify-between'>
         <span className='flex' onClick={()=> setOpen(!open)}> 
          {open ? <X></X>: <Menu className='lg:hidden'></Menu>}
          <ul className='md:hidden'>
            {
              links
            }
          </ul>
          <h3 className='ml-3.5'>TrosVerse</h3></span>
            <ul className='md:flex hidden'>
                {
                
                    links
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href="Home">Home</a></li>
                <li className='mr-10'><a href="About">About</a></li>
                <li className='mr-10'><a href="About">About</a></li>
                <li className='mr-10'><a href="Category">Category</a></li>
            </ul>
                */}
                <button>Sign Up</button>
            
        </nav>
    );
};

export default Navbar;