// src/pages/Projects.jsx
import React from "react";
import Slider from "react-slick";
import "../styles/Projects.css";

import placeholderImage from "../assets/placeholder.png";

const projects = [
  {
    id: "mocca",
    tag: "MSCA STAFF EXCHANGES",
    title: "MOCCA EU — Multilevel Orders of Corruption in Central Asia",
    image: placeholderImage,
    paragraphs: [
      "ЕИМИ является активным партнёром проекта MOCCA (Multilevel Orders of Corruption in Central Asia), финансируемого Европейским Союзом в рамках программы Marie Skłodowska-Curie Actions (MSCA Staff Exchanges). Это сотрудничество является важным элементом нашей стратегии по развитию междисциплинарных исследований и укреплению международного присутствия.",
      "Проект посвящён изучению многоуровневых порядков коррупции в странах Центральной Азии (Казахстан, Кыргызстан, Таджикистан, Туркменистан, Узбекистан). Главная цель — понять, как международные антикоррупционные нормы взаимодействуют с национальным законодательством и неформальными практиками.",
    ],
    bullets: [
      "Обмен экспертизой: участие в MSCA Staff Exchanges и обмен исследователями с ведущими европейскими университетами (Лундский, Карлов, Цюрихский и др.).",
      "Полевые исследования: предоставление регионального контекста и доступа к эмпирическим данным для глубоких полевых исследований в Центральной Азии.",
      "Влияние на политику: совместные результаты используются для подготовки рекомендаций по повышению эффективности антикоррупционных программ и улучшению управления в регионе.",
    ],
    footer:
      "Сотрудничество с MOCCA подчёркивает приверженность Института борьбе с коррупцией через науку и стремление к международному академическому совершенству.",
  },
  {
    id: "mars",
    tag: "MSCA STAFF EXCHANGES",
    title: "MARS EU — Non-Western Migration Regimes in a Global Perspective",
    image: placeholderImage,
    paragraphs: [
      "ЕИМИ является участником проекта MARS (Non-Western Migration Regimes in a Global Perspective), ещё одной крупной международной инициативы, финансируемой Европейской комиссией по линии Marie Skłodowska-Curie Actions (MSCA Staff Exchange).",
      "Проект MARS, координируемый Лундским университетом (Швеция), фокусируется на миграционных режимах, политике и опыте мигрантов в незападных регионах — Центральной Азии, на Ближнем Востоке, в Юго-Восточной Азии и Латинской Америке, восполняя дефицит исследований, традиционно сосредоточенных на Западной Европе и Северной Америке.",
    ],
    bullets: [
      "Расширение знаний: участие в программах обмена и трансфере методологий в области миграционных исследований и социологии.",
      "Региональная экспертиза: предоставление консорциуму детального контекста по миграционным маршрутам и опыту мигрантов в неевропейских странах.",
      "Рекомендации для политики: результаты используются международными организациями и правительствами при выработке более эффективной и гуманной миграционной политики.",
    ],
    footer:
      "Участие в MARS укрепляет позицию ЕИМИ как центра, который не только изучает, но и влияет на глобальный научный диалог по вопросам миграции.",
  },
  {
    id: "polka",
    tag: "HORIZON 2020 · MSCA",
    title:
      "POLKA EU — Pollution-free Outcome from Low-emission Knowledge and Applications",
    image: placeholderImage,
    paragraphs: [
      "ЕИМИ участвует в европейском исследовательском проекте POLKA (Pollution-free Outcome from Low-emission Knowledge and Applications), финансируемом в рамках программы Horizon 2020 (Marie Skłodowska-Curie Actions).",
      "Проект POLKA сосредоточен на разработке и внедрении передовых технологий сжигания водорода с целью существенного снижения загрязнения окружающей среды и перехода к низкоэмиссионной энергетике.",
    ],
    bullets: [
      "Технологические инновации: работа над созданием низкоэмиссионных промышленных и технологических приложений для чистой энергетики.",
      "Междисциплинарные связи: сотрудничество с ведущими академическими и промышленными партнёрами, объединяющее науку и производство.",
      "Подготовка кадров: доступ специалистов Института к передовым разработкам и формирование команды экспертов по чистой энергетике.",
    ],
    footer:
      "Сотрудничество с POLKA является важной частью стратегии ЕИМИ в области устойчивого развития и подчёркивает приверженность принципам низкоуглеродной экономики.",
  },
];

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 280,              // быстрее анимация
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: false,   // меньше пересчётов высоты
  centerMode: true,        // центральный слайд
  centerPadding: "120px",  // справа/слева видны куски соседних карточек
};


const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Ключевые международные проекты</h1>
        <p>
          Институт является активным участником европейских исследовательских
          консорциумов, финансируемых по линиям MSCA и Horizon 2020. Ниже
          представлены три стратегических направления сотрудничества.
        </p>
      </header>

      <div className="projects-slider-wrapper">
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.id} className="project-slide">
              <article className="project-card">
                <div className="project-card-header">
                  <span className="project-tag">{project.tag}</span>
                  <h2 className="project-title">{project.title}</h2>
                </div>

                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-body">
                  {project.paragraphs.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}

                  <ul className="project-bullets">
                    {project.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <p className="project-footer-text">{project.footer}</p>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
