import React from 'react';

const Community = () => {
    return (
        <section className="max-w-full bg-white lg:px-28">
<div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1'>
  <h1 className="text-5xl  font-bold pb-5 text-black">Connect with your <br/> scientific community</h1>
  <p className='text-neutral text-xl py-5'>Access over 135 million publication pages and stay up to <br/> date with what's happening in your field.</p>
  </div>
  <div className="flex-1">
    <h1 className='mb-8 text-neutral'>VISIT TOPIC PAGES</h1>
    <button className="btn btn-outline btn-primary mr-4 mb-4"><a href='https://www.researchgate.net/topic/Engineering'>Engineering</a></button>
    <button className="btn btn-outline btn-primary mr-4"><a href='https://www.researchgate.net/topic/Mathematics'></a>Mathematics</button><br/>
    <button className="btn btn-outline btn-primary mr-4 mb-4"><a href='https://www.researchgate.net/topic/Biology'></a>Biology</button>
    <button className="btn btn-outline btn-primary mr-4"><a href='https://www.researchgate.net/topic/Computer'></a>Computer Science</button><br/>
    <button className="btn btn-outline btn-primary mr-4 mb-4"><a href='https://www.researchgate.net/topic/ClimateChange'>Climate Change</a></button>
    <button className="btn btn-outline btn-primary mr-4"><a href='https://www.researchgate.net/topic/Medicine'>Medicine</a></button><br/>
    <button className="btn btn-outline btn-primary mr-4 mb-4"><a href='https://www.researchgate.net/topic/Physics'>Physics</a></button>
    <button className="btn btn-outline btn-primary mr-4"><a href='https://www.researchgate.net/topic/SocialScience'>Social Science</a></button><br/>
    <button className="btn btn-outline btn-primary mr-4 mb-4"><a href='https://www.researchgate.net/topic/Astrophysics'>Astrophysics</a></button>
    <button className="btn btn-outline btn-primary mr-4"><a href='https://www.researchgate.net/topic/Chemistry'>Chemistry</a></button><br/>



  </div>
</div>
</section>
    );
};

export default Community;