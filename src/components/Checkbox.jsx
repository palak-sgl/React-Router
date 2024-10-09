function Checkbox({ label }) {
  return (
    <div className="flex mt-3 items-center space-x-2">
      <input type="checkbox" id="1" className="cursor-pointer" />
      <label className="cursor-pointer" for="1">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
