import React from 'react'
import Header from './Header';
import About from './About';
import useCardHooks from '../Hooks/useCardHooks';
import Business from './Business';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Header/>
      <div className='mt-[20%] m-6 border-b-2'>
       
        <h1 className='text-6xl mb-2 w-[50%] m-14'>Creating seamless digital experinces though code...</h1>
        <p className='text-xl w-[60%] m-14'>
        Specializing in intuitive design and clean, efficient code, 
        I create web applications that prioritize user experience.
         My goal is to bring engaging, accessible, 
         and high-performing solutions to life.
        </p>
      </div>
      <div className=' h-auto'>
      <h1 className='text-5xl w-[50%] ml-20 mb-6 '>My work</h1>
        {useCardHooks()}
        <Business/>
        <About/>
        <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className="w-[50%] m-auto flex justify-center
           bg-indigo-600 text-white font-semibold py-2 
            rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Send me a message?
        </button>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
