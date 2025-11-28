import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { usePortfolioStore } from './store/usePortfolioStore';

function App() {
  const { isDarkMode } = usePortfolioStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="grow flex flex-col items-center w-full">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          
        </div>
      </div>
    </Router>
  );
}

export default App;