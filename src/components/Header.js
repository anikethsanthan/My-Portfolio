import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { toggleHam } from "../utils/hamSlice";
import { useDispatch, useSelector } from "react-redux";
import HamMenu from "./HamMenu";

const Header = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const dispatch=useDispatch();
    const isHamtrue=useSelector((store)=>store.ham.isHamOpen);

    const handleHam=()=>{
      console.log("HamCliced")
      
        dispatch(toggleHam());
      
    }
    
  return (
    <div  id="headerOwn" className="bg-white p-4 flex justify-between pt-9 sticky top-[0px] z-50 ">
      <div className="hidden md:block">
      <div className=" w-full  ml-0 md:ml-14 text-xl md:text-xl font-bold " >
        <p  className="cursor-pointer md:text-2xl " onClick={()=>navigate("/")}>Aniketh Santhan</p>
      </div>


      </div>
      <div> { isHamtrue && <>
      <div className=" block md:hidden w-full  ml-0 md:ml-14 text-xl md:text-xl font-bold " >
        <p  className="cursor-pointer md:text-2xl " onClick={()=>navigate("/")}>Aniketh Santhan</p>
      </div>
      </>}
      </div>


       <div className="block sm:hidden">
      <HamMenu/>
      </div>


      <div className="block sm:hidden  w-10 pl-5 pr-5" onClick={()=>handleHam()}  >
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
        <p className=' bg-black text-white rounded-lg p-2 pr-3 pl-3 
        md:mr-12 -mt-[6px]
         font-thin
         cursor-pointer ' 
         onClick={()=>navigate(location.pathname==="/StartProject"? "/":"/StartProject")}>
        {location.pathname ==="/StartProject"? "Home":"Get in touch"}</p>
      </div>

      
      </div>
    </div>
  )
}

export default Header
