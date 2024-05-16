import Image from "next/image";
import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import logo from "../../../public/images/navbar/logo.jpg";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

function SignIn(props) {
  const { text, passwordShow, nav ,setNav} = props;
  return (
    <>
      <div
        className={`signin opacity-95   bg-primary  flex top-[20%]  left-[10%] 2xl:left-[25%] xl:left-[15%] lg:left-4 border-[1px] border-blue-900  ${
          nav ? "hidden" : "absolute"
        } z-50  w-10/12 lg:w-[1000px] h-[500px] items-center gap-2`}
      >
       <div className="w-full h-full flex items-center gap-2 relative" >
       <div className="logo w-[30%] lg:w-[40%]  flex items-center justify-center ">
          <Image src={logo} className="rounded-full" alt="logo.png" />
        </div>
        <div className="div w-[2px] h-[400px] bg-gray-400"></div>
        <div className="content flex  flex-col items-start gap-6  justify-center sm:pl-4 lg:pl-8 w-[70%] lg:w-[60%]  h-full">
          <h1 className="text-3xl text-white">Sign In</h1>

          <form
            action=""
            className="w-full lg:w-max  h-max flex flex-col gap-6   lg:items-center justify-center "
          >
            <div className="intput-1 flex items-center w-11/12 lg:w-[400px] px-2 bg-[#1f2b38] border-[1px] border-white h-[40px] rounded-3xl">
              <CiMail className="text-white text-xl" />
              <input
                type="text"
                className="outline-none text-white bg-[#1f2b38] px-2 w-[100px]"
                placeholder="Username"
              />
            </div>
            <div className="intput-1 relative flex items-center w-11/12 lg:w-[400px] px-2 bg-[#1f2b38] border-[1px] border-white h-[40px] rounded-3xl">
              <CiLock className="text-white text-xl" />
              <input
                type={text ? "password" : "text"}
                className="outline-none text-white bg-[#1f2b38] px-2 w-[100px]"
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
            <div className="tags w-10/12 lg:w-[400px] flex justify-between items-center">
              <div className="remember flex text-gray-400 gap-2">
                <input type="checkbox" name="remember" id="rember" />
                <p className="text-[11px] lg:text-[16px]">Remember me </p>
              </div>
              <div className="forgot text-gray-400">
                <Link href={"#"} className="text-[11px] lg:text-[16px]">Forgot Password?</Link>
              </div>
            </div>
            <div className="button w-full">
              <button className="w-10/12  lg:w-[400px] h-[34px] bg-golden rounded-2xl font-bold">
                Sign In
              </button>
            </div>
          </form>
        </div>
       </div>
      
        <button  
        onClick={()=>{setNav(!nav)}}
        className="div   absolute top-[-10px] right-0 rounded-full border-[2px] border-white ">
            <RxCross2 className="text-white text-2xl"/>
        </button>
      
      </div>
    </>
  );
}

export default SignIn;
