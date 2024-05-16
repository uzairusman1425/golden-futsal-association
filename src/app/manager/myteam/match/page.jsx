import React from 'react'
import Matchcard from '@/app/components/manager/MatchCard';


function page() {
  return (
   <>
   <div className="match w-full min-h-screen flex flex-col gap-4">
   <div className="tournament w-full h-16  flex items-center justify-between px-2">
    <div className="r flex items-center gap-4">
    <p className='text-gray-400'>Tournament</p>
    <select name="tournament" className='w-[100px] sm:w-[140px] md:w-[200px] lg:w-[250px] outline-none text-white h-10 bg-sidebar' >
        <option value="Tournament A">Tournament A</option>
        <option value="Tournament B">Tournament B</option>
        <option value="Tournament C">Tournament C</option>
    </select>
    </div>
    <div className="l">
        <button className='text-black font-semibold bg-yellow-500 px-2 lg:px-4 py-2 rounded-3xl'>Join New Tournament</button>
    </div>
   </div>
   <div className="results w-full h-full pt-10 flex flex-col gap-8">        
          <div className="card w-11/12 h-full  flex ">
            <div className="left w-[50%] flex text-white  justify-start gap-16 lg:gap-32">
              <p></p>
              <p>DATE</p>
            </div>
            <div className="right w-[50%] text-white flex  justify-between lg:px-4">
              <p>TEAM</p>
              <p className='mr-12'>JERSEY</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Matchcard/>
            <Matchcard/>
            <Matchcard/>
            <Matchcard/>
          </div>
    </div>

   </div>

   </>
  )
}

export default page