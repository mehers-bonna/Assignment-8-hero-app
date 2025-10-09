import React from 'react';
import logo from '../assets/logo.png';
import vector from '../assets/vector2.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content ">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/apps'>Apps</NavLink></li>
        <li><NavLink to='/installation'>Installation</NavLink></li>
      </ul>
    </div>
    <img className='h-[30px] w-[30px]' src={logo} alt="" />
    <Link to='/' className="text-[#632EE3] text-xl ml-2">HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-3 text-md ">
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/'>Home</NavLink></li>
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/apps'>Apps</NavLink></li>
      <li><NavLink className="hover:underline hover:text-[#632EE3]" to='/installation'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <NavLink
    to="https://github.com/mehers-bonna"
    target="_blank"                           
    rel="noopener noreferrer" 
    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><img className="h-6 w-6"  src={vector} alt="" /> Contribute</NavLink>
  </div>
</div>
    );
};

export default Navbar;