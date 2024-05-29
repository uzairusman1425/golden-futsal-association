"use client";

import React, { useState } from "react";
import logo from "../../../public/images/navbar/logo.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { RiNewspaperLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { RiMoonClearFill } from "react-icons/ri";
import { LuSunMoon } from "react-icons/lu";
import SignIn from "./SignIn";
import { TbGridDots } from "react-icons/tb";
import { useSession,signOut } from "next-auth/react"



function Navbar(props) {
  const {sidebar}=props
  const [hidden, setHidden] = useState(true);
  const [nav, setNav] = useState(true);
  const [menu, setMenu] = useState(true);
  const [menu1, setMenu1] = useState(true);
  const [text, setText] = useState(true);
  const [hiddden, setHiddden] = useState(true);
  const [routes, setRoutes] = useState(true);
  const { data: session, status } = useSession()


  const toggleMenu = () => {
    setNav(!nav);
  };

  const passwordShow = (e) => {
    e.preventDefault();
    setText(!text);
  };

  return (
    <>
      <section className="  w-full h-full ">
        <div className="navbar w-full  fixed top-0 z-40  h-20 bg-primary hidden lg:flex">
          <div className="left w-[50%] flex items-center  ">
            <div className="logo w-full h-full ml-2 flex items-center gap-2">
              <div className="image">
                <Image
                  src={logo}
                  width={70}
                  className="rounded-full"
                  alt="logo.png"
                />
              </div>
              <div className="title">
                <h1 className="text-yellow-400 lg:text-lg text-sm  font-bold">
                  Golden <br />
                  <span className="text-sm font-normal">
                    FUTSAL ASSOCIATION
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="right w-[50%] flex   ">
            <div className="tabs  w-full flex items-center gap-4">
              <Link
                href={"#"}
                className=" px-5 font-semibold flex items-center gap-2 h-full text-golden bg-[#0c1b27] hover:text-golden hover:bg-[#0c1b27] "
              >
                {" "}
                <CgScreen /> LIVE SCORES
              </Link>
              <Link
                href={"#"}
                className="text-white px-5 font-semibold flex items-center gap-2 h-full hover:text-golden hover:bg-[#0c1b27] "
              >
                {" "}
                <RiNewspaperLine /> FAVOURITES
              </Link>
              <Link
                href={"#"}
                className="text-white px-5 font-semibold flex items-center gap-2 h-full hover:text-golden hover:bg-[#0c1b27] "
              >
                <RiNewspaperLine /> NEWS
              </Link>
            </div>

            <div className="lg-div w-[300px] relative 2xl:hidden flex items-center mr-2">
              <button
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                <FaBars className="text-white" />
              </button>
            </div>

            <div
              className={`hidden-tab w-[300px]  ${
                hidden ? "hidden" : "absolute"
              } 2xl:hidden top-16 z-40 right-1 h-[200px] bg-primary`}
            >
              <div className="tabs1 w-full h-full flex flex-col justify-center  items-center gap-3 pl-4">
                <div className="search w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
                  <button>
                    {" "}
                    <CiSearch className="text-white text-2xl" />{" "}
                  </button>
                </div>
                <div className="sign-in w-[150px] text-white gap-2 h-10 flex items-center justify-center bg-[#62676a] rounded-full">
                {session?
                 <button
                  onClick={()=>{signOut()}}
                 className="flex items-center gap-2"
               >
                 {" "}
                 Sign Out <FaArrowRightFromBracket />
               </button>
                :  
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    Sign In <FaArrowRightFromBracket />
                  </button>}
                </div>

                <div className="settings w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
                  <button
                    onClick={() => {
                      setMenu(!menu);
                    }}
                  >
                    {" "}
                    <VscSettings className="text-white text-2xl" />{" "}
                  </button>
                </div>
                <div
                  className={`hidden-settings w-[300px] bg-[#071e30] rounded-lg gap-4 text-white flex flex-col items-center justify-center h-[150px] ${
                    menu ? "hidden" : "absolute"
                  } top-20 lg:top-44`}
                >
                  <div className="w-full flex justify-around items-center">
                    <Link href={"#"}>Settings</Link>
                    <IoIosArrowForward />
                  </div>
                  <div className="dark-mode w-full flex items-center justify-around">
                    <p>Dark Mode</p>
                    <div className="w-[80px] rounded-full h-[40px] bg-black flex items-center px-2">
                      <button className="text-2xl  flex items-center justify-center gap-2 ">
                        <RiMoonClearFill className="text-black  bg-golden rounded-[100px] h-[30px] w-[30px] " />
                        <LuSunMoon className="h-[30px] w-[30px]" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-around items-center">
                    <Link href={"#"}>English</Link>
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </div>

            <div className="tabs1 w-full hidden 2xl:flex items-center gap-3 pl-4">
              <div className="search w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
                <button>
                  {" "}
                  <CiSearch className="text-white text-2xl" />{" "}
                </button>
              </div>
              <div className="sign-in w-[150px] text-white gap-2 h-10 flex items-center justify-center bg-[#62676a] rounded-full">
              {session?
                 <button
                 onClick={()=>{signOut()}}
                 className="flex items-center gap-2"
               >
                 {" "}
                 Sign Out <FaArrowRightFromBracket />
               </button>
                :  
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    Sign In <FaArrowRightFromBracket />
                  </button>}
              </div>
              <div className="settings relative w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
                <button
                  onClick={() => {
                    setMenu(!menu);
                  }}
                >
                  {" "}
                  <VscSettings className="text-white text-2xl" />{" "}
                </button>
              </div>
              <div
                className={`hidden-settings w-[300px] bg-[#071e30] rounded-lg gap-4 text-white flex flex-col items-center justify-center h-[150px] ${
                  menu ? "hidden" : "absolute"
                } top-20 `}
              >
                <div className="w-full flex justify-around items-center">
                  <Link href={"#"}>Settings</Link>
                  <IoIosArrowForward />
                </div>
                <div className="dark-mode w-full flex items-center justify-around">
                  <p>Dark Mode</p>
                  <div className="w-[80px] rounded-full h-[40px] bg-black flex items-center px-2">
                    <button className="text-2xl  flex items-center justify-center gap-2 ">
                      <RiMoonClearFill className="text-black  bg-golden rounded-[100px] h-[30px] w-[30px] " />
                      <LuSunMoon className="h-[30px] w-[30px]" />
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-around items-center">
                  <Link href={"#"}>English</Link>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>

      <section className="lg:hidden ">
        <div className="mnavbar w-full    fixed top-0 z-40  h-20 bg-primary flex items-center justify-evenly">
          <button
            onClick={() => {
              setRoutes(!routes);
            }}
          >
            <TbGridDots className="text-xl text-white" />
          </button>

          <div className="logo w-max h-max ml-2 flex items-center gap-2">
            <div className="image">
              <Image
                src={logo}
                width={50}
                className="rounded-full"
                alt="logo.png"
              />
            </div>
            <div className="title">
              <h1 className="text-yellow-400 text-sm  font-bold">
                Golden <br />
                <span className="text-sm font-normal">FUTSAL ASSOCIATION</span>
              </h1>
            </div>
          </div>
          <div className="bars">
            <button
              onClick={() => {
                setHiddden(!hiddden);
              }}
            >
              <FaBars className="text-xl text-white" />
            </button>
          </div>
        </div>

        <div
          className={`side-div w-6/12 sm:w-[400px] min-h-screen bg-primary ${
            hiddden ? "hidden" : "absolute"
          }  right-0 top-30 flex flex-col  gap-4 items-center justify-start pt-20`}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="search w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
              <button>
                {" "}
                <CiSearch className="text-white text-2xl" />{" "}
              </button>
            </div>
            <div className="sign-in w-[150px] text-white gap-2 h-10 flex items-center justify-center bg-[#62676a] rounded-full">
            {session?
                 <button
                 onClick={()=>{signOut()}}
                 className="flex items-center gap-2"
               >
                 {" "}
                 Sign Out <FaArrowRightFromBracket />
               </button>
                :  
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    Sign In <FaArrowRightFromBracket />
                  </button>}
            </div>
            <div className="settings relative w-[45px] h-10 flex items-center justify-center bg-[#62676a] rounded-full">
              <button
                onClick={() => {
                  setMenu1(!menu1);
                }}
              >
                {" "}
                <VscSettings className="text-white text-2xl" />{" "}
              </button>
            </div>
          </div>
          <div
            className={`w-[90%] h-max bg-[#071e30] ${
              menu1 ? "hidden" : "flex"
            } flex-col gap-4`}
          >
            <div className="w-full flex justify-around items-center text-white">
              <Link href={"#"}>Settings</Link>
              <IoIosArrowForward />
            </div>
            <div className="dark-mode w-full flex items-center justify-around text-white">
              <p>Dark Mode</p>
              <div className="w-[80px] rounded-full h-[40px] bg-black flex items-center px-2">
                <button className="text-2xl  flex items-center justify-center gap-2 ">
                  <RiMoonClearFill className="text-black  bg-golden rounded-[100px] h-[30px] w-[30px] " />
                  <LuSunMoon className="h-[30px] w-[30px]" />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-around items-center text-white">
              <Link href={"#"}>English</Link>
              <IoIosArrowForward />
            </div>
          </div>

          <div className="tabs w-full h-full  flex flex-col items-center justify-center ">
            <Link
              href={"#"}
              className=" px-5 py-4 font-semibold flex items-center gap-2 h-full text-golden bg-[#0c1b27] hover:text-golden hover:bg-[#0c1b27] "
            >
              {" "}
              <CgScreen /> LIVE SCORES
            </Link>
            <Link
              href={"#"}
              className="text-white px-5 py-4 font-semibold flex items-center gap-2 h-full hover:text-golden hover:bg-[#0c1b27] "
            >
              {" "}
              <RiNewspaperLine /> FAVOURITES
            </Link>
            <Link
              href={"#"}
              className="text-white px-5 py-4 font-semibold flex items-center gap-2 h-full hover:text-golden hover:bg-[#0c1b27] "
            >
              <RiNewspaperLine /> NEWS
            </Link>
          </div>

         
        </div>

        <div
          className={`side-div w-6/12 sm:w-[400px] min-h-screen bg-yellow-100 ${
            routes ? "hidden" : "absolute"
          } left-0 top-30`}
        >
          {sidebar}
        </div>
      </section>

      <div className="block">
        <SignIn text={text} passwordShow={passwordShow} nav={nav}  setNav={setNav}/>
      </div>
    </>
  );
}

export default Navbar;
