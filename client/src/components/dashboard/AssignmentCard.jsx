function AssignmentCard() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Assignments</h2>

      <div className="space-y-4">
        <div className="border p-4 rounded-xl">
          <h3 className="font-semibold">DBMS Assignment</h3>
          <p className="text-sm text-gray-500">Due Tomorrow</p>
        </div>

        <div className="border p-4 rounded-xl">
          <h3 className="font-semibold">React Project</h3>
          <p className="text-sm text-gray-500">Due Friday</p>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCard;