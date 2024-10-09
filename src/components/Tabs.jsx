import React from "react";

function Tabs({ children, activeTab, onTabClick }) {
  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-center gap-4 mb-4">
        {React.Children.map(children, (child, index) => (
          <button
            className={`px-4 py-2 ${
              activeTab === index + 1
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => onTabClick(index + 1)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-4">
        {React.Children.map(children, (child, index) => {
          if (activeTab === index + 1) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Tabs;
