import React from 'react';

const FooterButtom = () => {
    return (
        <div>
            <div className='divide-y divide-gray-900 divide-solid'>
              <div></div>
              <div></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
  <div className='flex-1'>
    <a href='https://www.researchgate.net/about' className='text-neutral mr-2 hover:underline decoration-2'>About us</a>
    <a href='https://www.researchgate.net/blog' className='text-neutral mr-2 hover:underline decoration-2'>News</a>
    <a href='https://www.researchgate.net/careers' className='text-neutral mr-2 hover:underline decoration-2'>Careers</a>
    <a href='https://explore.researchgate.net/' className='text-neutral mr-2 hover:underline decoration-2'>Help Center</a>
    <a href='https://www.researchgate.net/terms-of-service' className='text-neutral mr-2 hover:underline decoration-2'>Terms</a>
    <a href='https://www.researchgate.net/privacy-policy' className='text-neutral mr-2 hover:underline decoration-2'>Privacy</a>
    <a href='https://www.researchgate.net/ip-policy' className='text-neutral mr-2 hover:underline decoration-2'>Copyright</a>
    <a href='https://www.researchgate.net/imprint' className='text-neutral hover:underline decoration-2'>Imprint</a>
  </div>
  <div className="flex-1 flex justify-center items-center sm:px-4">
  <a href='https://www.researchgate.net/directory/profiles' className='text-neutral mr-2 hover:underline decoration-2'>Researchers</a> 
  <a href='https://www.researchgate.net/topics' className='text-neutral mr-2 hover:underline decoration-2'>Q&A</a> 
  <a href='https://www.researchgate.net/directory/publications' className='text-neutral mr-2 hover:underline decoration-2'>Publication</a> 
  <a href='https://www.researchgate.net/jobs' className='text-neutral mr-2 hover:underline decoration-2'>Jobs</a> 
  <a href='https://www.researchgate.net/marketing-solutions?utm_source=researchgate&utm_medium=community-loggedout&utm_campaign=recruitment-focused-index-footer&utm_content=advertising' className='text-neutral mr-2 hover:underline decoration-2'>Advertising</a> 
  <a href='https://www.researchgate.net/scientific-recruitment?utm_source=researchgate&utm_medium=community-loggedout&utm_campaign=recruitment-focused-index-footer&utm_content=recruiting&_sg=woTK1cCZPtN6YzpDGGkFYIzkVeARD5o7tmQdRVUQy8Y9TpNb-MwjsFKhOJmiWjzzQ0hGXLVZFNXjZ2N7RhmlNw7F7snd' className='text-neutral hover:underline decoration-2'>Recruiting</a> <br/>
  </div>
</div>
        </div>
    );
};

export default FooterButtom;