import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ExercisePage from "./pages/ExercisePage";
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="antialiased min-h-screen bg-slate-50">
      <ScrollToTop />
      
      {/* Sticky Header */}
      <Header />

      <Routes>
        {/* Main Exercise Page */}
        <Route path="/" element={<ExercisePage />} />
        
        {/* Article Detail Page */}
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
