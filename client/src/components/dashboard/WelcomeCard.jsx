import { Link } from "react-router-dom";

function WelcomeCard() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 text-white overflow-hidden relative">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-widest opacity-80">
          Student Productivity Platform
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
          Organize Your Study Life Efficiently
        </h1>

        <p className="mt-4 text-purple-100 text-lg">
          Track assignments, monitor progress, and build productive study habits.
        </p>

        <Link to="/study-sessions">
          <button className="mt-6 bg-white text-purple-700 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition cursor-pointer">
            Start Planning
          </button>
        </Link>
      </div>

      <div className="hidden lg:block absolute right-10 bottom-0 text-8xl opacity-20">
        📚
      </div>
    </div>
  );
}

export default WelcomeCard;