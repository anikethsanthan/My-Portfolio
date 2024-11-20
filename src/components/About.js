import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'


const About = () => {
  const location=useLocation();
  
  return (
    <div className='aboutus overflow-x-hidden '>
      {location.pathname !=="/" && <Header/> }
      

      
      <div className='md:flex justify-evenly mb-4   m-4 md:m-0'>
        <div className='flex justify-center md:flex-none'>
        <img 
  src="./My-photo-crp.jpg" 
  alt="myPhoto" 
  className='w-60 md:w-[400px] h-60 md:h-[400px] m-6 md:ml-14 mt-[18%] md:mt-[20%] rounded-full object-cover' 
/>
      </div>
      <div className=' m-4 md:m-6 md:mt-[9%] rounded-lg '>
      <h1 className=' text-4xl md:text-5xl mb-5 font-semibold' >About me</h1>
      <p  className=' w-[95%] md:w-full font-albert'>
      My name is Aniketh Santhan. I am a
      Passionate and detail-oriented Frontend Web Developer 
      with a strong foundation in HTML5, CSS3, and JavaScript(ES6+), 
      coupled with hands-on experience in modern frameworks like React. <br></br><br></br>
      I am adept at creating responsive web design, cross-browser compatibility
       & user-friendly web applications with a focus on clean, efficient code
        and seamless user experiences.<br>
        </br><br></br> Skilled in collaborating with 
        cross-functional teams, utilizing version control systems (Git/Github),
         and optimizing web performance. Always eager to learn and adapt to new technologies,
          I strive to deliver innovative solutions that meet business goals and enhance user engagement.
      </p>
      </div>
      </div>
      <div className=' ml-8 md:ml-6  h-auto md:h-auto  '>
        <h1 className=' text-4xl md:text-5xl ml-0 md:ml-14 mb-1 md:mb-6 pt-10 font-semibold'>My Skills</h1>
        <div className='md:flex  ml-[5%] md:ml-[5%]'>
          <div className='mb-4'>
        <h1 className=' font-albert  -ml-[14px] mb-4'>Programming Languages, Frameworks and Libraries I'm proficient in</h1>
        <div className='overflow-hidden relative'>
        <div className="relative w-full h-full ">
    {/* Gradient mask for edges */}
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Left edge blur */}
      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"></div>
      {/* Right edge blur */}
      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"></div>
    </div>

    {/* Scrolling list */}
    <ul className="tag-list flex w-max animate-scroll font-albert space-x-4 ">
      {/* Original List Items */}
      <li className="bg-slate-300 p-2 rounded-lg m-2">HTML</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">CSS</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">JavaScript (ES6+)</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Java</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">C++</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">React.js</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Tailwind CSS</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Redux</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Bootstrap</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Formik</li>

      {/* Duplicate Items */}
      <li className="bg-slate-300 p-2 rounded-lg m-2">HTML</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">CSS</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">JavaScript (ES6+)</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Java</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">C++</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">React.js</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Tailwind CSS</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Redux</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Bootstrap</li>
      <li className="bg-slate-300 p-2 rounded-lg m-2">Formik</li>
    </ul>
  </div>
  
          </div>
          {location.pathname !=="/" &&<>
          <div className=''>
          <h1 className=' text-4xl md:text-5xl -ml-4 md:-ml-[10px] mb-1 md:mb-6 pt-10 font-semibold'>My Educationol Background</h1>


          <div className='flex'>
          <p  className="  font-albert  -ml-[14px] mb-4 mr-4 md:w-full ">
          I completed my BTech in Computer Science from Sharda University in 2023,
           during which I gained a strong foundation in computer science and 
           engineering concepts.<br></br><br></br>
            My academic journey equipped me with technical 
           expertise in programming, web development, and software engineering.
            I also developed problem-solving skills through coursework, hands-on projects,
             and research initiatives. This period allowed me to polish my abilities in collaboration,
              critical thinking, and innovation, preparing me for real-world challenges in the tech industry.
      </p>
      {/* <img src="https://images.shiksha.com/mediadata/images/1677138613phpNOsfnZ.jpeg" 
      alt="collegelogo"
      className='object-cover hidden md:block md:w-[400px] p-2 m-4 -mt-10  '></img> */}
      </div>
      
          </div>
          </>}
          </div>
          
          </div>
      </div>
      {location.pathname !=="/" && <Footer/> }
    </div>
  )
}

export default About
