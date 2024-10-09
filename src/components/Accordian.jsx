import { useState } from "react";

function Accordion({ title, content, content2 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer border border-gray-100 rounded-md  p-4 mt-3">
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
        <div className="mt-2 bg-gray-50 text-black p-2 rounded-md">
          {content} <br />
          {content2}
        </div>
      )}
    </div>
  );
}

export default Accordion;
