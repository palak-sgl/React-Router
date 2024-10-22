import React from "react";

function InputDimensions({
  type,
  placeholder,
  onChange,
  name,
  value,
  dimension,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-grow p-2 border rounded-l-md border-gray-200 focus:border-l-indigo-600 focus:border-t-indigo-600 focus:border-b-indigo-600 focus:outline-none transition-all duration-200 hover:bg-gray-50 w-28"
        onChange={onChange}
        name={name}
        value={value}
      />
      <span className="px-3 bg-gray-200 rounded-r-md text-sm py-2.5 border border-gray-200">
        {dimension}
      </span>{" "}
    </div>
  );
}

export default InputDimensions;
