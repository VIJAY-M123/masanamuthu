import React from 'react'
import About from './About';
import KovilBG from "../Image/KovilBg.jpg";

function Home() {


  // className='pt-24 w-full h-[350px]'
  
  return (
    <>
     <div className='h-screen w-full bg-zinc-200'  style={{
                backgroundImage: `url(${KovilBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}>
     
      
    </div>
    <About/>
    </>
   
  )
}

export default Home