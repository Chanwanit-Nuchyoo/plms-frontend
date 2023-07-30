"use client";

import React from "react";
import he from "he";
import parse from "html-react-parser";
import TerminalBlock from "./ui/Terminal";

type Props = {
  id?: number;
};

const ProblemTab = ({ id }: Props) => {
  //TODO : Fetch Problem data
  const exerciseData = {
    exercise_id: "1301449",
    lab_chapter: 6,
    lab_level: 1,
    lab_name: "Sum in List",
    lab_content:
      "&lt;div&gt;ให้เขียนโปรแกรมรับค่าจำนวนเต็ม 5 ตัวเก็บไว้ใน List&lt;/div&gt;&lt;div&gt;แล้วนำค่ามารวมกันตามเงื่อนไขต่อไปนี&lt;/div&gt;&lt;div&gt;&amp;nbsp; &amp;nbsp;ถ้าเป็นเลขคู่ ให้บวก&lt;/div&gt;&lt;div&gt;&amp;nbsp; &amp;nbsp;ถ้าเป็นเลขคี่ ให้ลบ&lt;/div&gt;&lt;div&gt;เช่นมีเลข 4 7 9 3 2 6&lt;/div&gt;&lt;div&gt;ผลลัพธ์ = 4-7-9-3+2+6&lt;/div&gt;",
  };

  const examples_testcase = [
    {
      input: "1 2 3 4 5",
      expected_output: ` *** Sum even / Subtract odd ***
Enter numbers : 1 2 3 4 5
Sum is -3`,
    },
    {
      input: "4 6 3 5 8",
      expected_output: ` *** Sum even / Subtract odd ***
Enter numbers : 4 6 3 5 8
Sum is 10`,
    },
  ];

  const content = parse(he.decode(exerciseData.lab_content));

  return (
    <div className="h-full pb-12 flex flex-col gap-4">
      <h1 className="text-2xl">Chapter : 6 - item : 1 - Sum in List</h1>
      <hr className="border-t-[3px] border-solid border-white" />

      <div>{content}</div>

      <h1 className="text-2xl">Examples</h1>

      <hr className="border-t-[3px] border-solid border-white" />

      {examples_testcase.map((ex, index) => (
        <div key={index}>
          <p className="mb-2 text-lg underline underline-offset-4 underline-[2px]">{`Example ${
            index + 1
          }`}</p>
          <TerminalBlock content={examples_testcase[0].expected_output} />
        </div>
      ))}
    </div>
  );
};

export default ProblemTab;
