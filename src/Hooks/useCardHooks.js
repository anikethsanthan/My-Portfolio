import React from 'react'
import ProjectCards from '../components/ProjectCards'

const useCardHooks = () => {
    const data=[
        {id:1, name:"NETFLIX_GPT", image:"./Netflix_img.jpg"},
        {id:2, name:"Food-Ordering-App", image:"./FoodApp_img.jpg"},
        {id:3, name:"Spotify-Clone", image:"./Spotify_img.jpg"},
        {id:4, name:"Simon-Says Game", image:"./Simonsays.png"},
    ]
  return (
    <div className='flex ml-32 overflow-x-scroll'>
      {data.map((item)=>(<ProjectCards key={item.id} name={item.name} image={item.image} />))}
    </div>
  )
}

export default useCardHooks
