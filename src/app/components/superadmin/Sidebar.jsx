import React from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import { CiUser } from "react-icons/ci";
import SidebarButton from "../ManagerSidebar/SidebarButton";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";

function SideBar() {
  return (
    <div className="sidebar w-full bg-[#061727]  h-screen sticky top-3 flex flex-col items-center justify-start pt-20 gap-2">
      <div className="picture w-full h-max flex flex-col items-center gap-2  justify-center">
        <div
          className="img w-[120px] h-[120px]  rounded-full"
          style={{
            backgroundImage: `url(${manager.src})`,
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="font-bold text-white text-lg">Courtney Henry</h1>
        <p className="text-white">Super Admin</p>
      </div>
      <div className="line w-[90%] h-[1px] bg-gray-400" />
      <div className="section-1 w-full h-max flex flex-col items-center justify-start pt-4">
        <SidebarButton icon={CiTrophy} title="Tournament Management" />
        <SidebarButton icon={IoCheckmarkDoneOutline} title="Player Approval" />
        <SidebarButton icon={HiOutlineUsers} title="User Management" />

        <SidebarButton icon={CiUser} title="My Account" />
      </div>
      <div className="line w-[90%] h-[1px] bg-gray-400" />
      <div className="section-1 w-full h-max flex flex-col items-center justify-start pt-4">
        <SidebarButton icon={IoSettingsOutline} title="Settings" />
        <SidebarButton icon={IoIosLogOut} title="Logout" />
      </div>
    </div>
  );
}

export default SideBar;
