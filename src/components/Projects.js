import React from 'react'
import Header from './Header'
import useCardHooks from '../Hooks/useCardHooks'

const Projects = () => {
  return (
    <div>
      <Header/>
      <div className='flex-col'>
       {useCardHooks()}
      </div>
    </div>
  )
}

export default Projects
