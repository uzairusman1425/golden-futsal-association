import TransferList from '@/app/components//manager/Transferlist'
import React from 'react'

function page() {
  return (
   <div className="transfer w-full min-h-screen">
    <table className='w-full h-full flex flex-col gap-2'>
<thead className='w-full h-10 flex  text-gray-400 overflow-x-auto'>
  <tr className='w-full h-full flex items-center text-left'>
    <th className='w-[15%]'>DATE</th>
    <th className='w-[23%]'>PLAYER</th>  
  <th className='w-[23%]'>TEAM</th>
    <th className='w-[23%]'>FROM/TO</th>
    <th className='w-[10%]'>STAUS</th>
    <th className='w-[10%]'>ACTION</th>
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