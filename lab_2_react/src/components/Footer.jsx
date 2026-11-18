import { useEffect, useState } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState(null);

  // При монтуванні зчитуємо дані про ОС і браузер, зберігаємо їх у localStorage
  // і беремо для відображення вже звідти
  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem('systemInfo', JSON.stringify(info));
    setSystemInfo(JSON.parse(localStorage.getItem('systemInfo')));
  }, []);

  return (
    <footer className="mt-16 bg-slate-900 px-6 py-10 text-center text-slate-300 dark:bg-black">
      <a
        className="rounded-lg bg-white/10 px-4 py-2 font-medium transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
        href="https://github.com/NaidedLewis"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      {systemInfo && (
        <div className="mx-auto mt-6 max-w-3xl space-y-1 text-xs text-slate-400">
          <p>
            <span className="font-semibold text-slate-300">ОС:</span> {systemInfo.platform}
          </p>
          <p className="break-all">
            <span className="font-semibold text-slate-300">Браузер:</span> {systemInfo.userAgent}
          </p>
        </div>
      )}
      <p className="mt-6 text-sm tracking-wide text-slate-500">
        &copy; 2026 Назарій Дончик. Всі права захищено.
      </p>
    </footer>
  );
}

export default Footer;
