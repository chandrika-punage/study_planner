import {
  FaHome,
  FaTasks,
  FaChevronDown,
  FaChevronUp,
  FaSun,
  FaBookOpen,
  FaBullseye,
  FaHeartbeat,
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { AiFillFund } from "react-icons/ai";
import { FcPlanner } from "react-icons/fc";
import { ImBooks } from "react-icons/im";
import { MdAssignment } from "react-icons/md";
import { FcSettings } from "react-icons/fc";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Sidebar() {

  const [openTasks, setOpenTasks] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

  const activeClass =
    "bg-purple-600 px-5 py-4 rounded-2xl cursor-pointer transition duration-300";

  const normalClass =
    "hover:bg-[#241d30] hover:translate-x-1 px-5 py-4 rounded-2xl cursor-pointer transition duration-300";

  return (
    <>

      {/* MOBILE NAVBAR */}
      <div className="lg:hidden flex items-center justify-between bg-[#16111d] text-white px-5 py-4 shadow-md fixed top-0 left-0 w-full z-50">

        <h1 className="text-xl font-bold tracking-wide">
          StudyPlanner
        </h1>

        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* SIDEBAR */}
      <div
        className={`
          ${mobileMenu ? "flex" : "hidden"}
          lg:flex
          w-72
          h-screen
          fixed
          top-0
          left-0
          bg-[#16111d]
          text-white
          px-6
          py-8
          flex-col
          justify-between
          overflow-y-auto
          border-r
          border-[#2d3748]
          z-40
        `}
      >

        {/* TOP SECTION */}
        <div>

          {/* LOGO */}
          <h1 className="text-3xl font-bold mb-12 tracking-wide mt-10 lg:mt-0">
            StudyPlanner
          </h1>

          {/* MENU */}
          <div className="space-y-3">

            {/* DASHBOARD */}
            <Link to="/dashboard">
              <div
                className={`flex items-center gap-4 ${location.pathname === "/dashboard"
                  ? activeClass
                  : normalClass
                  }`}
              >
                <FaHome />

                <span className="font-medium">
                  Dashboard
                </span>
              </div>
            </Link>

            {/* PLANNER */}
            <Link to="/planner">
              <div
                className={`flex items-center gap-4 ${location.pathname === "/planner"
                  ? activeClass
                  : normalClass
                  }`}
              >
                <FcPlanner />

                <span className="font-medium">
                  Planner
                </span>
              </div>
            </Link>

            {/* TASKS DROPDOWN */}
            <div>

              <div
                onClick={() => setOpenTasks((prev) => !prev)}
                className="flex items-center justify-between hover:bg-[#241d30] hover:translate-x-1 px-5 py-4 rounded-2xl cursor-pointer transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <FaTasks className="text-blue-400" />
                  <span className="font-medium">Tasks</span>
                </div>

                {openTasks ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </div>

              {/* SUB MENU */}
              {openTasks && (
                <div className="ml-6 mt-3 space-y-2 border-l border-[#3b2f52] pl-5">

                  <Link to="/morning-routine" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition py-2">
                      <FaSun className="text-yellow-400" />
                      <span>Morning Routine</span>
                    </div>
                  </Link>

                  <Link to="/study-sessions" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition py-2">
                      <FaBookOpen className="text-pink-400" />
                      <span>Study Sessions</span>
                    </div>
                  </Link>

                  <Link to="/goals" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition py-2">
                      <FaBullseye className="text-green-400" />
                      <span>Goals</span>
                    </div>
                  </Link>

                  <Link to="/habit-tracker" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition py-2">
                      <FaHeartbeat className="text-red-400" />
                      <span>Habit Tracker</span>
                    </div>
                  </Link>

                  <Link to="/night-routine" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition py-2">
                      <FaMoon className="text-indigo-400" />
                      <span>Night Routine</span>
                    </div>
                  </Link>

                </div>
              )}
            </div>

            {/* ALL CLASSES */}
            <Link to="/allclasses">
            <div className={normalClass}>
              <div className="flex items-center gap-4">
                <ImBooks className="text-amber-600" />

                <span className="font-medium">
                  All Classes
                </span>
              </div>
            </div>
            </Link>

            {/* ASSIGNMENTS */}
            <Link to="/assignments">
            <div className={normalClass}>
              <div className="flex items-center gap-4">
                <MdAssignment className="text-gray-400" />
                <span className="font-medium">
                  Assignments
                </span>
              </div>
            </div>
            </Link>


            {/* WEEKLYTICS */}
            <Link to="/weeklytics">
            <div className={normalClass}>
              <div className="flex items-center gap-4">
                <AiFillFund className="text-green-500" />
                <span className="font-medium">
                  Weeklytics
                </span>
              </div>
            </div>
            </Link>


            {/* SETTINGS */}
            <Link to="/settings">
            <div className={normalClass}>
              <div className="flex items-center gap-4">
                <FcSettings />
                <span className="font-medium">
                  Settings
                </span>
              </div>
            </div>
            </Link>

          </div>

        </div>

        {/* BOTTOM CARD */}
        <div className="bg-gradient-to-br from-[#241d30] to-[#2d1f45] rounded-3xl p-5 mt-10 border border-[#3b2f52] shadow-lg">

          <p className="text-sm text-gray-300 leading-6">
            Keep tracking your progress and stay productive every day.
          </p>

        </div>

      </div>

    </>
  );
}

export default Sidebar;

