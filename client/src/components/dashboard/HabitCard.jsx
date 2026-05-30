function HabitCard() {
  const habits = [
    {
      title: "Study 6 Hours",
      progress: "80%",
    },
    {
      title: "Complete Assignments",
      progress: "65%",
    },
    {
      title: "React Practice",
      progress: "90%",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Habit Tracker
      </h2>

      <div className="space-y-5">
        {habits.map((habit, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <p className="font-medium text-gray-700">{habit.title}</p>
              <p className="text-sm text-gray-500">{habit.progress}</p>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-3 rounded-full"
                style={{ width: habit.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitCard;