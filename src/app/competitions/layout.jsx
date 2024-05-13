import SideBar from "../components/SideBar/SideBar";
import England from "../../../public/images/sidebar/competitons/england.webp";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function CompetitionLayout({ children }) {
  return (
    <>
    <Navbar/>
    <section className=" hidden lg:flex  lg:w-full lg:h-max lg:text-[12px] 2xl:text-[14px]">
      <SideBar />
      <section className="w-full h-max flex pt-4 bg-main items-start sticky top-0  justify-center ">
        <div className="w-[90%] h-full  pt-20 flex flex-col items-start  pl-2">
          <div className="title w-[450px] h-[150px]  flex items-start gap-6">
            <Image src={England} width={100} height={100} alt="england.png" />
            <div className="content flex flex-col ">
              <h1 className="text-white text-xl font-semibold">
                Premier League
              </h1>
              <p className="text-white font-light">England</p>
            </div>
          </div>
          <div className="navigation w-11/12 px-2 flex items-center gap-6 justify-start bg-primary h-14 rounded-3xl">
            <Link
              className="text-gray-400 text-sm hover:text-golden "
              href={"/competitions/overview"}
            >
              OVERVIEW
            </Link>
            <Link
              className="text-gray-400 text-sm hover:text-golden  "
              href={"/competitions/matches"}
            >
              MATCHES
            </Link>
            <Link
              className="text-gray-400 text-sm  hover:text-golden "
              href={"/competitions/standings"}
            >
              STANDINGS
            </Link>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </section>
    </section>


    <section className="w-full h-full lg:hidden flex flex-col pl-2 sm:pl-4 md:pl-10 pt-10 bg-main text-[10px] sm:text-[12px] md:text-[14px]">
       <div className="title w-full h-[200px] pt-20 flex items-start gap-6">
            <Image src={England} width={100} height={100} alt="england.png" />
            <div className="content flex flex-col ">
              <h1 className="text-white text-xl font-semibold">
                Premier League
              </h1>
              <p className="text-white font-light">England</p>
            </div>
          </div>
          <div className="navigation w-11/12 px-2 flex items-center gap-6 justify-start bg-primary h-14 rounded-3xl">
            <Link
              className="text-gray-400 text-sm hover:text-golden "
              href={"/competitions/overview"}
            >
              OVERVIEW
            </Link>
            <Link
              className="text-gray-400 text-sm hover:text-golden  "
              href={"/competitions/matches"}
            >
              MATCHES
            </Link>
            <Link
              className="text-gray-400 text-sm  hover:text-golden "
              href={"/competitions/standings"}
            >
              STANDINGS
            </Link>
          </div>
          <div className="w-full h-full  4px]">
            {children}
          </div>

      
    </section>
      </>
  );
}
