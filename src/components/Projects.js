import React from 'react'
import Header from './Header'
import { projectData } from '../utils/constants'
import ProjectCards from './ProjectCards'
import Footer from './Footer'

const Projects = () => {
  const data =projectData
  return (
    <div>
      <Header/>
      <div className='flex '>
        <div className='  flex flex-col space-y-7'>
          <h1 className=' text-4xl md:text-6xl mb-2 w-[82%] md:w-[75%] m-10 md:m-14 md:mt-[4%] font-semibold '> Some of my recent and old projects you can check them out</h1>
          <div className=''>
        {data.map((item) => (
            <div key={item.id} className=" md:flex m-4 p-4 w-[91%] md:w-[95%] rounded-lg shadow-lg">
              <div className='flex justify-center md:flex-none'>
              <ProjectCards name={item.name} image={item.image} />
              </div>
              <div className="mt-4  mb-2  ml-2 md:ml-10">
              <p className="hidden md:block text-lg md:text-4xl my-7 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-albert">{item.heading}</p>
                <p className="text-sm md:text-lg my-10 font-albert">{item.description}</p>
                <button className=" font-albert rounded-lg p-2 animate-pulse md:animate-none md:border-2 border-indigo-600 hover:border-pink-600"
                onClick={()=>window.open(item.link)}>Go to Live Website <i class="fa-solid fa-arrow-up-right-from-square"></i> </button>
              </div>
            </div>
          ))}
          <h1 className=' text-4xl md:text-6xl mb-2 w-[70%] m-14 font-semibold '> My Research work</h1>
          <div className=" md:flex m-4 p-4 w-[75%]md:w-[95%] rounded-lg shadow-lg" >
          <div className="mt-4  mb-2 m-4">
            <ProjectCards name={"Tank waterflow Automation "} image={"./IOT1.jpg"}/>
            </div>
            <div>
            <p className=" hidden md:block text-lg md:text-4xl mt-16 text-transparent bg-clip-text 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-albert">
              Tank Waterflow Automation System</p>
              <h1 className="text-sm md:text-lg my-6 font-albert">
                This paper is about a efficient solution for water monitoring and management system.
                In this paper, we have mentioned our research based 
                on an autonomous water tank filling system using IoT 
                with the help of embedded sensors to monitor the tank
                 status with keeping in mind saving water as well as 
                 electricity.</h1>
              <button  onClick={()=>window.open("https://www.taylorfrancis.com/chapters/edit/10.1201/9781003393580-138/tank-water-flow-automation-aniketh-santhan-aaditya-kumar-tomar-vikalp-arora-dharm-raj")}
              className=" rounded-lg p-2  animate-pulse md:animate-none md:border-2 border-indigo-600 hover:border-pink-600"
                >Go to publication <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>

          </div>
          </div>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
