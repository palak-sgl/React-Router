function Progress({ value }) {
  return (
    <div className="w-64 bg-gray-300 rounded-full h-4 mt-3">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default Progress;
