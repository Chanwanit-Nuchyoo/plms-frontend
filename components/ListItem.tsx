import React from "react";

type Props = {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-8 p-[20px] min-h-[100px] w-full bg-base-bg rounded-lg">
      {children}
    </div>
  );
};

export default ListItem;
