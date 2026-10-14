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
      <div className="xl:col-span-9 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-7">

        <div ref={headerRef}>
          {/* Exercise Title only */}
          <ExerciseHeader exercise={currentExercise} />
        </div>

        {/* Real Video Player + Instruction Panel side-by-side */}
        <section
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
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

        {/* Related Content: Variations / 15 Real Videos / Articles */}
        <RelatedContent
          data={relatedTabs}
          activeExerciseId={selectedExerciseId}
          onSelectExercise={handleSelectExercise}
        />
      </div>

      {/* ── Right Sidebar ── */}
      <aside className="xl:col-span-3 space-y-5">
        <BMICalculator />
        <TrainingPlan />
      </aside>
    </main>
  );
}

export default ExercisePage;

