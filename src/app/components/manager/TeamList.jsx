import React from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TeamList() {
  return (
    <tbody className="w-full h-20 bg-primary rounded-3xl flex items-center">
      <tr className="text-white text-sm w-[30%] flex items-center justify-between px-4">
        <th className="flex items-center gap-2">
          <Image
            className="rounded-3xl"
            src={manager}
            alt="manager"
            width={30}
          />
          Allison
        </th>
        <th>Coach</th>
      </tr>
      <tr className="w-[70%] flex items-center justify-end gap-2 px-2 text-white">
        <th>
          {" "}
          <button>
            <FaRegEdit className="text-xl" />
          </button>
        </th>
        <th>
          {" "}
          <button>
            <MdDelete className="text-xl" />
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export default TeamList;
