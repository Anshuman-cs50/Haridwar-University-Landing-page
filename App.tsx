
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;
