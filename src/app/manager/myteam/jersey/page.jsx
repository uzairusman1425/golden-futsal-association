import JerseyCard from "@/app/components/manager/JerseyCard";
import jersey from "../../../../../public/images/jersey/jersey1.png";
import jersey1 from "../../../../../public/images/jersey/jersey2.png";
import jersey2 from "../../../../../public/images/jersey/jersey3.png";
import jersey3 from "../../../../../public/images/jersey/jersey4.png";
import React from "react";
import Newjersey from "@/app/components/manager/Newjersey";

function page() {
  return (
    <div className="jersey w-full min-h-screen pb-10 pt-10">
      <div className="hero w-full h-full grid grid-cols-1 sm:grid-cols-2 items-center lg:flex lg:flex-wrap gap-3  px-2 ">
        <JerseyCard title="Jersey Home" path={jersey} />
        <JerseyCard title="Jersey Away" path={jersey1} />
        <JerseyCard title="Third Kit" path={jersey2} />
        <JerseyCard title="Goal Keeper" path={jersey3} />

        <Newjersey />
      </div>
    </div>
  );
}

export default page;
