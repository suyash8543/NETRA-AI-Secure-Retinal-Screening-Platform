import {
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const urgentCases = [
  {
    name: "Sunita Sharma",
    id: "NET-1021",
    condition: "Severe DR",
    time: "12 min ago",
  },
  {
    name: "Ramesh Kumar",
    id: "NET-1024",
    condition: "Moderate DR",
    time: "28 min ago",
  },
  {
    name: "Kamla Devi",
    id: "NET-1017",
    condition: "Proliferative DR",
    time: "1 hr ago",
  },
];

function UrgentCases() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Urgent Cases
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Requires ophthalmologist review
          </p>
        </div>

        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
          <AlertTriangle
            size={20}
            className="text-red-500"
          />
        </div>
      </div>

      <div className="space-y-3">
        {urgentCases.map((patient) => (
          <div
            key={patient.id}
            className="p-3 rounded-xl border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition"
          >
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {patient.name}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  {patient.id} · {patient.condition}
                </p>
              </div>

              <ArrowRight
                size={17}
                className="text-slate-400"
              />

            </div>

            <p className="text-[11px] text-slate-400 mt-2">
              Detected {patient.time}
            </p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition">
        View Referral Queue
      </button>

    </div>
  );
}

export default UrgentCases;