import SideBar from "../components/SideBar/SideBar";
import rm from "../../../public/images/sidebar/teams/rm.png";
import Image from 'next/image';
import Link from 'next/link';
import Charts from "../components/teams/Charts";


export default function TeamsLayout({
  children, 
}) {
  return (
    <section className="flex w-full h-max lg:text-[12px] 2xl:text-[14px]">
         <SideBar />   
      <section className="w-full h-max flex pt-4 bg-[#02070d] items-start sticky top-0  justify-center ">
        <div className="w-[90%]  h-full mt-10 flex gap-4  items-start  pl-2">
          
         <div className=" h-full xl:w-[70%] lg:w-[65%] mt-10 bg-main">
         <div className="title w-[450px] h-[150px]  flex items-center gap-6">
            <Image src={rm} width={100} height={100} alt="RM.png" />
            <div className="content flex flex-col ">
              <h1 className="text-white text-xl font-semibold">
               Real Madrid
              </h1>
              <p className="text-white font-light">England</p>
            </div>
          </div>
          <div className="navigation w-11/12 px-2 flex items-center gap-20 justify-start bg-primary h-14 rounded-3xl overflow-y-auto">
            <Link
              className="text-gray-400 text-sm hover:text-golden "
              href={"/teams/overview"}
            >
              OVERVIEW
            </Link>
            <Link
              className="text-gray-400 text-sm hover:text-golden  "
              href={"/teams/matches"}
            >
              MATCHES
            </Link>
            <Link
              className="text-gray-400 text-sm  hover:text-golden "
              href={"/teams/standings"}
            >
              STANDINGS
            </Link>
            <Link
              className="text-gray-400 text-sm  hover:text-golden "
              href={"/teams/transfers"}
            >
              TRANSFERS
            </Link>
            <Link
              className="text-gray-400 text-sm  hover:text-golden "
              href={"/teams/squad"}
            >
              SQUAD
            </Link>
          </div>
          <div className="w-full h-full bg-main ">
          {children}
          </div>
         </div>
         <div className="text-white xl:w-[30%] lg:w-[35%] h-full  bg-main flex flex-col gap-4 items-center ml-4">
        <h1 className="flex self-start ml-4">Team Statistics</h1>
         <Charts/>
         </div>

         
        </div>
      </section>

    
    </section>
  );
}
