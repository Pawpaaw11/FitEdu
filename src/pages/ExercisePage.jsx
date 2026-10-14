import { useState, useRef } from "react";
import ExerciseHeader from "../components/ExerciseHeader";
import VideoPlayer from "../components/VideoPlayer";
import InstructionPanel from "../components/InstructionPanel";
import RelatedContent from "../components/RelatedContent";
import BMICalculator from "../components/BMICalculator";
import TrainingPlan from "../components/TrainingPlan";
import { allExercises, relatedTabs } from "../data/exercises";

function ExercisePage() {
  const [selectedExerciseId, setSelectedExerciseId] = useState(allExercises[0].id);
  const headerRef = useRef(null);

  const currentExercise =
    allExercises.find((ex) => ex.id === selectedExerciseId) || allExercises[0];

  const handleSelectExercise = (id) => {
    setSelectedExerciseId(id);
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 items-start p-4 md:p-6 lg:p-8">

      {/* ── Left Content Column ── */}
      <div className="xl:col-span-9 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">

        <div ref={headerRef}>
          {/* Exercise Title only */}
          <ExerciseHeader exercise={currentExercise} />
        </div>

        {/* Real Video Player + Instruction Panel side-by-side on desktop, stacked on mobile */}
        <section
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
          data-purpose="exercise-presentation"
        >
          <div className="lg:col-span-6">
            <VideoPlayer
              src={currentExercise.videoSrc}
              title={currentExercise.title}
              duration={currentExercise.videoFileName}
            />
          </div>
          <div className="lg:col-span-6">
            <InstructionPanel tabs={currentExercise.tabs} />
          </div>
        </section>

        {/* Related Content: 1 Container with 3 Video Recommendations + Articles */}
        <RelatedContent
          data={relatedTabs}
          activeExerciseId={selectedExerciseId}
          onSelectExercise={handleSelectExercise}
        />
      </div>

      {/* ── Priority Sidebar: BMI & Program Latihan ── */}
      <aside className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
        <BMICalculator />
        <TrainingPlan />
      </aside>
    </main>
  );
}

export default ExercisePage;

