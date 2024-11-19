import React from 'react'

const Footer = () => {
  return (
    <div className= 'footer bg-black  text-white h-[270px] md:h-[450px]'>


        <div className='flex justify-center pt-7 ' >

        <div className=' bg-white text-black w-auto h-16 rounded-2xl flex justify-center border-gray-600 border-b-2'>

            <h1 className="  bg-black text-white rounded-xl  hidden sm:block text-lg font-medium p-2   m-2   ">
              Connect with me on: 
              </h1>
            <p  onClick={()=>window.open('https://www.linkedin.com/in/aniketh-santhan')} 
            className='cursor-pointer m-5  text-gray-500 text-lg  hover:text-white mt-[18px] '>
                
                 LinkedIn</p>
            <p  onClick={() => window.location.href = 'mailto:anikethsanthan999@gmail.com'}
             className='cursor-pointer m-5  text-gray-500 hover:text-white text-lg mt-[18px]'>
               
                 Email</p>
                 <p  onClick={()=>window.open("https://github.com/anikethsanthan")} 
                 className='cursor-pointer m-5  text-gray-500 text-lg  hover:text-white mt-[18px]'>
              
                 Github</p>
                 </div>
              
        </div>




        <div>
          <div  className='md:flex m-9 md:mr-14 ml-14 mt-14 mb-5 '>

        <span className=' w-[50%] '>
        <p className=" text-xl md:text-6xl font-bold  mb-2 ">Aniketh Santhan</p>
        <p className=" text-lg md:text-4xl text-[#C8C8C8] font-thin  mb-11 ">
           Frontend Web Developer
             </p>
       
        </span>



        <span className='w-[50%] '>
        {/* <p className="hidden sm:block text-lg md:text-xl font-extralight mb-2">
           
            </p> */}



             {/* <div className='text-end mb-2 ml-9 mr-9   '>
            <h1 className=" hidden sm:block text-2xl font-medium  mb-1 m-5 mt-10 pr-6 ">Connect with me on:</h1>
            <div className=' flex  justify-end -mt-5 pl-10'>
            <p  onClick={()=>window.open('https://www.linkedin.com/in/aniketh-santhan')} className='cursor-pointer m-5  text-gray-500 text-lg  hover:text-white mt-7'>
                
                 LinkedIn</p>
            <p  onClick={() => window.location.href = 'mailto:anikethsanthan999@gmail.com'} className='cursor-pointer m-5  text-gray-500 hover:text-white text-lg mt-7'>
               
                 Email</p>
                 <p  onClick={()=>window.open("https://github.com/anikethsanthan")} className='cursor-pointer m-5  text-gray-500 text-lg  hover:text-white  mt-7'>
              
                 Github</p>
                 </div>
                 </div> */}
        </span>
        </div>
        <p className='font-thin mb-2 px-14 -mt-3'>2024© All Rights Reserved to Aniketh Santhan</p>
        </div>
      
    </div>
  )
}

export default Footer
