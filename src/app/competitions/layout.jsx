import SideBar from "../components/SideBar/SideBar";
import England from "../../../public/images/sidebar/competitons/england.webp";
import Image from "next/image";
import Link from "next/link";

export default function CompetitionLayout({ children }) {
  return (
    <section className="flex w-full h-max lg:text-[12px] 2xl:text-[14px]">
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
  );
}
