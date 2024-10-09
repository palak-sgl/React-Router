import React from "react";

function Textarea(props) {
  const { placeholder } = props;

  return (
    <textarea
      placeholder={placeholder}
      className="border rounded w-72 p-2 focus:outline ring-1 focus-within:outline-indigo-500 mt-2 "
    ></textarea>
  );
}

export default Textarea;
