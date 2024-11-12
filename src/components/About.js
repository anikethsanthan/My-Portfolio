import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'

const About = () => {
  const location=useLocation();
  
  return (
    <div className=' '>
      {location.pathname !=="/" && <Header/>}
      
      <div className='flex justify-evenly mb-4 '>
      <img src="IMG_9994.JPG" alt="myPhoto" className='w-80 h-auto m-6 ml-56 mt-[5%] rounded-full'></img>
      <div className=' mt-[12%] rounded-lg m-6'>
      <h1 className='text-5xl mb-4'>Frontend Web Developer</h1>
      <p className='w-1/2'>
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
      <div className=' ml-56 h-96 border-b-2 shadow-2xl mb-10'>
        <h1 className='text-5xl ml-14 mb-9 py-10'>My Skills</h1>
        <div className='flex ml-[15%]'>
          <div>
        <h1 className='text-2xl ml-14 mb-4'>Programming Languages</h1>
        <ul className=' ml-20'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript(ES6+)</li>
          </ul>
          </div>
          <div>
        <h1 className='text-2xl ml-14 mb-4'>Frameworks and Libraries</h1>
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
    </div>
  )
}

export default About
