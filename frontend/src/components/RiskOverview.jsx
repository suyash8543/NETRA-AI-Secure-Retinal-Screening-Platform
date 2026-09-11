import {
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

function RiskOverview() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">
          Risk Level Overview
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Current patient risk distribution
        </p>
      </div>

      <div className="space-y-5">

        {/* Low */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-emerald-500"
              />

              <span className="text-sm font-medium text-slate-700">
                Low Risk
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-800">
              62%
            </span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full">
            <div
              className="h-2 bg-emerald-500 rounded-full"
              style={{ width: "62%" }}
            />
          </div>
        </div>

        {/* Medium */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <AlertCircle
                size={18}
                className="text-amber-500"
              />

              <span className="text-sm font-medium text-slate-700">
                Medium Risk
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-800">
              25%
            </span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full">
            <div
              className="h-2 bg-amber-500 rounded-full"
              style={{ width: "25%" }}
            />
          </div>
        </div>

        {/* High */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle
                size={18}
                className="text-red-500"
              />

              <span className="text-sm font-medium text-slate-700">
                High Risk
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-800">
              13%
            </span>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full">
            <div
              className="h-2 bg-red-500 rounded-full"
              style={{ width: "13%" }}
            />
          </div>
        </div>

      </div>

      {/* Bottom info */}
      <div className="mt-7 pt-5 border-t border-slate-100">
        <p className="text-xs text-slate-400">
          High-risk cases require ophthalmologist review.
        </p>
      </div>

    </div>
  );
}

export default RiskOverview;