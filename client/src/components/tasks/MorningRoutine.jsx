import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import {
    FaList,
    FaSearch,
    FaSyncAlt,
    FaTimes
} from "react-icons/fa";

function MorningRoutine() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Thank God for another day",
            completed: true,
        },
        {
            id: 2,
            text: "Brush my teeth",
            completed: false,
        },
        {
            id: 3,
            text: "Wash face and put on cream",
            completed: false,
        },
    ]);

    const [newTask, setNewTask] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // TOGGLE TASK
    const toggleTask = (id) => {

        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );

    };

    // ADD TASK
    const addTask = () => {

        if (newTask.trim() === "") return;

        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };

        setTasks([...tasks, task]);

        setNewTask("");

    };

    // DELETE TASK
    const deleteTask = (id) => {

        setTasks(
            tasks.filter((task) => task.id !== id)
        );

    };

    // FILTERED TASKS
    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(
            searchTerm.toLowerCase()
        )
    );

    // PROGRESS
    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const progress = tasks.length
        ? Math.round((completedTasks / tasks.length) * 100)
        : 0;

    return (
        <MainLayout>

             <div className="min-h-screen bg-gradient-to-br from-[#f28f17] to-[#6580c5] border border-[#263043] text-white rounded-[30px] p-4 md:p-8">

                {/* PAGE CONTAINER */}
                <div className="max-w-5xl mx-auto space-y-8">

                    {/* HEADING */}
                    <div>

                        {/* <div className="text-5xl mb-3">
                            😀
                        </div> */}

                        <h1 className="text-4xl md:text-6xl font-bold">
                            Morning Routine  😀
                        </h1>

                    </div>

                    {/* MOTIVATION CARD */}
                    <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 shadow-xl">

                        <div className="flex items-center justify-between">

                            <h2 className="text-2xl font-bold">
                                Motivation
                            </h2>

                            <button className="bg-[#1e293b] p-3 rounded-xl border border-[#2b3a55] hover:bg-[#263247] transition">
                                ☀️
                            </button>

                        </div>

                        <div className="border-t border-[#24324a] mt-4 pt-4">

                            <p className="italic text-gray-300 border-l-4 border-yellow-400 pl-4">
                                Be thankful to God everyday.
                            </p>

                        </div>

                    </div>

                    {/* PROGRESS CARD */}
                    <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 shadow-xl">

                        <div className="flex items-center justify-between">

                            <h2 className="text-2xl font-bold">
                                Progress
                            </h2>

                            <button className="bg-[#1e293b] p-3 rounded-xl border border-[#2b3a55] hover:bg-[#263247] transition">
                                <FaSyncAlt />
                            </button>

                        </div>

                        <div className="border-t border-[#24324a] mt-4 pt-6">

                            {/* PROGRESS BAR */}
                            <div className="w-full h-4 bg-[#374151] rounded-full overflow-hidden">

                                <div
                                    className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />

                            </div>

                            <div className="flex justify-end mt-4">

                                <p className="text-gray-300">
                                    {progress}% completed
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ROUTINE CHECKLIST */}
                    <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 shadow-xl">

                        {/* TOP */}
                        <div className="flex items-center justify-between gap-4 flex-wrap">

                            <h2 className="text-2xl font-bold">
                                Routine Checklist
                            </h2>

                            <div className="flex items-center gap-3">

                                {/* SEARCH INPUT */}
                                {showSearch && (

                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="bg-[#1e293b] border border-[#2b3a55] rounded-xl px-4 py-2 outline-none text-white placeholder:text-gray-400 w-40 sm:w-56 transition-all duration-300"
                                    />

                                )}

                                {/* LIST BUTTON */}
                                <button className="bg-[#1e293b] p-3 rounded-xl border border-[#2b3a55] hover:bg-[#263247] transition">

                                    <FaList />

                                </button>

                                {/* SEARCH BUTTON */}
                                <button
                                    onClick={() =>
                                        setShowSearch(!showSearch)
                                    }
                                    className="bg-[#1e293b] p-3 rounded-xl border border-[#2b3a55] hover:bg-[#263247] transition"
                                >

                                    <FaSearch />

                                </button>

                            </div>

                        </div>

                        {/* CONTENT */}
                        <div className="border-t border-[#24324a] mt-4 pt-6 space-y-4">

                            {/* TASKS */}
                            {filteredTasks.length > 0 ? (

                                filteredTasks.map((task) => (

                                    <div
                                        key={task.id}
                                        className="group bg-[#111c33] border border-[#2b3a55] rounded-2xl px-4 py-5 flex items-center justify-between transition"
                                    >

                                        <div className="flex items-center gap-4">

                                            <input
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() =>
                                                    toggleTask(task.id)
                                                }
                                                className="w-6 h-6 accent-yellow-400 cursor-pointer"
                                            />

                                            <p
                                                className={`text-lg ${task.completed
                                                        ? "line-through text-gray-400"
                                                        : "text-white"
                                                    }`}
                                            >
                                                {task.text}
                                            </p>

                                        </div>

                                        {/* DELETE BUTTON */}
                                        <button
                                            onClick={() =>
                                                deleteTask(task.id)
                                            }
                                            className="opacity-0 group-hover:opacity-100 transition duration-300 text-red-400 hover:text-red-500"
                                        >

                                            <FaTimes size={18} />

                                        </button>

                                    </div>

                                ))

                            ) : (

                                <div className="text-center text-gray-400 py-6">
                                    No routine task found.
                                </div>

                            )}

                            {/* ADD TASK */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">

                               
                                <input
                                    type="text"
                                    placeholder="Add new routine item..."
                                    value={newTask}
                                    onChange={(e) =>
                                        setNewTask(e.target.value)
                                    }

                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            addTask();
                                        }
                                    }}

                                    className="flex-1 bg-[#1e293b] border border-[#2b3a55] rounded-2xl px-5 py-4 outline-none text-white placeholder:text-gray-400"
                                />


                                <button
                                    onClick={addTask}
                                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl transition"
                                >

                                    Add

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    );
}

export default MorningRoutine;

