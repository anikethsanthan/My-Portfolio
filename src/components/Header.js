import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
    const location=useLocation();
    
  return (
    <div className="flex justify-between m-6">
      <div className="text-xl font-bold" >
        <p  className="cursor-pointer hover:skew-y-12" onClick={()=>navigate("/")}>ANIKETH SANTHAN</p>
      </div>
      <div className="flex justify-evenly pl-5 ">
        <p className='pr-5  text-xl cursor-pointer' onClick={()=>navigate(location.pathname==="/About"? "/":"/About")}> 
        {location.pathname ==="/About"? "Home":"About"}</p>
        <p className='pr-5 text-xl cursor-pointer' onClick={()=>navigate(location.pathname==="/Projects"? "/":"/Projects")}>
        {location.pathname ==="/Projects"? "Home":"Projects"}</p>
        <p className='pr-5 text-xl cursor-pointer border-r-2' onClick={()=>navigate(location.pathname==="/Services"? "/":"/Services")}>
        {location.pathname ==="/Services"? "Home":"Services"}</p>
        <p className='pr-5  text-xl cursor-pointer pl-2' onClick={()=>navigate(location.pathname==="/StartProject"? "/":"/StartProject")}>
        {location.pathname ==="/StartProject"? "Home":"StartProject"}</p>
      </div>
    </div>
  )
}

export default Header
