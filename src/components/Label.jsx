import React from "react";

export default function Label(props) {
  const { someLabel, children } = props;
  return (
    <div>
      <label htmlFor="" className="text-gray-700 text-md font-normal ">
        {someLabel}
        {children}
      </label>
    </div>
  );
}
