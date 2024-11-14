import ServiceCards from "../components/ServiceCards";
import { servicesData } from "../utils/constants";

 const useServiceCard=()=>{

    const data=servicesData;
    return(
        <div className="cartoon">
        {data.map((item)=>(<ServiceCards 
            key={item.id} 
            title={item.title} 
            subText={item.subText} 
            description={item.description} 
            bgColor={item.bgColor}
             image={item.image} />))}
             </div>
    )

 }
 export default useServiceCard;