import {
  LayoutDashboard,
  Users,
  Camera,
  Brain,
  GitPullRequest,
  FileText,
  BarChart3,
  Lightbulb,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Patients",
      path: "/patients",
      icon: Users,
    },
    {
      name: "New Screening",
      path: "/new-screening",
      icon: Camera,
    },
    {
      name: "AI Analysis",
      path: "/ai-analysis",
      icon: Brain,
    },
    {
      name: "Referrals",
      path: "/referrals",
      icon: GitPullRequest,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      name: "Recommendations",
      path: "/recommendations",
      icon: Lightbulb,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 flex flex-col sticky top-0">

      {/* ================= LOGO ================= */}
      <div className="px-6 py-6 border-b border-slate-100">
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-teal-600 flex items-center justify-center shadow-sm">
            <Brain
              size={24}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              NETRA-AI
            </h1>

            <p className="text-xs text-slate-400">
              Retinal Screening
            </p>
          </div>

        </div>
      </div>


      {/* ================= MENU ================= */}
      <nav className="flex-1 px-4 py-5 overflow-y-auto">

        <p className="px-3 mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Main Menu
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >

                <Icon
                  size={19}
                  strokeWidth={2}
                />

                <span>{item.name}</span>

                {/* Referral badge */}
                {item.name === "Referrals" && (
                  <span className="ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-100 text-red-600">
                    3
                  </span>
                )}

                {/* Notification badge */}
                {item.name === "Notifications" && (
                  <span className="ml-auto px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-100 text-red-600">
                    3
                  </span>
                )}

              </NavLink>
            );
          })}

        </div>


        {/* ================= SUPPORT ================= */}
        <div className="mt-8">

          <p className="px-3 mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Support
          </p>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >

            <HelpCircle size={19} />

            <span>Help & Support</span>

          </NavLink>

        </div>

      </nav>


      {/* ================= USER PROFILE ================= */}
      <div className="p-4 border-t border-slate-100">

        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">

          {/* Avatar */}
          <div className="w-10 h-10 shrink-0 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
            {user?.name
              ? user.name
                  .replace("Dr. ", "")
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              : "DS"}
          </div>

          {/* User details */}
          <div className="flex-1 min-w-0">

            <p className="text-sm font-semibold text-slate-800 truncate">
              {user?.name || "Dr. Sharma"}
            </p>

            <p className="text-xs text-slate-400 truncate">
              {user?.role || "Ophthalmologist"}
            </p>

          </div>

          {/* LOGOUT BUTTON */}
          <button
            type="button"
            onClick={handleLogout}
            className="p-2 rounded-lg text-slate-400 hover:bg-white hover:text-red-500 transition"
            title="Logout"
          >
            <LogOut size={17} />
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;