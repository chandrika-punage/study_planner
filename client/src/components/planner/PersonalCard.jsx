import { useState } from "react";

import {
  // FaPlus,
  FaTimes
} from "react-icons/fa";

function PersonalCard() {

  const [tasks, setTasks] = useState([
    {
      text: "Meditate for 10 minutes",
      completed: false
    },
    {
      text: "Read a chapter of a book",
      completed: false
    },
    {
      text: "Go for a 30-minute walk",
      completed: false
    },
    {
      text: "Drink 8 glasses of water",
      completed: true
    },
    {
      text: "Write in a gratitude journal",
      completed: true
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

  return (

    <div className="bg-[#182235] rounded-3xl p-4 sm:p-6 border border-[#334155]">

      {/* HEADER */}
      <div className="mb-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Personal
        </h2>

        <p className="text-gray-400 mt-2">
          Personal habits and self-care goals
        </p>

      </div>

      {/* TASKS */}
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">

        {/* PENDING TASKS */}
        <div className="space-y-4">

          {tasks
            .map((task, originalIndex) => ({
              task,
              originalIndex,
            }))
            .filter(({ task }) => !task.completed)
            .map(({ task, originalIndex }) => (

              <div
                key={originalIndex}
                className="group bg-[#1e293b] border border-[#334155] rounded-2xl px-5 py-4 flex items-center justify-between transition"
              >

                <div className="flex items-center gap-4">

                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                      toggleTask(originalIndex)
                    }
                    className="w-5 h-5 accent-pink-500 cursor-pointer"
                  />

                  <p className="text-base sm:text-lg text-white">
                    {task.text}
                  </p>

                </div>

                {/* DELETE BUTTON */}
                <button
                  onClick={() =>
                    deleteTask(originalIndex)
                  }
                  className="opacity-0 group-hover:opacity-100 transition duration-300 text-red-400 hover:text-red-500 cursor-pointer"
                >

                  <FaTimes />

                </button>

              </div>

            ))}

        </div>

        {/* COMPLETED SECTION */}
        <div>

          <h3 className="text-xs uppercase tracking-[3px] text-gray-400 mb-4">
            Completed
          </h3>

          <div className="space-y-4">

            {tasks
              .map((task, originalIndex) => ({
                task,
                originalIndex,
              }))
              .filter(({ task }) => task.completed)
              .map(({ task, originalIndex }) => (

                <div
                  key={originalIndex}
                  className="group bg-[#1e293b] border border-[#334155] rounded-2xl px-5 py-4 flex items-center justify-between opacity-70 transition"
                >

                  <div className="flex items-center gap-4">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        toggleTask(originalIndex)
                      }
                      className="w-5 h-5 accent-pink-500 cursor-pointer"
                    />

                    <p className="text-base sm:text-lg line-through text-gray-400">
                      {task.text}
                    </p>

                  </div>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() =>
                      deleteTask(originalIndex)
                    }
                    className="opacity-0 group-hover:opacity-100 transition duration-300 text-red-400 hover:text-red-500 cursor-pointer"
                  >

                    <FaTimes />

                  </button>

                </div>

              ))}

          </div>

        </div>

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

export default PersonalCard;

