import React, { useState } from "react";
import axios from "axios";
import { DiffEditor } from "@monaco-editor/react";

type Props = {
  code: string | undefined;
};

interface IResult {
  status: string;
  message: string;
  data: {
    Match: boolean;
    Output: string;
    Expected: string;
  }[];
}

const Result = ({ code = "" }: Props) => {
  const [isCodeExecuting, setIsCodeExecuting] = useState<boolean>(false);
  const [results, setResults] = useState<IResult["data"]>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsCodeExecuting(true);
    console.log(code);

    // Create a new FormData object
    const formData = new FormData();
    formData.append("python_code", code);
    formData.append("time_limit", "5000");

    // Configure the headers to send form-data
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // Make the POST request using axios
    try {
      const res = await axios.post<IResult>(
        "http://localhost:3300/api/code/RunCodeWithTestCase",
        formData,
        config
      );
      setResults(res.data.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsCodeExecuting(false);
    }
  };

  return (
    <div className="w-full h-full bg-black flex flex-col rounded-lg overflow-hidden">
      <div className="flex items-center justify-between w-full px-4 py-1 h-[45px] bg-[#1D283A] rounded-t-lg">
        <p className="text-white flex items-center">Result</p>
        <p
          className="text-white text-lg px-4 py-1 cursor-pointer transition-all rounded-lg hover:bg-[#35B1E7] active:scale-95 active:bg-[#0A94CF] bg-button-blue"
          onClick={handleSubmit}
        >
          Submit
        </p>
      </div>

      <div className="w-full h-full px-8 py-2 overflow-y-scroll">
        {error && <div className="text-red-500">{error}</div>}
        {isCodeExecuting ? (
          <div className="text-white">Executing code...</div>
        ) : (
          results?.map((result, index) => (
            <div
              key={index}
              className="mb-4 pb-4 pl-8 rounded-lg flex flex-col justify-center items-center bg-[#2C2C2C]"
            >
              <div
                className={`mb-2 w-full flex items-center gap-2 text-white p-2 rounded`}
              >
                <span className="text-lg underline underline-offset-4 underline-">
                  Test Case {index + 1}:{" "}
                </span>
                {result.Match ? (
                  <span className="bg-[#4FC96E] px-4 py-1/2 rounded-full">
                    PASSED
                  </span>
                ) : (
                  <span className="bg-[#FF3E5B] px-4 py-1/2 rounded-full">
                    FAILED
                  </span>
                )}
              </div>
              <div className="w-full bg-gray h-fit rounded-lg overflow-hidden">
                <DiffEditor
                  theme="vs-dark"
                  height={100}
                  original={result.Expected}
                  modified={result.Output}
                  language="plaintext"
                  options={{ readOnly: true, minimap: { enabled: false } }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Result;
