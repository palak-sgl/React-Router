function DatePicker({ value, onChange, placeholder }) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block cursor-pointer mt-2 text-md px-3 py-[7px] border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-600  text-gray-900 focus:outline-none  transition-all duration-200 hover:bg-gray-50 ${className} sm:w-full"
    />
  );
}

export default DatePicker;
