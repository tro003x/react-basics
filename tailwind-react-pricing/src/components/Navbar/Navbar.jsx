import React from 'react';
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
    return (
        <nav>
            <ul className='flex'>
                {
                
                    navLinks.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li> )
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href="Home">Home</a></li>
                <li className='mr-10'><a href="About">About</a></li>
                <li className='mr-10'><a href="About">About</a></li>
                <li className='mr-10'><a href="Category">Category</a></li>
            </ul>
                */}
            
        </nav>
    );
};

export default Navbar;