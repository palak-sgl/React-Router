import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer border w-[750px] border-gray-50 bg-gray-50 rounded-md  p-4 mt-3">
      <div
        className="flex flex-row justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer font-semibold">{title}</div>
        <div className=" cursor-pointer">
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 bg-white text-black p-2 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
