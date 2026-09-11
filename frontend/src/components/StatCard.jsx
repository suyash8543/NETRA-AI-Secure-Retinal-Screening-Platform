import {
  Users,
  Eye,
  AlertTriangle,
  FileText,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  patients: Users,
  screenings: Eye,
  risk: AlertTriangle,
  reports: FileText,
};

function StatCard({
  title,
  value,
  change,
  subtitle,
  type,
  positive = true,
}) {
  const Icon = iconMap[type];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            type === "risk"
              ? "bg-red-50 text-red-500"
              : "bg-teal-50 text-teal-600"
          }`}
        >
          <Icon size={23} strokeWidth={1.8} />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-center gap-2 mt-4">
        <div
          className={`flex items-center gap-1 text-xs font-semibold ${
            positive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          <TrendingUp size={14} />
          {change}
        </div>

        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>

    </div>
  );
}

export default StatCard;