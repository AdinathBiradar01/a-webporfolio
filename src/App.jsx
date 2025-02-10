import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

const App = () => (
  <Router>
    <div className="app-container">  {/* Entire layout container */}
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main>
          <Routes >
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
