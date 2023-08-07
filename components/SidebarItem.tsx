"use client";

import { currentPageAtom, sidebarStateAtom } from "@/atoms";
import { useAtom } from "jotai";
import React from "react";

type Props = {
  icon: any;
  text: string;
  value: string;
};

const SidebarItem = ({ icon, text, value }: Props) => {
  const [expanded, setExpanded] = useAtom(sidebarStateAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <li
      className={`
      h-[50px]
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      flex-shrink-0 transtion-all hover:bg-[#0b9bda]
      ${currentPage === value && "bg-[#0CA6E966]"}
  `}
      onClick={() => {
        setCurrentPage(value);
      }}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all whitespace-nowrap truncate ${
          expanded ? "w-auto ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`whitespace-nowrap z-50 flex font-semibold absolute left-full rounded-md px-4 py-2 ml-6 bg-base-bg text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
