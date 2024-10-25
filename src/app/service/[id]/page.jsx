

import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
// import React, { useRef, useState } from 'react';
export const metadata = {
    title : "Service Details",
    description : "Service Details Page"
}
const Page = async ({ params }) => {
// Fetch service details
const details = await getServicesDetails(params.id);

// Destructure the service details
const { _id, title, description, img, price, facility } = details.service;

return (
<div className="w-11/12 mx-auto ">
{/* Header */}
<div className="container mx-auto   relative h-72  py-0">
<Image
        className=" h-72 w-full  rounded-lg"
        src={img} 
        alt={title} 
        width={1220}
        height={700}
        style={{ width: '100vw', height: '20vw' }}
    />
<div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <h1 className="text-cyan-400 text-2xl  md:text-4xl font-bold flex justify-center items-center ml-8">
            Details of {title}
        </h1>
    </div>

</div>

{/* Main Content */}
<div className="grid lg:grid-cols-3 gap-8 mt-8 py-24">
{/* Left Section - Image */}
<div className="lg:col-span-2">

<div>
<div className="p-10  py-6">
    <Image
        className=" rounded-lg"
        src="/assets/images/checkout/checkout.jpg" // Static image for checkout
        alt="checkout service"
        width={600}
        height={70}
    />
    <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
    <p>{description}</p>
</div>
</div>
<div className="bg-white p-8">
{/* Title Section */}
<div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-900">Unique Car Engine Service</h2>
    <p className="text-gray-500 mt-4">
        There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority
        Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words
        Which DonLook Even Slightly Believable. If You Are Going To Use A Passage Of
        Lorem Ipsum, You Need To Be Sure There Isn’t Anything Embarrassing Hidden In The
        Middle Of Text.
    </p>
</div>

{/* Services Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Service Box 1 */}
{facility.map((item, index) => (
                <div
                    key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:border hover:border-red-500 transition duration-300"
                >
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p>{item.details}</p>
                </div>
            ))}
</div>
</div>
</div>


<aside>

{/* Service Menu */}
<div className="bg-gray-100 p-6 rounded-lg shadow-md w-full py-10 ">
<h2 className="text-xl font-semibold mb-4">Services</h2>
<ul className="space-y-2">
<li>
<button className="flex justify-between items-center w-full bg-red-500 text-white py-3 px-4 rounded-lg">
Full Car Repair
<span className="text-white text-xl">&rarr;</span>
</button>
</li>
<li>
<button className="flex justify-between items-center w-full bg-white text-black border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-100">
Engine Repair
<span className="text-red-500 text-xl">&rarr;</span>
</button>
</li>
<li>
<button className="flex justify-between items-center w-full bg-white text-black border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-100">
Automatic Services
<span className="text-red-500 text-xl">&rarr;</span>
</button>
</li>
<li>
<button className="flex justify-between items-center w-full bg-white text-black border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-100">
Engine Oil Change
<span className="text-red-500 text-xl">&rarr;</span>
</button>
</li>
<li>
<button className="flex justify-between items-center w-full bg-white text-black border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-100">
Battery Charge
<span className="text-red-500 text-xl">&rarr;</span>
</button>
</li>
</ul>
</div>
<div className="bg-black text-white p-6 rounded-lg shadow-md w-full">
<h2 className="text-xl font-semibold mb-6">Download</h2>
<ul className="space-y-4">
{/* Brochure Download */}
<li className="flex justify-between items-center py-2">
<div className="flex items-center space-x-2">
<svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm3.707 10.293l-2.293 2.293V5h-2v7.586L8.293 10.293 7 11.586 12 16.586l5-5.001-1.293-1.292z" />
</svg>
<div>
    <p className="text-lg font-medium">Our Brochure</p>
    <p className="text-sm text-gray-400">Download</p>
</div>
</div>
<button className="bg-red-500 text-white py-3 px-4 rounded-lg">
<span className="text-white text-xl">&rarr;</span>
</button>
</li>

{/* Company Details Download */}
<li className="flex justify-between items-center">
<div className="flex items-center space-x-2">
<svg className="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm3.707 10.293l-2.293 2.293V5h-2v7.586L8.293 10.293 7 11.586 12 16.586l5-5.001-1.293-1.292z" />
</svg>
<div>
    <p className="text-lg font-medium">Company Details</p>
    <p className="text-sm text-gray-400">Download</p>
</div>
</div>
<button className="bg-red-500 text-white py-3 px-4 rounded-lg">
<span className="text-white text-xl">&rarr;</span>
</button>
</li>
</ul>
</div>

{/* Download Section */}
<div class=" flex items-center justify-center  w-96 py-10">

<div class="bg-black text-white p-6 rounded-lg shadow-lg w-80">

<div class="flex items-center justify-center mb-4">
<div class="bg-orange-500 p-2 rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v2.25M3.75 5.25a.75.75 0 01-.75-.75v-2.25c0-.414.336-.75.75-.75h2.25m16.5 0h2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-2.25m-3.75 13.5h3.75m-3.75 0a3.75 3.75 0 01-7.5 0m7.5 0h3.75M5.25 15.75h13.5M4.5 9.75l3-3a.75.75 0 011.06 0l3 3M9 12l1.5-1.5M15 9l3-3a.75.75 0 011.06 0l3 3M19.5 9v6M9 12v1.5m6-1.5v3M12 15a1.5 1.5 0 00-3 0m7.5 0a1.5 1.5 0 00-3 0m-7.5 0a1.5 1.5 0 01-3 0"/>
</svg>
</div>
</div>

<h1 class="text-center text-2xl font-bold">Garage Pro Solution </h1>
<p class="text-center text-sm mt-2">Need Help? We Are Here To Help You</p>


<div class="bg-gray-800 p-4 mt-4 rounded-md text-center">
<p class="text-red-500 font-semibold">Car Doctor Special</p>
<p class="text-white text-sm">Save up to <span class="font-bold text-orange-500">60% off</span></p>
<button class="bg-orange-500 text-white py-2 px-4 mt-2 rounded-md">Get A Quote</button>
</div>


<div class="text-center mt-6">
<p class="text-white text-xl font-bold">Price ${price}</p>
<Link href={`/checkout/${_id}`}>   <button class="bg-orange-500 w-full text-white py-3 mt-4 rounded-md hover:bg-orange-600 transition-all">Proceed Checkout</button></Link> 
</div>
</div>

</div>

{/* Contact Section */}


{/* Price */}

</aside>
</div>




{/* Process Steps */}
<div className="bg-gray-50 p-6">
{/* Steps Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {['STEP ONE', 'STEP TWO', 'STEP THREE'].map((step, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="bg-orange-500 text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">{`0${index + 1}`}</span>
            </div>
            <h3 className="font-semibold text-xl mb-2">{step}</h3>
            <p className="text-gray-600 text-sm">It Uses A Dictionary Of Over 200.</p>
        </div>
    ))}
</div>

{/* Video Section */}
<div className="relative rounded-lg overflow-hidden shadow-lg">
    <video
        
        src="" // Replace with your video file path
        className="w-full h-auto rounded-lg"
        
        // Handle when video ends
    />
    <button
        
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300"
    >
    
            <div className="bg-orange-500 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.72A1 1 0 008 8.579v6.842a1 1 0 001.555.832l5.197-3.72a1 1 0 000-1.664z" />
                </svg>
            </div>

        
    
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 12L6 6V18Z" />
                </svg>
    
    </button>
    </div>

</div>
<p className="mt-4 text-center text-green-500">Video is playing...</p>
</div>

);
};

export default Page;
