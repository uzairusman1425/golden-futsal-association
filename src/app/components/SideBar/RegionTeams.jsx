import Image from "next/image";
import React from "react";
import Link from "next/link";

function RegionTeams(props) {
  const { path, title, url } = props;
  return (
    <>
      <Link href={url}>
        <div className="teams w-11/12 h-14 pl-2 text-white rounded-md hover:bg-sidebar flex items-center gap-4">
          <Image src={path} width={30} alt="arsenal.png" />

          <p className="font-semibold">{title}</p>
        </div>
      </Link>
    </>
  );
}

export default RegionTeams;
