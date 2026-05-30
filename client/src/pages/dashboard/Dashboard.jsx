import MainLayout from "../../layouts/MainLayout";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCard from "../../components/dashboard/StatsCard";
import ScheduleCard from "../../components/dashboard/ScheduleCard";
import AssignmentCard from "../../components/dashboard/AssignmentCard";
import HabitCard from "../../components/dashboard/HabitCard";
import ProductivityCard from "../../components/dashboard/ProductivityCard";
import CalendarWidget from "../../components/dashboard/CalendarWidget";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8 pb-24 lg:pb-0 max-w-7xl mx-auto">
        <WelcomeCard />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatsCard
            title="Study Hours"
            value="6h"
            color="bg-[#BEE9F7]"
          />

          <StatsCard
            title="Completed Tasks"
            value="18"
            color="bg-[#F8E98E]"
          />

          <StatsCard
            title="Assignments"
            value="4"
            color="bg-[#E8D9FF]"
          />

          <StatsCard
            title="Study Streak"
            value="15 Days"
            color="bg-[#FFD6D6]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScheduleCard />
          <AssignmentCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HabitCard />
          <ProductivityCard />
        </div>

        <CalendarWidget />
      </div>
    </MainLayout>
  );
}

export default Dashboard;