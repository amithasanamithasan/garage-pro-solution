"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu toggle

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "My Bookings", path: "/mybooking" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div className="bg-[#bcc6bb] text-slate-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-0">
          {/* Logo */}
          <Link href="/">
            <Image
              className="rounded-full cursor-pointer"
              alt="logo"
              src="/assets/logo.webp"
              height={60}
              width={80}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((nav) => (
              <Link
                key={nav.path}
                href={nav.path}
                className="font-semibold hover:text-red-900"
              >
                {nav.title}
              </Link>
            ))}
          </div>

          {/* Icons and Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <CiShoppingCart className="text-2xl hover:text-cyan-500 cursor-pointer" />
            <CiSearch className="text-2xl hover:text-cyan-500 cursor-pointer" />
            <a className="btn btn-outline btn-primary px-6">APPOINTMENT</a>
            {status === "loading" && <h6>Loading....</h6>}
            {status === "unauthenticated" && (
              <Link href="/login" className="btn btn-primary px-8">
                Login
              </Link>
            )}
            {status === "authenticated" && (
              <button
                className="btn btn-outline btn-ghost px-8"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl"
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col space-y-4 mt-2">
            {navItems.map((nav) => (
              <Link
                key={nav.path}
                href={nav.path}
                className="block text-center font-semibold hover:text-red-900"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {nav.title}
              </Link>
            ))}

            <div className="flex justify-center space-x-4 mt-4">
              <CiShoppingCart className="text-2xl hover:text-cyan-500 cursor-pointer" />
              <CiSearch className="text-2xl hover:text-cyan-500 cursor-pointer" />
            </div>

            <div className="flex justify-center mt-4">
              <a className="btn btn-outline btn-primary px-6">APPOINTMENT</a>
            </div>

            <div className="flex justify-center mt-4">
              {status === "loading" && <h6>Loading....</h6>}
              {status === "unauthenticated" && (
                <Link href="/login" className="btn btn-primary px-8">
                  Login
                </Link>
              )}
              {status === "authenticated" && (
                <button
                  className="btn btn-outline btn-ghost px-8"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;