import Sidebar from "../../components/layout/Sidebar";
import PlannerCard from "../../components/planner/PlannerCard";
import PersonalPlannerCard from '../../components/planner/PersonalCard.jsx'

function Planner() {
  return (
    <div className="flex bg-[#e8eaef] min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-72 p-10">
        <h1 className="text-6xl font-bold text-black mb-10">
          Planner
        </h1>

        {/* COMMON BOX */}
        <div className="bg-gradient-to-br from-[#7896d5] to-[#0f172a] border border-[#263043] rounded-3xl p-6 shadow-2xl">
          
          {/* Heading */}
          <div className="mb-6 border-b border-[#6e85b1] pb-4">
            <h2 className="text-3xl font-bold text-white">
              Today and Personal
            </h2>
          </div>

          {/* BOTH CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PlannerCard />
            <PersonalPlannerCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planner;