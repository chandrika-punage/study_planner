import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function AllClasses() {
    const [classes, setClasses] = useState([
        {
            id: 1,
            subject: "java",
            code: "CS30",
            teacher: "Sesha",
            days: ["Sun", "Thu"],
            time: "11:46 - 00:44",
            notes: "",
        },
        {
            id: 2,
            subject: "React",
            code: "CS35",
            teacher: "Sajida",
            days: [],
            time: "12:46 - 00:44",
            notes: "",
        },
        {
            id: 3,
            subject: "python",
            code: "py21",
            teacher: "Chandu",
            days: [],
            time: "No time set",
            notes: "",
        },
    ]);

    const [openModal, setOpenModal] = useState(false);
    const [editId, setEditId] = useState(null);

    const daysList = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    const emptyForm = {
        subject: "",
        code: "",
        teacher: "",
        days: [],
        startTime: "",
        endTime: "",
        notes: "",
    };

    const [form, setForm] = useState(emptyForm);

    // OPEN ADD
    const openAddModal = () => {
        setForm(emptyForm);
        setEditId(null);
        setOpenModal(true);
    };

    // OPEN EDIT
    const openEditModal = (cls) => {
        setForm({
            ...cls,
            days: cls.days || [],
            startTime: cls.startTime || "",
            endTime: cls.endTime || "",
        });
        setEditId(cls.id);
        setOpenModal(true);
    };

    // HANDLE DAYS CHECKBOX
    const toggleDay = (day) => {
        setForm((prev) => {
            const exists = prev.days.includes(day);

            return {
                ...prev,
                days: exists
                    ? prev.days.filter((d) => d !== day)
                    : [...prev.days, day],
            };
        });
    };

    // SAVE CLASS
    const saveClass = () => {
        if (!form.subject.trim()) return;

        const timeRange = `${form.startTime} - ${form.endTime}`;

        const newData = {
            ...form,
            time: timeRange,
        };

        if (editId) {
            setClasses((prev) =>
                prev.map((c) => (c.id === editId ? { ...newData, id: editId } : c))
            );
        } else {
            setClasses((prev) => [...prev, { ...newData, id: Date.now() }]);
        }

        setOpenModal(false);
        setForm(emptyForm);
        setEditId(null);
    };

    // DELETE
    const deleteClass = (id) => {
        setClasses(classes.filter((c) => c.id !== id));
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-[#1f0d1f] via-[#020617] to-black text-white p-6">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold">All Classes 🈴</h1>

                    <button
                        onClick={openAddModal}
                        className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
                    >
                        Add Manual Class
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {classes.map((c) => (
                        <div
                            key={c.id}
                            className="bg-[#0f172a] p-5 rounded-2xl border border-[#2b3a55] group relative"
                        >
                            {/* DELETE (hover only) */}
                            <button
                                onClick={() => deleteClass(c.id)}
                                className="absolute top-3 right-3 text-red-400 opacity-0 group-hover:opacity-100"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl font-bold capitalize">
                                {c.subject}
                            </h2>

                            <p className="text-gray-400">{c.code}</p>

                            <p className="mt-2">👨‍🏫 {c.teacher}</p>

                            <p>
                                📅 {Array.isArray(c.days) ? c.days.join(", ") : c.days}
                            </p>

                            <p className="mt-1">⏰ {c.time}</p>

                            <button
                                onClick={() => openEditModal(c)}
                                className="mt-4 w-full bg-[#1e293b] py-2 rounded-xl"
                            >
                                Edit Schedule
                            </button>
                        </div>
                    ))}

                </div>

                {/* MODAL */}
                {openModal && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                        <div className="bg-[#0f172a] w-[90%] max-w-xl p-6 rounded-2xl space-y-4">

                            <h2 className="text-2xl font-bold">
                                {editId ? "Edit Class" : "Add Class"}
                            </h2>

                            {/* CLASS NAME */}
                            <input
                                placeholder="Class Name"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm({ ...form, subject: e.target.value })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            {/* CODE */}
                            <input
                                placeholder="Course Code"
                                value={form.code}
                                onChange={(e) =>
                                    setForm({ ...form, code: e.target.value })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            {/* TEACHER */}
                            <input
                                placeholder="Teacher Name"
                                value={form.teacher}
                                onChange={(e) =>
                                    setForm({ ...form, teacher: e.target.value })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            {/* DAYS CHECKBOX */}
                            <div>
                                <p className="mb-2 font-semibold">Select Days:</p>

                                <div className="grid grid-cols-4 gap-2 text-sm">
                                    {daysList.map((day) => (
                                        <label
                                            key={day}
                                            className="flex items-center gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={form.days.includes(day)}
                                                onChange={() => toggleDay(day)}
                                            />
                                            {day}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* TIME */}
                            <div className="flex gap-2">
                                <input
                                    type="time"
                                    value={form.startTime}
                                    onChange={(e) =>
                                        setForm({ ...form, startTime: e.target.value })
                                    }
                                    className="w-full p-3 bg-[#1e293b] rounded-xl"
                                />

                                <input
                                    type="time"
                                    value={form.endTime}
                                    onChange={(e) =>
                                        setForm({ ...form, endTime: e.target.value })
                                    }
                                    className="w-full p-3 bg-[#1e293b] rounded-xl"
                                />
                            </div>

                            {/* NOTES */}
                            <textarea
                                placeholder="Extra notes..."
                                value={form.notes}
                                onChange={(e) =>
                                    setForm({ ...form, notes: e.target.value })
                                }
                                className="w-full p-3 bg-[#1e293b] rounded-xl"
                            />

                            {/* BUTTONS */}
                            <div className="flex justify-between pt-2">
                                <button
                                    onClick={() => setOpenModal(false)}
                                    className="px-4 py-2 bg-gray-700 rounded-xl"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={saveClass}
                                    className="px-4 py-2 bg-green-500 text-black font-bold rounded-xl"
                                >
                                    Save Class
                                </button>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default AllClasses;