import React from 'react'
import KnockoutCard from './KnockoutCard'


function Knockoutcard3(props) {
    const {position}=props
  return (
    <div className={`w-full h-[450px]  flex items-center justify-start absolute top-[${position}px] gap-1`}>
    <div className='w-[30px] h-[99%] bg-yellow border-b-2 border-t-2 border-r-2 border-white'>

    </div>
    <div className='w-[30px] h-[2px] bg-white'/>
    <KnockoutCard
    id='10'
    />
    </div>
  )
}

export default Knockoutcard3