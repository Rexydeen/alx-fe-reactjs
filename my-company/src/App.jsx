import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Home"        element={<Home />}     />
        <Route path="/about"   element={<About />}    />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
    </BrowserRouter>
  );
}
