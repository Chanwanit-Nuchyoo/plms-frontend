const TerminalBlock = ({ content }: { content: string }) => {
  return (
    <div className="bg-[#2C2C2C] min-h-[100px] w-full text-white p-1 rounded font-mono overflow-auto whitespace-pre-wrap">
      <pre>{content}</pre>
    </div>
  );
};

export default TerminalBlock;
