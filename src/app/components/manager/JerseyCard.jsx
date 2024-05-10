import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import Image from "next/image";

function JerseyCard(props) {
  const { title, path: jersey } = props;
  return (
    <>
      <div className="jerseycard xl:w-[24%] lg:w-[32%] h-[300px] flex flex-col rounded-md bg-primary">
        <div className="title w-full h-14  items-center justify-around flex">
          <div className="heading">
            <p className="text-gray-400">{title}</p>
          </div>
          <div className="buttons text-gray-400 flex items-center gap-4 text-xl">
            <button>
              <MdOutlineFileUpload />
            </button>
            <button>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="image w-full h-full  flex items-center justify-center">
          <Image src={jersey} width={150} alt="arsenal.png" />
        </div>
      </div>
    </>
  );
}

export default JerseyCard;
