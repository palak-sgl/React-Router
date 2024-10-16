import React from "react";

function Input(props) {
  const { placeholder, type, className, required, onChange, values, onBlur } =
    props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={values}
        onBlur={onBlur}
        className={`block mt-2 text-md px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-600  text-gray-900 focus:outline-none  transition-all duration-200 hover:bg-gray-50 ${className} sm:w-full`}
        id="input-id"
      />
    </div>
  );
}

export default Input;
