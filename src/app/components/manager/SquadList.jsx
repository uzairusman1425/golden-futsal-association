"use client";
import React, { useState } from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FiSave } from "react-icons/fi";

function SquadList() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };
  return (
    <>
      <tbody className="w-full h-20 bg-primary text-white red-100 overflow-x-auto rounded-3xl flex    px-2 text-[12px]">
        <tr className="flex items-center w-full h-full text-left">
          <th className="w-[25%] flex gap-2 items-center ">
            <Image
              className="rounded-3xl"
              src={manager}
              alt="manager"
              width={30}
            />
            Allison
          </th>

          <th className="xl:w-[15%] lg:w-[20%] ">
            {edit ? (
              "Goal Keeper"
            ) : (
              <select
                name="position"
                className="h-10 bg-sidebar  rounded-lg w-[100px]"
              >
                <option value="Goal Keeper">Goal Keeper</option>
                <option value="Central Forward">Central Forward</option>
                <option value="Central Back">Central Back</option>
              </select>
            )}
          </th>

          <th className="xl:w-[12%] lg:w-[15%]">
            {edit ? (
              "97%"
            ) : (
              <input
                type="number"
                value="97"
                className="bg-sidebar h-10 w-[30px] text-white"
              />
            )}
          </th>

          <th className="text-green-700 xl:w-[20%] lg:w-[25%]">
            {edit ? (
              "Good Performance"
            ) : (
              <select
                name="position"
                className="h-10 bg-sidebar  w-[140px] rounded-lg"
              >
                <option value="Good Performance">Good Performance</option>
                <option value="Injury" className="text-red-700">
                  Injury
                </option>
              </select>
            )}
          </th>

          <th className="xl:w-[15%] lg:w-[18%]">
            {edit ? (
              "01"
            ) : (
              <input
                type="number"
                value="01"
                className="bg-sidebar h-10 w-[30px] text-white"
              />
            )}
          </th>
          <th className="flex items-center gap-6 w-[13%]">
            {edit ? (
              <>
                <button>
                  {" "}
                  <BiTransferAlt className="text-xl" />
                </button>
                <button onClick={Edit}>
                  {" "}
                  <FaRegEdit className="text-xl" />
                </button>

                <button>
                  <MdDelete className="text-xl" />
                </button>
              </>
            ) : (
              <button onClick={Edit} className="flex items-center gap-2">
                <FiSave className="text-xl" />
                Save
              </button>
            )}
          </th>
        </tr>
      </tbody>
    </>
  );
}

export default SquadList;
