import {
  Lightbulb,
  HeartPulse,
  CalendarCheck,
  UserRound,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";

const recommendations = [
  {
    patient: "Sunita Sharma",
    patientId: "NET-1021",
    age: 53,
    condition: "Severe DR",
    confidence: "94.2%",
    priority: "Urgent",
    recommendation:
      "Immediate ophthalmologist review recommended. Consider referral for further retinal evaluation.",
    action: "Refer Immediately",
  },
  {
    patient: "Ramesh Kumar",
    patientId: "NET-1024",
    age: 56,
    condition: "Moderate DR",
    confidence: "91.8%",
    priority: "High",
    recommendation:
      "Ophthalmologist review recommended with regular retinal monitoring and follow-up.",
    action: "Schedule Review",
  },
  {
    patient: "Kamla Devi",
    patientId: "NET-1019",
    age: 67,
    condition: "Proliferative DR",
    confidence: "96.4%",
    priority: "Urgent",
    recommendation:
      "Urgent specialist consultation recommended due to high-risk retinal findings.",
    action: "Refer Immediately",
  },
  {
    patient: "Savitri Devi",
    patientId: "NET-1023",
    age: 61,
    condition: "Mild DR",
    confidence: "88.4%",
    priority: "Medium",
    recommendation:
      "Routine ophthalmic follow-up recommended along with diabetes management.",
    action: "Schedule Follow-up",
  },
];

function PriorityBadge({ priority }) {
  const styles = {
    Urgent: "bg-red-50 text-red-700 border-red-100",
    High: "bg-orange-50 text-orange-700 border-orange-100",
    Medium: "bg-yellow-50 text-yellow-700 border-yellow-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${
        styles[priority]
      }`}
    >
      {priority === "Urgent" && <AlertTriangle size={13} />}
      {priority === "High" && <Activity size={13} />}
      {priority === "Medium" && <Clock3 size={13} />}

      {priority}
    </span>
  );
}

function RecommendationCard({ item }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-sm transition">

      {/* Top */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
            <UserRound size={21} className="text-teal-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-800">
              {item.patient}
            </h3>

            <p className="text-xs text-slate-400 mt-0.5">
              {item.patientId} • {item.age} years
            </p>
          </div>

        </div>

        <PriorityBadge priority={item.priority} />

      </div>

      {/* AI Result */}
      <div className="grid grid-cols-2 gap-3 mt-5">

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-400">
            AI Classification
          </p>

          <p className="text-sm font-bold text-slate-700 mt-1">
            {item.condition}
          </p>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-400">
            AI Confidence
          </p>

          <p className="text-sm font-bold text-teal-700 mt-1">
            {item.confidence}
          </p>
        </div>

      </div>

      {/* Recommendation */}
      <div className="mt-4 p-4 bg-teal-50 border border-teal-100 rounded-xl">

        <div className="flex gap-3">

          <Lightbulb
            size={19}
            className="text-teal-600 shrink-0 mt-0.5"
          />

          <div>
            <p className="text-xs font-bold text-teal-800 uppercase tracking-wide">
              AI Recommendation
            </p>

            <p className="text-sm text-teal-700 mt-1 leading-relaxed">
              {item.recommendation}
            </p>
          </div>

        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">

        <Link
          to={`/patients/${item.patientId}`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
        >
          View Patient
        </Link>

        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-semibold transition">
          {item.action}
          <ArrowRight size={16} />
        </button>

      </div>

    </div>
  );
}

function Recommendations() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <p className="text-sm font-medium text-teal-600 mb-1">
            AI Assistance
          </p>

          <h1 className="text-2xl font-bold text-slate-800">
            Recommendations
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            AI-assisted recommendations based on retinal screening results.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-100 rounded-xl">
          <CheckCircle2 size={17} className="text-emerald-600" />

          <span className="text-sm font-semibold text-emerald-700">
            AI Analysis Active
          </span>
        </div>

      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
            <Lightbulb size={20} className="text-teal-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Active Recommendations
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            18
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
            <AlertTriangle size={20} className="text-red-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Urgent Actions
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            3
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
            <CalendarCheck size={20} className="text-orange-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Follow-ups Due
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            11
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <HeartPulse size={20} className="text-emerald-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Patients Monitored
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            156
          </p>
        </div>

      </div>

      {/* Info */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-5">

        <div className="flex gap-4">

          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0">
            <Lightbulb size={21} className="text-teal-600" />
          </div>

          <div>
            <h2 className="font-bold text-teal-900">
              Explainable AI Recommendations
            </h2>

            <p className="text-sm text-teal-700 mt-1 leading-relaxed">
              Recommendations are generated from the AI screening result,
              confidence score and detected risk level. Final clinical
              decisions should be made by a qualified healthcare professional.
            </p>
          </div>

        </div>

      </div>

      {/* Recommendations */}
      <div>

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Recommended Actions
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Patients requiring attention or follow-up.
            </p>
          </div>

          <span className="text-sm font-medium text-slate-500">
            4 cases
          </span>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {recommendations.map((item) => (
            <RecommendationCard
              key={item.patientId}
              item={item}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Recommendations;