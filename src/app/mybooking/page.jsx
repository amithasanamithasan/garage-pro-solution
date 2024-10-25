"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = () => {
const session = useSession();
const [booking ,setBooking]=useState([]);

const bookingdata= async()=>{
    const res =await fetch(`http://localhost:3000/mybooking/api/${session?.data?.user?.email}`)
    const data= await res.json();
    console.log(data);
    setBooking (data.mybookings)

}
useEffect(()=>{
    bookingdata()
},[session]);


    return (
        <div class="overflow-x-auto">
            <div className="container mx-auto   relative h-72  py-0">
<Image
        className=" h-72 w-full  rounded-lg"
        src={'/assets/images/homeCarousel/3.jpg'} 
        alt={''} 
        width={1220}
        height={700}
        style={{ width: '100vw', height: '20vw' }}
    />
<div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <h1 className="text-cyan-400 text-2xl  md:text-4xl font-bold flex justify-center items-center ml-8">
            Details of
        </h1>
    </div>

</div>
        <table class="table">
      
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>ServicesName</th>
              <th>Price</th>
              <th>Address</th>
              <th>BookingDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
   
          {
            booking.map(({serviceTitel,_id,date,address,price})=>  
            <tr key={_id}>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                
                <div>
                  <div class="font-bold">{serviceTitel}</div>
                  <div class="text-sm opacity-50"></div>
                </div>
              </div>
            </td>
            <td>
            {price}
              <br />
              <span class="badge badge-ghost badge-sm"></span>
            </td>
            <td>{address}</td>
            <td>{date}</td>
            <th className='space-x-3'>
              <button class="btn btn-ghost ">EDIT</button>
              <button class="btn btn-primary ">DELETE</button>
            </th>
          </tr>)
          }
         
          </tbody>
    
        
        </table>
      </div>
    );
};

export default page;