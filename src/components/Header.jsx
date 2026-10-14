import { DumbbellIcon } from "./Icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors duration-200">
            <DumbbellIcon className="w-5 h-5" />
          </div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">FitEdu</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
