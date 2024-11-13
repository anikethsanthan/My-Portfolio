import React from 'react'

const Footer = () => {
  return (
    <div className= 'footer bg-black text-white h-[300px]'>
        <div >
        <div className='mb-2 ml-9 mr-9 mt-4 pt-5 flex  border-gray-600 border-b-2'>
            <h1 className="text-2xl font-bold  mb-1 m-5 ">Connect with me at :</h1>
            <p  onClick={()=>window.open('https://www.linkedin.com/in/aniketh-santhan')} className='cursor-pointer m-5  text-gray-500 hover:text-white mt-7'>
                <i className="fa-brands fa-linkedin"></i>
                 Linked in</p>
            <p  onClick={() => window.location.href = 'mailto:aniketh.santhan@example.com'} className='cursor-pointer m-5  text-gray-500 hover:text-white  mt-7'>
                <i className="fa-solid fa-envelope"></i>
                 Email</p>
                 <p  onClick={()=>window.open("https://github.com/anikethsanthan")} className='cursor-pointer m-5  text-gray-500 hover:text-white  mt-7'>
                <i className="fa-brands fa-linkedin"></i>
                 Github</p>
                 </div>

                

              
        </div>


        <div className='flex m-14'>
        <span className='w-[50%]'>
        <p className="text-2xl font-bold font-mono mb-2 ">ANIKETH SANTHAN</p>
        <p className='font-thin'>2024© All Rights Reserved to Aniketh Santhan</p>
        </span>
        <span className='w-[50%]'>
        <p className="text-xl font-extralight mb-2">
             I am a passionate and detail-oriented Frontend Web Developer,
             specializing in creating responsive, user-friendly,
              and visually appealing websites using modern web 
              technologies like HTML, CSS, JavaScript, and React.</p>
        </span>
        </div>
      
    </div>
  )
}

export default Footer
