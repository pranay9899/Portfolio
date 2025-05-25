// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    // Use the basename from Vite's environment variables.
    // Vite populates import.meta.env.BASE_URL based on the 'base' config in vite.config.js
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
    </BrowserRouter>
  );
}

export default App;
