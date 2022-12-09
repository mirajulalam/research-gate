import React from 'react';
import measure from '../../assets/stats.svg';

const Measure = () => {
    return (
        <section className="max-w-full bg-white py-8 lg:px-28">
<div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1  flex justify-center items-center sm:px-4'>
  <img src={measure} alt="img" className="lg:max-w-md"/>
  </div>
  <div className="flex-1 sm:px-4">
  <h1 className="text-5xl font-bold text-black">Measure your impact</h1>
  <p className='text-neutral text-xl py-5'>Get in-depth stats on who's been reading your work and keep track of your citations.</p>
  </div>
</div>
</section>
    );
};

export default Measure;