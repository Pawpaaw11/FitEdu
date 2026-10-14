import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ArticleIcon, PlayIcon } from "./Icons";

const categoryBadgeColor = {
  Deadlift: "bg-amber-100 text-amber-800 border-amber-200",
  Squat: "bg-blue-100 text-blue-800 border-blue-200",
  "Bench Press": "bg-purple-100 text-purple-800 border-purple-200",
};

// Real Video Variation Card
const VariationCard = ({ id, index, title, category, isActive, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    className={`group text-left block w-full rounded-2xl overflow-hidden transition-all duration-200 border cursor-pointer ${
      isActive
        ? "border-blue-600 ring-2 ring-blue-500/30 bg-blue-50/20 shadow-md"
        : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md shadow-xs"
    }`}
  >
    {/* Visual Card Header */}
    <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden flex items-center justify-center p-4">
      {/* Index badge */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-mono text-[11px] font-bold">
        Video {index}
      </div>

      {isActive ? (
        <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white font-semibold text-[10px] shadow-sm flex items-center gap-1.5 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          Sedang Diputar
        </span>
      ) : (
        <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-white backdrop-blur-xs">
          <PlayIcon className="w-4 h-4 fill-white ml-0.5" />
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-3.5">
      <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
        {title}
      </h3>
      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${categoryBadgeColor[category] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
          {category}
        </span>
        <span className="text-[11px] font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center">
          Pilih <ChevronRightIcon className="w-3 h-3 ml-0.5" />
        </span>
      </div>
    </div>
  </button>
);

// Video item in list view
const VideoItem = ({ id, index, title, category, isActive, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    className={`group text-left w-full flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-150 cursor-pointer ${
      isActive
        ? "border-blue-500 bg-blue-50/50 shadow-xs ring-1 ring-blue-400/40"
        : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50/70"
    }`}
  >
    <div className="w-14 h-10 rounded-lg bg-slate-900 flex-shrink-0 flex items-center justify-center relative overflow-hidden text-white font-mono text-xs font-bold">
      {isActive ? (
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
      ) : (
        <span>#{index}</span>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <p className={`text-xs font-semibold truncate transition-colors ${isActive ? "text-blue-700" : "text-slate-800 group-hover:text-blue-600"}`}>
        {title}
      </p>
      <div className="flex items-center gap-2 mt-0.5">
        <span className="text-[10px] text-slate-400 font-medium">{category}</span>
        <span className="text-[10px] text-emerald-600 font-semibold">• Video Asli MP4</span>
      </div>
    </div>
    <span className="text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
      Putar Video
    </span>
    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 flex-shrink-0" />
  </button>
);

// Article item card
const ArticleItem = ({ id, title, readTime }) => (
  <Link to={`/article/${id}`} className="group flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-150 bg-white">
    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-100 flex-shrink-0 flex items-center justify-center transition-colors">
      <ArticleIcon className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{title}</p>
      <span className="text-[10px] text-slate-400 mt-0.5 block">{readTime} membaca</span>
    </div>
    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 flex-shrink-0" />
  </Link>
);

const SUBTABS = ["Daftar 15 Video Latihan", "Berdasarkan Kategori", "Artikel Terkait"];

const RelatedContent = ({ data, activeExerciseId, onSelectExercise }) => {
  const { variations = [], articles = [] } = data;
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Deadlift", "Squat", "Bench Press"];

  const filteredVariations = selectedCategory === "Semua"
    ? variations
    : variations.filter((v) => v.muscle === selectedCategory);

  return (
    <section className="pt-3" data-purpose="related-content-tabs">
      {/* Sub-tabs Nav */}
      <div className="border-b border-slate-200 flex space-x-6 text-sm font-medium overflow-x-auto scrollbar-hide">
        {SUBTABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`pb-2.5 whitespace-nowrap focus:outline-none transition-all duration-150 cursor-pointer ${
              activeTab === i
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of all 15 real videos */}
      {activeTab === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 fade-in-up">
          {variations.map((v) => (
            <VariationCard
              key={v.id}
              id={v.id}
              index={v.index}
              title={v.title}
              category={v.muscle}
              isActive={v.id === activeExerciseId}
              onSelect={onSelectExercise}
            />
          ))}
        </div>
      )}

      {/* Filter by Category */}
      {activeTab === 1 && (
        <div className="mt-5 space-y-4 fade-in-up">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat} {cat !== "Semua" ? `(${variations.filter(v => v.muscle === cat).length})` : `(${variations.length})`}
              </button>
            ))}
          </div>

          <div className="space-y-2.5">
            {filteredVariations.map((v) => (
              <VideoItem
                key={v.id}
                id={v.id}
                index={v.index}
                title={`Video ${v.index}: ${v.title}`}
                category={v.muscle}
                isActive={v.id === activeExerciseId}
                onSelect={onSelectExercise}
              />
            ))}
          </div>
        </div>
      )}

      {/* Article List */}
      {activeTab === 2 && (
        <div className="mt-5 space-y-2 fade-in-up">
          {articles.map((a) => (
            <ArticleItem key={a.id} id={a.id} title={a.title} readTime={a.readTime} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedContent;

