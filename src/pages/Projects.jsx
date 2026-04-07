// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/Projects.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

// стили слайдера (если ещё не подключены глобально)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 280,              // как было у тебя
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: false,
  centerMode: true,        // центральный слайд
  centerPadding: "120px",  // справа/слева видны куски соседних карточек
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] | order(order asc){
          _id,
          title,
          tag,
          image,
          paragraphs,
          bullets,
          footer
        }`
      )
      .then((data) => {
        console.log("Projects from Sanity:", data);
        setProjects(data || []);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
      })
      .finally(() => setLoading(false));
  }, []);

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
        {loading && (
          <p className="projects-status">Загрузка проектов…</p>
        )}

        {!loading && !projects.length && (
          <p className="projects-status">
            Проекты ещё не добавлены или не опубликованы в Sanity.
          </p>
        )}

        {!loading && projects.length > 0 && (
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project._id} className="project-slide">
                <article className="project-card">
                  <div className="project-card-header">
                    {project.tag && (
                      <span className="project-tag">{project.tag}</span>
                    )}
                    <h2 className="project-title">{project.title}</h2>
                  </div>

                  <div className="project-image-wrapper">
                    <img
                      src={
                        project.image
                          ? urlFor(project.image).width(1200).url()
                          : placeholderImage
                      }
                      alt={project.title}
                      className="project-image"
                    />
                  </div>

                  <div className="project-body">
                    {project.paragraphs?.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}

                    {project.bullets && project.bullets.length > 0 && (
                      <ul className="project-bullets">
                        {project.bullets.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {project.footer && (
                      <p className="project-footer-text">
                        {project.footer}
                      </p>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Projects;
