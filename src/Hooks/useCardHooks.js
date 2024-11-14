import React from 'react'
import ProjectCards from '../components/ProjectCards'
import { projectData } from '../utils/constants'

const useCardHooks = () => {
    const data=projectData
  return (
    <div className=' cards flex  ml-16 md:ml-32 overflow-x-scroll '>
      {data.map((item)=>(<ProjectCards key={item.id} name={item.name} image={item.image} />))}
    </div>
  )
}

export default useCardHooks
