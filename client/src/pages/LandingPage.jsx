import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Organize Your Student Life Efficiently
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Plan your studies, manage assignments, and boost productivity.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/login"
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white border px-6 py-3 rounded-2xl"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;