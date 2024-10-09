import React from "react";

function Input(props) {
  const { placeholder, type, className } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`block mt-2 text-md px-3 py-1 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-600  text-gray-900 focus:outline-none mb-2  transition-all duration-200 hover:bg-gray-50 ${className}`}
        id="input-id"
      />
    </div>
  );
}

export default Input;
