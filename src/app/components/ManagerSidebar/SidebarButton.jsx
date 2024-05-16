import React from "react";

function SidebarButton(props) {
  const { icon: Icon, title } = props;
  return (
    <>
      <button className="group flex items-center gap-4 hover:bg-sidebar px-2 w-[90%] h-[50px] rounded-lg">
        <Icon className="text-gray-400 xl:text-lg lg:text-sm group-hover:text-golden" />
        <h1 className="text-gray-400 xl:text-lg lg:text-sm text-[10px] sm:text-[12px] md:text-[14px]">{title}</h1>
      </button>
    </>
  );
}

export default SidebarButton;
