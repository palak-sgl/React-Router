import React from "react";

export default function Label(props) {
  const { someLabel, children, required } = props;
  return (
    <div>
      <label htmlFor="" className=" text-[14px] font-light">
        {someLabel}
        {required && <span className="text-red-600 ml-1">*</span>}
        {children}
      </label>
    </div>
  );
}
