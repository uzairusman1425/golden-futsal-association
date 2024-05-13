'use client'
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

function MSignin() {
    const [hidden,sethidden]=useState(true)
  return (
    <>
      <section className="lg:hidden w-full h-screen relative ">
        <div className="main w-full h-[40%] bg-[#0F2A3F]">
          <div
            style={{ backgroundImage: 'url("/images/navbar/hero.jpg")' }}
            className="w-full h-full bg-cover opacity-[10%]  "
          ></div>
        </div>

        <div className="w-full h-[520px] bg-black"></div>

        <div className="content w-11/12 h-max text-white  gap-3 sm:gap-4 md:gap-6 absolute top-[20%] left-4 sm:left-10 md:left-16 flex flex-col pl-3">
          <h1 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Welcome to <br />
            Golden Futsal Association
          </h1>
          <p className="text-[#DADADA]">
            Enter your address and password to use the application
          </p>
          <div className="input flex flex-col w-11/12 h-max  gap-2">
            <p>Username</p>
            <input
              type="text"
              className="bg-sidebar w-full h-[50px] outline-none px-2 sm:rounded-full"
              placeholder="Username"

            />
          </div>
          <div className="input flex flex-col w-11/12 h-max  gap-2 relative">
            <p>Password</p>
            <input
              type={hidden?'password':'text'}
              className="bg-sidebar px-2 w-full h-[50px] outline-none sm:rounded-full"
            placeholder="Password"
            />
            <button 
            onClick={()=>{sethidden(!hidden)}}
            className="absolute right-2 top-[56%]">
              {hidden?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
          <div className="tags flex w-11/12 h-10  ">
            <div className="r w-[50%] h-full flex items-center gap-2">
              <input type="checkbox" name="remember" />
              <p>Remember me?</p>
            </div>
            <div className="l w-[50%] h-full flex  items-center justify-end text-golden">
              <Link href={"#"}>Forget Password?</Link>
            </div>
          </div>
          <button className="bg-mprimary w-11/12 h-[60px] rounded-lg ">
            Sign In
          </button>
          <div className="tags flex w-11/12 h-10 gap-1 ">
            <div className="r w-[60%] h-full  justify-end sm:justify-end sm:w-[50%] flex items-center ">
              <p>Don't have an account?</p>
            </div>
            <div className="l w-[40%] sm:w-[50%] h-full flex  items-center sm:justify-start text-golden">
              <Link href={"#"}>Register Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MSignin;
