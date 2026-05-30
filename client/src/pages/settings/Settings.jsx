import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";

function Settings() {
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(false);

    const [profile, setProfile] = useState({
        name: "Chandrika",
        email: "chandrika@example.com",
        role: "Student",
    });

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-[#354876] via-[#020617] to-black text-white p-6">

                <div className="max-w-5xl mx-auto space-y-8">

                    {/* HEADER */}
                    <h1 className="text-4xl font-bold">⚙️ Settings</h1>
                    <p className="text-gray-400">
                        Manage your profile, preferences, and app settings
                    </p>

                    {/* PROFILE SECTION */}
                    <div className="bg-[#111c33] p-6 rounded-2xl space-y-4">

                        <h2 className="text-xl font-bold">👤 Profile</h2>

                        <input
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full p-3 rounded-xl bg-[#1e293b]"
                        />

                        <input
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 rounded-xl bg-[#1e293b]"
                        />

                        <input
                            name="role"
                            value={profile.role}
                            onChange={handleChange}
                            placeholder="Role"
                            className="w-full p-3 rounded-xl bg-[#1e293b]"
                        />
                    </div>

                    {/* PREFERENCES */}
                    <div className="bg-[#111c33] p-6 rounded-2xl space-y-5">

                        <h2 className="text-xl font-bold">🎛 Preferences</h2>

                        {/* DARK MODE */}
                        <div className="flex justify-between items-center">
                            <span>Dark Mode</span>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`px-4 py-2 rounded-xl font-bold ${
                                    darkMode
                                        ? "bg-green-500 text-black"
                                        : "bg-gray-700"
                                }`}
                            >
                                {darkMode ? "ON" : "OFF"}
                            </button>
                        </div>

                        {/* NOTIFICATIONS */}
                        <div className="flex justify-between items-center">
                            <span>Notifications</span>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`px-4 py-2 rounded-xl font-bold ${
                                    notifications
                                        ? "bg-green-500 text-black"
                                        : "bg-gray-700"
                                }`}
                            >
                                {notifications ? "ON" : "OFF"}
                            </button>
                        </div>

                        {/* EMAIL ALERTS */}
                        <div className="flex justify-between items-center">
                            <span>Email Alerts</span>
                            <button
                                onClick={() => setEmailAlerts(!emailAlerts)}
                                className={`px-4 py-2 rounded-xl font-bold ${
                                    emailAlerts
                                        ? "bg-green-500 text-black"
                                        : "bg-gray-700"
                                }`}
                            >
                                {emailAlerts ? "ON" : "OFF"}
                            </button>
                        </div>
                    </div>

                    {/* ACCOUNT ACTIONS */}
                    <div className="bg-[#111c33] p-6 rounded-2xl space-y-4">

                        <h2 className="text-xl font-bold">🔐 Account</h2>

                        <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">
                            Change Password
                        </button>

                        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-bold">
                            Delete Account
                        </button>
                    </div>

                    {/* SAVE BUTTON */}
                    <div className="text-center">
                        <button className="bg-green-500 text-black px-8 py-3 rounded-xl font-bold">
                            Save Settings
                        </button>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default Settings;