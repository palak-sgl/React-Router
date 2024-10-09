import React from "react";

function Badge(props) {
  const { label, color } = props;
  const colorPalette = {
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-red-500",
    transparent: "bg-green-500 text-black border border-black ",
    blue: "bg-blue-600 text-white",
    indigo: "bg-indigo-600 text-white",
  };
  return (
    <span
      className={`px-2 text-sm cursor-default ml-28 rounded-full ${colorPalette[color]}`}
    >
      {label}
    </span>
  );
}

export default Badge;
