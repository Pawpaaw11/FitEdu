import { useParams, Link } from "react-router-dom";
import { relatedTabs } from "../data/exercises";
import { ChevronRightIcon, ArticleIcon } from "../components/Icons";

function ArticlePage() {
  const { id } = useParams();
  const articleId = parseInt(id, 10);
  
  // Find the article in our mock data
  const article = relatedTabs.articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <main className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Artikel Tidak Ditemukan</h1>
          <p className="text-slate-600 mt-2">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[800px] mx-auto p-4 md:p-6 lg:p-8">
      <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        
        {/* Breadcrumb & Meta */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span>/</span>
            <Link to="/" className="hover:text-blue-600 transition-colors">Artikel</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate">{article.title}</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                {article.author ? article.author.charAt(0) : "F"}
              </div>
              <span className="font-medium text-slate-800">{article.author}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <span>{article.date}</span>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <span className="flex items-center gap-1">
              <ArticleIcon className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {article.content && article.content.map((block, idx) => {
            if (block.type === "h2") {
              return (
                <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronRightIcon className="w-4 h-4 rotate-180" />
            Kembali ke Latihan
          </Link>
          <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium rounded-lg transition-colors">
            Bagikan Artikel
          </button>
        </div>
      </article>
    </main>
  );
}

export default ArticlePage;
