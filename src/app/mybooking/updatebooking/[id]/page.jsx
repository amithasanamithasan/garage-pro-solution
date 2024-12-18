"use client";
import Footer from '@/components/Shared/Footer';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePage = ({ params }) => {
  const { data } = useSession();
  const [booking, setBooking] = useState([]);
  const router = useRouter();

  console.log(booking);

  const updatedata = async () => {
    const bookingdetails = await fetch(`http://localhost:3000/mybooking/api/deletebooking/${params.id}`);
    const data = await bookingdetails.json();
    setBooking(data.data);
  };

  const handelupdate = async (event) => {
    event.preventDefault();
    const updatebooking = {
      phone: event.target.phone.value,
      address: event.target.address.value,
      date: event.target.date.value,
    };

    const resp = await fetch(`http://localhost:3000/mybooking/api/deletebooking/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatebooking),
      headers: {
        'Content-Type': "application/json",
      }
    });

    if (resp.status === 200) {
      toast.success('Updated Successfully');
      setTimeout(() => {
        router.push('/mybooking'); // Redirect to the booking page
      }, 1000); // Adjust delay (2 seconds) if necessary
    }
    event.target.reset();
  };

  useEffect(() => {
    updatedata();
  }, []);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src="/assets/logo.webp"
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "50vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Checkout 
          </h1>
        </div>
      </div>
      <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handelupdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={booking.date}
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
                defaultValue={data?.user?.email}
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
                defaultValue={booking.price}
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
                defaultValue={booking.phone}
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
                defaultValue={booking.address}
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
              value="Update Confirm"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePage;
