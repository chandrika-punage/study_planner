import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

function WeeklyAnalytics() {
    // ---------------- DUMMY DATA ----------------

    const [stats] = useState({
        totalTasks: 24,
        completedTasks: 17,
        studyHours: 18,
    });

    const completionRate = Math.round(
        (stats.completedTasks / stats.totalTasks) * 100
    );

    // PIE DATA
    const pieData = [
        { name: "Completed", value: stats.completedTasks },
        { name: "Pending", value: stats.totalTasks - stats.completedTasks },
    ];

    const COLORS = ["#22c55e", "#ef4444"];

    // BAR DATA
    const barData = [
        { day: "Mon", hours: 2 },
        { day: "Tue", hours: 3 },
        { day: "Wed", hours: 1 },
        { day: "Thu", hours: 4 },
        { day: "Fri", hours: 2 },
        { day: "Sat", hours: 5 },
        { day: "Sun", hours: 1 },
    ];

    const nextWeekTasks = [
        "Revise React",
        "Practice DSA Problems",
        "Complete Assignment",
    ];

    // ✅ ONLY ONE studyTable (STATE)
    const [studyTable, setStudyTable] = useState([
        { subject: "Math", hours: 4 },
        { subject: "DSA", hours: 6 },
        { subject: "React", hours: 5 },
        { subject: "Java", hours: 3 },
    ]);

    const [newSubject, setNewSubject] = useState("");
    const [newHours, setNewHours] = useState("");
    const [showAdd, setShowAdd] = useState(false);

    // ADD
    const addStudy = () => {
        if (!newSubject.trim() || !newHours.trim()) return;

        setStudyTable([
            ...studyTable,
            { subject: newSubject, hours: Number(newHours) },
        ]);

        setNewSubject("");
        setNewHours("");
        setShowAdd(false);
    };

    // DELETE
    const deleteStudy = (index) => {
        setStudyTable(studyTable.filter((_, i) => i !== index));
    };

    //Weekly Reset
    const resetWeek = () => {
        setStudyTable([
            { subject: "Math", hours: 4 },
            { subject: "DSA", hours: 6 },
            { subject: "React", hours: 5 },
            { subject: "Java", hours: 3 },
        ]);

        setNewSubject("");
        setNewHours("");
        setShowAdd(false);
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white p-6">

                <div className="max-w-6xl mx-auto space-y-8">

                    <h1 className="text-4xl font-bold"> Weekend Review 🌙</h1>

                    {/* SUMMARY */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#111c33] p-5 rounded-2xl text-center">
                            <h2>Total Tasks</h2>
                            <p className="text-3xl text-green-400 font-bold">{stats.totalTasks}</p>
                        </div>

                        <div className="bg-[#111c33] p-5 rounded-2xl text-center">
                            <h2>Completed</h2>
                            <p className="text-3xl text-blue-400 font-bold">{stats.completedTasks}</p>
                        </div>

                        <div className="bg-[#111c33] p-5 rounded-2xl text-center">
                            <h2>Study Hours</h2>
                            <p className="text-3xl text-yellow-400 font-bold">{stats.studyHours}</p>
                        </div>

                        <div className="bg-[#111c33] p-5 rounded-2xl text-center">
                            <h2>Completion Rate</h2>
                            <p className="text-3xl text-pink-400 font-bold">{completionRate}%</p>
                        </div>
                    </div>

                    {/* CHARTS */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* PIE */}
                        <div className="bg-[#111c33] p-6 rounded-2xl">
                            <h2 className="mb-4 font-bold">📊 Weekly Summary</h2>

                            <div style={{ width: "100%", height: 300 }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                            {pieData.map((_, i) => (
                                                <Cell key={i} fill={COLORS[i]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* BAR */}
                        <div className="bg-[#111c33] p-6 rounded-2xl">
                            <h2 className="mb-4 font-bold">📈 Study Hours</h2>

                            <div style={{ width: "100%", height: 300 }}>
                                <ResponsiveContainer>
                                    <BarChart data={barData}>
                                        <XAxis dataKey="day" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="hours" fill="#3b82f6" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* 🧠 PLAN SECTION (FIXED) */}
                    <div className="bg-[#111c33] p-6 rounded-2xl">

                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold">🧠 Plan The Next Week</h2>

                            <button
                                onClick={() => setShowAdd(!showAdd)}
                                className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
                            >
                                Add
                            </button>
                        </div>

                        {/* FORM */}
                        {showAdd && (
                            <div className="flex gap-2 mb-4">
                                <input
                                    placeholder="Subject"
                                    value={newSubject}
                                    onChange={(e) => setNewSubject(e.target.value)}
                                    className="w-full p-2 rounded-xl bg-[#1e293b]"
                                />

                                <input
                                    placeholder="Hours"
                                    type="number"
                                    value={newHours}
                                    onChange={(e) => setNewHours(e.target.value)}
                                    className="w-24 p-2 rounded-xl bg-[#1e293b]"
                                />

                                <button
                                    onClick={addStudy}
                                    className="bg-yellow-500 text-black px-4 rounded-xl font-bold"
                                >
                                    Save
                                </button>
                            </div>
                        )}

                        {/* TABLE */}
                        <table className="w-full text-left">
                            <tbody>
                                {studyTable.map((item, i) => (
                                    <tr key={i} className="border-t border-gray-700 group">
                                        <td className="py-2">{item.subject}</td>
                                        <td>{item.hours}</td>

                                        <td className="text-right">
                                            <button
                                                onClick={() => deleteStudy(i)}
                                                className="text-red-400 opacity-0 group-hover:opacity-100 transition"
                                            >
                                                ✕
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        {/* WEEKLY RESET */}
                        {/* <div className="text-center mt-8">
                            <button
                                onClick={resetWeek}
                                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold text-white flex items-center gap-2 mx-auto"
                            >
                                ♻️ Weekly Reset
                            </button>
                        </div> */}

                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default WeeklyAnalytics;