import {
  MoreHorizontal,
  Eye,
} from "lucide-react";

const screenings = [
  {
    id: "NET-1024",
    name: "Ramesh Kumar",
    age: 56,
    date: "02 Sep 2026",
    result: "Moderate DR",
    risk: "High",
    status: "Review Required",
  },
  {
    id: "NET-1023",
    name: "Savitri Devi",
    age: 61,
    date: "02 Sep 2026",
    result: "Mild DR",
    risk: "Medium",
    status: "Follow-up",
  },
  {
    id: "NET-1022",
    name: "Mohan Lal",
    age: 48,
    date: "02 Sep 2026",
    result: "No DR",
    risk: "Low",
    status: "Completed",
  },
  {
    id: "NET-1021",
    name: "Sunita Sharma",
    age: 53,
    date: "01 Sep 2026",
    result: "Severe DR",
    risk: "High",
    status: "Urgent",
  },
  {
    id: "NET-1020",
    name: "Rajesh Singh",
    age: 45,
    date: "01 Sep 2026",
    result: "No DR",
    risk: "Low",
    status: "Completed",
  },
];

function RecentScreenings() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Recent Screenings
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Latest patient screening results
          </p>
        </div>

        <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
              <th className="px-6 py-3 font-medium">Patient</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">AI Result</th>
              <th className="px-6 py-3 font-medium">Risk</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {screenings.map((patient) => (
              <tr
                key={patient.id}
                className="border-t border-slate-100 hover:bg-slate-50 transition"
              >
                {/* Patient */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                      <span className="text-sm font-semibold text-teal-700">
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        {patient.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {patient.id} · {patient.age} yrs
                      </p>
                    </div>

                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {patient.date}
                </td>

                {/* Result */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-700">
                    {patient.result}
                  </span>
                </td>

                {/* Risk */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      patient.risk === "High"
                        ? "bg-red-50 text-red-600"
                        : patient.risk === "Medium"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {patient.risk}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-500">
                    {patient.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button className="p-2 rounded-lg hover:bg-slate-100">
                    <MoreHorizontal
                      size={18}
                      className="text-slate-500"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default RecentScreenings;