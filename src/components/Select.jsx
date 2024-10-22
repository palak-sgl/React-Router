import React from "react";

function Select(props) {
  const {
    options,
    onChange,
    className,
    value,
    name,
    errorMessages,
    classNameChevron,
  } = props;
  return (
    <>
      <div className="relative">
        <select
          className={`border text-sm mt-2 rounded sm:w-full p-3 py-2 focus:outline-indigo-500 appearance-none cursor-pointer ${className}`}
          onChange={onChange}
          value={value}
          name={name}
        >
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        <div
          className={`absolute bottom-3 right-4 text-xs flex pointer-events-none ${classNameChevron} `}
        >
          <i className="fa-solid fa-chevron-down cursor-pointer" />
        </div>
      </div>
      <p className="text-xs text-red-600  font-medium">{errorMessages}</p>
    </>
  );
}

export default Select;
