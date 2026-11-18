function Education() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-500">Освіта</h2>
      <div className="rounded-xl border-2 border-slate-100 p-5 dark:border-slate-800 transition hover:border-brand-500 hover:shadow-md">
        <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          НУ «Львівська політехніка», ІКТА
        </p>
        <p className="text-slate-600 dark:text-slate-400">Бакалавр, Кібербезпека, група КБ-205</p>
        <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          2025–2029
        </span>
      </div>
    </section>
  );
}

export default Education;
