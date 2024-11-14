import React from 'react'
import Header from './Header';
import About from './About';
import useCardHooks from '../Hooks/useCardHooks';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Services from './Services';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Header/>
      <div className='scrollwatcher'></div>
{/*       
      <div className=' mt-[20%] md:mt-[2%] md:ml-6 mr-0 border-b-2'> */}
        <div>
      <div className="relative flex items-center h-[650px] m-6 md:ml-20 md:mr-0 md:mt-6  border-b-2">
  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-4 z-10">
    <h1 className="text-4xl md:text-6xl mt-[42%] md:mt-[35%] font-semibold leading-tight">
    Creating seamless digital experinces though code...
    </h1>
    <p className="text-lg md:text-xl mt-4">
    Specializing in intuitive design and clean, efficient code, I create web applications that prioritize user experience. My goal is to bring engaging, accessible, and high-performing solutions to life.
    </p>
    
  </div>

  {/* Image Section */}
  <div className="absolute right-0  bottom-40 md:bottom-0 md:top-0  w-full md:w-1/2  h-full ">
    <img
      src="./landing-img.svg"
      alt="branding design element"
      className="w-full h-full object-contain ml-14 " // Adjust opacity and styling as needed
    />
  </div>
</div>
      </div>
      <div className='myWork h-auto '>
      <h1 className=' text-4xl md:text-5xl w-[50%] ml-10 md:ml-20 mb-6 '>My work</h1>
        {useCardHooks()}
        </div>
        <div>
        <Services/>
        <About/>
        <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-[90%] md:w-[50%] m-auto flex justify-center
           bg-indigo-600 text-white font-semibold py-2 
            rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Send me a message
        </button>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
