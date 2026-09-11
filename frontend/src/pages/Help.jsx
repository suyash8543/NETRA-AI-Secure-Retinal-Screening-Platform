import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  ShieldCheck,
  Camera,
  Brain,
  Users,
} from "lucide-react";
import { useState } from "react";

function Help() {
  const [openFaq, setOpenFaq] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: "How do I start a new retinal screening?",
      answer:
        "Go to New Screening from the sidebar, select the patient, upload the left and right retinal images, and click Analyze with AI.",
    },
    {
      question: "What does the AI analysis show?",
      answer:
        "The AI analysis provides the detected diabetic retinopathy severity, confidence score, image quality status, probability distribution, and an explainable Grad-CAM visualization.",
    },
    {
      question: "When is a patient referred to an ophthalmologist?",
      answer:
        "Patients identified with Moderate DR or a more severe stage should be reviewed by an ophthalmologist according to the screening workflow.",
    },
    {
      question: "What should I do if the retinal image quality fails?",
      answer:
        "Retake the retinal image with proper focus, adequate illumination, correct alignment, and minimal blur. Make sure the retina is clearly visible before submitting it for AI analysis.",
    },
    {
      question: "Can I view a patient's previous screenings?",
      answer:
        "Yes. Open Patients from the sidebar, select a patient, and view their screening history and previous AI results.",
    },
    {
      question: "How do I generate a screening report?",
      answer:
        "Open Reports from the sidebar. You can view screening reports and use the available export, download, or print options.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <HelpCircle size={23} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Help & Support
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Find answers, guides and support for using NETRA-AI.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="rounded-2xl bg-gradient-to-r from-teal-700 to-cyan-700 p-7 shadow-sm">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-xl font-bold text-white">
            How can we help you?
          </h2>

          <p className="mt-2 text-sm text-teal-50">
            Search the help center for answers about screening,
            AI analysis and patient management.
          </p>

          <div className="relative mt-5">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for help..."
              className="h-12 w-full rounded-xl border-0 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20"
            />

          </div>
        </div>
      </div>

      {/* ================= QUICK HELP ================= */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Quick Help
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <HelpCard
            icon={<BookOpen size={22} />}
            title="User Guide"
            description="Learn how to use NETRA-AI screening tools."
          />

          <HelpCard
            icon={<Camera size={22} />}
            title="Image Guidelines"
            description="Learn how to capture high-quality retinal images."
          />

          <HelpCard
            icon={<Brain size={22} />}
            title="AI Analysis"
            description="Understand AI results and explainable predictions."
          />

        </div>
      </div>

      {/* ================= FAQ + CONTACT ================= */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* FAQ */}
        <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5">
            <h2 className="text-lg font-bold text-slate-800">
              Frequently Asked Questions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Common questions about NETRA-AI.
            </p>
          </div>

          <div className="space-y-3">

            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-slate-200"
                  >

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-slate-50"
                    >

                      <span className="text-sm font-semibold text-slate-700">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />

                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-slate-50 px-4 py-4">
                        <p className="text-sm leading-6 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="rounded-xl bg-slate-50 px-5 py-8 text-center">
                <Search
                  size={25}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 text-sm font-semibold text-slate-600">
                  No results found
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Try searching with different keywords.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-lg font-bold text-slate-800">
              Need more help?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Our support team can help you with technical issues
              and platform-related questions.
            </p>

            <div className="mt-5 space-y-3">

              <ContactItem
                icon={<MessageCircle size={18} />}
                title="Live Support"
                subtitle="Chat with our support team"
              />

              <ContactItem
                icon={<Mail size={18} />}
                title="Email Support"
                subtitle="support@netra-ai.org"
              />

              <ContactItem
                icon={<Phone size={18} />}
                title="Technical Support"
                subtitle="+91 1800-NETRA-AI"
              />

            </div>

          </div>

          {/* SECURITY BOX */}
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-teal-800">
                  Data & Security
                </h3>

                <p className="mt-1 text-xs leading-5 text-teal-700/80">
                  Patient information should be handled securely.
                  Always follow your organization's privacy and
                  data protection policies.
                </p>
              </div>

            </div>

          </div>

          {/* PATIENT HELP */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Patient Management
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Manage patient records and screening history.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ================= HELP CARD ================= */

function HelpCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ================= CONTACT ITEM ================= */

function ContactItem({ icon, title, subtitle }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition hover:border-teal-100 hover:bg-teal-50"
    >

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
        {icon}
      </div>

      <div>
        <p className="text-xs font-bold text-slate-700">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] text-slate-400">
          {subtitle}
        </p>
      </div>

    </button>
  );
}

export default Help;