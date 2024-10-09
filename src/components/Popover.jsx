import React, { useState } from "react";

function Popover({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={togglePopover}
        className=" ml-5 text-sm mt-4 bg-gray-100 rounded-full focus:outline-none"
      >
        <i class="fa-solid fa-circle-info"></i>
      </button>
      {isOpen && (
        <div className="absolute text-sm right-1 top-10 mt-1 w-[250px] p-2 bg-white border rounded-lg shadow-lg z-10">
          <div className="text-gray-700">{content}</div>
          <button
            onClick={togglePopover}
            className="mt-2 text-sm text-blue-500 hover:underline w-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Popover;
