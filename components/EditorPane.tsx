import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Editor from "@monaco-editor/react";
import Split from "react-split";
import Result from "./Result";

type Props = {};

const EditorPane = (props: Props) => {
  const [code, setCode] = useState<string | undefined>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          setCode(event.target.result);
        }
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
    onDrop,
    accept: {
      "text/x-python": [".py"],
    },
  });

  const handleEditorChange = (value: string | undefined) => {
    setCode(value);
  };

  return (
    <div className="w-full flex flex-col h-fullcool-scrollbar rounded-t-lg overflow-hidden">
      <div className="w-full px-4 h-[45px] bg-[#1D283A] rounded-t-lg flex justify-between">
        <p className="pane-title flex items-center">Code Editor</p>
      </div>

      <Split
        className="w-full h-full relative overflow-hidden"
        sizes={[60, 40]}
        minSize={45}
        expandToMin={false}
        gutterSize={8}
        gutterAlign="center"
        dragInterval={1}
        direction="vertical"
        cursor="col-resize"
      >
        <div className="h-fit" {...getRootProps()}>
          <input {...getInputProps()} accept=".py" />
          <Editor
            className="rounded-b-lg"
            defaultLanguage="python"
            theme="vs-dark"
            defaultValue="# write some code! or Drop your sourcecode file here!"
            value={code}
            onChange={handleEditorChange}
            options={{
              fontSize: 16,
              mouseWheelZoom: true,
              dragAndDrop: false,
              scrollBeyondLastLine: false,
            }}
          />
        </div>
        <Result code={code} />
      </Split>
    </div>
  );
};

export default EditorPane;
