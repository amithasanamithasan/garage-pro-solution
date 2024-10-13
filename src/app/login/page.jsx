import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const page = () => {
  return (
    <div className="container px-6 md:px-24 mx-auto py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
      
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/images/login/login.svg"
            height={400} 
            width={400} 
            alt="login image"
            className="w-full h-auto max-w-xs md:max-w-md" 
          />
        </div>
        
        {/* Form Section */}
        <div className="border-2 border-orange-800 p-6 md:p-12 rounded-lg shadow-md">
          <h6 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6 md:mb-12">
            Sign In
          </h6>
          <form>
            <label htmlFor="email" className="block">Email</label>
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-2 w-full input input-bordered border-black"
            />
            <label htmlFor="password" className="block mt-4">Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="mt-2 w-full input input-bordered border-black"
            />
            <button
              type="submit"
              className="w-full btn btn-primary mt-8 md:mt-12 text-lg"
            >
              Sign In
            </button>
          </form>
          
          <div className="text-center mt-6 md:mt-12">
            <h6 className=' text2xl md:text-3xl'>or sign in with</h6>
            <div className='flex items-center justify-center space-x-4 text-4xl md:text-5xl'>
            <FcGoogle/>
            <FaGithub/>
            <FaFacebook/>
            </div>
            <h6 className="mt-6 text-teal-800">
              Not have an account?{" "}
               <Link className=" text-2xl md:text-3xl text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link> 
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
