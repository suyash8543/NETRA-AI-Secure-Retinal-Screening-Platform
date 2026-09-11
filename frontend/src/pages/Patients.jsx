import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  Plus,
  Eye,
  MoreVertical,
  UserRound,
} from "lucide-react";

const patients = [
  {
    id: "NET-1024",
    name: "Ramesh Kumar",
    age: 56,
    gender: "Male",
    lastScreening: "02 Sep 2026",
    result: "Moderate DR",
    risk: "High",
  },
  {
    id: "NET-1023",
    name: "Savitri Devi",
    age: 61,
    gender: "Female",
    lastScreening: "02 Sep 2026",
    result: "Mild DR",
    risk: "Medium",
  },
  {
    id: "NET-1022",
    name: "Mohan Lal",
    age: 48,
    gender: "Male",
    lastScreening: "02 Sep 2026",
    result: "No DR",
    risk: "Low",
  },
  {
    id: "NET-1021",
    name: "Sunita Sharma",
    age: 53,
    gender: "Female",
    lastScreening: "01 Sep 2026",
    result: "Severe DR",
    risk: "High",
  },
  {
    id: "NET-1020",
    name: "Rajesh Singh",
    age: 45,
    gender: "Male",
    lastScreening: "01 Sep 2026",
    result: "No DR",
    risk: "Low",
  },
  {
    id: "NET-1019",
    name: "Kamla Devi",
    age: 67,
    gender: "Female",
    lastScreening: "31 Aug 2026",
    result: "Proliferative DR",
    risk: "High",
  },
];

function Patients() {
  const [search, setSearch] = useState("");

  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getRiskStyle = (risk) => {
    if (risk === "High") {
      return "bg-red-50 text-red-600";
    }

    if (risk === "Medium") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-emerald-50 text-emerald-600";
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Patients
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage and monitor all registered patients.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md">
          <Plus size={18} />
          Add Patient
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-5 shadow-sm">
        <div className="flex flex-col md:flex-row gap-3">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search patient name or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-100 focus:border-teal-500 transition"
            />
          </div>

          {/* Risk Filter */}
          <select className="px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-600 outline-none focus:border-teal-500 bg-white">
            <option>All Risk Levels</option>
            <option>Low Risk</option>
            <option>Medium Risk</option>
            <option>High Risk</option>
          </select>
        </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

        {/* Table Header */}
        <div className="px-5 py-5 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-800">
            Patient Records
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            {filteredPatients.length} patients found
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">

            <thead>
              <tr className="bg-slate-50 text-left">

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Patient
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Patient ID
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Age / Gender
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Last Screening
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  AI Result
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Risk
                </th>

                <th className="px-5 py-4 text-xs font-bold text-slate-500 uppercase tracking-wide text-right">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-t border-slate-100 hover:bg-slate-50/70 transition"
                >

                  {/* Patient */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                        <UserRound
                          size={18}
                          className="text-teal-600"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {patient.name}
                        </p>

                        <p className="text-xs text-slate-400 mt-0.5">
                          Registered Patient
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* ID */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-600">
                      {patient.id}
                    </span>
                  </td>

                  {/* Age / Gender */}
                  <td className="px-5 py-4 text-sm text-slate-500">
                    {patient.age} / {patient.gender}
                  </td>

                  {/* Screening */}
                  <td className="px-5 py-4 text-sm text-slate-500">
                    {patient.lastScreening}
                  </td>

                  {/* AI Result */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-700">
                      {patient.result}
                    </span>
                  </td>

                  {/* Risk */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-3 py-1.5 rounded-full text-xs font-bold ${getRiskStyle(
                        patient.risk
                      )}`}
                    >
                      {patient.risk}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">

                      {/* View Patient */}
                      <Link
                        to={`/patients/${patient.id}`}
                        className="p-2.5 rounded-lg text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition"
                        title="View Patient"
                      >
                        <Eye size={18} />
                      </Link>

                      {/* More */}
                      <button
                        className="p-2.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition"
                        title="More Options"
                      >
                        <MoreVertical size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

              {/* No Patients */}
              {filteredPatients.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center"
                  >
                    <p className="text-sm font-medium text-slate-500">
                      No patients found
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      Try searching with a different name or ID.
                    </p>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Patients;