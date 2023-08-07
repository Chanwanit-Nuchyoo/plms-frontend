import React from "react";
import logo from "@/images/logo2.png";
import Image from "next/image";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="mx-1 w-screen h-fit md:w-[500px] md:h-[442px] bg-[#0F1729] rounded-lg drop-shadow-lg p-[30px]">
        <div className="w-full flex items-center justify-center">
          <Image src={logo} alt="logo" />
          <div className="text-[18px] text-[#0CA6E9] font-[700]">
            <p>PROGRAMMING LAB</p>
            <p>MANAGEMENT SYSTEM</p>
          </div>
        </div>

        <form className="flex flex-col gap-8 mt-8">
          <div>
            <label htmlFor="input-email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="input-email"
              className="py-3 px-4 block w-full bg-transparent border-[2px] border-[#737984] rounded-lg text-sm focus:outline-none focus:ring-0 focus:border-[#3ABFF8] focus:ring-[#3ABFF8]"
              placeholder="you@kmitl.ac.th"
            />
          </div>

          <div>
            <label htmlFor="input-password" className="block font-medium mb-2 ">
              Password
            </label>
            <input
              type="password"
              id="input-password"
              className="py-3 px-4 block w-full bg-transparent border-[2px] border-[#737984] rounded-lg text-sm focus:outline-none focus:ring-0 focus:border-[#3ABFF8] focus:ring-[#3ABFF8]"
              placeholder="Enter password"
            />
          </div>
          <button
            type="button"
            className="mt-4 self-center py-2 px-[25px] w-fit inline-flex justify-center items-center gap-2 rounded-md bg-[#737984] border border-transparent font-semibold text-white hover:bg-[#0CA6E9] focus:outline-none focus:ring-2 focus:ring-gray-800 active:scale-95 transition-all"
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
