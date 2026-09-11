import {
  Brain,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function AIInsights() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <div className="flex items-center gap-3 mb-5">
        
        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
          <Brain
            size={22}
            className="text-teal-600"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            AI Insights
          </h3>

          <p className="text-sm text-slate-500">
            Screening intelligence
          </p>
        </div>

      </div>

      <div className="space-y-4">

        <div className="flex gap-3">
          <CheckCircle2
            size={19}
            className="text-emerald-500 mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-medium text-slate-700">
              87% of today's images passed quality check
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Image quality is suitable for AI analysis.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Sparkles
            size={19}
            className="text-teal-500 mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-medium text-slate-700">
              7 high-risk cases detected
            </p>

            <p className="text-xs text-slate-400 mt-1">
              These cases have been added to the review queue.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Brain
            size={19}
            className="text-indigo-500 mt-0.5 shrink-0"
          />

          <div>
            <p className="text-sm font-medium text-slate-700">
              Average AI confidence: 91.8%
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Based on today's completed screenings.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AIInsights;