function DatePicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className="border mt-2 W-56 cursor-pointer border-gray-300 rounded-md p-1"
    />
  );
}

export default DatePicker;
