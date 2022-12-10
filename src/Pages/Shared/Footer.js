import React from 'react';
import hiring from '../../assets/footer-hiring.jpg';
import advantage from '../../assets/footer-advertising.jpg';

const Footer = () => {
    return (
            <section className="max-w-full bg-accent py-8 lg:px-28">
<div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1'>
    <p className='text-3xl text-black'>ResearchGate Business Solutions</p>
    <div className="card card-side bg-white mt-6">
  <figure><img className='w-64' src={hiring} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Scientific Recruitment</h2>
    <p className='text-neutral'>Hire qualified researchers and build the best teams in science.</p>
    <button className="btn btn-outline btn-primary font-bold"><a href='https://www.researchgate.net/scientific-recruitment'>Find out more</a></button>
  </div>
   </div>
  </div>
  <div className="flex-1  flex justify-center items-center sm:px-4">
  <div className="card card-side bg-white mt-14">
  <figure><img className='w-64' src={advantage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-black">Marketing Solutions</h2>
    <p className='text-neutral'>Grow your brand's impact in the scientific community </p>
    <button className="btn btn-outline btn-primary font-bold"><a href='https://www.researchgate.net/marketing-solutions?utm_source=researchgate&utm_medium=community-loggedout&utm_campaign=recruitment-focused-index-footer&utm_content=advertising'>Find out more</a></button>
  </div>
   </div>
  </div>
</div>
</section>
    );
};

export default Footer;