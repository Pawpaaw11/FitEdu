import { useState } from "react";
import { CheckIcon } from "./Icons";

const TABS = ["Deskripsi", "Tips", "Kesalahan Umum", "Manfaat"];

const DescriptionTab = ({ steps = [], notes = [] }) => (
  <div className="space-y-5">
    <div>
      <h2 className="text-sm font-bold text-slate-900 mb-3">Cara Melakukan</h2>
      <ol className="space-y-2.5 text-xs leading-relaxed text-slate-700">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start space-x-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-[11px] mt-0.5">
              {i + 1}
            </span>
            <span className="flex-1">{step}</span>
          </li>
        ))}
      </ol>
    </div>
    {notes && notes.length > 0 && (
      <div className="pt-1">
        <h2 className="text-sm font-bold text-slate-900 mb-2.5">Catatan Tambahan</h2>
        <ul className="space-y-2 text-xs leading-relaxed text-slate-600">
          {notes.map((note, i) => (
            <li key={i} className="flex items-center space-x-2.5">
              <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const TipsTab = ({ tips = [] }) => (
  <div>
    <h2 className="text-sm font-bold text-slate-900 mb-3">Tips Pelaksanaan</h2>
    <ul className="space-y-2.5 text-xs leading-relaxed text-slate-700">
      {tips.map((tip, i) => (
        <li key={i} className="flex items-start space-x-3 p-3 bg-amber-50/80 border border-amber-200/70 rounded-xl shadow-xs">
          <span className="text-amber-500 font-bold flex-shrink-0 text-sm">💡</span>
          <span className="flex-1 leading-normal">{tip}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MistakesTab = ({ mistakes = [] }) => (
  <div>
    <h2 className="text-sm font-bold text-slate-900 mb-3">Kesalahan Umum yang Harus Dihindari</h2>
    <ul className="space-y-2.5 text-xs leading-relaxed">
      {mistakes.map((item, i) => {
        const mistakeText = typeof item === "string" ? item : item.mistake;
        const fixText = typeof item === "object" ? item.fix : null;
        return (
          <li key={i} className="rounded-xl border border-rose-200/80 bg-rose-50/60 p-3 space-y-1.5 shadow-xs">
            <div className="flex items-start gap-2.5">
              <span className="text-rose-500 font-bold text-sm leading-none mt-0.5">⚠️</span>
              <span className="font-semibold text-rose-900 leading-normal">{mistakeText}</span>
            </div>
            {fixText && (
              <div className="flex items-start gap-2 pl-6 text-slate-600">
                <CheckIcon className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{fixText}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const BenefitsTab = ({ benefits = [] }) => (
  <div>
    <h2 className="text-sm font-bold text-slate-900 mb-3">Manfaat Latihan</h2>
    <ul className="space-y-2.5 text-xs leading-relaxed text-slate-700">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-start space-x-3 p-3 bg-emerald-50/80 border border-emerald-200/70 rounded-xl shadow-xs">
          <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
          <span className="flex-1 leading-normal">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

const InstructionPanel = ({ tabs: tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabData) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <DescriptionTab steps={tabData.description?.steps} notes={tabData.description?.notes} />;
      case 1:
        return <TipsTab tips={tabData.tips} />;
      case 2:
        return <MistakesTab mistakes={tabData.commonMistakes} />;
      case 3:
        return <BenefitsTab benefits={tabData.benefits} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col h-full min-h-[360px] max-h-[460px]">
      {/* Tab Bar */}
      <div className="flex items-center gap-1.5 p-2 bg-slate-100/90 border-b border-slate-200/80 overflow-x-auto scrollbar-hide flex-shrink-0">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`whitespace-nowrap font-medium px-4 py-1.5 rounded-lg text-xs transition-all duration-150 ${
              activeTab === i
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5 overflow-y-auto flex-1 fade-in-up" key={activeTab}>
        {renderContent()}
      </div>
    </div>
  );
};

export default InstructionPanel;

