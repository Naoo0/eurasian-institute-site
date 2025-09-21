// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Team from "./pages/team";
import News from "./pages/News"; // <-- Я поправил имя файла на заглавную букву, так принято
import Projects from "./pages/Projects"; // <-- 1. ИМПОРТИРУЙ PROJECTS
import Contact from "./pages/Contact"; // <-- 1. ИМПОРТИРУЙ
import About from "./pages/About";
import Partnership from "./pages/Partnership"; // <-- 1. ИМПОРТИРУЙ
import Careers from "./pages/Careers"; // <-- 1. ИМПОРТИРУЙ
import Publications from "./pages/Publications"; // <-- 1. ИМПОРТИРУЙ


import "./App.css"; // Ты используешь './App.css', а не './styles/App.css'

function App() {
  return (
    <Router>
       <div className="app-container"> {/* <-- СТАЛО ТАК */}
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/news" element={<News />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/contacts" element={<Contact />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/about" element={<About />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/partnership" element={<Partnership />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/careers" element={<Careers />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}
          <Route path="/publications" element={<Publications />} /> {/* <-- 2. ДОБАВЬ МАРШРУТ */}


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;