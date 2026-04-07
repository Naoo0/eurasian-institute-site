// src/App.jsx

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Team from "./pages/team";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Partnership from "./pages/Partnership";
import Careers from "./pages/Careers";
import Publications from "./pages/Publications";

import "./App.css";

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("site-language") || "ru";
  });

  useEffect(() => {
    localStorage.setItem("site-language", lang);
  }, [lang]);

  return (
    <Router>
      <div className="app-container">
        <Header lang={lang} setLang={setLang} />
        <Navbar lang={lang} />
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/team" element={<Team lang={lang} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
          <Route path="/news" element={<News lang={lang} />} />
          <Route path="/contacts" element={<Contact lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/partnership" element={<Partnership lang={lang} />} />
          <Route path="/careers" element={<Careers lang={lang} />} />
          <Route path="/publications" element={<Publications lang={lang} />} />
        </Routes>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}

export default App;