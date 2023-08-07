"use client";

import React from "react";
import Link from "next/link";
import Split from "react-split";
import InformationPane from "@/components/InformationPane";
import EditorPane from "@/components/EditorPane";

type Props = {};

const LabItemPage = (props: Props) => {
  return (
    <div className="w-full max-h-screen relative px-4 py-2">
      <div className="flex items-center gap-2 pt-4 pb-6 ">
        <span className="w-[45px] h-[45px] rounded-lg bg-blue-500 text-white flex justify-center items-center">
          DS
        </span>
        <div className="text-sm breadcrumbs">
          <ul className="text-xl ">
            <li>
              <Link href={""}>Data Structure</Link>
            </li>
            <li>
              <Link href={""}>Chapter : 6 - item : 1 - Sum in List</Link>
            </li>
          </ul>
        </div>
      </div>
      <Split
        className="split relative w-full h-[90%] rounded-xl"
        sizes={[40, 60]}
        minSize={400}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <InformationPane />
        <EditorPane />
      </Split>
    </div>
  );
};

export default LabItemPage;
