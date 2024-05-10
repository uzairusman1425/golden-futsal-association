import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";

function TournamentManagementList() {
  return (
    <>
      <tbody className="w-full h-16 text-gray-400  flex items-center">
        <tr className="w-full h-16 bg-primary flex items-center text-gray-400   overflow-x-auto">
          <td className="w-[22%]  ">Premiere League</td>
          <td className="w-[18%]  ">12</td>
          <td className="w-[25%] ">Knock Out</td>
          <td className="text-green-600 w-[23%] ">In Progress</td>
          <td className="flex gap-4 text-xl w-[10%]">
            <button>
              <IoIosAddCircleOutline />
            </button>
            <button>
              <FaRegEdit />
            </button>
            <button>
              <RiDeleteBin6Line />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TournamentManagementList;
