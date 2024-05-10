import KnockOutCard1 from "@/app/components/superadmin/KnockOutCard1";
import KnockoutCard from "@/app/components/superadmin/KnockoutCard";
import Knockoutcard2 from "@/app/components/superadmin/Knockoutcard2";
import Knockoutcard3 from "@/app/components/superadmin/Knockoutcard3";
import Title from "@/app/components/superadmin/Title";
import React from "react";

function page() {
  return (
    <div className="knockout w-full h-full pt-10 flex flex-col pl-10 gap-4">
      <Title />
      <div className="knockout-table w-full min-h-screen flex  bg-main">
        <div className="points-table w-[95%] h-full  mt-4 ml-4  flex ">
          <div className="row-1 w-3/12  h-full  flex flex-col gap-4">
            <div className="w-full h-[200px]  flex flex-col">
              <KnockoutCard id="1" team1="10" team2="2" />
              <KnockoutCard id="1" team1="10" team2="2" />
            </div>
            <div className="w-full h-[200px]  flex flex-col">
              <KnockoutCard id="1" team1="10" team2="2" />
              <KnockoutCard id="1" team1="10" team2="2" />
            </div>
            <div className="w-full h-[200px]  flex flex-col">
              <KnockoutCard id="1" team1="10" team2="2" />
              <KnockoutCard id="1" team1="10" team2="2" />
            </div>
            <div className="w-full h-[200px] flex flex-col">
              <KnockoutCard id="1" team1="10" team2="2" />
              <KnockoutCard id="1" team1="10" team2="2" />
            </div>
          </div>

          <div className="row-2 w-full h-full flex  ">
            <div className="flex-col gap-20 flex h-full w-[30%]  relative">
              <KnockOutCard1 position="20" />
              <KnockOutCard1 position="245" />
              <KnockOutCard1 position="460" />
              <KnockOutCard1 position="670" />
            </div>

            <div className="w-[30%] h-full flex flex-col  relative">
              <Knockoutcard2 position="80" />
              <Knockoutcard2 position="520" />
            </div>

            <div className="w-[25%] h-full relative">
              <Knockoutcard3 position="200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
