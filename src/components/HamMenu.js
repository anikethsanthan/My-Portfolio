import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const HamMenu = () => {
    const isHamtrue=useSelector((store)=>store.ham.isHamOpen);
    const navigate=useNavigate();
    const location=useLocation();

    if(isHamtrue)return null;
  return (
    <div className='flex font-lg'>
      
            <p className=' pr-4 md:pr-10  text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/About"? "/":"/About")}> 
            {location.pathname ==="/About"? "Home":"About"}</p>
            <p className='pr-4 md:pr-10 text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/Projects"? "/":"/Projects")}>
            {location.pathname ==="/Projects"? "Home":"Projects"}</p>
            <p className='pr-4 md:pr-10 text-lg  cursor-pointer ' onClick={()=>navigate(location.pathname==="/Services"? "/":"/Services")}>
            {location.pathname ==="/Services"? "Home":"Services"}</p>
            <p className='pr-4 md:pr-10 text-lg  cursor-pointer ' onClick={()=>navigate(location.pathname==="/StartProject"? "/":"/StartProject")}>
            {location.pathname ==="/StartProject"? "Home":"Connect"}</p>
    </div>
  )
}

export default HamMenu
