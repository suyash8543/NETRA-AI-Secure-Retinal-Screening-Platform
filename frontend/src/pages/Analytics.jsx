import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  AlertTriangle,
  CalendarDays,
  Download,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";

const screeningData = [
  { month: "Jan", screenings: 120 },
  { month: "Feb", screenings: 165 },
  { month: "Mar", screenings: 142 },
  { month: "Apr", screenings: 198 },
  { month: "May", screenings: 225 },
  { month: "Jun", screenings: 248 },
  { month: "Jul", screenings: 276 },
  { month: "Aug", screenings: 312 },
];

const severityData = [
  { name: "No DR", value: 48 },
  { name: "Mild", value: 18 },
  { name: "Moderate", value: 15 },
  { name: "Severe", value: 12 },
  { name: "Proliferative", value: 7 },
];

const weeklyData = [
  { day: "Mon", screenings: 18, referrals: 3 },
  { day: "Tue", screenings: 25, referrals: 5 },
  { day: "Wed", screenings: 21, referrals: 4 },
  { day: "Thu", screenings: 32, referrals: 7 },
  { day: "Fri", screenings: 28, referrals: 6 },
  { day: "Sat", screenings: 38, referrals: 8 },
  { day: "Sun", screenings: 32, referrals: 5 },
];

const severityColors = [
  "#10b981",
  "#eab308",
  "#f97316",
  "#ef4444",
  "#991b1b",
];

function AnalyticsStat({ icon: Icon, title, value, change, description }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-start justify-between">

        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
          <Icon size={21} className="text-teal-600" />
        </div>

        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
          {change}
        </span>

      </div>

      <p className="text-sm text-slate-500 mt-4">
        {title}
      </p>

      <p className="text-2xl font-bold text-slate-800 mt-1">
        {value}
      </p>

      <p className="text-xs text-slate-400 mt-1">
        {description}
      </p>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <p className="text-sm font-medium text-teal-600 mb-1">
            Analytics
          </p>

          <h1 className="text-2xl font-bold text-slate-800">
            Screening Analytics
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Monitor screening activity, disease severity and referral trends.
          </p>
        </div>

        <div className="flex gap-2">

          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
            <CalendarDays size={17} />
            Last 30 Days
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-semibold transition">
            <Download size={17} />
            Export
          </button>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <AnalyticsStat
          icon={Users}
          title="Total Patients"
          value="1,284"
          change="+12.5%"
          description="Compared to last month"
        />

        <AnalyticsStat
          icon={Eye}
          title="Total Screenings"
          value="1,686"
          change="+18.2%"
          description="Screenings completed"
        />

        <AnalyticsStat
          icon={AlertTriangle}
          title="High Risk Cases"
          value="219"
          change="+8.4%"
          description="Moderate or above"
        />

        <AnalyticsStat
          icon={TrendingUp}
          title="Referral Rate"
          value="13.0%"
          change="+2.1%"
          description="Patients referred"
        />

      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Screening Growth */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="font-bold text-slate-800">
                Screening Growth
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Monthly screening activity
              </p>
            </div>

            <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
              <TrendingUp size={18} className="text-teal-600" />
            </div>

          </div>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={screeningData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="screenings"
                  fill="#0d9488"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Severity Distribution */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="font-bold text-slate-800">
                DR Severity Distribution
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Classification of screened patients
              </p>
            </div>

            <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
              <AlertTriangle size={18} className="text-red-500" />
            </div>

          </div>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={severityData}
                  cx="50%"
                  cy="45%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >

                  {severityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={severityColors[index]}
                    />
                  ))}

                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{
                    fontSize: "12px",
                  }}
                />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* Weekly Activity */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="font-bold text-slate-800">
              Weekly Screening & Referral Activity
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Screening volume compared with referrals
            </p>
          </div>

          <BarChart3 size={20} className="text-slate-400" />

        </div>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="screenings"
                stroke="#0d9488"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              <Line
                type="monotone"
                dataKey="referrals"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">

          <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
            Screening Coverage
          </p>

          <p className="text-2xl font-bold text-teal-900 mt-2">
            78.4%
          </p>

          <p className="text-sm text-teal-700 mt-1">
            Eligible patients screened this month.
          </p>

        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">

          <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
            Referral Increase
          </p>

          <p className="text-2xl font-bold text-orange-900 mt-2">
            14.8%
          </p>

          <p className="text-sm text-orange-700 mt-1">
            Increase in high-risk referrals compared to last month.
          </p>

        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">

          <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">
            AI Accuracy
          </p>

          <p className="text-2xl font-bold text-emerald-900 mt-2">
            91.8%
          </p>

          <p className="text-sm text-emerald-700 mt-1">
            Average AI confidence across recent screenings.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Analytics;