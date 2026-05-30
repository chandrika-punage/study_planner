function StatsCard({ title, value, color }) {
  return (
    <div className={`${color} p-5 rounded-3xl shadow-sm`}>
      <h3 className="text-gray-700 text-lg">{title}</h3>

      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}

export default StatsCard;