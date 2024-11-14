import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const location=useLocation();
  const navigate=useNavigate();
  return (
      <div>
         {location.pathname !=="/" && <Header/> }
        <div>
        <div className='mt-[7%]  m-6 border-b-2  '>
       
        <h1 className=' text-4xl md:text-6xl mb-2 w-[50%] m-1 mt-14 md:mt-0 md:m-14'>Let's talk business</h1>
        <p className=' text-lg md:text-xl w-[90%] m-1 md:m-14'>
        With a strong foundation in web development,
         I can help bring your tech ideas to life by
          implementing the right solutions for your business needs.
        </p>
       
            <ul className=' text-lg md:text-xl w-[90%] m-2 md:m-14 ml-[10%] mb-10' >
                <li><i className="fa-solid fa-arrow-right"></i> Frontend Contracting</li>
                <li><i className="fa-solid fa-arrow-right"></i> Interactive Design Prototyping</li>
                <li><i className="fa-solid fa-arrow-right"></i> Open Source Collaboration</li>
                <li><i className="fa-solid fa-arrow-right"></i> Custom UI Component Design and Development</li>
            </ul>
            <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-[90%] md:w-[50%] m-auto flex justify-center mb-10
           bg-indigo-600 text-white font-semibold py-2 
            rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Let's Start a Project
        </button>
      </div>
      
        </div>
        {location.pathname !=="/" && <Footer/> }
    </div>
      
    
  )
}

export default Services
