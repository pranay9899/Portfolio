// src/App.jsx
import React from 'react';
// 1. Change BrowserRouter to HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/base.css';

// Import Layout and Page components
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ProjectDetail from './pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    // 2. Use HashRouter instead of BrowserRouter
    //    No need for 'basename' with HashRouter as it uses the URL hash.
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px', fontSize: '2rem' }}>404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;