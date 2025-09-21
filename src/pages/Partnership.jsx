// src/pages/Partnership.jsx

import React from 'react';
import Slider from 'react-slick';
import { FaFlask, FaGlobe, FaLightbulb } from 'react-icons/fa';
import "../styles/Partnership.css";

// CSS для слайдера уже был импортирован в About.jsx, но лучше импортировать его здесь снова для надежности
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import placeholderImage from '../assets/placeholder.png'; // Наша заглушка

const Partnership = () => {

  const sliderSettings = { /* ... настройки слайдера ... */ };
  const partners = [ /* ... список партнёров ... */ ];

  return (
    <div className="partnership-page">
      <header className="partnership-hero">
        <h1>Партнёрство и сотрудничество</h1>
        <p>Вместе мы можем достичь большего. Присоединяйтесь к нашей сети партнёров для реализации инновационных проектов.</p>
      </header>

      <div className="page-content-wrapper">
        {/* --- Секция 1: Почему с нами выгодно сотрудничать? --- */}
        <section className="partnership-section">
          <h2>Почему стоит сотрудничать с нами?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><FaFlask /></div>
              <h3>Доступ к экспертизе</h3>
              <p>Получите доступ к знаниям и опыту наших ведущих ученых и исследователей в различных областях.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><FaLightbulb /></div>
              <h3>Совместные инновации</h3>
              <p>Участвуйте в разработке передовых технологий и решений, которые формируют будущее.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><FaGlobe /></div>
              <h3>Глобальная сеть</h3>
              <p>Станьте частью международной сети академических и индустриальных партнёров.</p>
            </div>
          </div>
        </section>

        {/* --- Секция 2: Направления сотрудничества --- */}
        <section className="partnership-section">
          <h2>Направления сотрудничества</h2>
          <ul className="cooperation-list">
            <li>Проведение совместных фундаментальных и прикладных исследований.</li>
            <li>Разработка и коммерциализация инновационных продуктов и технологий.</li>
            <li>Организация стажировок и образовательных программ для студентов и специалистов.</li>
            <li>Проведение совместных конференций, семинаров и круглых столов.</li>
            <li>Выполнение контрактных исследовательских проектов по заказу индустриальных партнёров.</li>
          </ul>
        </section>

        {/* --- Секция 3: Наши партнёры (слайдер) --- */}
        <section className="partnership-section partners-section">
          <h2>Наши партнёры</h2>
          <p>Мы гордимся сотрудничеством с лидерами индустрии и академического мира. Вместе мы создаем ценность и двигаем науку вперед.</p>
          <div className="partners-slider">
            <Slider {...sliderSettings}>
              {partners.map((partner, index) => (
                <div key={index} className="partner-slide">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* --- Секция 4: Как стать партнёром (Призыв к действию) --- */}
        <section className="partnership-section cta-section">
          <h2>Станьте нашим партнёром</h2>
          <p>Мы открыты для новых идей и предложений. Если вы заинтересованы в сотрудничестве, пожалуйста, свяжитесь с нашим отделом по работе с партнёрами.</p>
          <a href="/contacts" className="cta-button">Связаться с нами</a>
        </section>
      </div>
    </div>
  );
};

// Переиспользуем настройки и данные из About.jsx для консистентности
Partnership.defaultProps = {
  sliderSettings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  },
  partners: [
    { name: 'Partner 1', logo: placeholderImage },
    { name: 'Partner 2', logo: placeholderImage },
    { name: 'Partner 3', logo: placeholderImage },
    { name: 'Partner 4', logo: placeholderImage },
    { name: 'Partner 5', logo: placeholderImage },
  ]
};

export default Partnership;