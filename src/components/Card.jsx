function Card({ title, content, titleColor, contentColor }) {
  const cardColor = {
    red: "text-red-600",
    green: "text-green-600",
    blue: "text-blue-800",
    yellow: "text-yellow-600",
  };
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-lg bg-gray-300">
      <h3 className={`font-bold text-lg ${cardColor[titleColor]}`}>{title}</h3>
      <p className={`${cardColor[contentColor]}`}>{content}</p>
    </div>
  );
}

export default Card;
