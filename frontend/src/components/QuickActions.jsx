import {
  UserPlus,
  Camera,
  FilePlus2,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Patient",
    description: "Register a new patient",
    icon: UserPlus,
  },
  {
    title: "New Screening",
    description: "Start retinal screening",
    icon: Camera,
  },
  {
    title: "Generate Report",
    description: "Create patient report",
    icon: FilePlus2,
  },
];

function QuickActions() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      
      <h3 className="text-lg font-semibold text-slate-800">
        Quick Actions
      </h3>

      <p className="text-sm text-slate-500 mt-1 mb-5">
        Common tasks
      </p>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="w-full flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/50 transition text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                <Icon
                  size={19}
                  className="text-teal-600"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-700">
                  {action.title}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={16}
                className="text-slate-400"
              />
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default QuickActions;