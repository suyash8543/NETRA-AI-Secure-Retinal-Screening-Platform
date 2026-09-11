import StatCard from "../components/StatCard";

import SeverityChart from "../components/SeverityChart";
import ScreeningTrend from "../components/ScreeningTrend";
import RiskOverview from "../components/RiskOverview";

import RecentScreenings from "../components/RecentScreenings";
import UrgentCases from "../components/UrgentCases";
import AIInsights from "../components/AIInsights";
import QuickActions from "../components/QuickActions";

function Dashboard() {
  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Here's an overview of your screening activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Patients"
          value="1,248"
          change="12.5%"
          subtitle="from last month"
          type="patients"
        />

        <StatCard
          title="Today's Screenings"
          value="32"
          change="8.3%"
          subtitle="from yesterday"
          type="screenings"
        />

        <StatCard
          title="High Risk Cases"
          value="7"
          change="16.7%"
          subtitle="from yesterday"
          type="risk"
        />

        <StatCard
          title="Reports Generated"
          value="108"
          change="20.4%"
          subtitle="from yesterday"
          type="reports"
        />
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        <SeverityChart />
        <ScreeningTrend />
        <RiskOverview />
      </div>

      {/* Recent Screenings */}
      <div className="mt-6">
        <RecentScreenings />
      </div>

      {/* Bottom Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div>
          <UrgentCases />
        </div>

        <div>
          <AIInsights />
        </div>

        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;