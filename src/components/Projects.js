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
        <div className=' flex flex-col space-y-7'>
          <h1 className='text-6xl mb-2 w-[70%] m-14'> Some of my recent and old projects you can check them out</h1>
        {data.map((item) => (
            <div key={item.id} className=" flex m-4 p-4 pr-4 mr-4 w-screen rounded-lg shadow-lg">
              <ProjectCards name={item.name} image={item.image} />
              <div className="mt-4  mb-2 ml-10">
              <p className="text-sm md:text-4xl my-7 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{item.heading}</p>
                <p className="text-sm md:text-lg my-10">{item.description}</p>
                <button className=" rounded-lg p-2 border-2 border-indigo-600 hover:border-pink-600"
                onClick={()=>window.open(item.link)}>Go to Live Website</button>
              </div>
            </div>
          ))}
        
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Projects
