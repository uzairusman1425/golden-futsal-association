import KnockoutCard from "@/app/components/superadmin/KnockoutCard";
import Title from "@/app/components/superadmin/Title";
import React from "react";

function page() {
  return (
    <div className="knockout w-full h-full pt-10 flex flex-col lg:pl-10 gap-4 ">
      <Title />
      <div className="knockout-table w-full min-h-screen hidden xl:flex  bg-main">
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
            <div className="flex-col gap-20 flex h-[840px] w-[30%]  relative">
              <div className="w-full h-[150px] flex  absolute top-[20px] items-center justify-start gap-1">
                <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
                <div className="line w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="9" />
              </div>
              <div className="w-full h-[150px] flex  absolute top-[245px] items-center justify-start gap-1">
                <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
                <div className="line w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="9" />
              </div>
              <div className="w-full h-[150px] flex  absolute top-[460px] items-center justify-start gap-1">
                <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
                <div className="line w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="9" />
              </div>
              <div className="w-full h-[150px] flex  absolute top-[670px] items-center justify-start gap-1">
                <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
                <div className="line w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="9" />
              </div>
            </div>

            <div className="w-[30%] h-full flex flex-col  relative">
              <div className="w-full h-[250px]  absolute top-[80px] flex items-center justify-start gap-1">
                <div className="w-[30px] h-[90%] border-t-2 border-b-2 border-r-2 border-white "></div>
                <div className="w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="10" />
              </div>
              <div className="w-full h-[250px]  absolute top-[520px] flex items-center justify-start gap-1">
                <div className="w-[30px] h-[90%] border-t-2 border-b-2 border-r-2 border-white "></div>
                <div className="w-[10%] h-[2px] bg-white" />
                <KnockoutCard id="10" />
              </div>
            </div>

            <div className="w-[30%] h-full relative">
              <div className="w-full h-[450px]  flex items-center justify-start absolute top-[200px] gap-1">
                <div className="w-[30px] h-[99%] bg-yellow border-b-2 border-t-2 border-r-2 border-white"></div>
                <div className="w-[30px] h-[2px] bg-white" />
                <KnockoutCard id="10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="knockout-mtable w-full min-h-screen overflow-x-auto  xl:hidden  flex gap-2">
        <div className="flex ">
          <div className="row-1 w-[200px]  h-full  flex flex-col gap-4">
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
          <div className="flex-col gap-20 flex h-[840px] w-[240px]  relative">
            <div className="w-full h-[150px] flex  absolute top-[20px] items-center justify-start gap-1">
              <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
              <div className="line w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="9" />
            </div>
            <div className="w-full h-[150px] flex  absolute top-[245px] items-center justify-start gap-1">
              <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
              <div className="line w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="9" />
            </div>
            <div className="w-full h-[150px] flex  absolute top-[460px] items-center justify-start gap-1">
              <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
              <div className="line w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="9" />
            </div>
            <div className="w-full h-[150px] flex  absolute top-[670px] items-center justify-start gap-1">
              <div className="w-[10%] h-[68%] border-r-[2px] border-t-2 border-b-2  border-white"></div>
              <div className="line w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="9" />
            </div>
          </div>
          <div className="w-[240px] h-full flex flex-col  relative">
            <div className="w-full h-[250px]  absolute top-[80px] flex items-center justify-start gap-1">
              <div className="w-[30px] h-[90%] border-t-2 border-b-2 border-r-2 border-white "></div>
              <div className="w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="10" />
            </div>
            <div className="w-full h-[250px]  absolute top-[520px] flex items-center justify-start gap-1">
              <div className="w-[30px] h-[90%] border-t-2 border-b-2 border-r-2 border-white "></div>
              <div className="w-[10%] h-[2px] bg-white" />
              <KnockoutCard id="10" />
            </div>
          </div>
          <div className="w-[240px] h-full relative">
            <div className="w-full h-[450px]  flex items-center justify-start absolute top-[200px] gap-1">
              <div className="w-[30px] h-[99%] bg-yellow border-b-2 border-t-2 border-r-2 border-white"></div>
              <div className="w-[30px] h-[2px] bg-white" />
              <KnockoutCard id="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
