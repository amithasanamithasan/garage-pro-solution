import Image from 'next/image';
import React from 'react';

const PopulerProducts = () => {
    const products = [
        { id: 1, name: "Car Engine Plug", price: "$20.00", image: "" },
        { id: 2, name: "Car Air Filter", price: "$20.00", image: "" },
        { id: 3, name: "Cools Led Light", price: "$20.00", image: "" },
        { id: 4, name: "Cools Led Light", price: "$20.00", image: "" },
        { id: 5, name: "Cools Led Light", price: "$20.00", image: "" },
        { id: 6, name: "Cools Led Light", price: "$20.00", image: "" },
      ];
    return (
        <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-red-500 uppercase">Popular Products</h2>
          <h1 className="text-3xl font-bold text-gray-800">Browse Our Products</h1>
          <p className="text-gray-500 mt-2">The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don’t Look Even Slightly Believable.</p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Image src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.132c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.287 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.785.57-1.84-.197-1.54-1.118l1.287-3.946a1 1 0 00-.364-1.118L2.4 9.373c-.783-.57-.381-1.81.588-1.81h4.132a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-red-500 font-semibold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200">
            More Products
          </button>
        </div>
      </div>
    );
};

export default PopulerProducts;