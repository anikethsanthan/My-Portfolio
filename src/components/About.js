import React from 'react'
import Header from './Header'

const About = () => {
  
  return (
    <div>
      <Header/>
      <div className='flex justify-evenly'>
      <img src="IMG_9994.JPG" alt="myPhoto" className='w-80 h-auto m-6 ml-56 mt-[5%] rounded-full'></img>
      <div className=' mt-[12%] rounded-lg m-6'>
      <h1 className='text-5xl mb-6'>Frontend Web Developer</h1>
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
    </div>
  )
}

export default About
