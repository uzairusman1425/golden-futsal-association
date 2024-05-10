
import TeamStandings from '@/app/components/teams/TeamStandings'
import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <div className="standings w-11/12 min-h-screen mt-10 ">
      <div className="navigation w-full h-14 items-center  flex gap-4 px-2">
<Link className='hover:text-golden text-gray-400' href={''}>All</Link>
<Link className='hover:text-golden text-gray-400 ' href={''}>Home</Link>
<Link className='hover:text-golden text-gray-400' href={''}>Away</Link>
</div>

<div>
<TeamStandings/>
</div>
    </div>
  )
}

export default page