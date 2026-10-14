const ExerciseHeader = ({ exercise }) => {
  const { title } = exercise;

  return (
    <section data-purpose="exercise-header">
      {/* Exercise Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h1>
    </section>
  );
};

export default ExerciseHeader;

