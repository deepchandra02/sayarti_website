import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#498536]'>
          Coming Soon
        </h1>
        <div className='flex justify-center items-center'>
          <TypeAnimation
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'One stop solution for Auto Parts',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'One stop solution for Auto Needs',
              1000,
              'One stop solution for Auto Care',
              1000
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400 mt-2'>Connecting cars to care</p>
        <Link
          to="footerSection"
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