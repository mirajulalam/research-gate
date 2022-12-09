import React from 'react';
import discover from '../../assets/discover.svg';

const Discover = () => {
    return (
        <>
        <section className="max-w-full bg-white lg:px-28">
<div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1  flex justify-center items-center sm:px-4'>
  <img src={discover} alt="img" className="lg:max-w-md"/>
  </div>
  <div className="flex-1 sm:px-4">
  <h1 className="text-5xl font-bold text-black">Discover research</h1>
  <p className='text-neutral text-xl py-5'>Access over 135 million publication pages and stay up to <br/> date with what's happening in your field.</p>
  <div>
  <input  className='px-10 py-4 border border-neutral rounded' placeholder='Search publication'/>
  </div>
  </div>
</div>
</section>

</>
    );
};

export default Discover;