import React from 'react'
import SideBar from '../components/superadmin/Sidebar'
import Navbar from '../components/Navbar'

function layout({children}) {
  return (
   <>
   <Navbar sidebar={<SideBar/>}/>
   <section className='hidden lg:w-full lg:h-full lg:flex lg:text-[12px] 2xl:text-[14px]'>
   <div className="sidebar w-[20%]  ">
          <SideBar />
        </div>
        <div className="content w-[80%] h-full pt-20 bg-black">
        {children}
        </div>


   </section>

   <section className="w-full h-full lg:hidden flex flex-col pl-2 sm:pl-4 md:pl-10 pt-10 bg-main text-[10px] sm:text-[12px] md:text-[14px]">
     {children}
    </section>



  
   </>
  )
}

export default layout