function DatePicker({ value, onChange, placeholder, name, errorMessages }) {
  return (
    <>
      <input
        type="date"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="block cursor-pointer mt-2 text-sm px-3 py-[7px] border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-600  focus:outline-none  transition-all duration-200 hover:bg-gray-50 ${className} sm:w-full"
      />
      <p className="text-xs text-red-600 font-medium">{errorMessages}</p>
    </>
  );
}

export default DatePicker;
