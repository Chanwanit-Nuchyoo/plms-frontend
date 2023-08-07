"use client";

import Image from "next/image";
import avatar from "@/images/avatar.jpg";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListItem from "@/components/ListItem";

const data = [
  {
    shortname: "DS",
    fullname: "Data Structure",
    chapterName: "Chapter 4 Loop while",
    deadline: "26.07.2023 23:59น.",
  },
  {
    shortname: "DS",
    fullname: "Data Structure",
    chapterName: "Chapter 5 Loop for",
    deadline: "26.07.2023 23:59น.",
  },
  {
    shortname: "DS",
    fullname: "Data Structure",
    chapterName: "Chapter 6 List",
    deadline: "26.07.2023 23:59น.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[1200px] mx-auto py-10">
      <div className="flex items-center gap-6">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={avatar}
          alt="avatar"
        />
        <div className="font-semibold text-lg">
          <p>สวัสดี,</p>
          <p className="text-[#0CA6E9]">ชรินดา สนธิดี</p>
        </div>
      </div>

      {/* Assignments Tabs */}
      <div className="mt-10 items-center w-full">
        <div className="flex gap-2">
          <HiOutlineChartSquareBar className="text-3xl" />
          <span className="text-xl">Assignments</span>
        </div>
        <Tabs defaultValue="upcoming" className="mt-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="not Completed">Not Completed</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <div className="w-full flex flex-col gap-2 mt-[20px]">
              {data.map((d, index) => (
                <ListItem key={index}>
                  <div className="col-span-2">
                    <p>{d.fullname}</p>
                  </div>
                  <div className="col-span-5">
                    <p>{d.chapterName}</p>
                    <p className="text-[#3ABFF8]">กำหนดส่ง {d.deadline}</p>
                  </div>
                  <div className="text-right">10/10 point</div>
                </ListItem>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="not Completed">
            <div className="w-full flex flex-col gap-2 mt-[20px]">
              {data.map((d, index) => (
                <ListItem key={index}>
                  <div className="col-span-2">
                    <p>{d.fullname}</p>
                  </div>
                  <div className="col-span-5">
                    <p>{d.chapterName}</p>
                    <p className="text-[#3ABFF8]">กำหนดส่ง {d.deadline}</p>
                  </div>
                  <div className="text-right">10/10 point</div>
                </ListItem>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div className="w-full flex flex-col gap-2 mt-[20px]">
              {data.map((d, index) => (
                <ListItem key={index}>
                  <div className="col-span-2">
                    <p>{d.fullname}</p>
                  </div>
                  <div className="col-span-5">
                    <p>{d.chapterName}</p>
                    <p className="text-[#3ABFF8]">กำหนดส่ง {d.deadline}</p>
                  </div>
                  <div className="text-right">10/10 point</div>
                </ListItem>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
