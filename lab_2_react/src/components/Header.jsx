import ContactForm from './ContactForm';

function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-gradient-to-r from-brand-600 to-violet-600 px-6 pt-6 pb-28 text-center text-white dark:from-slate-900 dark:to-indigo-950">
      <nav className="mx-auto flex max-w-5xl justify-end gap-2">
        <button
          type="button"
          onClick={onToggleTheme}
          className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
        </button>
        <ContactForm />
      </nav>
      <div className="mx-auto mt-10 mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/40 bg-white/15 text-3xl font-bold shadow-lg">
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
