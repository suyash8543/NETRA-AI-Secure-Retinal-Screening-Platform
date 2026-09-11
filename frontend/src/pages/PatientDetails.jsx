import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  UserRound,
  Phone,
  MapPin,
  Calendar,
  Activity,
  Eye,
  Clock,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const patients = [
  {
    id: "NET-1024",
    name: "Ramesh Kumar",
    age: 56,
    gender: "Male",
    phone: "+91 98765 43210",
    location: "Rural Health Centre",
    registeredOn: "12 Aug 2026",
    diabetesDuration: "8 Years",
    lastScreening: "02 Sep 2026",
    result: "Moderate DR",
    risk: "High",
    confidence: "91.8%",
  },
  {
    id: "NET-1023",
    name: "Savitri Devi",
    age: 61,
    gender: "Female",
    phone: "+91 98765 12345",
    location: "Rural Health Centre",
    registeredOn: "18 Jul 2026",
    diabetesDuration: "11 Years",
    lastScreening: "02 Sep 2026",
    result: "Mild DR",
    risk: "Medium",
    confidence: "89.4%",
  },
  {
    id: "NET-1022",
    name: "Mohan Lal",
    age: 48,
    gender: "Male",
    phone: "+91 98765 67890",
    location: "Primary Health Centre",
    registeredOn: "05 Jun 2026",
    diabetesDuration: "5 Years",
    lastScreening: "02 Sep 2026",
    result: "No DR",
    risk: "Low",
    confidence: "94.2%",
  },
  {
    id: "NET-1021",
    name: "Sunita Sharma",
    age: 53,
    gender: "Female",
    phone: "+91 98765 24680",
    location: "Rural Health Centre",
    registeredOn: "20 May 2026",
    diabetesDuration: "10 Years",
    lastScreening: "01 Sep 2026",
    result: "Severe DR",
    risk: "High",
    confidence: "93.6%",
  },
  {
    id: "NET-1020",
    name: "Rajesh Singh",
    age: 45,
    gender: "Male",
    phone: "+91 98765 13579",
    location: "Primary Health Centre",
    registeredOn: "14 Apr 2026",
    diabetesDuration: "4 Years",
    lastScreening: "01 Sep 2026",
    result: "No DR",
    risk: "Low",
    confidence: "95.1%",
  },
  {
    id: "NET-1019",
    name: "Kamla Devi",
    age: 67,
    gender: "Female",
    phone: "+91 98765 11223",
    location: "Rural Health Centre",
    registeredOn: "02 Apr 2026",
    diabetesDuration: "15 Years",
    lastScreening: "31 Aug 2026",
    result: "Proliferative DR",
    risk: "High",
    confidence: "96.3%",
  },
];

function PatientDetails() {
  const { id } = useParams();

  const patient = patients.find(
    (item) => item.id === id
  );

  // Patient not found
  if (!patient) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
          <AlertTriangle
            size={28}
            className="text-red-500"
          />
        </div>

        <h2 className="text-xl font-bold text-slate-800">
          Patient Not Found
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          No patient exists with ID {id}.
        </p>

        <Link
          to="/patients"
          className="mt-5 flex items-center gap-2 bg-teal-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition"
        >
          <ArrowLeft size={17} />
          Back to Patients
        </Link>
      </div>
    );
  }

  return (
    <div>

      {/* Back */}
      <Link
        to="/patients"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 mb-5 transition"
      >
        <ArrowLeft size={17} />
        Back to Patients
      </Link>

      {/* Patient Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
              <UserRound
                size={30}
                className="text-teal-600"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                {patient.name}
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Patient ID:{" "}
                <span className="font-medium text-slate-600">
                  {patient.id}
                </span>
              </p>
            </div>

          </div>

          <RiskBadge risk={patient.risk} />

        </div>
      </div>

      {/* Main Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

        {/* Patient Information */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <h3 className="text-base font-bold text-slate-800 mb-6">
            Patient Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <InfoItem
              icon={UserRound}
              label="Age / Gender"
              value={`${patient.age} / ${patient.gender}`}
            />

            <InfoItem
              icon={Phone}
              label="Phone"
              value={patient.phone}
            />

            <InfoItem
              icon={MapPin}
              label="Location"
              value={patient.location}
            />

            <InfoItem
              icon={Calendar}
              label="Registered On"
              value={patient.registeredOn}
            />

            <InfoItem
              icon={Activity}
              label="Diabetes Duration"
              value={patient.diabetesDuration}
            />

            <InfoItem
              icon={Eye}
              label="Last Screening"
              value={patient.lastScreening}
            />

          </div>
        </div>

        {/* AI Result */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-bold text-slate-800">
              Current AI Result
            </h3>

            <ShieldCheck
              size={21}
              className="text-teal-600"
            />
          </div>

          <div
            className={`rounded-xl p-5 ${
              patient.risk === "High"
                ? "bg-red-50"
                : patient.risk === "Medium"
                ? "bg-amber-50"
                : "bg-emerald-50"
            }`}
          >

            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              DR Severity
            </p>

            <p
              className={`text-2xl font-bold mt-2 ${
                patient.risk === "High"
                  ? "text-red-600"
                  : patient.risk === "Medium"
                  ? "text-amber-600"
                  : "text-emerald-600"
              }`}
            >
              {patient.result}
            </p>

            {/* Confidence */}
            <div className="mt-5">

              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-500">
                  AI Confidence
                </span>

                <span className="font-bold text-slate-700">
                  {patient.confidence}
                </span>
              </div>

              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    patient.risk === "High"
                      ? "bg-red-500"
                      : patient.risk === "Medium"
                      ? "bg-amber-500"
                      : "bg-emerald-500"
                  }`}
                  style={{
                    width: patient.confidence,
                  }}
                />
              </div>

            </div>
          </div>

          <Link
            to={`/ai-analysis?patient=${patient.id}`}
            className="w-full mt-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold flex items-center justify-center transition"
          >
            View AI Analysis
          </Link>

        </div>
      </div>

      {/* Screening History */}
      <div className="bg-white border border-slate-200 rounded-2xl mt-5 overflow-hidden shadow-sm">

        <div className="p-6 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">
            Screening History
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            Previous retinal screening results
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px]">

            <thead>
              <tr className="bg-slate-50 text-left">

                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Eye
                </th>

                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Result
                </th>

                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Confidence
                </th>

                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              <ScreeningRow
                date={patient.lastScreening}
                eye="Both Eyes"
                result={patient.result}
                confidence={patient.confidence}
                status={
                  patient.risk === "High"
                    ? "Review Required"
                    : patient.risk === "Medium"
                    ? "Follow-up"
                    : "Completed"
                }
              />

              <ScreeningRow
                date="15 Jun 2026"
                eye="Both Eyes"
                result="Mild DR"
                confidence="89.4%"
                status="Follow-up"
              />

              <ScreeningRow
                date="12 Mar 2026"
                eye="Both Eyes"
                result="Mild DR"
                confidence="87.6%"
                status="Completed"
              />

            </tbody>
          </table>

        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-slate-200 rounded-2xl mt-5 p-6 shadow-sm">

        <h3 className="text-base font-bold text-slate-800 mb-5">
          Recent Activity
        </h3>

        <div className="flex items-start gap-3">

          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
            <Clock
              size={18}
              className="text-teal-600"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Screening completed
            </p>

            <p className="text-xs text-slate-400 mt-1">
              AI detected {patient.result}
            </p>

            <p className="text-xs text-slate-400 mt-1">
              {patient.lastScreening} • 10:42 AM
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

/* =====================================================
   SMALL COMPONENTS
   ===================================================== */

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
        <Icon
          size={18}
          className="text-slate-500"
        />
      </div>

      <div>
        <p className="text-xs text-slate-400">
          {label}
        </p>

        <p className="text-sm font-semibold text-slate-700 mt-0.5">
          {value}
        </p>
      </div>

    </div>
  );
}

function RiskBadge({ risk }) {
  const style =
    risk === "High"
      ? "bg-red-50 text-red-600"
      : risk === "Medium"
      ? "bg-amber-50 text-amber-600"
      : "bg-emerald-50 text-emerald-600";

  return (
    <span
      className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${style}`}
    >
      {risk} Risk
    </span>
  );
}

function ScreeningRow({
  date,
  eye,
  result,
  confidence,
  status,
}) {
  const statusStyle =
    status === "Review Required"
      ? "bg-red-50 text-red-600"
      : status === "Follow-up"
      ? "bg-amber-50 text-amber-600"
      : "bg-emerald-50 text-emerald-600";

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50/60 transition">

      <td className="px-6 py-4 text-sm text-slate-600">
        {date}
      </td>

      <td className="px-6 py-4 text-sm text-slate-600">
        {eye}
      </td>

      <td className="px-6 py-4 text-sm font-semibold text-slate-700">
        {result}
      </td>

      <td className="px-6 py-4 text-sm text-slate-600">
        {confidence}
      </td>

      <td className="px-6 py-4">
        <span
          className={`inline-flex px-3 py-1.5 rounded-full text-xs font-bold ${statusStyle}`}
        >
          {status}
        </span>
      </td>

    </tr>
  );
}

export default PatientDetails;