"use client"; 
import React from 'react';
import { RiTeamFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FcOnlineSupport } from "react-icons/fc";
import { FaGears } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
const features = [
  { icon: <RiTeamFill className='text-3xl md:text-5xl'/> , title: 'Expert Team' },
  { icon: <TbTruckDelivery  className='text-3xl md:text-5xl'/>, title: 'Timely Delivery', highlight: true },
  { icon: <FcOnlineSupport className='text-3xl md:text-5xl' />, title: '24/7 Support' },
  { icon: <FaGears className='text-3xl md:text-5xl' />, title: 'Best Equipment' },
  { icon: <SiAdguard className='text-3xl md:text-5xl'/>, title: '100% Guarantee' },
  { icon: <CiDeliveryTruck className='text-3xl md:text-5xl'/>, title: 'Timely Delivery' },
];
const CoreFeatures = () => {
   
    return (
      <section className="text-center py-12 bg-white">
      <h2 className="text-sm font-semibold text-orange-500 mb-1">Core Features</h2>
      <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        The majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-32 p-4 rounded-lg ${feature.highlight ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            <div className="w-10 h-10 mb-2">
              {feature.icon}
            </div>
            <p className="text-sm font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default CoreFeatures;