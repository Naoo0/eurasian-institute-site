// src/pages/Careers.jsx

import React from 'react';
import { FaUsers, FaChartLine, FaBookOpen } from 'react-icons/fa';
import "../styles/Careers.css";
import placeholderImage from '../assets/placeholder.png'; // Наша универсальная заглушка

const Careers = () => {

  // Создадим массив с примерами вакансий
  const vacancies = [
    {
      title: 'Ведущий научный сотрудник (PhD)',
      department: 'Департамент гуманитарных наук',
      description: 'Мы ищем опытного исследователя для руководства проектами в области современной истории и культурных исследований.',
      image: placeholderImage // Сюда можно будет вставить фото реального сотрудника или тематическую картинку
    },
    {
      title: 'Преподаватель экономики',
      department: 'Департамент экономических исследований',
      description: 'Приглашаем специалиста для чтения лекций и проведения семинаров по макроэкономике и международной торговле.',
      image: placeholderImage // Как ты и просил - место для "фоточки учителя" :)
    },
    {
      title: 'Менеджер по международным грантам',
      department: 'Отдел международного сотрудничества',
      description: 'Ответственность за поиск, подачу заявок и ведение отчетности по международным научным грантам.',
      image: placeholderImage
    }
  ];

  return (
    <div className="careers-page">
      <header className="careers-hero">
        <h1>Присоединяйтесь к нашей команде</h1>
        <p>Станьте частью сообщества, которое формирует будущее науки и образования.</p>
      </header>

      <div className="page-content-wrapper">
        {/* --- Секция 1: Преимущества работы у нас --- */}
        <section className="careers-section">
          <h2>Почему стоит работать с нами?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><FaUsers /></div>
              <h3>Сильная команда</h3>
              <p>Работайте бок о бок с ведущими экспертами и увлеченными профессионалами.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><FaChartLine /></div>
              <h3>Профессиональный рост</h3>
              <p>Мы предоставляем возможности для повышения квалификации, участия в конференциях и стажировках.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><FaBookOpen /></div>
              <h3>Значимые проекты</h3>
              <p>Участвуйте в исследованиях, которые имеют реальное влияние на общество и науку.</p>
            </div>
          </div>
        </section>

        {/* --- Секция 2: Открытые вакансии --- */}
        <section className="careers-section">
          <h2>Открытые вакансии</h2>
          <div className="vacancies-list">
            {vacancies.map((vacancy, index) => (
              <div key={index} className="vacancy-card">
                <div className="vacancy-image">
                  <img src={vacancy.image} alt={vacancy.title} />
                </div>
                <div className="vacancy-details">
                  <h3>{vacancy.title}</h3>
                  <p className="department">{vacancy.department}</p>
                  <p className="description">{vacancy.description}</p>
                  <a href="/contacts" className="apply-button">Откликнуться</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* --- Секция 3: Нет подходящей вакансии? --- */}
         <section className="careers-section spontaneous-application">
            <h2>Не нашли подходящую вакансию?</h2>
            <p>Мы всегда в поиске талантливых людей. Присылайте свое резюме, и мы свяжемся с вами, как только появится подходящая позиция.</p>
            <a href="/contacts" className="cta-button">Отправить резюме</a>
        </section>

      </div>
    </div>
  );
};

export default Careers;