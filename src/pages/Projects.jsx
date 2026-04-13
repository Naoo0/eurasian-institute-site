import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

import "../styles/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const normalizeLang = (lang) => {
  if (!lang) return "ru";
  if (lang.startsWith("kk") || lang.startsWith("kz")) return "kk";
  if (lang.startsWith("en")) return "en";
  return "ru";
};

const getLocalizedValue = (field, lang = "ru") => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.ru || field.kk || field.en || "";
};

function Projects({ lang: propLang }) {
  const { i18n } = useTranslation();
  const lang = propLang || normalizeLang(i18n.language);

  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "pageProjects"][0]{
          heroTitle,
          heroSubtitle,
          projects[]{
            _key,
            title,
            description,
            image,
            linkText,
            linkUrl
          }
        }
      `)
      .then((data) => setPage(data || null))
      .catch(console.error);
  }, []);

  if (!page) {
    return null;
  }

  const projects = Array.isArray(page.projects) ? page.projects : [];

  const sliderSettings = {
    dots: projects.length > 1,
    arrows: projects.length > 1,
    infinite: projects.length > 1,
    speed: 280,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: false,
    centerMode: projects.length > 1,
    centerPadding: "70px",
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
          arrows: false,
          dots: projects.length > 1,
        },
      },
    ],
  };

  return (
    <main className="projects-page">
      <header className="projects-hero">
        <div className="projects-container">
          <h1>{getLocalizedValue(page.heroTitle, lang)}</h1>

          {getLocalizedValue(page.heroSubtitle, lang) && (
            <p>{getLocalizedValue(page.heroSubtitle, lang)}</p>
          )}
        </div>
      </header>

      <section className="projects-section">
        <div className="projects-container">
          {projects.length > 0 ? (
            <div className="projects-slider-wrap">
              <Slider {...sliderSettings} className="projects-slider">
                {projects.map((project, index) => {
                  const imageUrl = project?.image
                    ? urlFor(project.image).width(1400).height(700).fit("crop").url()
                    : placeholderImage;

                  const title = getLocalizedValue(project?.title, lang);
                  const description = getLocalizedValue(project?.description, lang);
                  const linkText =
                    getLocalizedValue(project?.linkText, lang) ||
                    (lang === "en"
                      ? "Learn more"
                      : lang === "kk"
                      ? "Толығырақ"
                      : "Подробнее");

                  return (
                    <div key={project?._key || index} className="project-slide">
                      <article className="project-card">
                        <div className="project-image-wrap">
                          <img
                            src={imageUrl}
                            alt={title || `Project ${index + 1}`}
                            className="project-image"
                          />
                        </div>

                        <div className="project-content">
                          <div className="project-top">
                            <span className="project-index">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {title && <h3>{title}</h3>}

                            {description && (
                              <p className="project-description">{description}</p>
                            )}
                          </div>

                          {project?.linkUrl && (
                            <a
                              href={project.linkUrl}
                              className="project-link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {linkText}
                            </a>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div className="projects-empty">
              <p>
                {lang === "en"
                  ? "No projects added yet."
                  : lang === "kk"
                  ? "Жобалар әлі қосылмаған."
                  : "Проекты пока не добавлены."}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;