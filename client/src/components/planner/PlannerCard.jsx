import { useState } from "react";

import {
//   FaPlus,
  FaTimes
} from "react-icons/fa";

function PlannerCard() {

  const [tasks, setTasks] = useState([
    {
      text: "Complete DBMS assignment",
      completed: false
    },
    {
      text: "Practice React Hooks",
      completed: true
    },
    {
      text: "Study Operating System",
      completed: false
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // ADD TASK
  const handleAddTask = () => {

    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: newTask,
        completed: false,
      },
    ]);

    setNewTask("");

  };

  // TOGGLE TASK
  const toggleTask = (index) => {

    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);

  };

  // DELETE TASK
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, taskIndex) => taskIndex !== index
    );

    setTasks(updatedTasks);

  };

  // DATES
  const dates = [
    "SUN 15",
    "MON 16",
    "TUE 17",
    "WED 18",
    "THU 19",
    "FRI 20",
    "SAT 21",
  ];

  return (

    <div className="bg-[#182235] rounded-3xl p-4 sm:p-6 border border-[#334155]">

      <div className="mb-8">

        {/* DATE BAR */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">

          {dates.map((date, index) => (

            <div
              key={index}
              className={`min-w-[90px] rounded-2xl px-4 py-3 text-center cursor-pointer transition ${
                index === 2
                  ? "bg-pink-500 text-white"
                  : "bg-[#1e293b] text-gray-300 hover:bg-[#263043]"
              }`}
            >

              <p className="text-xs font-medium">
                {date.split(" ")[0]}
              </p>

              <h3 className="text-xl font-bold mt-1">
                {date.split(" ")[1]}
              </h3>

            </div>

          ))}

        </div>

        {/* TITLE */}
        <div className="mt-6">

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Today
          </h2>

          <p className="text-gray-400 mt-2">
            Manage your daily study tasks
          </p>

        </div>

      </div>

      {/* TASK LIST */}
      <div className="space-y-4">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="group bg-[#1e293b] border border-[#334155] rounded-2xl px-5 py-4 flex items-center justify-between transition"
          >

            <div className="flex items-center gap-4">

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
                className="w-5 h-5 accent-pink-500 cursor-pointer"
              />

              <p
                className={`text-base sm:text-lg ${
                  task.completed
                    ? "line-through text-gray-500"
                    : "text-white"
                }`}
              >
                {task.text}
              </p>

            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={() => deleteTask(index)}
              className="opacity-0 group-hover:opacity-100 transition duration-300 text-red-400 hover:text-red-500 cursor-pointer"
            >

              <FaTimes />

            </button>

          </div>

        ))}

      </div>

      {/* ADD TASK */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">

        <input
          type="text"
          placeholder="Write a task..."
          value={newTask}
          onChange={(e) =>
            setNewTask(e.target.value)
          }

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}

          className="flex-1 bg-[#1e293b] border border-[#334155] rounded-2xl px-5 py-4 text-white outline-none placeholder:text-gray-400"
        />

        <button
          onClick={handleAddTask}
          className="bg-pink-500 hover:bg-pink-600 transition px-6 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
        >

          {/* <FaPlus /> */}

          Add

        </button>

      </div>

    </div>

  );
}

export default PlannerCard;

