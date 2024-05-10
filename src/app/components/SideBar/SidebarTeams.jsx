import React from "react";
import Image from "next/image";
import Link from "next/link";

function SidebarTeams(props) {
  const { path, title, country, url } = props;
  return (
    <>
      <Link href={url}>
        <div className="teams w-11/12 h-14 pl-2 text-white rounded-md  hover:bg-sidebar flex items-center gap-4">
          <Image src={path} width={30} alt="arsenal.png" />
          <div className="contentbg-blue-100 w-full flex flex-col items-start">
            <p className="font-semibold flex">{title}</p>
            <p className="font-light">{country}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SidebarTeams;
