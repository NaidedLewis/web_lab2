import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="mx-auto -mt-16 grid w-full max-w-5xl flex-1 gap-6 px-4 md:grid-cols-2">
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
