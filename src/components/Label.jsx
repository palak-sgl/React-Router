import React from "react";

export default function Label(props) {
  const { someLabel, children } = props;
  return (
    <div>
      <label htmlFor="" className=" text-sm font-semibold ">
        {someLabel}
        {children}
      </label>
    </div>
  );
}
