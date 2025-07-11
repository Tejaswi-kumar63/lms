import React from 'react';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-900 max-w-3xl mx-auto">
        Empower your future with the courses designed to
        <span className="text-indigo-600"> fit your choice.</span>
        
      </h1>
      <p className="md:block hidden text-gray-600 max-w-2xl mx-auto">
        Join top instructors, engage with hands-on content, and grow within a community focused on your success — both personally and professionally.
      </p>
      <p className="md:hidden text-gray-600 max-w-sm mx-auto">
        Learn from expert instructors and grow your skills to reach your professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
