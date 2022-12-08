import React from 'react';
import banner from '../../assets/banner.webp'

const Banner = () => {
    return (
<section className="max-w-full bg-accent py-8 lg:px-28">
<div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1'>
  <h1 className="text-5xl  font-bold pb-5 text-black">Discover scientific <br/> knowledge and stay <br/> connected to the <br/> world of science</h1>
    <button className="btn btn-primary px-24 font-bold text-white sm:mb-8">Join for free</button>
  </div>
  <div className="flex-1  flex justify-center items-center sm:px-4">
    <img src={banner} alt="img" className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl "/>
  </div>
</div>
</section>
    );
};

export default Banner;