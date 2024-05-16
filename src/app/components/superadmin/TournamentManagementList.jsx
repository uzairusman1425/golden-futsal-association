"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiSave } from "react-icons/fi";

function TournamentManagementList() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <tbody className="w-full h-16 text-gray-400  flex items-center  ">
        <tr className="w-full h-16 bg-primary flex items-center text-gray-400   overflow-x-auto rounded-lg px-[2px] lg:px-2">
          <td className="w-[22%]  ">
            {edit ? (
              "Premier League"
            ) : (
              <>
                <select
                  name="Tournament"
                  className="h-10 bg-sidebar  rounded-lg sm:w-[100px] w-[50px] lg:w-[150px] outline-none"
                >
                  <option value="Premier Leagues">Premier League</option>
                  <option value="Ucl">Ucl</option>
                </select>
              </>
            )}
          </td>
          <td className="w-[18%]  ">
            {edit ? (
              "12"
            ) : (
              <input
                type="number"
                value="12"
                className="bg-sidebar  outline-none h-10 w-[30px] text-white"
              />
            )}
          </td>
          <td className="w-[25%] ">
            {edit ? (
              "Knock Out"
            ) : (
              <select
                name="System"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
              >
                <option value="Knock Out">Knock Out</option>
                <option value="Elimination">Elimination</option>
              </select>
            )}
          </td>
          <td className="text-green-600 w-[23%] ">
            {edit ? (
              "In Progress"
            ) : (
              <select
                name="status"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Incomplete">Incomplete</option>
              </select>
            )}
          </td>
          <td className="flex gap-4 text-sm sm:text-lg lg:text-xl w-[10%]">
            {edit ? (
              <>
                <button>
                  <IoIosAddCircleOutline />
                </button>
                <button
                  onClick={() => {
                    setEdit();
                  }}
                >
                  <FaRegEdit />
                </button>
                <button>
                  <RiDeleteBin6Line />
                </button>
              </>
            ) : (
              <button onClick={Edit} className="flex items-center gap-2">
                <FiSave className="text-xl" />
                Save
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TournamentManagementList;
