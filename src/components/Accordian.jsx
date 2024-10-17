function Accordion({
  title,
  children,
  isOpen,
  activeStep,
  stepNumber,
  setActiveStep,
  showChangeButton,
}) {
  return (
    <div
      className={`cursor-pointer border w-[750px] rounded-md pt-3 mt-3 transition-colors duration-300 ${
        isOpen ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="flex flex-row justify-between">
        <div className="cursor-pointer font-normal px-8 pb-3 text-md">
          <span
            className={`px-2 py-0.5 mr-2 rounded-md text-xs ${
              isOpen ? "bg-black text-white" : "bg-gray-100 text-black"
            } ${activeStep > stepNumber ? "bg-green-500 text-white" : ""}`}
          >
            {activeStep > stepNumber ? (
              <i className="fa fa-check"></i>
            ) : (
              stepNumber
            )}
          </span>
          <span className={`${isOpen ? "text-black" : "text-gray-700"}`}>
            {title}
          </span>
        </div>
        {activeStep > stepNumber && (
          <button
            className="text-blue-800 underline text-sm mr-8 mb-3"
            onClick={() => setActiveStep(stepNumber)}
          >
            {showChangeButton}
          </button>
        )}
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="border-t-[1px] bg-white text-black p-2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
