// src/pages/Publications.jsx

import React from 'react';
import { FaFilePdf, FaLink } from 'react-icons/fa';
import "../styles/Publications.css";

const Publications = () => {

  // Создадим массив с примерами публикаций
  const publications = [
    {
      title: 'Влияние климатических изменений на агропромышленный комплекс Центральной Азии',
      authors: 'Калдияров Д.А., Смагулова Б.А.',
      citation: 'Журнал "Экономика и Статистика", 2024, №2, с. 45-58.',
      pdfLink: '#',
      doiLink: '#'
    },
    {
      title: 'Цифровая трансформация и её роль в модернизации государственного управления',
      authors: 'Мусекенова А.А., Нурмуханқызы Д.',
      citation: 'Материалы международной конференции "Digital Governance", 2023, с. 112-120.',
      pdfLink: '#',
      doiLink: '#'
    },
    {
      title: 'Правовые аспекты международного научного сотрудничества в условиях глобализации',
      authors: 'Нурмуханқызы Д.',
      citation: 'Вестник права, 2023, №4, с. 89-97.',
      pdfLink: '#',
    },
  ];

  return (
    <div className="publications-page">
      <header className="publications-hero">
        <h1>Наши публикации</h1>
        <p>Архив научных статей, монографий и отчетов, подготовленных нашими исследователями.</p>
      </header>

      <div className="publications-layout">
        {/* --- Панель с фильтрами --- */}
        <aside className="filter-panel">
          <h3>Фильтры</h3>
          <div className="filter-group">
            <label htmlFor="search-input">Поиск по названию</label>
            <input id="search-input" type="text" placeholder="Введите ключевые слова..." />
          </div>
          <div className="filter-group">
            <label>Тип публикации</label>
            <select>
              <option>Все типы</option>
              <option>Статья в журнале</option>
              <option>Монография</option>
              <option>Отчет</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Год публикации</label>
            <select>
              <option>Все годы</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <button className="filter-button">Применить</button>
        </aside>

        {/* --- Основной список публикаций --- */}
        <main className="publications-list">
          {publications.map((pub, index) => (
            <article key={index} className="publication-item">
              <h3>{pub.title}</h3>
              <p className="authors">{pub.authors}</p>
              <p className="citation">{pub.citation}</p>
              <div className="publication-links">
                {pub.pdfLink && <a href={pub.pdfLink} className="pub-link pdf-link"><FaFilePdf /> Скачать PDF</a>}
                {pub.doiLink && <a href={pub.doiLink} className="pub-link doi-link"><FaLink /> Ссылка на DOI</a>}
              </div>
            </article>
          ))}
           <div className="pagination">
            <button disabled>← Предыдущая</button>
            <button>Следующая →</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Publications;