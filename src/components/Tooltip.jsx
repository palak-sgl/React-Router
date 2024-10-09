import { useState } from "react";

function Tooltip({ text, children, color }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipColor = {
    gray: "bg-gray-600 text-white shadow-md",
    black: "bg-black text-white shadow-lg",
    white: "bg-white text-gray-600",
    red: "bg-red-600 text-white",
    blue: "bg-lue-600 text-white",
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute right-0 bottom-7 mt-1 px-2 py-1 ${tooltipColor[color]} rounded-md text-sm`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
