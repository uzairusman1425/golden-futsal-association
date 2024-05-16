import React from "react";
import SideBar from "../components/ManagerSidebar/SideBar";
import rm from "../../../public/images/sidebar/teams/rm.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

function ManagerLayout({ children }) {
  return (
    <>
    <Navbar sidebar={<SideBar/>}/>
      <section className="hidden lg:w-full lg:text-[12px] 2xl:text-[14px] lg:h-full lg:flex lg:pt-10 ">
        <div className="sidebar w-[20%]  ">
          <SideBar />
        </div>
        <div className="hero w-[80%] h-full bg-main flex justify-center ">
          <div className="content w-[90%] h-full  mt-20 flex flex-col items-start ">
            <div className="image flex items-center justify-between px-4 w-full h-[200px]  ml-2">
              <div className="Logo flex items-center gap-3">
                <Image src={rm} alt="rm.png" width={100} />
                <div className="titles flex flex-col gap-2">
                  <h1 className="fomt-semibold text-white text-xl">
                    Real Madrid
                  </h1>
                  <p className="text-gray-400">England</p>
                </div>
              </div>

              <button className="px-4 py-2 border-[2px] border-golden rounded-3xl text-golden bg-main">
                Change Logo
              </button>
            </div>
            <div className="navigation w-full flex items-center px-4 gap-20 overflow-x-auto h-16 bg-primary rounded-3xl text-sm">
              <Link href={"/manager/myteam/squad"} className="text-gray-400 hover:text-golden">
                SQUAD
              </Link>
              <Link href={"/manager/myteam/officialteam"} className="text-gray-400 hover:text-golden">
                OFFICIAL TEAM
              </Link>
              <Link href={"/manager/myteam/jersey"} className="text-gray-400 hover:text-golden">
                JERSEY
              </Link>
              <Link href={"/manager/myteam/match"} className="text-gray-400 hover:text-golden">
                MATCH
              </Link>
              <Link href={"/manager/myteam/transfers"} className="text-gray-400 hover:text-golden">
                TRANSFERS
              </Link>
            </div>
            <div className="children w-full h-full mt-4 ">
              {children}
              </div>
          </div>
        </div>
      </section>
      
      
      
      
      <section className="w-full h-full lg:hidden flex flex-col pl-2 sm:pl-4 md:pl-10 pt-10 bg-main text-[10px] sm:text-[12px] md:text-[14px]">
      <div className="image flex items-center justify-between px-4 w-full h-[200px]  ">
              <div className="Logo flex items-center gap-3">
                <Image src={rm} alt="rm.png" width={70} />
                <div className="titles flex flex-col gap-2">
                  <h1 className="fomt-semibold text-white text-xl">
                    Real Madrid
                  </h1>
                  <p className="text-gray-400">England</p>
                </div>
              </div>

              <button className="px-4 py-2 border-[2px] border-golden rounded-3xl text-golden bg-main">
                Change Logo
              </button>
            </div>

            <div className="navigation w-full flex items-center px-4 gap-20 overflow-x-auto h-16 bg-primary rounded-3xl ">
              <Link href={"/manager/myteam/squad"} className="text-gray-400 hover:text-golden">
                SQUAD
              </Link>
              <Link href={"/manager/myteam/officialteam"} className="text-gray-400 hover:text-golden">
                OFFICIAL TEAM
              </Link>
              <Link href={"/manager/myteam/jersey"} className="text-gray-400 hover:text-golden">
                JERSEY
              </Link>
              <Link href={"/manager/myteam/match"} className="text-gray-400 hover:text-golden">
                MATCH
              </Link>
              <Link href={"/manager/myteam/transfers"} className="text-gray-400 hover:text-golden">
                TRANSFERS
              </Link>
            </div>
            <div className="w-full h-full mt-2">
              {children}
            </div>
      </section>
    </>
  );
}

export default ManagerLayout;
