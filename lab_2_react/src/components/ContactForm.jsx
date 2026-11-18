import { useEffect, useState } from 'react';

const inputClass =
  'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-white';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  // Через 1 хвилину відкриваємо вікно, якщо користувач ще не закривав його в цій сесії
  useEffect(() => {
    if (sessionStorage.getItem('contactFormClosed') === 'true') return;
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer); // прибираємо таймер, якщо компонент зникне раніше
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactFormClosed', 'true');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
      >
        ✉️ Зв'язатися
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 text-left">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 text-slate-800 shadow-2xl dark:bg-slate-900 dark:text-slate-200">
            <div className="mb-4 flex items-start justify-between">
              <h2 className="font-display text-2xl font-bold">Зворотний зв'язок</h2>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg px-3 py-1 text-sm font-medium text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Закрити
              </button>
            </div>
            <form action="https://formspree.io/f/moedwnbj" method="POST" className="space-y-3">
              <label className="block text-sm font-medium">
                Ім'я
                <input type="text" name="name" required className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input type="email" name="email" required className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Телефон
                <input type="tel" name="phone" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Повідомлення
                <textarea name="message" rows="4" className={inputClass} />
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 px-4 py-2 font-medium text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
