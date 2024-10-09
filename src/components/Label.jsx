import React from "react";

export default function Label(props) {
  const { someLabel } = props;
  return (
    <div>
      <label htmlFor="" className=" text-md text-red-600 font-semibold ">
        {someLabel}
      </label>
    </div>
  );
}
