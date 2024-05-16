import React from "react";
import { CiTrophy } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import England from "../../../../public/images/sidebar/competitons/england.webp";
import Image from "next/image";
import Link from "next/link";

function Title() {
  return (
    <>
      <h1 className="flex gap-2 text-gray-400 items-center">
        <CiTrophy className="text-golden text-2xl " /> TOURNAMENT MANAGEMENT{" "}
        <p>
          <FaGreaterThan />
        </p>{" "}
        <p className="text-white">Premier League</p>
      </h1>
      <div className="title  lg:w-[450px] h-[150px]  flex items-center gap-6 ">
        <Image src={England} width={100} height={100} alt="eng.png" />
        <div className="content flex flex-col ">
          <h1 className="text-white text-xl font-semibold">Premier League</h1>
          <p className="text-white font-light">England</p>
        </div>
      </div>
      <div className="navigation w-11/12 overflow-x-auto flex items-center gap-20 px-4 bg-primary h-14 rounded-3xl text-[10px] sm:text-[12px] md:text-[14px]">
        <Link
          className="text-gray-400  hover:text-golden "
          href={"/superadmin/tournamentmanagement/teams"}
        >
          TEAMS
        </Link>
        <Link className="text-gray-400  hover:text-golden  " href={"/superadmin/tournamentmanagement/knockout"}>
          KNOCKOUT
        </Link>
        <Link
          className="text-gray-400   hover:text-golden "
          href={"/superadmin/tournamentmanagement/matches"}
        >
          MATCHES
        </Link>
        <Link
          className="text-gray-400   hover:text-golden "
          href={"/superadmin/tournamentmanagement/officialteam"}
        >
          OFFICIAL TEAM
        </Link>
      </div>
    </>
  );
}

export default Title;
