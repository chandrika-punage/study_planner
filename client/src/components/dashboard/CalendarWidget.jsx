function CalendarWidget() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Calendar
        </h2>

        <p className="text-gray-500">May 2026</p>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className="font-semibold text-gray-500"
          >
            {day}
          </div>
        ))}

        {[...Array(31)].map((_, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl cursor-pointer hover:bg-purple-100 transition ${
              index === 16
                ? "bg-purple-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget;