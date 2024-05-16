import TeamsList from '@/app/components/superadmin/TeamsList'
import Title from '@/app/components/superadmin/Title'
import React from 'react'






function page() {
  return (
    <>
    <div className="teams w-full min-h-screen flex flex-col gap-4 pt-10 lg:pl-10 ">
    <Title/>
    <table className='w-full lg:w-11/12 h-full flex flex-col gap-4 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]'>
        <thead className='text-gray-400 w-full h-14 overflow-x-auto'>
            <tr className='text-left w-full flex h-full items-center'>
                <th className='w-[22%]  pl-4'>Team</th>
                <th className='w-[16%]  '>MANAGER</th>
                <th className='w-[28%]  '>STATUS</th>
                <th className='w-[23%]  '># OF PLAYER</th>
                <th className='w-[10%] '>ACTION</th>
            </tr>
        </thead>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>
       <TeamsList/>

    </table>
    </div>
    
    </>
  )
}

export default page