import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function Assignments() {
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: "Data Structures Implementation",
            createdAt: "27/05/2026, 15:00:21",
            deadline: "",
            completed: false,
        },
        {
            id: 2,
            title: "React Habit Tracker UI Design",
            createdAt: "29/05/2026, 18:25:21",
            deadline: "",
            completed: true,
        },
        {
            id: 3,
            title: "Database Management System Mini Project",
            createdAt: "29/05/2026, 18:25:22",
            deadline: "",
            completed: false,
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    const [showAdd, setShowAdd] = useState(false);

    const [newAssignment, setNewAssignment] = useState({
        title: "",
        deadline: "",
    });

    // OPEN DETAILS
    const openAssignment = (item) => {
        setSelected(item);
        setShowModal(true);
    };

    // ADD ASSIGNMENT
    const addAssignment = () => {
        if (!newAssignment.title.trim()) return;

        const now = new Date().toLocaleString("en-GB");

        const newItem = {
            id: Date.now(),
            title: newAssignment.title,
            createdAt: now,
            deadline: newAssignment.deadline,
            completed: false,
        };

        setAssignments([newItem, ...assignments]);

        setNewAssignment({ title: "", deadline: "" });
        setShowAdd(false);
    };

    // DELETE
    const deleteAssignment = (id) => {
        setAssignments(assignments.filter((a) => a.id !== id));
        setShowModal(false);
    };

    // TOGGLE COMPLETE
    const toggleComplete = (id) => {
        setAssignments((prev) =>
            prev.map((a) =>
                a.id === id ? { ...a, completed: !a.completed } : a
            )
        );

        setSelected((prev) =>
            prev ? { ...prev, completed: !prev.completed } : prev
        );
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-[#1f0d1f] via-[#020617] to-black text-white p-6">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Assignments 🗂️
                        </h1>
                        <p className="text-gray-400">Assignment Board</p>
                    </div>

                    <button
                        onClick={() => setShowAdd(true)}
                        className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
                    >
                         New Assignment
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {assignments.map((a) => (
                        <div
                            key={a.id}
                            onClick={() => openAssignment(a)}
                            className="bg-[#0f172a] border border-[#2b3a55] rounded-2xl p-5 cursor-pointer hover:scale-[1.02] transition relative"
                        >

                            <h2 className="text-xl font-bold">
                                {a.title}
                            </h2>

                            <p className="text-sm text-gray-400 mt-2">
                                {a.createdAt}
                            </p>

                            <p
                                className={`mt-3 text-sm font-semibold ${
                                    a.completed
                                        ? "text-green-400"
                                        : "text-yellow-400"
                                }`}
                            >
                                {a.completed ? "Completed" : "Pending"}
                            </p>

                            {/* hover delete */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteAssignment(a.id);
                                }}
                                className="absolute top-3 right-3 text-red-400 opacity-0 hover:opacity-100 group-hover:opacity-100"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                </div>

                {/* ADD MODAL */}
                {showAdd && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-[#0f172a] w-[90%] max-w-md p-6 rounded-2xl space-y-4">

                            <h2 className="text-2xl font-bold">
                                New Assignment
                            </h2>

                            <input
                                placeholder="Assignment Title"
                                value={newAssignment.title}
                                onChange={(e) =>
                                    setNewAssignment({
                                        ...newAssignment,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            <input
                                type="datetime-local"
                                value={newAssignment.deadline}
                                onChange={(e) =>
                                    setNewAssignment({
                                        ...newAssignment,
                                        deadline: e.target.value,
                                    })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setShowAdd(false)}
                                    className="bg-gray-700 px-4 py-2 rounded-xl"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={addAssignment}
                                    className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
                                >
                                    Save
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {/* DETAILS MODAL */}
                {showModal && selected && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                        <div className="bg-[#0f172a] w-[90%] max-w-md p-6 rounded-2xl space-y-4">

                            <h2 className="text-2xl font-bold">
                                {selected.title}
                            </h2>

                            <p className="text-gray-400">
                                Created: {selected.createdAt}
                            </p>

                            <p>
                                Submission Deadline:{" "}
                                {selected.deadline || "dd/mm/yyyy, --:-- --"}
                            </p>

                            <div
                                className={`font-bold ${
                                    selected.completed
                                        ? "text-green-400"
                                        : "text-yellow-400"
                                }`}
                            >
                                {selected.completed
                                    ? "Completed"
                                    : "Pending"}
                            </div>

                            <div className="flex flex-col gap-3 pt-2">

                                <button
                                    onClick={() =>
                                        toggleComplete(selected.id)
                                    }
                                    className="bg-green-500 text-black py-2 rounded-xl font-bold"
                                >
                                    Mark Complete
                                </button>

                                <button
                                    onClick={() =>
                                        deleteAssignment(selected.id)
                                    }
                                    className="bg-red-500 text-white py-2 rounded-xl font-bold"
                                >
                                    Delete Assignment
                                </button>

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-700 py-2 rounded-xl"
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default Assignments;