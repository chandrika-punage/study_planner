function ProductivityCard() {
  return (
    <div className="bg-[#16111d] text-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Weekly Productivity
      </h2>

      <div className="grid grid-cols-7 gap-3 items-end h-52">
        <div className="bg-purple-300 rounded-xl h-20"></div>
        <div className="bg-purple-400 rounded-xl h-28"></div>
        <div className="bg-purple-500 rounded-xl h-36"></div>
        <div className="bg-purple-600 rounded-xl h-44"></div>
        <div className="bg-purple-400 rounded-xl h-24"></div>
        <div className="bg-purple-500 rounded-xl h-32"></div>
        <div className="bg-purple-700 rounded-xl h-48"></div>
      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-300">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default ProductivityCard;