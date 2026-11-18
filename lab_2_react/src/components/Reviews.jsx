import { useEffect, useState } from 'react';

const VARIANT = 10; // номер варіанта = номер поста в JSONPlaceholder

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Порожній масив залежностей: запит виконується один раз, при монтуванні
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => setComments(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-200 md:col-span-2 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-500">
        Відгуки роботодавців
      </h2>
      {loading && <p className="text-slate-500">Завантаження...</p>}
      {error && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}
      <ul className="grid gap-4 sm:grid-cols-2">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-xl border-2 border-slate-100 p-5 transition hover:border-brand-500 hover:shadow-md dark:border-slate-800"
          >
            <p className="font-semibold capitalize text-slate-900 dark:text-white">{comment.name}</p>
            <p className="mb-2 text-sm text-brand-500">{comment.email}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
