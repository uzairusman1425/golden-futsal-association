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
      <tbody className="w-full h-24 bg-primary text-white   rounded-3xl flex    lg:px-2 ">
        <tr className="flex items-center w-full h-full text-left">
          <th className="xl:w-[25%] w-[20%] flex gap-[1px] lg:gap-2 items-center ">
            <Image
              className="rounded-3xl"
              src={manager}
              alt="manager"
              width={20}
            />
            Allison
          </th>

          <th className="xl:w-[15%] w-[18%] lg:w-[20%] ">
            {edit ? (
              "Goal Keeper"
            ) : (
              <select
                name="position"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
              >
                <option value="Goal Keeper">Goal Keeper</option>
                <option value="Central Forward">Central Forward</option>
                <option value="Central Back">Central Back</option>
              </select>
            )}
          </th>

          <th className="xl:w-[12%] w-[22%]  lg:w-20%] ">
            {edit ? (
              "97%"
            ) : (
              <input
                type="number"
                value="97"
                className="bg-sidebar  outline-none h-10 w-[30px] text-white"
              />
            )}
          </th>

          <th className="text-green-700 xl:w-[20%] w-[18%] lg:w-[25%]">
            {edit ? (
              "Good Performance"
            ) : (
              <select
                name="position"
                className="h-10 bg-sidebar outline-none w-[50px] sm:w-[80px] lg:w-[140px] rounded-lg"
              >
                <option value="Good Performance">Good Performance</option>
                <option value="Injury" className="text-red-700">
                  Injury
                </option>
              </select>
            )}
          </th>

          <th className="xl:w-[15%] w-[15%] lg:w-[18%]">
            {edit ? (
              "01"
            ) : (
              <input
                type="number"
                value="01"
                className="bg-sidebar  outline-none h-10 w-[30px] text-white"
              />
            )}
          </th>

          <th className="flex items-center flex-col sm:flex-row gap-[5px] lg:gap-[1px] xl:gap-6 ">
            {edit ? (
              <>
                <button>
                  {" "}
                  <BiTransferAlt className="text-sm sm:text-lg lg:text-xl" />
                </button>
                <button onClick={Edit}>
                  {" "}
                  <FaRegEdit className="text-sm sm:text-lg lg:text-xl" />
                </button>

                <button>
                  <MdDelete className="text-sm  sm:text-lg lg:text-xl" />
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
