import {
  FileText,
  Download,
  Search,
  CalendarDays,
  Eye,
  Printer,
  Filter,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

const reportsData = [
  {
    id: "RPT-2026-1024",
    patient: "Ramesh Kumar",
    patientId: "NET-1024",
    date: "02 Sep 2026",
    result: "Moderate DR",
    confidence: "91.8%",
    status: "Review Required",
  },
  {
    id: "RPT-2026-1023",
    patient: "Savitri Devi",
    patientId: "NET-1023",
    date: "02 Sep 2026",
    result: "Mild DR",
    confidence: "88.4%",
    status: "Completed",
  },
  {
    id: "RPT-2026-1022",
    patient: "Mohan Lal",
    patientId: "NET-1022",
    date: "02 Sep 2026",
    result: "No DR",
    confidence: "96.2%",
    status: "Completed",
  },
  {
    id: "RPT-2026-1021",
    patient: "Sunita Sharma",
    patientId: "NET-1021",
    date: "01 Sep 2026",
    result: "Severe DR",
    confidence: "94.2%",
    status: "Urgent",
  },
  {
    id: "RPT-2026-1019",
    patient: "Kamla Devi",
    patientId: "NET-1019",
    date: "01 Sep 2026",
    result: "Proliferative DR",
    confidence: "96.4%",
    status: "Urgent",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-700",
    "Review Required": "bg-amber-50 text-amber-700",
    Urgent: "bg-red-50 text-red-700",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function ResultBadge({ result }) {
  let style = "bg-slate-100 text-slate-600";

  if (result === "No DR") {
    style = "bg-emerald-50 text-emerald-700";
  } else if (result === "Mild DR") {
    style = "bg-yellow-50 text-yellow-700";
  } else if (result === "Moderate DR") {
    style = "bg-orange-50 text-orange-700";
  } else {
    style = "bg-red-50 text-red-700";
  }

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${style}`}>
      {result}
    </span>
  );
}

function Reports() {
  const [search, setSearch] = useState("");

  const filteredReports = reportsData.filter(
    (report) =>
      report.patient.toLowerCase().includes(search.toLowerCase()) ||
      report.patientId.toLowerCase().includes(search.toLowerCase()) ||
      report.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <p className="text-sm font-medium text-teal-600 mb-1">
            Reports
          </p>

          <h1 className="text-2xl font-bold text-slate-800">
            Screening Reports
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            View, download and manage diabetic retinopathy screening reports.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-semibold transition shadow-sm">
          <FileText size={18} />
          Generate Report
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Total Reports
          </p>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            248
          </p>
          <p className="text-xs text-emerald-600 mt-1">
            +18 this week
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Completed
          </p>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            219
          </p>
          <p className="text-xs text-emerald-600 mt-1">
            88.3% of reports
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Pending Review
          </p>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            21
          </p>
          <p className="text-xs text-amber-600 mt-1">
            Requires attention
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-sm text-slate-500">
            Urgent Cases
          </p>
          <p className="text-2xl font-bold text-slate-800 mt-2">
            8
          </p>
          <p className="text-xs text-red-600 mt-1">
            Priority referrals
          </p>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4">

        <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

          <div className="relative flex-1 max-w-xl">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search patient, patient ID or report ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:bg-white focus:border-teal-400 transition"
            />

          </div>

          <div className="flex gap-2">

            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
              <CalendarDays size={17} />
              Date Range
            </button>

            <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition">
              <Filter size={17} />
              Filter
            </button>

          </div>

        </div>

      </div>

      {/* Reports Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">

          <div>
            <h2 className="font-bold text-slate-800">
              Recent Reports
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              {filteredReports.length} reports found
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
            <Download size={17} />
            Export
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Report
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Patient
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  AI Result
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Confidence
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {filteredReports.map((report) => (

                <tr
                  key={report.id}
                  className="hover:bg-slate-50 transition"
                >

                  {/* Report ID */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                        <FileText
                          size={19}
                          className="text-teal-600"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {report.id}
                        </p>

                        <p className="text-xs text-slate-400">
                          AI Screening Report
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Patient */}
                  <td className="px-6 py-4">

                    <p className="text-sm font-semibold text-slate-700">
                      {report.patient}
                    </p>

                    <p className="text-xs text-slate-400">
                      {report.patientId}
                    </p>

                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {report.date}
                  </td>

                  {/* Result */}
                  <td className="px-6 py-4">
                    <ResultBadge result={report.result} />
                  </td>

                  {/* Confidence */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">

                        <div
                          className="h-full bg-teal-500 rounded-full"
                          style={{
                            width: report.confidence,
                          }}
                        />

                      </div>

                      <span className="text-sm font-medium text-slate-600">
                        {report.confidence}
                      </span>

                    </div>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={report.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">

                    <div className="flex items-center justify-end gap-2">

                      <Link
                        to={`/patients/${report.patientId}`}
                        className="p-2 rounded-lg text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition"
                        title="View Patient"
                      >
                        <Eye size={17} />
                      </Link>

                      <button
                        className="p-2 rounded-lg text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition"
                        title="Download Report"
                      >
                        <Download size={17} />
                      </button>

                      <button
                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition"
                        title="Print Report"
                      >
                        <Printer size={17} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredReports.length === 0 && (
          <div className="py-16 text-center">

            <FileText
              size={40}
              className="mx-auto text-slate-300 mb-3"
            />

            <p className="font-semibold text-slate-600">
              No reports found
            </p>

            <p className="text-sm text-slate-400 mt-1">
              Try searching with another patient or report ID.
            </p>

          </div>
        )}

      </div>

      {/* Info Box */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">

        <div className="flex gap-3">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
            <FileText
              size={19}
              className="text-teal-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-teal-900">
              Explainable Screening Reports
            </h3>

            <p className="text-sm text-teal-700 mt-1 leading-relaxed">
              Each report can include the AI-generated diabetic retinopathy
              classification, confidence score, retinal image quality,
              explainability information and recommended next steps.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;