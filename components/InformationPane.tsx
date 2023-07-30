"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProblemTab from "./ProblemTab";
import SubmissionsTab from "./SubmissionsTab";

type Props = {};

const InformationPane = (props: Props) => {
  return (
    <Tabs
      defaultValue="problem"
      className="w-full max-h-full overflow-hidden cool-scrolbar flex flex-col"
    >
      <TabsList className="justify-start relative bg-base-bg w-full pb-0 pt-1 h-[45px] rounded-b-none text-white px-1">
        <TabsTrigger className="tab-head h-full" value="problem">
          โจทย์
        </TabsTrigger>
        <TabsTrigger className="tab-head h-full" value="submission">
          ประวัติการส่ง
        </TabsTrigger>
      </TabsList>
      <TabsContent className="tab-content p-4 left-pane" value="problem">
        <ProblemTab />
      </TabsContent>
      <TabsContent className="tab-content p-4 right-pane" value="submission">
        <SubmissionsTab />
      </TabsContent>
    </Tabs>
  );
};

export default InformationPane;
