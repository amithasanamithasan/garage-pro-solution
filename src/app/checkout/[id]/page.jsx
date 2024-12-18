"use client"
import Footer from '@/components/Shared/Footer';
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
const  Chackoutpage =  ({params}) => {

    const [chackservice,setCheckservice]=useState({});
    const router = useRouter();
    const {data} = useSession()

    const checkservice = async ()=>{

        const checkOut = await getServicesDetails(params.id);
        setCheckservice(checkOut.service)
    }


    // Destructure the service details
    const { _id, title, description, img, price, facility } = chackservice || {};

const handleBooking=async (event)=>{
    event.preventDefault()
const newbooking ={
 name:data?.user?.name,
 email:data?.user?.email,
 phone : event.target.phone.value,
 address: event.target.address.value,
date : event.target.date.value,
 serviceTitel:title,
 price: price,

}
  
const resp= await fetch('http://localhost:3000/checkout/api/newbooking',{

    method:'POST',
    body: JSON.stringify(newbooking),
    headers:{
    'content-type': 'application/json'
    }

})
const response =await resp?.json()
toast.success(response?.message)

setTimeout(() => {
  router.push('/mybooking'); // Redirect to the booking page
}, 1000); // Adjust delay (2 seconds) if necessary
event.target.reset();


}
useEffect(()=>{
  toast.success("Test notification");
    checkservice()
},[params])

    return (
   
        <div className="container mx-auto">
       <ToastContainer />
        <div className="relative  h-72">
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={img}
            alt="service"
            width={1920}
            height={1080}
            style={{ width: "90vw" }}
          />
          <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
              Checkout {title}
            </h1>
          </div>
        </div>
        <div className="my-12 bg-slate-300 p-12">
          <form onSubmit={handleBooking}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
             <input  defaultValue={data?.user?.name} 
              type="text" 
              name="name" 
              className="input input-bordered" />
              </div>
              <div className="form-control">
  <label className="label">
    <span className="label-text">Date</span>
  </label>
  <input
    defaultValue={new Date().toISOString().slice(0, 10)} 
    type="date"
    name="date"
    className="input input-bordered"
  />
</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                defaultValue={ data?.user?.email}
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                    defaultValue={price}
            
                  type="text"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                required
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Present Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
         
        </div>
        <Footer></Footer>
       
      </div>

    );
};

export default Chackoutpage;