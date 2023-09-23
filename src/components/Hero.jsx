import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#498536]'>
          Coming Soon
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            One stop solution for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["Auto Parts", "Auto Needs", "Auto Care"]}
            typeSpeed={120}
            backSpeed={50}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>Connecting cars to care</p>
        <Link
          to="footerSection"        // the id or name of the target element
          smooth={true}
          duration={500}
        >
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get in Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;