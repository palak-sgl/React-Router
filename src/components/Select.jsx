import React from "react";
// import { FaChevronDown } from "react-icons/fa";

function Select(props) {
  const { options, onChange, className, value } = props;
  return (
    <div className="relative">
      <select
        className={`border mt-2 rounded sm:w-full p-3 py-2 focus:outline-indigo-500 appearance-none cursor-pointer ${className}`}
        defaultValue="Choose One"
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={`absolute bottom-3 lg:right-4 md:right-4 text-xs flex pointer-events-none ${className} `}
      >
        <i className="fa-solid fa-chevron-down cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Select;
