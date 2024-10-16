import { useState } from "react";

function Accordion({ title, children, isTOpen, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer border w-[750px] bg-gray-50 rounded-md  py-3 mt-3">
      <div
        className="flex flex-row justify-between"
        onClick={() => setIsOpen(!isOpen)}
        onToggle={onToggle}
        isTOpen={isTOpen}
      >
        <div className="cursor-pointer font-normal px-8 text-md">{title}</div>
        <div className=" cursor-pointer">
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            } pr-8`}
          ></i>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 border-t-[1px] h-full bg-white text-black p-2">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
