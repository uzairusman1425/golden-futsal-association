import MatchHistory from '@/app/components/charts/MatchHistory'
import TeamPerformance from '@/app/components/charts/TeamPerformance'
import Winning from '@/app/components/charts/Winning'
import React from 'react'

function page() {
  return (
    <div className="charts pt-20 w-full min-h-screen lg:hidden flex text-white flex-col items-center gap-10">
            <Winning/>
            <MatchHistory/>
            <TeamPerformance/>
    </div>


)
}

export default page