import React from 'react'

import TransferList from '@/app/components/teams/TransferList';

function page() {
  return (
    <div className="transfer mt-10  w-11/12 min-h-screen">
    
<table className='w-full h-full flex flex-col gap-2'>
<thead className='w-full h-10 flex  text-gray-400 overflow-x-auto'>
  <tr className='w-full h-full flex items-center text-left '>
    <th className='w-[18%]'>DATE</th>
    <th className='w-[20%]'>TEAM</th>
    <th className='w-[30%]'>PLAYER</th>
    <th className='w-[25%]'>FROM/TO</th>
    <th >FEE</th>
  </tr>
 

</thead>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>
<TransferList/>

</table>


    </div>
  )
}

export default page