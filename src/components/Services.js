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
        <div className=' contain overflow-x-hidden'>
        <div className='mt-[7%]  m-6 border-b-2  '>
       
        <h1 className=' text-4xl md:text-6xl mb-4 md:mb-2 w-[90%] md:w-[50%] m-1 mt-14 md:mt-0 md:m-14'>Let's talk business</h1>
        <p className='  text-lg md:text-xl w-[90%] m-1 md:m-14'>
        With a strong foundation in web development,
         I can help bring your tech ideas to life by
          implementing the right solutions for your business needs.
        </p>
        </div> 
        
         {location.pathname !=="/" && <>
         <div className=''>
          <div className=' w-full '>

         <div className=' md:flex p-6 card h-[700px] md:h-[850px] w-full  bg-[#0E5CF2]'>
          <div className='md:w-1/2 md:pl-10 pb-2 md:pb-10 pt-10'>
          <div className='hidden md:block'>
          <img  className=" mt-10 flex justify-center w-52 h-40 mb-4 ml-6 " src="./webimg.svg" alt="weblogo"></img>
          
          </div>
         <h1 className=' text-4xl md:text-6xl text-white  mb-4'>Web Design</h1>
          <h2 className=' text-2xl md:text-4xl text-gray-200 font-light'>Create web design that positions your brand strongly</h2>
          </div>
          <div className='md:w-1/2'>
          <p className='text-xl text-white font-thin md:font-extralight pt-7 pb-5 md:pt-80 mb-5'>I specialize in crafting responsive and 
            visually appealing websites that not only 
            attract visitors but also drive conversions.
             I leverage the latest technologies to ensure 
             your website stands out in the digital landscape.
              Working with a web developer that reflects your 
              brand's identity and helps you achieve your business objectives.</p>
              <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-full m-auto flex justify-center
           bg-white text-[#0E5CF2] font-semibold py-2 
             hover:scale-105 transition-colors"
        >
          Start a project!
        </button>
          </div>
         </div>




         <div className=' md:flex p-6 card h-[700px] md:h-[850px] w-full  bg-[#19B156]'>
         <div className='md:w-1/2 md:pl-10 pb-2 md:pb-10 pt-10'>
         <div className="hidden md:block">
          <img  className=" mt-10 flex justify-center w-52 h-40 mb-4 ml-6" src="./corp-des.svg" alt="weblogo"></img>
          </div>
          <h1 className=' text-4xl md:text-6xl text-white  mb-4'>Corporate Design</h1>
          <h2 className=' text-2xl md:text-4xl text-gray-200 font-light'>Develop designs that move your business forward</h2>
          </div>
          <div className='md:w-1/2'>
          <p className='text-xl text-white font-thin md:font-extralight pt-7 pb-5 md:pt-80 '>I specialize in crafting responsive and 
          I specialize in creating polished and impactful graphic design
           that elevate your company's image . Working with a web developer
            that understands your needs. 
            From captivating presentations to engaging company profiles
             and marketing materials, we'll help you communicate your message
              effectively and leave a lasting impression on clients and stakeholders.</p>
              <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-full m-auto flex justify-center
           bg-white text-[#19B156] font-semibold py-2 
             hover:scale-105 transition-colors"
        >
          Start a project!
        </button>
          </div>

         </div>



         <div className=' md:flex p-6 card h-[700px] md:h-[850px] w-full  bg-[#EE8657]'>
         <div className='md:w-1/2 md:pl-10 pb-2 md:pb-10 pt-10'>
         <div className=" hidden md:block">
          <img  className="  mt-10 flex justify-center w-52 h-40 mb-4 ml-6" src="./branding.svg" alt="weblogo"></img>
          </div>
          <h1 className=' text-4xl md:text-6xl text-white  mb-4'>Branding</h1>
          <h2 className=' text-2xl md:text-4xl text-gray-200 font-light'>Develop a cohesive brand that stands the test of time</h2>
          </div>
          <div className='md:w-1/2'>
          <p className='text-xl text-white font-thin md:font-extralight pt-7 pb-5 md:pt-80 mb-5'>I specialize in crafting responsive and 
          Stand out from the crowd and make a lasting impression
           with our branding services.
            I understand the importance of creating a strong brand identity
             that resonates with your target audience.
              Whether you're starting from scratch or
               looking to refresh your brand, I'm team here to help. 
               From designing eye-catching logos to developing comprehensive 
               brand guidelines, we'll work closely with you to ensure consistency across all touchpoints.</p>
              <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className=" w-full m-auto flex justify-center
           bg-white text-[#EE8657] font-semibold py-2 
             hover:scale-105 transition-colors"
        >
          Start a project!
        </button>
          </div>

         </div>





         <div className=' md:flex p-6 card h-auto md:h-[850px] w-full  bg-[#0E5CF2]'>
         <div className='md:w-1/2 md:pl-10 pb-2 md:pb-10 pt-10'>
         <div className="hidden md:block">
          <img  className=" mt-10 flex justify-center w-52 h-40 mb-4 ml-6" src="./arrow.svg" alt="weblogo"></img>
          </div>
          <h1 className=' text-4xl md:text-6xl text-white  mb-4'>Open source collaboration</h1>
          <h2 className=' text-2xl md:text-4xl text-gray-200 font-light'>Building a better world, one commit at a time.</h2>
          </div>
          <div className='md:w-1/2'>
          <p className='text-xl text-white font-thin md:font-extralight pt-7 pb-5 md:pt-80 mb-5'>I specialize in crafting responsive and 
          Open-source contributions have been an incredibly 
          rewarding part of my journey as an engineer. 
          I enjoy the collaborative spirit of open source,
           where engineers from all over the world come together 
           to build, improve, and share solutions freely.
            I find joy in working on diverse projects, contributing to codebases,
             fixing bugs, and even helping to shape new features. Every contribution, 
             whether big or small, feels meaningful because it not only strengthens my
              skills but also benefits the wider developer community. I make it a priority
               to contribute as much as possible, staying active on platforms like GitHub
                and engaging with projects that align with my expertise and interests.</p>
              <button
        onClick={()=>navigate("/StartProject")}
          type="submit"
          className="w-full m-auto flex justify-center
           bg-white text-[#0E5CF2] font-semibold py-2 
             hover:scale-105 transition-colors"
        >
          Start a project!
        </button>
          </div>
          </div>  

         </div>
         </div>
         </> }
          
         
         
      
        </div>
        {location.pathname !=="/" && <Footer/> }
    </div>
      
    
  )
}

export default Services
