import React from 'react';

const location = () => {
    return (
        <div class="bg-black text-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
      
        <div class="flex items-center space-x-4">
          <div class="text-red-500 text-3xl">
       
            <i class="far fa-calendar-alt"></i>
          </div>
          <div>
            <p class="text-sm">We are open monday-friday</p>
            <p class="text-lg font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
      
     
        <div class="flex items-center space-x-4">
          <div class="text-red-500 text-3xl">
          
            <i class="fas fa-phone-alt"></i>
          </div>
          <div>
            <p class="text-sm">Have a question?</p>
            <p class="text-lg font-bold">+2546 251 2658</p>
          </div>
        </div>
   
        <div class="flex items-center space-x-4">
          <div class="text-red-500 text-3xl">
   
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <p class="text-sm">Need a repair? Our address</p>
            <p class="text-lg font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    );
};

export default location;