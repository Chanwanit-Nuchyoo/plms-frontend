"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useAtom } from "jotai";
import { sidebarStateAtom } from "@/atoms";

type Props = {
  children: ReactNode;
};

const Sidebar = ({ children }: Props) => {
  const [expanded, setExpanded] = useAtom(sidebarStateAtom);

  return (
    <aside className="flex flex-shrink-0 h-screen text-white">
      <nav className="h-full flex flex-col bg-base-bg shadow-sm w-fit py-10 px-1 rounded-r-[30px]">
        <div
          className={`p-2 flex justify-between items-center h-[65px] ${
            expanded ? "gap-4" : "justify-start"
          } select-none`}
        >
          <div className="flex items-center">
            <Image
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-[40px]" : "w-0"
              }`}
              alt="logo"
            />
            <div>
              <p
                className={`font-semibold overflow-hidden transition-all text-[#0CA6E9] whitespace-nowrap ${
                  expanded ? "w-48 ml-3" : "w-0"
                }`}
              >
                PROGRAMMING LAB
              </p>
              <p
                className={`font-semibold overflow-hidden transition-all text-[#0CA6E9]  whitespace-nowrap ${
                  expanded ? "w-48 ml-3" : "w-0"
                }`}
              >
                MANAGEMENT SYSTEM
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1 rounded-lg hover:bg-gradient-to-tr hover:from-slate-600 hover:to-slate-400 hover:scale-105 active:bg-gray-300 active:scale-95"
          >
            <TbLayoutSidebarRightCollapse
              className={`rounded-md text-4xl font-mono transition-all ${
                expanded ? "rotate-180" : "w-full"
              } `}
            />
          </button>
        </div>

        <ul className="flex flex-col my-8 mx-1">{children}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
