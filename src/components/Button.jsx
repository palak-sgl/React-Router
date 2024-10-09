function Button({ label, onClick, color }) {
  const buttonColor = {
    black: "bg-black text-white",
    white: "bg-white text-black",
    blue: "bg-blue-600 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-600 text-white",
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={` ${buttonColor[color]} px-4 py-1 text-center rounded-md shadow-lg mt-7`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
