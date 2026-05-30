import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Planner from "../pages/planner/Planner";
import MorningRoutine from "../components/tasks/MorningRoutine.jsx"
import StudySessions from "../components/tasks/StudySessions.jsx";
import Goals from '../components/tasks/Goals.jsx'
import HabitTracker from '../components/tasks/HabitTracker.jsx'
import NightRoutine from '../components/tasks/NightRoutine.jsx'
import AllClasses from '../components/allclasses/allclasses.jsx'
import Assignments from '../components/assignment/assignment.jsx'
import WeeklyAnalytics from '../components/weeklytics/weeklytics.jsx'
import Settings from '../components/settings/settings.jsx'



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/planner"
          element={
            <ProtectedRoute>
              <Planner />
            </ProtectedRoute>
          }
        />

        <Route
          path="/morning-routine"
          element={
            <ProtectedRoute>
              <MorningRoutine />
            </ProtectedRoute>
          }
        />

        
        <Route
          path="/study-sessions"
          element={
            <ProtectedRoute>
              <StudySessions />
            </ProtectedRoute>
          }
        />


        <Route
          path="/goals"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/habit-tracker"
          element={
            <ProtectedRoute>
              <HabitTracker />
            </ProtectedRoute>
          }
        />

         <Route
          path="/night-routine"
          element={
            <ProtectedRoute>
              <NightRoutine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allclasses"
          element={
            <ProtectedRoute>
              <AllClasses />
            </ProtectedRoute>
          }
        />

         <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <Assignments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/weeklytics"
          element={
            <ProtectedRoute>
              <WeeklyAnalytics />
            </ProtectedRoute>
          }
        />


        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        


      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;