import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", screenings: 18 },
  { day: "Tue", screenings: 25 },
  { day: "Wed", screenings: 21 },
  { day: "Thu", screenings: 32 },
  { day: "Fri", screenings: 28 },
  { day: "Sat", screenings: 38 },
  { day: "Sun", screenings: 32 },
];

function ScreeningTrend() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Screening Trend
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Number of screenings this week
          </p>
        </div>

        <select className="text-xs border border-slate-200 rounded-lg px-3 py-2 text-slate-600 outline-none">
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="screenings"
              stroke="#14b8a6"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#14b8a6",
              }}
              activeDot={{
                r: 6,
              }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ScreeningTrend;