
    'use client';

    import React from 'react';
    import { CiCircleCheck } from 'react-icons/ci';
    
    const Mision = () => {
      return (
        <div>
          <h1 className='font-bold text-3xl sm:text-4xl text-center mt-6 sm:mt-10 text-blue-800 underline decoration-blue-800 underline-offset-4'>
            Our Company Vision & Mission
          </h1>
          <p className='text-center text-base sm:text-xl mt-4 sm:mt-6 font-bold leading-relaxed max-w-xs sm:max-w-4xl mx-auto'>
            At Global Food Safety Standards, our vision is to be the foremost authority in food safety training and consultancy, empowering
            businesses worldwide to achieve excellence in food safety and quality. Our mission is to provide unparalleled expertise and
            comprehensive support to the food industry, ensuring compliance with the latest regulations and best practices effort.
          </p>
    
        <div className="flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* First Row */}
            <div className="flex items-center gap-4">
              <CiCircleCheck size={40} color="green" className='hover:bg-green-300 hover:scale-110 transition-all duration-200 rounded-full p-0' />
              <h1 className="font-bold text-2xl text-blue-800">Expert Guidance</h1>
            </div>
            <div className="flex items-center gap-4">
              <CiCircleCheck size={40} color="green" className='hover:bg-green-300 hover:scale-110 transition-all duration-200 rounded-full p-0'/>
              <h1 className="font-bold text-2xl text-blue-800">Customized Solutions</h1>
            </div>
    
            {/* Second Row */}
            <div className="flex items-center gap-4">
              <CiCircleCheck size={40} color="green" className='hover:bg-green-300 hover:scale-110 transition-all duration-200 rounded-full p-0'/>
              <h1 className="font-bold text-2xl text-blue-800">Comprehensive Services</h1>
            </div>
            <div className="flex items-center gap-4">
              <CiCircleCheck size={40} color="green" className='hover:bg-green-300 hover:scale-110 transition-all duration-200 rounded-full p-0'/>
              <h1 className="font-bold text-2xl text-blue-800">Innovative Approaches</h1>
            </div>
          </div>
        </div>
        </div>
      );
    };
    
    export default Mision;
    
    
