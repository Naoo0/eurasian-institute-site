// src/pages/News.jsx

import React from "react";
import { motion } from "framer-motion";
import "../styles/News.css";

const articles = [
  {
    title: "Развитие цифровых компетенций студентов",
    description:
      "Как новые курсы по информатике и ИКТ помогают студентам уверенно работать с данными, онлайн-сервисами и современными платформами.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/strong-together-icon.png",
  },
  {
    title: "Лаборатория для обучения",
    description:
      "Практические занятия на стендах, моделирование процессов и работа с реальными инструментами в рамках учебного процесса.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/increase-margin-icon.png",
  },
  {
    title: "Онлайн-сервисы университета: от расписания до портфолио",
    description:
      "Обновлённый личный кабинет студента, электронное расписание, цифровое портфолио и другие сервисы, упрощающие учебный процесс.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/expand-your-business-icon.png",
  },
  {
    title: "Информатика как основа будущей профессии",
    description:
      "Почему базовые навыки программирования, работы с информацией и безопасностью в сети важны для студентов любых специальностей.",
    link: "#",
    icon: "https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/partners/flexible-software-icon.png",
  },
];

const News = () => {
  return (
    <div className="page-container">
      <div className="news-content-wrapper">
        <h2 className="news-title">
          Последние <span className="highlight-text">новости и статьи</span>
        </h2>
        <p className="news-subtitle">
          Материалы об образовательных проектах, цифровой среде и развитии студентов нашего университета
        </p>

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
