function Checkbox({ label, onChange, className }) {
  return (
    <div className="flex mt-3 items-center py-2 px-6 space-x-2">
      <input
        type="checkbox"
        id="1"
        className="cursor-pointer accent-blue-800"
        onChange={onChange}
      />
      <label
        className={`cursor-pointer font-light font-xs ${className}`}
        htmlFor="1"
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
