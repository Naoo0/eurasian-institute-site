// src/pages/About.jsx

import React, { useEffect, useState } from "react";
import "../styles/About.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

const About = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "pageAbout"][0]{
          heroTitle,
          heroSubtitle,
          historyTitle,
          historySubtitle,
          historyParagraphs,
          missionItems,
          structureText,
          values,
          partnersIntro,
          partners
        }`
      )
      .then(setPage)
      .catch(console.error);
  }, []);

  if (!page) return null; // можно сделать спиннер

  const partners = page.partners || [];

  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>{page.heroTitle}</h1>
        {page.heroSubtitle && <p>{page.heroSubtitle}</p>}
      </header>

      <div className="page-content-wrapper">
        {/* 1. История института */}
        <section className="about-section">
          <h2>{page.historyTitle}</h2>
          {page.historySubtitle && <h3>{page.historySubtitle}</h3>}
          {page.historyParagraphs?.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </section>

        {/* 2. Миссия и видение */}
        <section className="about-section">
          <h2>Миссия и видение</h2>
          <ul>
            {page.missionItems?.map((item, idx) => (
              <li key={idx}>
                {item.title && <strong>{item.title}</strong>}{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Структура института */}
        <section className="about-section">
          <h2>Структура института</h2>
          <p>{page.structureText}</p>
        </section>

        {/* 4. Наши ценности */}
        <section className="about-section">
          <h2>Наши ценности</h2>
          <div className="values-grid">
            {page.values?.map((value, idx) => (
              <div className="value-card" key={idx}>
                {value.icon && (
                  <span className="value-icon">{value.icon}</span>
                )}
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Международное сотрудничество и партнёры */}
        <section className="about-section partners-section">
          <h2>Международное сотрудничество и партнёрства</h2>
          {page.partnersIntro && <p>{page.partnersIntro}</p>}

          <h3>Ключевые международные проекты</h3>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <a
                key={partner._key || index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
              >
                <div className="partner-logo-wrapper">
                  <img
                    src={
                      partner.logo
                        ? urlFor(partner.logo).width(300).height(200).url()
                        : placeholderImage
                    }
                    alt={partner.name}
                  />
                </div>
                <span className="partner-name">{partner.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
