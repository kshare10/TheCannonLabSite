import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Group from './pages/Group';
import Jeff from './pages/Jeff';
import Publications from './pages/Publications';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/the-group" element={<Group />} />
            <Route path="/jeff" element={<Jeff />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
