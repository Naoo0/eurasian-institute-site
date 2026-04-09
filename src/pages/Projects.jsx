import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "../styles/Projects.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const desktopSliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 280,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "120px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        adaptiveHeight: true,
      },
    },
  ],
};

const uiText = {
  ru: {
    title: "Ключевые международные проекты",
    description:
      "Институт является активным участником европейских исследовательских консорциумов, финансируемых по линиям MSCA и Horizon 2020. Ниже представлены три стратегических направления сотрудничества.",
    loading: "Загрузка проектов…",
    empty: "Проекты ещё не добавлены или не опубликованы в Sanity.",
    imageAlt: "Изображение проекта",
  },
  kk: {
    title: "Негізгі халықаралық жобалар",
    description:
      "Институт MSCA және Horizon 2020 бағдарламалары бойынша қаржыландырылатын еуропалық зерттеу консорциумдарының белсенді қатысушысы болып табылады. Төменде ынтымақтастықтың үш стратегиялық бағыты ұсынылған.",
    loading: "Жобалар жүктелуде…",
    empty: "Жобалар Sanity-ге әлі қосылмаған немесе жарияланбаған.",
    imageAlt: "Жоба суреті",
  },
  en: {
    title: "Key International Projects",
    description:
      "The Institute is an active participant in European research consortia funded through MSCA and Horizon 2020. Below are three strategic areas of cooperation.",
    loading: "Loading projects…",
    empty: "Projects have not been added or published in Sanity yet.",
    imageAlt: "Project image",
  },
};

const normalizeLang = (lang) => {
  if (!lang) return "ru";
  if (lang.startsWith("kk") || lang.startsWith("kz")) return "kk";
  if (lang.startsWith("en")) return "en";
  return "ru";
};

const getLocalizedValue = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.ru || field.kk || field.en || "";
};

const getLocalizedArray = (field, lang) => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.ru || field.kk || field.en || [];
};

function ProjectCard({ project, lang, text }) {
  const projectTitle = getLocalizedValue(project.title, lang);
  const projectTag = getLocalizedValue(project.tag, lang);
  const projectParagraphs = getLocalizedArray(project.paragraphs, lang);
  const projectBullets = getLocalizedArray(project.bullets, lang);
  const projectFooter = getLocalizedValue(project.footer, lang);

  return (
    <article className="project-card">
      <div className="project-card-header">
        {projectTag && <span className="project-tag">{projectTag}</span>}
        <h2 className="project-title">{projectTitle}</h2>
      </div>

      <div className="project-image-wrapper">
        <img
          src={
            project.image
              ? urlFor(project.image).width(1200).url()
              : placeholderImage
          }
          alt={projectTitle || text.imageAlt}
          className="project-image"
        />
      </div>

      <div className="project-body">
        {projectParagraphs?.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {projectBullets?.length > 0 && (
          <ul className="project-bullets">
            {projectBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {projectFooter && <p className="project-footer-text">{projectFooter}</p>}
      </div>
    </article>
  );
}

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const text = uiText[lang];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] | order(order asc){
          _id,
          order,
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

  const content = useMemo(() => {
    if (loading) {
      return <p className="projects-status">{text.loading}</p>;
    }

    if (!projects.length) {
      return <p className="projects-status">{text.empty}</p>;
    }

    if (isMobile) {
      return (
        <div className="projects-mobile-list">
          {projects.map((project) => (
            <div key={project._id} className="project-mobile-item">
              <ProjectCard project={project} lang={lang} text={text} />
            </div>
          ))}
        </div>
      );
    }

    return (
      <Slider {...desktopSliderSettings}>
        {projects.map((project) => (
          <div key={project._id} className="project-slide">
            <ProjectCard project={project} lang={lang} text={text} />
          </div>
        ))}
      </Slider>
    );
  }, [loading, projects, isMobile, lang, text]);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </header>

      <div className="projects-slider-wrapper">{content}</div>
    </div>
  );
};

export default Projects;