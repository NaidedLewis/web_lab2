function Header() {
  return (
    <header className="bg-gradient-to-r from-brand-600 to-violet-600 px-6 pt-16 pb-28 text-center text-white">
      <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/40 bg-white/15 text-3xl font-bold shadow-lg">
        НД
      </div>
      <h1 className="font-display text-4xl font-bold tracking-wide sm:text-5xl">Назарій Дончик</h1>
      <p className="mt-3 text-lg text-indigo-100">
        Студент кафедри кібербезпеки | Початківець у веб-розробці
      </p>
    </header>
  );
}

export default Header;
