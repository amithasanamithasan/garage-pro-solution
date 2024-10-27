"use client";
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {
  const session = useSession();
  const [booking, setBooking] = useState([]);

  const bookingdata = async () => {
    const res = await fetch(`http://localhost:3000/mybooking/api/${session?.data?.user?.email}`);
    const data = await res.json();
    console.log(data);
    setBooking(data.mybookings);
  };

  const handleDelete = async (id) => {
    const deleted = await fetch(`http://localhost:3000/mybooking/api/deletebooking/${id}`, {
      method: "DELETE",
    });
    const resp = await deleted.json();
    if (resp?.response?.deletedCount > 0) {
      toast.warning(resp?.message);
      bookingdata();
    }
  };

  useEffect(() => {
    bookingdata();
  }, [session]);

  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <div className="container mx-auto relative h-72 py-0">
        <Image
          className="h-72 w-full rounded-lg"
          src={'/assets/images/homeCarousel/3.jpg'}
          alt={''}
          width={1220}
          height={700}
          style={{ width: '100vw', height: '20vw' }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h1 className="text-cyan-400 text-2xl md:text-4xl font-bold flex justify-center items-center ml-8">
            Details of
          </h1>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>ServicesName</th>
            <th>Price</th>
            <th>Address</th>
            <th>BookingDate</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {booking.map(({ serviceTitel, _id, date, phone, address, price }) => (
            <tr key={_id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">{serviceTitel}</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
                {price}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
              </td>
              <td>{address}</td>
              <td>{date}</td>
              <td>{phone}</td>
              <th className="space-x-3">
                <Link href={`/mybooking/updatebooking/${_id}`}>
                  <button className="btn btn-ghost">EDIT</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-primary">
                  DELETE
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
