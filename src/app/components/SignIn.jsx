import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import logo from "../../../public/images/navbar/logo.jpg";
import Link from "next/link";

function SignIn(props) {
  const { text, passwordShow, nav } = props;
  return (
    <>
      <div
        className={`signin opacity-95   bg-primary  flex top-[20%] 2xl:left-[25%] xl:left-[15%] lg:left-4 ${
          nav ? "hidden" : "absolute"
        } z-50 w-[1000px] h-[500px] items-center`}
      >
        <div className="logo w-[40%] flex items-center justify-center ">
          <Image src={logo} className="rounded-full" alt="logo.png" />
        </div>
        <div className="div w-[2px] h-[400px] bg-gray-400"></div>
        <div className="content flex flex-col items-start gap-6  justify-center pl-8 w-[60%]  h-full">
          <h1 className="text-3xl text-white">Sign In</h1>

          <form
            action=""
            className="w-max  h-max flex flex-col gap-6 items-center justify-center"
          >
            <div className="intput-1 flex items-center w-[400px] px-2 bg-[#1f2b38] border-[1px] border-white h-[40px] rounded-3xl">
              <CiMail className="text-white text-xl" />
              <input
                type="text"
                className="outline-none text-white bg-[#1f2b38] px-2"
                placeholder="Username"
              />
            </div>
            <div className="intput-1 relative flex items-center w-[400px] px-2 bg-[#1f2b38] border-[1px] border-white h-[40px] rounded-3xl">
              <CiLock className="text-white text-xl" />
              <input
                type={text ? "password" : "text"}
                className="outline-none text-white bg-[#1f2b38] px-2"
                placeholder="Password"
              />
              <button className="absolute right-4 " onClick={passwordShow}>
                {text ? (
                  <LuEye className="text-md text-white " />
                ) : (
                  <FaRegEyeSlash className="text-md text-white " />
                )}
              </button>
            </div>
            <div className="tags w-[400px] flex justify-between">
              <div className="remember flex text-gray-400 gap-2">
                <input type="checkbox" name="remember" id="rember" />
                <p>Remember me </p>
              </div>
              <div className="forgot text-gray-400">
                <Link href={"#"}>Forgot Password?</Link>
              </div>
            </div>
            <div className="button">
              <button className="w-[400px] h-[34px] bg-golden rounded-2xl font-bold">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
