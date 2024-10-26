"use client";
import SocialSignin from '@/components/Shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const signuppage = () => {
  
  
const handleSignUp = async (event)=>{

  event.preventDefault();
 const newuser = {
  name: event.target.name.value,
  email: event.target.email.value,
  password: event.target.password.value,
 
 }
//  console.log(newuser);
const resp =await fetch('http://localhost:3000/signup/api',{
  method:'POST',
  body: JSON.stringify(newuser),
  headers:{
    "content-type":"application/json"
  }
})
// console.log(resp);
if(resp.status === 200){
event.target.reset()
}

}

  return (
    <div className="container px-6 md:px-24 mx-auto py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
     
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/images/login/login.svg"
            height={400} 
            width={400}  
            alt="Sign up image"
            className="w-full h-auto max-w-xs md:max-w-md" 
          />
        </div>
        
        {/* Form Section */}
        <div className="border-2 border-orange-800 p-6 md:p-12 rounded-lg shadow-md">
          <h6 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-6 md:mb-12">
            Sign Up
          </h6>
          <form onSubmit={handleSignUp} action="">
            <label htmlFor="name" className="block ">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mt-2 w-full input input-bordered border-black"
            />
            
            <label htmlFor="email" className="block mt-4">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="mt-2 w-full input input-bordered border-black"
            />

            <label htmlFor="password" className="block mt-4">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="mt-2 w-full input input-bordered border-black"
            />

            <button
              type="submit"
              className="w-full btn btn-primary mt-8 md:mt-12 text-lg"
            >
              Sign Up
            </button>
          </form>
          
          <div className="text-center mt-6 md:mt-12 ">
            <h6 className='text-2xl md:text-3xl'>or sign in with</h6>
           <SocialSignin></SocialSignin>
            <h6 className="mt-6 text-teal-800 ">
              Already have an account?{" "}
               <Link className="text-2xl md:text-3xl text-primary font-semibold" href={"/login"}>
                Sign In
              </Link> 
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signuppage;

