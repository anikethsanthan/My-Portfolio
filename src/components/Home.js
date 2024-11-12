import React from 'react'
import Header from './Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[16%] m-6'>
       
        <h1 className='text-6xl mb-2 w-[50%] m-14'>Creating seamless digital experinces though code...</h1>
        <p className='text-xl w-[60%] m-14'>
        Specializing in intuitive design and clean, efficient code, 
        I create web applications that prioritize user experience.
         My goal is to bring engaging, accessible, 
         and high-performing solutions to life.
        </p>
      </div>
    </div>
  )
}

export default Home;
