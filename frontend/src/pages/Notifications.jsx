import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  CalendarClock,
  UserRound,
  ShieldAlert,
  Check,
  Settings,
} from "lucide-react";

import { useState } from "react";

const initialNotifications = [
  {
    id: 1,
    type: "urgent",
    title: "Urgent Referral Required",
    message:
      "Sunita Sharma (NET-1021) has been classified with Severe DR. Immediate ophthalmologist review is recommended.",
    time: "12 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "review",
    title: "AI Analysis Ready",
    message:
      "Ramesh Kumar (NET-1024) screening analysis is complete with 91.8% confidence. Review is required.",
    time: "28 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "appointment",
    title: "Follow-up Due",
    message:
      "Savitri Devi (NET-1023) is due for a retinal follow-up appointment.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "success",
    title: "Screening Completed",
    message:
      "Mohan Lal (NET-1022) screening has been completed successfully. No DR detected.",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "system",
    title: "Daily Screening Summary",
    message:
      "32 screenings were completed today with 5 high-risk cases identified.",
    time: "3 hours ago",
    unread: false,
  },
];

function NotificationIcon({ type }) {
  const config = {
    urgent: {
      icon: ShieldAlert,
      style: "bg-red-50 text-red-600",
    },
    review: {
      icon: AlertTriangle,
      style: "bg-orange-50 text-orange-600",
    },
    appointment: {
      icon: CalendarClock,
      style: "bg-blue-50 text-blue-600",
    },
    success: {
      icon: CheckCircle2,
      style: "bg-emerald-50 text-emerald-600",
    },
    system: {
      icon: Settings,
      style: "bg-slate-100 text-slate-600",
    },
  };

  const selected = config[type] || config.system;
  const Icon = selected.icon;

  return (
    <div
      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${selected.style}`}
    >
      <Icon size={20} />
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <p className="text-sm font-medium text-teal-600 mb-1">
            Notifications
          </p>

          <h1 className="text-2xl font-bold text-slate-800">
            Notifications
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Stay updated with screenings, referrals and system activity.
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
        >
          <Check size={17} />
          Mark all as read
        </button>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
            <Bell size={20} className="text-teal-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Total Notifications
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            {notifications.length}
          </p>

        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
            <AlertTriangle size={20} className="text-red-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Unread
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            {unreadCount}
          </p>

        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <CheckCircle2 size={20} className="text-emerald-600" />
          </div>

          <p className="text-sm text-slate-500 mt-4">
            Read
          </p>

          <p className="text-2xl font-bold text-slate-800 mt-1">
            {notifications.length - unreadCount}
          </p>

        </div>

      </div>

      {/* Notification List */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-100">
          <div className="flex items-center justify-between">

            <div>
              <h2 className="font-bold text-slate-800">
                Recent Notifications
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Latest updates from NETRA-AI
              </p>
            </div>

            {unreadCount > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold">
                {unreadCount} unread
              </span>
            )}

          </div>
        </div>

        <div className="divide-y divide-slate-100">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              onClick={() => markAsRead(notification.id)}
              className={`px-6 py-5 flex gap-4 cursor-pointer transition ${
                notification.unread
                  ? "bg-teal-50/30 hover:bg-teal-50/50"
                  : "hover:bg-slate-50"
              }`}
            >

              <NotificationIcon type={notification.type} />

              <div className="flex-1 min-w-0">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="flex items-center gap-2">

                      <h3 className="text-sm font-bold text-slate-800">
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                      )}

                    </div>

                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {notification.message}
                    </p>

                    <p className="text-xs text-slate-400 mt-2">
                      {notification.time}
                    </p>

                  </div>

                  {notification.unread && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsRead(notification.id);
                      }}
                      className="p-2 rounded-lg text-slate-400 hover:bg-white hover:text-teal-600 transition shrink-0"
                      title="Mark as read"
                    >
                      <Check size={17} />
                    </button>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Notification Preferences */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">

        <div className="flex gap-3">

          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
            <Bell size={19} className="text-teal-600" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-teal-900">
              Stay informed about critical cases
            </h3>

            <p className="text-sm text-teal-700 mt-1">
              NETRA-AI notifications highlight urgent referrals, AI analysis
              results, follow-up appointments and important system activity.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;