import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ServiceCards = ({title,subText,image,description, bgColor}) => {
    const navigate= useNavigate();
    const location=useLocation();
  return (
    <div>
{location.pathname !=="/" && <>
          <div className=' w-full contain '>
            <div className='pogo'>
            <div className='cartoon'>
    
<div className=' md:flex p-6  h-auto md:h-[750px] w-full  '  style={{ backgroundColor: bgColor }}>
          <div className='md:w-1/2 md:pl-10 pb-2 md:pb-10 pt-10'>
          <div className='hidden md:block'>
          <img  className=" mt-10 flex justify-center w-52 h-40 mb-4 ml-6 " src={image} alt="weblogo"></img>
          
          </div>
         <h1 className=' text-4xl md:text-6xl text-white  mb-4'>{title}</h1>
          <h2 className=' text-2xl md:text-4xl text-gray-200 font-light'>{subText}</h2>
          </div>
          <div className='md:w-1/2'>
          <p className='text-xl text-white font-thin md:font-extralight pt-7 pb-5 md:pb-0 md:pt-80 mb-5'>{description}</p>
          
              <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-full m-auto flex justify-center
           bg-white  font-semibold py-2 
             hover:scale-105 transition-colors"
             style={{ color: bgColor }}
        >
          Start a project!
        </button>
          </div>
         </div>
      
    </div>
    </div>
    </div>
         </> }
         </div>
  )
}

export default ServiceCards
