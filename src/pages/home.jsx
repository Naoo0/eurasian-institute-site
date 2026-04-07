// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import GridSection from "../components/GridSection";
import "../styles/Home.css";

import placeholderImage from '../assets/placeholder.png'; 

function Home() {
  return (
    <main className="home">
      {/* Hero-секция остаётся как есть */}
      <HeroSection />

      {/* --- ИСПРАВЛЕННЫЕ ВЕРХНИЕ БЛОКИ --- */}
      <section className="content">
        <GridSection
          title="The Limited Liability Company 'Eurasian Institute of Interdisciplinary Studies' was founded in 2023 and operates based on a standard charter."
          image={placeholderImage} // <-- ВОТ КАРТИНКА, КОТОРАЯ ПРОПАЛА
          reverse={true}
        />
        <GridSection
          title="The main goal of the Institute is to conduct fundamental scientific research and/or applied developments."
          image={placeholderImage} // <-- И ВТОРАЯ КАРТИНКА
        />
      </section>

      {/* === НОВЫЕ БЛОКИ С ИСПРАВЛЕНИЯМИ === */}
       <div className="new-content-grid">
        {/* Левая колонка */}
        <div className="main-article-content">
          <article className="news-article">
            <div className="news-header">
              <span>🟠 НОВОСТИ</span>
            </div>
            <h2>MOCCA Mid-Term Conference Explores Corruption and Governance in Central Asia 4-8th May, Sweden</h2>
            
            {/* Картинка теперь является ссылкой */}
            <a href="#" className="image-wrapper">
              <img src={placeholderImage} alt="Conference Photo" />
              <span className="lu-tag">LU</span>
            </a>

            <div className="news-footer">
                <span>Type something</span>
                <span>Type something</span>
            </div>
            <div className="news-footer author">
                <span>TOM JERRY</span>
                <span>TOM JERRY</span>
            </div>
          </article>
        </div>

        <aside className="right-sidebar">
          <div className="sidebar-card">
            <a href="#">
              <div className="image-placeholder"></div>
            </a>
            <h3>СОТРУДНИЧЕСТВО</h3>
          </div>
          <div className="sidebar-card">
            <a href="#">
              <div className="image-placeholder"></div>
            </a>
            <h3>ИССЛЕДОВАНИЯ</h3>
            <p>TOM JERRY</p>
          </div>
        </aside>
      </div>


    </main>
  );
}

export default Home;