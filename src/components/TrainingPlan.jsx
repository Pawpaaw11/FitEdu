import { ChevronRightIcon } from "./Icons";

// Training plan weeks data
const programWeeks = [
  { week: "Minggu 1–2", focus: "Adaptasi & Teknik Dasar", intensity: "Rendah", color: "bg-emerald-500" },
  { week: "Minggu 3–4", focus: "Volume Building", intensity: "Sedang", color: "bg-blue-500" },
  { week: "Minggu 5–8", focus: "Hypertrophy Phase", intensity: "Sedang–Tinggi", color: "bg-violet-500" },
  { week: "Minggu 9–12", focus: "Strength & Peak", intensity: "Tinggi", color: "bg-orange-500" },
];

const intensityWidth = {
  "Rendah": "w-1/4",
  "Sedang": "w-1/2",
  "Sedang–Tinggi": "w-3/4",
  "Tinggi": "w-full",
};

const TrainingPlan = () => (
  <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h2 className="text-sm font-bold tracking-tight text-slate-900">Program Latihan</h2>
      </div>
      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">3 Bulan</span>
    </div>

    {/* Week list */}
    <div className="space-y-3">
      {programWeeks.map((item) => (
        <div key={item.week} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-800">{item.week}</span>
            <span className="text-[10px] text-slate-500">{item.intensity}</span>
          </div>
          <p className="text-[10px] text-slate-600">{item.focus}</p>
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className={`h-full rounded-full ${item.color} ${intensityWidth[item.intensity]} transition-all`} />
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <button className="w-full flex items-center justify-center gap-2 border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold text-xs py-2.5 rounded-xl transition-colors duration-150">
      Lihat Program Lengkap
      <ChevronRightIcon className="w-3.5 h-3.5" />
    </button>
  </div>
);

export default TrainingPlan;
