"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialSignin = () => {
  const searchParams= useSearchParams();
  const path=searchParams.get('redirect')
    const router = useRouter();

    const handelSocialLogin = async (provider  )=>{

const resp =await signIn(provider ,  
  { callbackUrl: '/' ,
    redirect:true,
    callbackUrl:path ? path : '/',
  }

)

if (resp?.status === 200) {
    router.push('/');
  } else {
    console.log('Login failed:', resp?.error);
  }
    }

    return (
        <div>
        <div className='flex items-center justify-center space-x-4 text-4xl md:text-5xl'>
            <button onClick={()=>handelSocialLogin('google')} className='btn flex items-center justify-center '>  <FcGoogle className='text-2xl md:text-3xl' /></button>
            <button className='btn flex items-center justify-center '>  <FaGithub className=' text-2xl  md:text-3xl' /></button>
            <button className='btn flex items-center justify-center '>  <FaFacebook className='text-2xl  md:text-3xl' /></button>
            </div>
        </div>
    );
};

export default SocialSignin;