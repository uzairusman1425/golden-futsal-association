import React from 'react'
import SideBar from '../components/superadmin/Sidebar'

function layout({children}) {
  return (
   <>
   <section className='hidden lg:w-full lg:h-full lg:flex lg:text-[12px] 2xl:text-[14px]'>
   <div className="sidebar w-[20%]  ">
          <SideBar />
        </div>
        <div className="content w-[80%] h-full pt-20 bg-black">
        {children}
        </div>


   </section>
   </>
  )
}

export default layout