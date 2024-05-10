import React from 'react'
import KnockoutCard from './KnockoutCard'


function KnockOutCard1(props) {
    const {position}=props
  return (
    <div className={`w-full h-[150px] flex  absolute top-[${position}px] items-center justify-start gap-1`}>

            <div className='w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white'>
            </div>
            <div className='line w-[10%] h-[2px] bg-white'/>
            <KnockoutCard
            id='9'
            
            />
            </div>
  )
}

export default KnockOutCard1