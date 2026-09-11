import {
  Search,
  Bell,
  ChevronDown,
  Globe,
} from "lucide-react";

function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      
      {/* Left - Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Good Morning, Dr. Saksham 👋
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Here's what's happening with your screenings today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search patients, reports..."
            className="w-72 h-11 pl-11 pr-4 rounded-full border border-slate-200 bg-slate-50 text-sm outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">
          <Bell size={19} className="text-slate-600" />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            3
          </span>
        </button>

        {/* Language */}
        <button className="h-11 px-4 rounded-full border border-slate-200 flex items-center gap-2 text-sm text-slate-600 hover:bg-slate-50 transition">
          <Globe size={17} />

          <span>English</span>

          <ChevronDown size={15} />
        </button>

        {/* Doctor Profile */}
        <div className="flex items-center gap-3 pl-2">
          
          <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
            <span className="text-lg font-semibold text-teal-700">
              DS
            </span>
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-800">
              Dr. Saksham
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Ophthalmologist
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;