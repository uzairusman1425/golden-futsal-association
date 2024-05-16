"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from "next/image";
import { FiSave } from "react-icons/fi";

function TeammanagementList() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };
  return (
    <tbody className="w-full h-12 bg-primary">
      <tr className="w-full h-12 text-left text-gray-400 flex items-center px-2">
        <th className="w-[25%] flex items-center gap-2">
          <Image src={rm} width={20} alt="arsenal.png" />
          {edit ? (
            "Real Madrid"
          ) : (
            <select
              name="team"
              className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[30px] lg:w-[100px] outline-none"
            >
              <option value="Juventus">Juvetus</option>
              <option value="Barelona">Barcelona</option>
            </select>
          )}
        </th>
        <th className="w-[18%] ">
          {edit ? (
            "Jacob Jones"
          ) : (
            <select
              name="manager"
              className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[30px] lg:w-[100px] outline-none"
            >
              <option value="James">James</option>
            </select>
          )}
        </th>
        <th className="w-[30%] text-green-400">
          {edit ? (
            "Active"
          ) : (
            <select
              name="status"
              className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
            >
              <option value="Inactive">Inactive</option>
            </select>
          )}
        </th>
        <th className="w-[25%] ">
          {edit ? (
            "19"
          ) : (
            <input
              type="number"
              value="97"
              className="bg-sidebar  outline-none h-10 w-[30px] text-white"
            />
          )}
        </th>
        <th className="flex items-center gap-2 text-sm lg:text-xl flex-col md:flex-row">
          {edit ? (
            <>
              {" "}
              <button
                onClick={() => {
                  setEdit();
                }}
              >
                <FaRegEdit />
              </button>
              <button>
                <RiDeleteBinLine />
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
  );
}

export default TeammanagementList;
