import React from 'react'
import KnockoutCard from './KnockoutCard'


function Knockoutcard2(props) {
    const {position}=props
  return (
    <div className={`w-full h-[250px]  absolute top-[${position}px] flex items-center justify-start gap-1`}>
    <div className='w-[30px] h-[90%] border-t-2 border-b-2 border-r-2 border-white '>
       
    </div>
    <div className='w-[10%] h-[2px] bg-white'/>
    <KnockoutCard
    id='10'
    />
    </div>
  )
}

export default Knockoutcard2