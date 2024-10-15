"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch} from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {

  const session = useSession()
console.log(session);
    return (
     <div className="bg-[#bcc6bb] text-slate-900 ">
         <div className="navbar  container mx-auto  overflow-auto">
        <div className="navbar-start">
           {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>  */}


         <Link href="/">
  <Image alt="logo" src="/assets/logo.svg" height={60} width={80} />
</Link>
        
        </div>
        <div className="navbar-center hidden lg:flex">
        <div className="flex items-center space-x-6">
          {
         navItem.map((nav)=>(
           <Link className="font-semibold hover:text-red-900" href={nav.path} key={nav.path}>{nav.title}</Link>
         ))
          }
          
        </div>
        </div>
        <div className="navbar-end">
     <div className=" flex  items-center space-x-3">
     <CiShoppingCart  className="text-2xl hover:text-cyan-500" />
          <CiSearch className="text-2xl hover:text-cyan-500"/>
          <a className="btn btn-outline btn-primary px-6">APPOINTMENT</a>
          <Link href="/login" className="btn btn-primary px-8">Login</Link>
     </div>
        </div>
      </div>
     </div>
    );
};

const navItem = [
  {
  title:"Home",
  path: '/'
 },
 {
  title:"About",
  path: '/about'
 },
 {
  title:"Services",
  path: '/services'
 },
 {
  title:"Contact",
  path: '/contact'
 },
 {
  title:"Blog",
  path: '/blog'
 }
 


]

export default Navbar;