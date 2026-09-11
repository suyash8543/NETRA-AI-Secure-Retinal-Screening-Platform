import {
  ArrowLeft,
  AlertTriangle,
  Search,
  Filter,
  Eye,
  Clock3,
  UserRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const referrals = [
  {
    id: "NET-1021",
    name: "Sunita Sharma",
    age: 53,
    severity: "Severe DR",
    confidence: "94.2%",
    time: "12 min ago",
    priority: "Urgent",
    status: "Pending Review",
  },
  {
    id: "NET-1024",
    name: "Ramesh Kumar",
    age: 56,
    severity: "Moderate DR",
    confidence: "91.8%",
    time: "28 min ago",
    priority: "High",
    status: "Pending Review",
  },
  {
    id: "NET-1019",
    name: "Kamla Devi",
    age: 67,
    severity: "Proliferative DR",
    confidence: "96.4%",
    time: "1 hr ago",
    priority: "Urgent",
    status: "Pending Review",
  },
  {
    id: "NET-1017",
    name: "Mohan Devi",
    age: 62,
    severity: "Moderate DR",
    confidence: "89.6%",
    time: "2 hrs ago",
    priority: "High",
    status: "Assigned",
  },
  {
    id: "NET-1014",
    name: "Raj Kumar",
    age: 59,
    severity: "Severe DR",
    confidence: "93.1%",
    time: "3 hrs ago",
    priority: "Urgent",
    status: "Under Review",
  },
];

function Referrals() {
  return (
    <div>
      {/* Back */}
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 mb-5 transition"
      >
        <ArrowLeft size={17} />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Referrals
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage high-risk cases requiring ophthalmologist review.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2.5 rounded-xl">
          <AlertTriangle
            size={18}
            className="text-red-500"
          />

          <span className="text-sm font-semibold text-red-600">
            7 High-Risk Cases
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

        <ReferralStat
          title="Urgent"
          value="3"
          subtitle="Immediate review"
          type="urgent"
        />

        <ReferralStat
          title="High Priority"
          value="4"
          subtitle="Review required"
          type="high"
        />

        <ReferralStat
          title="Reviewed Today"
          value="12"
          subtitle="Cases completed"
          type="reviewed"
        />

      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

        {/* Toolbar */}
        <div className="p-5 border-b border-slate-200">

          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            <div className="relative w-full lg:w-80">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search patient or ID..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none"
              />
            </div>

            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
              <Filter size={17} />
              Filter
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Patient
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  AI Result
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Confidence
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Priority
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Time
                </th>

                <th className="text-right px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>
              {referrals.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70 transition"
                >

                  {/* Patient */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                        <UserRound
                          size={18}
                          className="text-teal-600"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-700">
                          {item.name}
                        </p>

                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.id} • {item.age} yrs
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* AI Result */}
                  <td className="px-6 py-4">

                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold ${
                        item.severity === "Proliferative DR"
                          ? "bg-red-100 text-red-700"
                          : item.severity === "Severe DR"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.severity}
                    </span>

                  </td>

                  {/* Confidence */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-700">
                      {item.confidence}
                    </span>
                  </td>

                  {/* Priority */}
                  <td className="px-6 py-4">

                    <PriorityBadge priority={item.priority} />

                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <StatusBadge status={item.status} />

                  </td>

                  {/* Time */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock3 size={15} />
                      {item.time}
                    </div>

                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">

                    <Link
                      to={`/patients/${item.id}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 text-xs font-bold transition"
                    >
                      <Eye size={15} />
                      Review
                    </Link>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">

          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-700">
              5
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-700">
              7
            </span>{" "}
            high-risk cases
          </p>

          <button className="flex items-center gap-2 text-xs font-bold text-teal-600 hover:text-teal-700">
            View All
            <ArrowRight size={15} />
          </button>

        </div>
      </div>

      {/* Info */}
      <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5">

        <div className="flex items-start gap-3">

          <CheckCircle2
            size={19}
            className="text-blue-500 mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-bold text-blue-700">
              Automated Referral Workflow
            </p>

            <p className="text-xs text-blue-600 mt-1 leading-relaxed">
              Cases classified as Moderate DR, Severe DR, or
              Proliferative DR are automatically added to the
              ophthalmologist review queue. Final clinical decisions
              remain with the qualified healthcare professional.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

/* =====================================================
   REFERRAL STAT
   ===================================================== */

function ReferralStat({
  title,
  value,
  subtitle,
  type,
}) {
  const styles = {
    urgent: {
      box: "bg-red-50 border-red-100",
      value: "text-red-600",
    },
    high: {
      box: "bg-amber-50 border-amber-100",
      value: "text-amber-600",
    },
    reviewed: {
      box: "bg-emerald-50 border-emerald-100",
      value: "text-emerald-600",
    },
  };

  return (
    <div
      className={`border rounded-2xl p-5 ${styles[type].box}`}
    >
      <p className="text-sm font-semibold text-slate-600">
        {title}
      </p>

      <p
        className={`text-3xl font-bold mt-1 ${styles[type].value}`}
      >
        {value}
      </p>

      <p className="text-xs text-slate-500 mt-1">
        {subtitle}
      </p>
    </div>
  );
}

/* =====================================================
   PRIORITY BADGE
   ===================================================== */

function PriorityBadge({ priority }) {
  const urgent = priority === "Urgent";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
        urgent
          ? "bg-red-50 text-red-600"
          : "bg-amber-50 text-amber-600"
      }`}
    >
      {priority}
    </span>
  );
}

/* =====================================================
   STATUS BADGE
   ===================================================== */

function StatusBadge({ status }) {
  const styles = {
    "Pending Review": "bg-red-50 text-red-600",
    Assigned: "bg-blue-50 text-blue-600",
    "Under Review": "bg-purple-50 text-purple-600",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
        styles[status] || "bg-slate-50 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}

export default Referrals;