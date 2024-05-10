import MatchCard from '@/app/components/teams/Matchcard'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
   <div className="matches w-full min-h-screen mt-10">
    <div className="navigation flex items-center gap-4">
    <Link className='hover:text-golden text-gray-400' href={''}>Fixtures</Link>
<Link className='hover:text-golden text-gray-400 ' href={''}>Results</Link>
    </div>
    <div className="card flex flex-col gap-4 mt-8">  <MatchCard/>
    <MatchCard/>
    <MatchCard/>
    <MatchCard/>
    <MatchCard/></div>
  

   </div>
  )
}

export default page