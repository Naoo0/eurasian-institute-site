// src/pages/News.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/News.css"; // Стили сейчас поправим

const articles = [
  // ... данные остаются без изменений ...
  {
    title: "Как обеспечить безопасность бизнеса в 2025 году",
    description: "Основные угрозы и методы защиты для малого и среднего бизнеса.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/strong-together-icon.png",
  },
  {
    title: "Топ-5 ошибок в кибербезопасности",
    description: "Частые ошибки, которые совершают компании, и как их избежать.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/increase-margin-icon.png",
  },
  {
    title: "Социальная инженерия: как не стать жертвой",
    description: "Разбираем популярные схемы мошенников и способы противодействия.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/expand-your-business-icon.png",
  },
  {
    title: "Виды фишинга и как их распознать",
    description: "Научитесь отличать фишинговые письма и защитите свои данные.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/flexible-software-icon.png",
  },
];

const News = () => {
  // Анимации можешь оставить, они не мешают
  
  return (
    <div className="page-container">
      {/* Вместо <Container> используем обычный div */}
      <div className="news-content-wrapper">
        <h2 className="news-title">
          Последние <span className="highlight-text">новости и статьи</span>
        </h2>
        <p className="news-subtitle">
          Актуальная информация из мира кибербезопасности и наших исследований
        </p>

        {/* Вместо <Row> и <Col> используем свою сетку */}
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-title">
            <div className="article-icon-wrapper">
                <img src={article.icon} alt="" />
            </div>
            <h3>{article.title}</h3>
            </div>
              <p className="article-description">{article.description}</p>
              <a href={article.link} className="read-more-link">
                Читать далее →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;