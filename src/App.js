import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './MandalaStencils/Home';
import Images from './MandalaStencils/Images';
import Video from './MandalaStencils/Video';
import Feedback from './MandalaStencils/Feedback';
import logo from './assets/logonew.png'; // Adjust the path to your logo
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <img src={logo} alt="Logo" />
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/images" className="nav-link">Images</Link>
            <Link to="/video" className="nav-link">Video</Link>
            <Link to="/feedback" className="nav-link">Feedback</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/video" element={<Video />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
