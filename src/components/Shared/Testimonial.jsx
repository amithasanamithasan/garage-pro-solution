"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";  // Updated import for Swiper 8+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
const Testimonial = () => {
    const testimonials = [
        {
          id: 1,
          name: "Awlad Hossain",
          position: "Businessman",
          image: "", // Replace with actual image path
          quote:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
          rating: 5,
        },
        {
          id: 2,
          name: "Awlad Hossain",
          position: "Businessman",
          image: "", // Replace with actual image path
          quote:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
          rating: 5,
        },
      ];
    return (
        <div className="max-w-screen-lg mx-auto text-center p-6">
        <h2 className="text-lg font-semibold text-red-500 uppercase mb-2">
          Testimonial
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          What Customer Says
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour,
          Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
  
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 bg-white border rounded-lg shadow-md flex flex-col items-center text-left">
                <Image
                  src={''}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Testimonial;