import {
  User,
  Bell,
  ShieldCheck,
  Globe,
  Database,
  Save,
  Camera,
  Lock,
} from "lucide-react";

import { useState } from "react";

function Settings() {
  const [language, setLanguage] = useState("English");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [urgentAlerts, setUrgentAlerts] = useState(true);
  const [followUpAlerts, setFollowUpAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <p className="text-sm font-medium text-teal-600 mb-1">
          Settings
        </p>

        <h1 className="text-2xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Manage your profile, notifications, language and security settings.
        </p>
      </div>

      {/* Profile */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
            <User size={19} className="text-teal-600" />
          </div>

          <div>
            <h2 className="font-bold text-slate-800">
              Profile Information
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Manage your professional profile.
            </p>
          </div>
        </div>

        <div className="p-6">

          <div className="flex flex-col sm:flex-row gap-6">

            {/* Avatar */}
            <div className="flex flex-col items-center gap-2">

              <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-teal-700">
                  DS
                </span>
              </div>

              <button className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700">
                <Camera size={14} />
                Change Photo
              </button>

            </div>

            {/* Inputs */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="Dr. Sharma"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:bg-white focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Role
                </label>

                <input
                  type="text"
                  defaultValue="Ophthalmologist"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:bg-white focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  defaultValue="doctor@netra-ai.org"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:bg-white focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:bg-white focus:border-teal-400"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Notifications */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <Bell size={19} className="text-blue-600" />
          </div>

          <div>
            <h2 className="font-bold text-slate-800">
              Notification Preferences
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Choose which alerts you want to receive.
            </p>
          </div>

        </div>

        <div className="divide-y divide-slate-100">

          <SettingToggle
            title="Urgent Case Alerts"
            description="Get notified when a high-risk or urgent DR case is detected."
            checked={urgentAlerts}
            onChange={setUrgentAlerts}
          />

          <SettingToggle
            title="Follow-up Reminders"
            description="Receive reminders for patients due for follow-up screening."
            checked={followUpAlerts}
            onChange={setFollowUpAlerts}
          />

          <SettingToggle
            title="Email Notifications"
            description="Receive important NETRA-AI updates through email."
            checked={emailAlerts}
            onChange={setEmailAlerts}
          />

        </div>

      </div>

      {/* Language & System */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Language */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <Globe size={19} className="text-purple-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                Language
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Choose your preferred interface language.
              </p>
            </div>

          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 bg-slate-50 focus:bg-white focus:border-teal-400"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Telugu</option>
            <option>Tamil</option>
          </select>

          <p className="text-xs text-slate-400 mt-3">
            Multilingual support can help health workers in rural areas.
          </p>

        </div>

        {/* Data */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Database size={19} className="text-emerald-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                Data & Sync
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Screening data synchronization status.
              </p>
            </div>

          </div>

          <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl">

            <div className="flex items-center gap-3">

              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

              <div>
                <p className="text-sm font-semibold text-emerald-800">
                  System Online
                </p>

                <p className="text-xs text-emerald-600">
                  Data synced successfully
                </p>
              </div>

            </div>

            <span className="text-xs font-bold text-emerald-700">
              Synced
            </span>

          </div>

        </div>

      </div>

      {/* Security */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
            <ShieldCheck size={19} className="text-orange-600" />
          </div>

          <div>
            <h2 className="font-bold text-slate-800">
              Security
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Manage account security.
            </p>
          </div>

        </div>

        <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <Lock size={18} className="text-slate-600" />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700">
                Account Password
              </p>

              <p className="text-xs text-slate-400">
                Last changed 30 days ago
              </p>
            </div>

          </div>

          <button className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
            Change Password
          </button>

        </div>

      </div>

      {/* Save */}
      <div className="flex items-center justify-end gap-3">

        {saved && (
          <span className="text-sm font-medium text-emerald-600">
            Settings saved successfully ✓
          </span>
        )}

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-sm font-bold transition shadow-sm"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>

    </div>
  );
}

function SettingToggle({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="px-6 py-5 flex items-center justify-between gap-5">

      <div>
        <p className="text-sm font-semibold text-slate-700">
          {title}
        </p>

        <p className="text-xs text-slate-400 mt-1">
          {description}
        </p>
      </div>

      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition shrink-0 ${
          checked ? "bg-teal-600" : "bg-slate-300"
        }`}
        aria-label={`Toggle ${title}`}
      >

        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition ${
            checked ? "left-6" : "left-1"
          }`}
        />

      </button>

    </div>
  );
}

export default Settings;