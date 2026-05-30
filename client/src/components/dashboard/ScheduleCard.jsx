function ScheduleCard() {
  const schedule = [
    "8AM - Mathematics",
    "10AM - Science",
    "2PM - React Practice",
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-5">Today's Schedule</h2>

      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div key={index} className="bg-purple-50 p-4 rounded-xl">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleCard;