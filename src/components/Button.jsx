function Button({ label, onClick, color, className }) {
  const buttonColor = {
    black: "bg-black text-white",
    white: "bg-white text-black",
    blue: "bg-blue-600 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-600 text-white",
    indigo: "bg-blue-800 text-white",
  };
  return (
    <div className={`flex justify-center `}>
      <button
        onClick={onClick}
        className={` ${buttonColor[color]} px-4 py-2 text-center rounded-md shadow-lg mt-7 ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
