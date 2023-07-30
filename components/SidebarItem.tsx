"use client";
import { sidebarState } from "@/atoms";
import { useAtom } from "jotai";
import React from "react";

type Props = {
  icon: any;
  text: string;
};

const SidebarItem = ({ icon, text }: Props) => {
  const [expanded, setExpanded] = useAtom(sidebarState);

  return (
    <li
      className={`flex ${
        expanded && "gap-2"
      } hover:bg-gradient-to-tr hover:from-slate-600 hover:to-slate-400 px-3 py-2 rounded-lg transition-color select-none`}
    >
      <span>{icon}</span>
      <p
        className={`flex items-center font-semibold text-sm overflow-hidden transition-all ${
          !expanded && "hidden"
        }`}
      >
        {text}
      </p>
    </li>
  );
};

export default SidebarItem;
