import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const options = [
    { label: "Profile Pictures", value: "/profilepictures" },
    { label: "Personal", value: "/" },
    { label: "Preferences", value: "/preferences" },
    { label: "Security", value: "/security" },
    { label: "Summary", value: "/summary" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (value) => {
    navigate(value);
    setIsOpen(false);
  };

  return (
    <div className="relative p-3 lg:hidden">
      <div
        className="cursor-pointer flex justify-between items-center p-2 border border-gray-100 bg-transparent text-red-600 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      {isOpen && (
        <ul className="absolute right-2 w-36  bg-white border border-gray-200 shadow-lg mt-1 rounded-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="p-3 hover:bg-red-600 rounded-md hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
