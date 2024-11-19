import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
    const location=useLocation();
    
  return (
    <div  id="header" className=" flex justify-between ml-3 m-6 mt-9 md:m-6 ">
      <div className=" hidden sm:block ml-0 md:ml-14 text-lg md:text-xl font-bold" >
        <p  className="cursor-pointer md:text-2xl " onClick={()=>navigate("/")}>Aniketh Santhan</p>
      </div>
      <div className="flex justify-evenly md:pl-5 ">
        <p className=' pr-4 md:pr-10  text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/About"? "/":"/About")}> 
        {location.pathname ==="/About"? "Home":"About"}</p>
        <p className='pr-4 md:pr-10 text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/Projects"? "/":"/Projects")}>
        {location.pathname ==="/Projects"? "Home":"Projects"}</p>
        <p className='pr-2 md:pr-10 text-lg  cursor-pointer ' onClick={()=>navigate(location.pathname==="/Services"? "/":"/Services")}>
        {location.pathname ==="/Services"? "Home":"Services"}</p>
        <p className=' bg-black text-white md:-mt-2 flex h-auto justify-center md:w-[8rem] p-3   pr-4 md:pr-3 mr-7 text-base cursor-pointer pl-2 rounded-lg' onClick={()=>navigate(location.pathname==="/StartProject"? "/":"/StartProject")}>
        {location.pathname ==="/StartProject"? "Home":"Get in Touch"}</p>
      </div>
    </div>
  )
}

export default Header
