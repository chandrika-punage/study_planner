import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import {
    FaPlus,
    FaTimes
} from "react-icons/fa";

function StudySessions() {

    const initialDays = {
        Monday: [
            {
                text: "Cybersecurity (Google)",
                time: "1:00 - 2:00 pm",
                completed: true,
            },
            {
                text: "Study Calculus",
                time: "3:30 - 4:30 pm",
                completed: false,
            },
            {
                text: "Programming Class Revision",
                time: "5:30 - 6:30 pm",
                completed: false,
            }
        ],

        Tuesday: [
            {
                text: "Data Structures",
                time: "1:00 - 2:00 pm",
                completed: false,
            },
            {
                text: "Calculus Practice Problems",
                time: "3:30 - 4:30 pm",
                completed: false,
            },
            {
                text: "Cybersecurity Notes Review",
                time: "5:30 - 6:30 pm",
                completed: false,
            }
        ],

        Wednesday: [
            {
                text: "Programming (C++ / Java Basics)",
                time: "1:00 - 2:00 pm",
                completed: false,
            },
            {
                text: "Calculus",
                time: "3:30 – 4:30 pm",
                completed: true,
            },
            {
                text: "Aptitude / Logical Reasoning",
                time: "5:30 – 6:30 pm",
                completed: false,
            },

        ],
        Thursday: [
            {
                text: "Cybersecurity (Hands-on Practice)",
                time: "1:00 - 2:00 pm",
                completed: true,
            },
            {
                text: "Programming Revision",
                time: "3:30 – 4:30 pm",
                completed: true,
            },
            {
                text: "Calculus Problem Solving",
                time: "5:30 – 6:30 pm",
                completed: false,
            },
        ],
        Friday: [
            {
                text: "Data Structures Practice",
                time: "1:00 - 2:00 pm",
                completed: false,
            },
            {
                text: "Cybersecurity Theory",
                time: "3:30 – 4:30 pm",
                completed: true,
            },
            {
                text: "Programming Lab Tasks",
                time: "5:30 – 6:30 pm",
                completed: false,
            },
        ],
        Saturday: [
            {
                text: "Calculus Revision",
                time: "1:00 - 2:00 pm",
                completed: false,
            },
            {
                text: "Programming Practice",
                time: "3:30 – 4:30 pm",
                completed: true,
            },
            {
                text: "Cybersecurity Quiz Practice",
                time: "5:30 – 6:30 pm",
                completed: false,
            },
        ],
        Sunday: [
            {
                text: "Weekly Revision (Cybersecurity)",
                time: "1:00 - 2:00 pm",
                completed: false,
            },
            {
                text: "Weekly Revision (Calculus)",
                time: "3:30 – 4:30 pm",
                completed: true,
            },
            {
                text: "Weekly Revision (Programming + Projects)",
                time: "5:30 – 6:30 pm",
                completed: false,
            },
        ],
    };

    const [weeklyTasks, setWeeklyTasks] =
        useState(initialDays);

    // MODAL
    const [activeDay, setActiveDay] =
        useState(null);

    // TASK TITLE
    const [newTask, setNewTask] =
        useState("");

    // START TIME
    const [startHour, setStartHour] =
        useState("");

    const [startMinute, setStartMinute] =
        useState("");

    const [startPeriod, setStartPeriod] =
        useState("AM");

    // END TIME
    const [endHour, setEndHour] =
        useState("");

    const [endMinute, setEndMinute] =
        useState("");

    const [endPeriod, setEndPeriod] =
        useState("PM");

    // TOGGLE TASK
    const toggleTask = (day, index) => {

        const updated = { ...weeklyTasks };

        updated[day][index].completed =
            !updated[day][index].completed;

        setWeeklyTasks(updated);

    };

    // DELETE TASK
    const deleteTask = (day, index) => {

        const updated = { ...weeklyTasks };

        updated[day] = updated[day].filter(
            (_, i) => i !== index
        );

        setWeeklyTasks(updated);

    };

    // ADD TASK
    const addTask = (day) => {

        if (
            !newTask.trim() ||
            !startHour ||
            !startMinute ||
            !endHour ||
            !endMinute
        ) {
            return;
        }

        const updated = { ...weeklyTasks };

        updated[day].push({
            text: newTask,
            time: `${startHour}:${startMinute} - ${endHour}:${endMinute} ${endPeriod}`,
            completed: false,
        });

        setWeeklyTasks(updated);

        // RESET
        setNewTask("");

        setStartHour("");
        setStartMinute("");

        setEndHour("");
        setEndMinute("");

        setStartPeriod("AM");
        setEndPeriod("PM");

        setActiveDay(null);

    };

    return (

        <MainLayout>

            <div className="min-h-screen bg-[#070b14] text-white p-4 md:p-8">

                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="mb-12">

                        <h1 className="text-4xl md:text-6xl font-bold">
                            Study Sessions
                        </h1>

                        <p className="text-gray-400 mt-3 text-lg">
                            Organize your weekly study schedule
                        </p>

                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {Object.keys(weeklyTasks).map((day) => (

                            <div
                                key={day}
                                className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 shadow-xl hover:border-[#6366f1]/40 transition-all duration-300"
                            >

                                {/* TOP */}
                                <div className="flex items-center justify-between mb-6">

                                    <div>

                                        <h2 className="text-2xl font-bold">
                                            {day}
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            {weeklyTasks[day].length} Tasks
                                        </p>

                                    </div>

                                    <button
                                        onClick={() =>
                                            setActiveDay(day)
                                        }
                                        className="bg-[#6366f1]/20 hover:bg-[#6366f1]/30 text-[#818cf8] px-4 py-2 rounded-xl transition flex items-center gap-2"
                                    >

                                        <FaPlus />

                                        Add Task

                                    </button>

                                </div>

                                {/* TASKS */}
                                <div className="space-y-3">

                                    {weeklyTasks[day].map(
                                        (task, index) => (

                                            <div
                                                key={index}
                                                className="group bg-[#1a2332] rounded-2xl p-4 flex items-start justify-between border border-transparent hover:border-[#374151] transition"
                                            >

                                                <div className="flex gap-3">

                                                    <input
                                                        type="checkbox"
                                                        checked={task.completed}
                                                        onChange={() =>
                                                            toggleTask(day, index)
                                                        }
                                                        className="mt-1 w-5 h-5 accent-[#6366f1] cursor-pointer"
                                                    />

                                                    <div>

                                                        <p
                                                            className={`font-medium ${task.completed
                                                                ? "line-through text-gray-500"
                                                                : "text-white"
                                                                }`}
                                                        >
                                                            {task.text}
                                                        </p>

                                                        <p className="text-sm text-gray-400 mt-1">
                                                            {task.time}
                                                        </p>

                                                    </div>

                                                </div>

                                                {/* DELETE */}
                                                <button
                                                    onClick={() =>
                                                        deleteTask(day, index)
                                                    }
                                                    className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition"
                                                >

                                                    <FaTimes />

                                                </button>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* MODAL */}
                {activeDay && (

                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

                        <div className="bg-[#111827] w-full max-w-md rounded-3xl p-6 md:p-8 border border-[#1f2937]">

                            {/* HEADER */}
                            <div className="flex items-center justify-between mb-6">

                                <h2 className="text-2xl font-bold">
                                    Add Task
                                </h2>

                                <button
                                    onClick={() =>
                                        setActiveDay(null)
                                    }
                                    className="text-gray-400 hover:text-white text-xl"
                                >
                                    ✕
                                </button>

                            </div>

                            {/* FORM */}
                            <div className="space-y-5">

                                {/* TASK */}
                                <input
                                    type="text"
                                    placeholder="Task title"
                                    value={newTask}
                                    onChange={(e) =>
                                        setNewTask(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            addTask(activeDay);
                                        }
                                    }}
                                    className="w-full bg-[#1a2332] border border-[#2b3548] rounded-2xl px-4 py-4 outline-none focus:border-[#6366f1]"
                                />

                                {/* TIME SECTION */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* START TIME */}
                                    <div>

                                        <label className="text-sm text-gray-400 mb-2 block">
                                            Start Time
                                        </label>

                                        <div className="flex gap-2">

                                            {/* HOUR */}
                                            <select
                                                value={startHour}
                                                onChange={(e) =>
                                                    setStartHour(e.target.value)
                                                }
                                                className="flex-1 bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                                            >

                                                <option value="">
                                                    hr
                                                </option>

                                                {[...Array(12)].map((_, i) => (
                                                    <option
                                                        key={i + 1}
                                                        value={String(i + 1).padStart(2, "0")}
                                                    >
                                                        {String(i + 1).padStart(2, "0")}
                                                    </option>
                                                ))}

                                            </select>

                                            {/* MINUTE */}
                                            <select
                                                value={startMinute}
                                                onChange={(e) =>
                                                    setStartMinute(e.target.value)
                                                }
                                                className="flex-1 bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                                            >

                                                <option value="">
                                                    min
                                                </option>

                                                {[
                                                    "00",
                                                    "05",
                                                    "10",
                                                    "15",
                                                    "20",
                                                    "25",
                                                    "30",
                                                    "35",
                                                    "40",
                                                    "45",
                                                    "50",
                                                    "55",
                                                ].map((minute) => (

                                                    <option
                                                        key={minute}
                                                        value={minute}
                                                    >
                                                        {minute}
                                                    </option>

                                                ))}

                                            </select>

                                            {/* AM PM */}
                                            {/* <select
                        value={startPeriod}
                        onChange={(e) =>
                          setStartPeriod(e.target.value)
                        }
                        className="bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                      >
                        <option>AM</option>
                        <option>PM</option>
                      </select> */}

                                        </div>

                                    </div>

                                    {/* END TIME */}
                                    <div>

                                        <label className="text-sm text-gray-400 mb-2 block">
                                            End Time
                                        </label>

                                        <div className="flex gap-2">

                                            {/* HOUR */}
                                            <select
                                                value={endHour}
                                                onChange={(e) =>
                                                    setEndHour(e.target.value)
                                                }
                                                className="flex-1 bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                                            >

                                                <option value="">
                                                    hr
                                                </option>

                                                {[...Array(12)].map((_, i) => (
                                                    <option
                                                        key={i + 1}
                                                        value={String(i + 1).padStart(2, "0")}
                                                    >
                                                        {String(i + 1).padStart(2, "0")}
                                                    </option>
                                                ))}

                                            </select>

                                            {/* MINUTE */}
                                            <select
                                                value={endMinute}
                                                onChange={(e) =>
                                                    setEndMinute(e.target.value)
                                                }
                                                className="flex-1 bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                                            >

                                                <option value="">
                                                    min
                                                </option>

                                                {[
                                                    "00",
                                                    "05",
                                                    "10",
                                                    "15",
                                                    "20",
                                                    "25",
                                                    "30",
                                                    "35",
                                                    "40",
                                                    "45",
                                                    "50",
                                                    "55",
                                                ].map((minute) => (

                                                    <option
                                                        key={minute}
                                                        value={minute}
                                                    >
                                                        {minute}
                                                    </option>

                                                ))}

                                            </select>

                                            {/* AM PM */}
                                            <select
                                                value={endPeriod}
                                                onChange={(e) =>
                                                    setEndPeriod(e.target.value)
                                                }
                                                className="bg-[#1a2332] border border-[#2b3548] rounded-2xl px-3 py-4 outline-none"
                                            >
                                                <option>am</option>
                                                <option>pm</option>
                                            </select>

                                        </div>

                                    </div>

                                </div>

                                {/* BUTTONS */}
                                <div className="flex gap-4 pt-2">

                                    <button
                                        onClick={() =>
                                            setActiveDay(null)
                                        }
                                        className="flex-1 bg-[#1f2937] hover:bg-[#2b3548] py-4 rounded-2xl transition"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={() =>
                                            addTask(activeDay)
                                        }
                                        className="flex-1 bg-[#6366f1] hover:bg-[#5558e6] py-4 rounded-2xl font-semibold transition"
                                    >
                                        Add Task
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </MainLayout>

    );
}

export default StudySessions;