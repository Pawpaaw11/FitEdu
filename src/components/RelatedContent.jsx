import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, ArticleIcon, PlayIcon } from "./Icons";

const categoryBadgeColor = {
  Deadlift: "bg-amber-100 text-amber-800 border-amber-200",
  Squat: "bg-blue-100 text-blue-800 border-blue-200",
  "Bench Press": "bg-purple-100 text-purple-800 border-purple-200",
};

// Compact Video Recommendation Card
const VariationCard = ({ id, index, title, category, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(id)}
    className="group text-left block w-full rounded-xl overflow-hidden transition-all duration-200 border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md shadow-xs cursor-pointer"
  >
    {/* Visual Card Header */}
    <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden flex items-center justify-center p-3">
      {/* Index badge */}
      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-white/20 backdrop-blur-md text-white font-mono text-[10px] font-bold">
        Video {index}
      </div>

      <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-white backdrop-blur-xs">
        <PlayIcon className="w-3.5 h-3.5 fill-white ml-0.5" />
      </div>
    </div>

    {/* Content */}
    <div className="p-3">
      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate leading-snug">
        {title}
      </h4>
      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-100">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${categoryBadgeColor[category] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
          {category}
        </span>
        <span className="text-[10px] font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center">
          Putar <ChevronRightIcon className="w-3 h-3 ml-0.5" />
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
    className={`group text-left w-full flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-150 cursor-pointer ${
      isActive
        ? "border-blue-500 bg-blue-50/50 shadow-xs ring-1 ring-blue-400/40"
        : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50/70"
    }`}
  >
    <div className="w-12 h-9 rounded-lg bg-slate-900 flex-shrink-0 flex items-center justify-center relative overflow-hidden text-white font-mono text-[11px] font-bold">
      {isActive ? (
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
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
      Putar
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

const SUBTABS = ["semua video", "Berdasarkan Kategori", "Artikel Terkait"];

const RelatedContent = ({ data, activeExerciseId, onSelectExercise }) => {
  const { variations = [], articles = [] } = data;
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const scrollTrackRef = useRef(null);

  const categories = ["Semua", "Deadlift", "Squat", "Bench Press"];

  // Filter out the currently active video so the recommendations show OTHER videos
  const otherVariations = variations.filter((v) => v.id !== activeExerciseId);

  const filteredVariations = selectedCategory === "Semua"
    ? variations
    : variations.filter((v) => v.muscle === selectedCategory);

  const handleScroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = scrollTrackRef.current.clientWidth * 0.75;
      scrollTrackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-2" data-purpose="related-content-tabs">
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

      {/* 1 Container: 3 Rekomendasi Video Lain (Bisa discroll di dalam kontainer) */}
      {activeTab === 0 && (
        <div className="mt-4 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 sm:p-5 fade-in-up">
          {/* Header Kontainer dengan Navigasi Scroll */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  3 Rekomendasi Video Lain
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Geser ke samping untuk melihat pilihan video lainnya
              </p>
            </div>

            {/* Tombol Geser Scroll */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Geser ke kiri"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <ChevronRightIcon className="w-3.5 h-3.5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Geser ke kanan"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 flex items-center justify-center transition-all shadow-xs cursor-pointer"
              >
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Kontainer Scroll Horizontal: Menampilkan 3 kartu di desktop dan swipe di mobile */}
          <div
            ref={scrollTrackRef}
            className="flex gap-3.5 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-thin"
          >
            {otherVariations.map((v) => (
              <div
                key={v.id}
                className="w-[78%] sm:w-[48%] md:w-[calc(33.333%-10px)] min-w-[200px] flex-shrink-0 snap-start"
              >
                <VariationCard
                  id={v.id}
                  index={v.index}
                  title={v.title}
                  category={v.muscle}
                  onSelect={onSelectExercise}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter by Category */}
      {activeTab === 1 && (
        <div className="mt-4 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 sm:p-5 fade-in-up space-y-3">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat} {cat !== "Semua" ? `(${variations.filter(v => v.muscle === cat).length})` : `(${variations.length})`}
              </button>
            ))}
          </div>

          {/* Scrollable list container */}
          <div className="max-h-[250px] overflow-y-auto pr-1 space-y-2 scrollbar-thin">
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
        <div className="mt-4 max-h-[300px] overflow-y-auto pr-1 space-y-2 scrollbar-thin fade-in-up">
          {articles.map((a) => (
            <ArticleItem key={a.id} id={a.id} title={a.title} readTime={a.readTime} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedContent;


