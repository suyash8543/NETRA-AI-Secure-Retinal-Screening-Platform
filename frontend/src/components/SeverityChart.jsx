import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "No DR", value: 48 },
  { name: "Mild", value: 18 },
  { name: "Moderate", value: 15 },
  { name: "Severe", value: 12 },
  { name: "Proliferative", value: 7 },
];

function SeverityChart() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-800">
          DR Severity Distribution
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Distribution of detected diabetic retinopathy cases
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={[
                    "#14b8a6",
                    "#84cc16",
                    "#f59e0b",
                    "#f97316",
                    "#ef4444",
                  ][index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default SeverityChart;