import React from "react";

export default function Label(props) {
  const { someLabel, children } = props;
  return (
    <div>
      <label htmlFor="" className=" text-[13px] font-light">
        {someLabel}
        {children}
      </label>
    </div>
  );
}
