import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { toggleHam } from "../utils/hamSlice";
import { useDispatch } from "react-redux";

const Header = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const dispatch=useDispatch();

    const handleHam=()=>{
      console.log("HamCliced")
      
        dispatch(toggleHam());
      
    }
    
  return (
    <div  id="headerOwn" className="bg-white p-4 flex justify-between pt-9 sticky top-[0px] z-50 ">
      <div className="w-full  ml-0 md:ml-14 text-xl md:text-xl font-bold " >
        <p  className="cursor-pointer md:text-2xl " onClick={()=>navigate("/")}>Aniketh Santhan</p>
      </div>


      <div className="block sm:hidden bg-green-100 w-10 pl-5 pr-5" onClick={()=>handleHam()}  >
      <i className="fa-solid fa-bars fa-lg"></i>
      </div>



      <div className="hidden sm:block">
      <div className="flex justify-evenly md:pl-5  ">
        <p className=' pr-4 md:pr-10  text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/About"? "/":"/About")}> 
        {location.pathname ==="/About"? "Home":"About"}</p>
        <p className='pr-4 md:pr-10 text-lg cursor-pointer' onClick={()=>navigate(location.pathname==="/Projects"? "/":"/Projects")}>
        {location.pathname ==="/Projects"? "Home":"Projects"}</p>
        <p className='pr-2 md:pr-10 text-lg  cursor-pointer ' onClick={()=>navigate(location.pathname==="/Services"? "/":"/Services")}>
        {location.pathname ==="/Services"? "Home":"Services"}</p>
        <p className=' bg-black text-white md:-mt-[6px] flex h-auto justify-center md:w-[8rem] p-2 mr-7 text-base cursor-pointer  rounded-lg' onClick={()=>navigate(location.pathname==="/StartProject"? "/":"/StartProject")}>
        {location.pathname ==="/StartProject"? "Home":"Get in Touch"}</p>
      </div>


      </div>
    </div>
  )
}

export default Header
