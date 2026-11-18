import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// Денна тема з 07:00 до 21:00, нічна — решту часу
function getThemeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне перемикання: перевіряємо час один раз при завантаженні
  useEffect(() => {
    setTheme(getThemeByTime());
  }, []);

  // Застосовуємо клас dark до <body> щоразу, коли змінюється theme
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-200">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto -mt-16 grid w-full max-w-5xl flex-1 gap-6 px-4 md:grid-cols-2">
        <Experience />
        <Education />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
