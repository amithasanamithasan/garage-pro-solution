import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
      name: 'John Doe',
      role: 'Engine Expert',
      image: '/images/team1.jpg', // Replace with your actual image paths
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Michael Smith',
      role: 'Engine Expert',
      image: '/images/team2.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Emily Johnson',
      role: 'Engine Expert',
      image: '/images/team3.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];
const TeamSection = () => {
    return (
        <div className="container mx-auto my-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-red-500 uppercase font-semibold">Team</h2>
          <h1 className="text-3xl font-bold mb-2">Meet Our Team</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don’t Look Even Slightly Believable.
          </p>
        </div>
  
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative">
                {/* Member Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              
              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 text-gray-600">
                <a href={member.social.facebook} className="hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={member.social.twitter} className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={member.social.linkedin} className="hover:text-blue-600">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default TeamSection;