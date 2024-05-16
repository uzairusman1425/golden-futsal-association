import React from 'react'

function KnockoutCard(props) {
  const {id,team1,team2}=props
  return (
    <div className="card  w-full   h-24 flex items-center justify-center gap-3 ">
    <p className='text-white'>{id}</p>
     <div className='w-full flex flex-col gap-[2px]'>
     <div className="team1 w-full h-10 bg-sidebar rounded-t-md">
          <div className="number w-[30px] lg:w-[35px] h-full bg-[#153b58] rounded-t-md flex items-center justify-center text-white">
              <p>{team1?team1:''}</p>
          </div>

      </div>
      <div className="team2 w-full h-10 bg-sidebar  rounded-b-md ">
      <div className="number w-[30px] lg:w-[35px] h-full bg-[#153b58] rounded-b-md flex items-center justify-center text-white">
              <p>{team2?team2:''}</p>
          </div>
      </div>
     </div>
    </div>
  )
}

export default KnockoutCard