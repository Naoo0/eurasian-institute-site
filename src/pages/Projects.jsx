import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "../styles/Projects.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

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
  return field[lang] || field.ru || field.kk || field.kz || field.en || "";
};

const getLocalizedArray = (field, lang = "ru") => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.ru || field.kk || field.kz || field.en || [];
};

const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 280,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: false,
  centerMode: true,
  centerPadding: "100px",
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
      },
    },
  ],
};

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);

  const [page, setPage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
        {
          "page": *[_type == "pageProjects"][0]{
            heroTitle,
            heroSubtitle
          },
          "projects": *[_type == "project"] | order(order asc){
            _id,
            title,
            tag,
            image,
            paragraphs,
            bullets,
            footer
          }
        }
      `)
      .then((data) => {
        setPage(data?.page || null);
        setProjects(data?.projects || []);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const heroTitle =
    getLocalizedValue(page?.heroTitle, lang) ||
    (lang === "en"
      ? "Key International Projects"
      : lang === "kk"
      ? "Негізгі халықаралық жобалар"
      : "Ключевые международные проекты");

  const heroSubtitle =
    getLocalizedValue(page?.heroSubtitle, lang) ||
    (lang === "en"
      ? "The Institute participates in international research consortia and collaborative academic initiatives."
      : lang === "kk"
      ? "Институт халықаралық зерттеу консорциумдары мен академиялық ынтымақтастық бастамаларына қатысады."
      : "Институт участвует в международных исследовательских консорциумах и совместных академических инициативах.");

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>{heroTitle}</h1>
        <p>{heroSubtitle}</p>
      </header>

      <div className="projects-slider-wrapper">
        {loading && (
          <p className="projects-status">
            {lang === "en"
              ? "Loading projects..."
              : lang === "kk"
              ? "Жобалар жүктелуде..."
              : "Загрузка проектов..."}
          </p>
        )}

        {!loading && !projects.length && (
          <p className="projects-status">
            {lang === "en"
              ? "Projects have not been added yet."
              : lang === "kk"
              ? "Жобалар әлі қосылмаған."
              : "Проекты ещё не добавлены."}
          </p>
        )}

        {!loading && projects.length > 0 && (
          <Slider {...sliderSettings}>
            {projects.map((project) => {
              const title = getLocalizedValue(project.title, lang);
              const tag = getLocalizedValue(project.tag, lang);
              const paragraphs = getLocalizedArray(project.paragraphs, lang);
              const bullets = getLocalizedArray(project.bullets, lang);
              const footer = getLocalizedValue(project.footer, lang);

              return (
                <div key={project._id} className="project-slide">
                  <article className="project-card">
                    <div className="project-card-header">
                      {tag && <span className="project-tag">{tag}</span>}
                      <h2 className="project-title">{title}</h2>
                    </div>

                    <div className="project-image-wrapper">
                      <img
                        src={
                          project.image
                            ? urlFor(project.image).width(1200).height(700).fit("crop").url()
                            : placeholderImage
                        }
                        alt={title}
                        className="project-image"
                      />
                    </div>

                    <div className="project-body">
                      {paragraphs.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}

                      {bullets.length > 0 && (
                        <ul className="project-bullets">
                          {bullets.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {footer && (
                        <p className="project-footer-text">{footer}</p>
                      )}
                    </div>
                  </article>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Projects;