import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import DashboardLayout from "./layouts/DashboardLayout";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import NewScreening from "./pages/NewScreening";
import AIAnalysis from "./pages/AIAnalysis";
import Referrals from "./pages/Referrals";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Recommendations from "./pages/Recommendations";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function ProtectedRoutes() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <DashboardLayout />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= LOGIN ================= */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================= PROTECTED APPLICATION ================= */}

        <Route element={<ProtectedRoutes />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/patients/:id"
            element={<PatientDetails />}
          />

          <Route
            path="/help"
            element={<Help />}
          />

          <Route
            path="/new-screening"
            element={<NewScreening />}
          />

          <Route
            path="/ai-analysis"
            element={<AIAnalysis />}
          />

          <Route
            path="/referrals"
            element={<Referrals />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/recommendations"
            element={<Recommendations />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

        {/* ================= INVALID URL ================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;