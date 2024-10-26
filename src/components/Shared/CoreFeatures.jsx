"use client"; 
import React from 'react';

const CoreFeatures = () => {
    const features = [
        { id: 1, title: "Expert Team", icon: "👥", active: false },
        { id: 2, title: "Timely Delivery", icon: "⏰", active: true },
        { id: 3, title: "24/7 Support", icon: "🎧", active: false },
        { id: 4, title: "Best Equipment", icon: "🔧", active: false },
        { id: 5, title: "100% Guarantee", icon: "✅", active: false },
        { id: 6, title: "Timely Delivery", icon: "📦", active: false },
      ];
      const handleClick = (title) => {
        console.log(`${title} clicked`);
      };
    return (
        <div className="max-w-screen-lg mx-auto p-6 text-center">
        <h2 className="text-lg font-semibold text-red-500 uppercase mb-2">Core Features</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h1>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleClick(feature.title)}
              className={`flex flex-col items-center p-4 rounded-lg border cursor-pointer ${
                feature.active ? 'bg-red-500 text-white' : 'bg-white text-gray-800'
              } shadow-sm hover:shadow-lg transition-shadow duration-200`}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className={`font-medium ${feature.active ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CoreFeatures;