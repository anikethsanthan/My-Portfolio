import React from 'react'
import Header from "./Header"
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const Services = () => {
  const location=useLocation();
  return (
      <div>
         {location.pathname !=="/" && <Header/> }
        <div>
        <div className='mt-[7%]  m-6 border-b-2 '>
       
        <h1 className='text-6xl mb-2 w-[50%] m-14'>Let's talk business</h1>
        <p className='text-xl w-[60%] m-14'>
        With a strong foundation in web development,
         I can help bring your tech ideas to life by
          implementing the right solutions for your business needs.
        </p>
       
            <ul className='text-xl w-[60%] m-14 ml-[10%]' >
                <li><i className="fa-solid fa-arrow-right"></i> Frontend Contracting</li>
                <li><i className="fa-solid fa-arrow-right"></i> Interactive Design Prototyping</li>
                <li><i className="fa-solid fa-arrow-right"></i> Open Source Collaboration</li>
                <li><i className="fa-solid fa-arrow-right"></i> Custom UI Component Design and Development</li>
            </ul>
        
      </div>
        </div>
        {location.pathname !=="/" && <Footer/> }
    </div>
      
    
  )
}

export default Services
