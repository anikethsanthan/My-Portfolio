import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
  const location=useLocation();
  
  return (
    <div className='aboutus '>
      {location.pathname !=="/" && <Header/> }
      

      
      <div className='md:flex justify-evenly mb-4   m-4 md:m-0'>
        <div className='flex justify-center md:flex-none'>
      <img src="./My-photo.png" alt="myPhoto" className=' w-60 md:w-80 h-[400px] md:h-auto m-6   md:ml-56 mt-[18%] md:mt-[5%] rounded-full'></img>
      </div>
      <div className=' m-4 md:m-6 md:mt-[9%] rounded-lg '>
      <h1 className=' text-4xl md:text-5xl mb-5 font-semibold' >About me</h1>
      <p className=' w-[95%] md:w-1/2'>
      My name is Aniketh Santhan. I am a
      Passionate and detail-oriented Frontend Web Developer 
      with a strong foundation in HTML5, CSS3, and JavaScript(ES6+), 
      coupled with hands-on experience in modern frameworks like React. 
      Adept at creating responsive web design, cross-browser compatibility
       & user-friendly web applications with a focus on clean, efficient code
        and seamless user experiences. Skilled in collaborating with 
        cross-functional teams, utilizing version control systems (Git/Github),
         and optimizing web performance. Always eager to learn and adapt to new technologies,
          I strive to deliver innovative solutions that meet business goals and enhance user engagement.
      </p>
      </div>
      </div>
      <div className=' ml-8 md:ml-56 h-auto md:h-96 border-b-2 shadow-2xl mb-10'>
        <h1 className=' text-4xl md:text-5xl ml-8 md:ml-14 mb-1 md:mb-9 py-10 font-semibold'>My Skills</h1>
        <div className='md:flex  ml-[5%] md:ml-[15%]'>
          <div className='mb-4'>
        <h1 className='text-2xl ml-8 md:ml-14 mb-4'>Programming Languages</h1>
        <ul className=' ml-20'>
          <li>HTML</li>
          <li>CSS</li>
          <li >JavaScript(ES6+)</li>
          </ul>
          </div>
          <div className='mb-6'>
        <h1 className='text-2xl ml-8 md:ml-14 mb-4'>Frameworks and Libraries</h1>
        <ul className=' ml-20'>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Redux (for state management)</li>
          <li>Bootstrap</li>
          <li>Formik</li>
          </ul>
          </div>
          </div>
      </div>
      {location.pathname !=="/" && <Footer/> }
    </div>
  )
}

export default About
