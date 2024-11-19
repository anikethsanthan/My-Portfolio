import React from 'react'
import Header from './Header';
import About from './About';
import useCardHooks from '../Hooks/useCardHooks';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import useLanguage from '../Hooks/useLanguage';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className=''>
      <Header/>
      <div className='scrollwatcher'></div>
{/*       
      <div className=' mt-[20%] md:mt-[2%] md:ml-6 mr-0 border-b-2'> */}
        <div className='overflow-x-hidden'>
      <div className="relative flex items-center h-[650px] m-6 md:ml-20 md:mr-0 md:mt-6  ">
  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-4 z-10">
  
  <div 
  className=' text-4xl font-semibold pb-4 pt-4
  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-urbanist'>
    {useLanguage()}
    </div>


    <h1 className="text-4xl md:text-6xl mt-[42%] md:mt-[5%] font-semibold leading-tight">
    Creating seamless<br></br> 
    digital experiences <br></br>through code
    </h1>
    <p id="smalltext" className="text-lg md:text-lg mt-4">
    I specialize in crafting intuitive designs and writing clean, efficient<br></br> code to build web applications that focus on user experience.
     
     </p>
    
  </div>

  {/* Image Section */}
  <div className="absolute right-0 -z-10 bottom-40 md:bottom-0 md:top-0  w-full md:w-1/2  h-full ">
    <img
      src="./landing-img.svg"
      alt="branding design element"
      className="w-full h-full object-contain ml-14 " // Adjust opacity and styling as needed
    />
  </div>
</div>
      </div>
      <div className='myWork h-auto  pb-10 bg-[#111111]'>
      <h1 className=' text-4xl text-white pt-14 md:text-5xl md:font-semibold md:mt-20 w-[50%] ml-10 md:ml-20 mb-12 '>My Work</h1>
        {useCardHooks()}
        </div>
        <About/>
        <div>
        <div className='mt-[7%]  m-6   '>
       
        <h1 className=' text-4xl md:text-5xl  w-[90%] md:w-[50%] mb-4 md:mb-2 m-1 mt-14 md:mt-0 md:mr-14 md:ml-14  md:font-semibold'>Let's Talk Business</h1>
        <p  className=' font-albert text-lg md:text-xl w-[90%] m-1 md:mt-5 md:mr-14 md:ml-14 '>
        With a strong foundation in web development,
         I can help bring your tech ideas to life by
          implementing the right solutions for your business needs.
        </p>
        
            <ul className=' text-lg md:text-lg w-[90%] m-2  md:mt-5 md:mr-14  md:ml-[10%] mb-10 font-albert' >
                <li className='font-albert'><i className="fa-solid fa-arrow-right fa-sm pr-3"></i> Frontend Contracting</li>
                <li className='font-albert'><i className="fa-solid fa-arrow-right fa-sm pr-3"></i> Interactive Design Prototyping</li>
                <li className='font-albert'><i className="fa-solid fa-arrow-right fa-sm pr-3"></i> Open Source Collaboration</li>
                <li className='font-albert'><i className="fa-solid fa-arrow-right fa-sm pr-3"></i> Custom UI Component Design and Development</li>
            </ul> 
            </div> 
        
        <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" font-albert w-[90%] md:w-auto m-auto p-3 flex justify-center
           bg-black text-white font-thin py-2 mb-20
            rounded-lg hover:scale-105 transition-colors"
        >
          Send me a message
        </button>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;
