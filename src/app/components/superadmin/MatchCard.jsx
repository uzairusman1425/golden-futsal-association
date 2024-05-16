"use client";
import React, { useState } from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

function MatchCard() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="matchcard w-full lg:w-11/12 h-24 px-2 overflow-x-auto flex items-center text-white bg-primary">
        <div className="w-[25%] flex flex-col gap-1">
          <p>
            {edit ? (
              "01/01/2024"
            ) : (
              <input
                type="date"
                value="97"
                className="bg-sidebar  outline-none h-10 w-[30px] lg:w-[50px] xl:w-[100px] text-white"
              />
            )}
          </p>
          <p>
            {edit ? (
              "09:00"
            ) : (
              <input
                type="time"
                value="97"
                className="bg-sidebar  outline-none h-10 w-[30px] lg:w-[50px] xl:w-[100px] text-white"
              />
            )}
          </p>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <div className="flex items-center gap-1 lg:gap-4">
            <Image src={arsenal} width={20} alt="arsenal.png" />
            <p>
              {edit ? (
                "Arsenal"
              ) : (
                <select
                  name="team"
                  className="h-10 bg-sidebar outline-none w-[50px] sm:w-[80px] lg:w-[140px] rounded-lg"
                >
                  <option value="Arsenal">Arsenal</option>
                  <option value="Juventus">Juventus</option>
                </select>
              )}
            </p>
          </div>

          <div className="flex items-center gap-1 lg:gap-4 ">
            <Image src={rm} width={20} alt="arsenal.png" />
            <p>
              {edit ? (
                "Real Madrid"
              ) : (
                <select
                  name="team"
                  className="h-10 bg-sidebar outline-none w-[50px] sm:w-[80px] lg:w-[140px] rounded-lg"
                >
                  <option value="Arsenal">Arsenal</option>
                  <option value="Juventus">Juventus</option>
                </select>
              )}
            </p>
          </div>
        </div>
        <div className="w-[25%]">
          <p>
            {edit ? (
              "Anfield"
            ) : (
              <select
                name="team"
                className="h-10 bg-sidebar outline-none w-[50px] sm:w-[80px] lg:w-[140px] rounded-lg"
              >
                <option value="Spain">Spain</option>
              </select>
            )}
          </p>
        </div>
        <div className="w-[15%] text-golden">
          <p>
            {edit ? (
              "View"
            ) : (
              <select
                name="official"
                className="h-10 bg-sidebar outline-none w-[50px] sm:w-[80px] lg:w-[140px] rounded-lg"
              >
                <option value="Unview">Unview</option>
              </select>
            )}
          </p>
        </div>
        <div className="w-[13%] flex gap-1 lg:gap-4 text-sm sm:text-md md:text-lg lg:text-xl">
          {edit ? (
            <>
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
              <FiSave className="text-md lg:text-xl" />
              Save
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MatchCard;
