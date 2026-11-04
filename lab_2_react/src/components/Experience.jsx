const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python', 'C#'];

function Experience() {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-500">Досвід і навички</h2>
      <p className="text-slate-700">
        Навчальні проєкти: консольні утиліти для задач кібербезпеки на Python та моделювання
        комп’ютерних мереж у Cisco Packet Tracer.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700 transition hover:scale-105 hover:bg-brand-500 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
