import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function HabitTracker() {
    const months = [
        "January 2026",
        "February 2026",
        "March 2026",
        "April 2026",
        "May 2026",
        "June 2026",
        "July 2026",
        "August 2026",
        "September 2026",
        "October 2026",
        "November 2026",
        "December 2026",
    ];

    const today = new Date();
    const [monthIndex, setMonthIndex] = useState(today.getMonth());

    const [habits, setHabits] = useState([
        "Coding",
        "Cycling",
        "Driving",
        "Dance",
    ]);

    const [newHabit, setNewHabit] = useState("");
    const [showAdd, setShowAdd] = useState(false);

    const [habitData, setHabitData] = useState({});

    // ✅ WEEK START (SUNDAY → SATURDAY)
    const getWeek = () => {
        const current = new Date();
        const day = current.getDay(); // 0 = Sunday

        const sunday = new Date(current);
        sunday.setDate(current.getDate() - day);

        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return weekDays.map((d, i) => {
            const date = new Date(sunday);
            date.setDate(sunday.getDate() + i);

            return {
                day: d,
                dateObj: date,
                dateStr: date.toLocaleDateString("en-GB"),
                key: date.getDate(), // used for state storage
            };
        });
    };

    const week = getWeek();

    const toggleHabit = (dayKey, habit) => {
        setHabitData((prev) => ({
            ...prev,
            [dayKey]: {
                ...prev[dayKey],
                [habit]: !prev?.[dayKey]?.[habit],
            },
        }));
    };

    const addHabit = () => {
        if (!newHabit.trim()) return;

        setHabits([...habits, newHabit]);
        setNewHabit("");
        setShowAdd(false);
    };

    const deleteHabit = (habitName) => {
        setHabits(habits.filter((h) => h !== habitName));
    };

    // ✅ WEEK PROGRESS ONLY
    let total = week.length * habits.length;
    let done = 0;

    week.forEach((d) => {
        habits.forEach((h) => {
            if (habitData[d.key]?.[h]) done++;
        });
    });

    const progress = total ? Math.round((done / total) * 100) : 0;
    const streak = Math.floor(done / habits.length);

    const isTodayHighlight = (dateObj) =>
        dateObj.toDateString() === today.toDateString();

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-[#1f0d1f] via-[#020617] to-black text-white rounded-[30px] p-4 md:p-8">

                <div className="max-w-6xl mx-auto space-y-8">

                    {/* HEADER */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            🗓️ Habit Tracker
                        </h1>
                    </div>

                    {/* CALENDAR (UNCHANGED) */}
                    <div className="text-shadow-mauve-50 border border-[#dee1e6] rounded-3xl p-6">

                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={() =>
                                    setMonthIndex((p) => (p === 0 ? 11 : p - 1))
                                }
                                className="px-4 py-2 bg-[#1e293b] rounded-xl cursor-pointer"
                            >
                                ←
                            </button>

                            <h2 className="text-xl font-bold">
                                {months[monthIndex]}
                            </h2>

                            <button
                                onClick={() =>
                                    setMonthIndex((p) => (p === 11 ? 0 : p + 1))
                                }
                                className="px-4 py-2 bg-[#1e293b] rounded-xl cursor-pointer"
                            >
                                →
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 text-center text-sm">
                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                const highlight =
                                    today.getMonth() === monthIndex &&
                                    day === today.getDate();

                                return (
                                    <div
                                        key={i}
                                        className={`p-2 rounded-xl border cursor-pointer transition
                      ${highlight
                                                ? "bg-yellow-500 text-black font-bold"
                                                : "bg-[#111c33] border-[#2b3a55] hover:bg-green-500/20"
                                            }`}
                                    >
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* WEEKLY TABLE */}
                    <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                Weekly Habit Table
                            </h2>

                            <button
                                onClick={() => setShowAdd(!showAdd)}
                                className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
                            >
                                + Add Habit
                            </button>
                        </div>

                        {/* ADD HABIT */}
                        {showAdd && (
                            <div className="flex gap-2 mb-4">
                                <input
                                    value={newHabit}
                                    onChange={(e) => setNewHabit(e.target.value)}
                                    placeholder="Enter habit..."
                                    className="bg-[#1e293b] border border-[#2b3a55] px-3 py-2 rounded-xl w-full"
                                />
                                <button
                                    onClick={addHabit}
                                    className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold"
                                >
                                    Save
                                </button>
                            </div>
                        )}

                        {/* TABLE */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">

                                <thead>
                                    <tr className="text-gray-300 border-b border-gray-700">
                                        <th className="p-2 text-left">Day</th>
                                        <th className="p-2 text-left">Date</th>

                                        {habits.map((h) => (
                                            <th key={h} className="p-2">
                                                <div className="flex items-center justify-center gap-2 group">

                                                    <span>{h}</span>

                                                    {/* DELETE BUTTON (HIDDEN UNTIL HOVER) */}
                                                    <button
                                                        onClick={() => deleteHabit(h)}
                                                        className="opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-500"
                                                    >
                                                        ✕
                                                    </button>

                                                </div>
                                            </th>
                                        ))}

                                        <th className="p-2">Progress</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {week.map((d, i) => {
                                        const doneCount = habits.filter(
                                            (h) => habitData[d.key]?.[h]
                                        ).length;

                                        const rowProgress = habits.length
                                            ? Math.round(
                                                (doneCount / habits.length) * 100
                                            )
                                            : 0;

                                        return (
                                            <tr
                                                key={i}
                                                className={`border-b border-gray-800 ${isTodayHighlight(d.dateObj)
                                                        ? "bg-yellow-500/10"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="p-2">{d.day}</td>
                                                <td className="p-2">{d.dateStr}</td>

                                                {habits.map((h) => (
                                                    <td key={h} className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                habitData[d.key]?.[h] ||
                                                                false
                                                            }
                                                            onChange={() =>
                                                                toggleHabit(d.key, h)
                                                            }
                                                            className="w-5 h-5 accent-green-400"
                                                        />
                                                    </td>
                                                ))}

                                                <td className="p-2 text-center text-green-400 font-bold">
                                                    {rowProgress}%
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>

                    {/* SUMMARY */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 text-center">
                            <h3 className="text-lg font-bold">
                                Weekly Completion
                            </h3>
                            <p className="text-3xl text-green-400 font-bold">
                                {progress}%
                            </p>
                        </div>

                        <div className="bg-[#0f172a]/90 border border-[#22304b] rounded-3xl p-6 text-center">
                            <h3 className="text-lg font-bold">Streak</h3>
                            <p className="text-3xl text-yellow-400 font-bold">
                                {streak} days
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default HabitTracker;