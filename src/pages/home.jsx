import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

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

const Home = ({ lang = "ru" }) => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "pageHome"][0]{
          heroTitle,
          heroSubtitle,
          historyTitle,
          historySubtitle,
          historyParagraphs,
          missionSectionTitle,
          missionItems[]{
            _key,
            title,
            body
          },
          structureSectionTitle,
          structureText,
          valuesSectionTitle,
          values[]{
            _key,
            icon,
            title,
            body
          },
          partnersSectionTitle,
          partnersIntro,
          keyProjectsTitle,
          partners[]{
            _key,
            name,
            url,
            logo
          }
        }`
      )
      .then(setPage)
      .catch(console.error);
  }, []);

  if (!page) return null;

  const partners = page.partners || [];
  const historyParagraphs = getLocalizedArray(page.historyParagraphs, lang);

  return (
    <div className="home-page">
      <header className="home-hero">
        <h1>{getLocalizedValue(page.heroTitle, lang)}</h1>
        {getLocalizedValue(page.heroSubtitle, lang) && (
          <p>{getLocalizedValue(page.heroSubtitle, lang)}</p>
        )}
      </header>

      <div className="home-content-wrapper">
        <section className="home-section">
          <h2>{getLocalizedValue(page.historyTitle, lang)}</h2>
          {getLocalizedValue(page.historySubtitle, lang) && (
            <h3>{getLocalizedValue(page.historySubtitle, lang)}</h3>
          )}
          {historyParagraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </section>

        <section className="home-section">
          <h2>{getLocalizedValue(page.missionSectionTitle, lang)}</h2>
          <ul>
            {page.missionItems?.map((item, idx) => (
              <li key={item._key || idx}>
                {getLocalizedValue(item.title, lang) && (
                  <strong>{getLocalizedValue(item.title, lang)}</strong>
                )}{" "}
                {getLocalizedValue(item.body, lang)}
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <h2>{getLocalizedValue(page.structureSectionTitle, lang)}</h2>
          <p>{getLocalizedValue(page.structureText, lang)}</p>
        </section>

        <section className="home-section">
          <h2>{getLocalizedValue(page.valuesSectionTitle, lang)}</h2>
          <div className="home-values-grid">
            {page.values?.map((value, idx) => (
              <div className="home-value-card" key={value._key || idx}>
                {value.icon && (
                  <span className="home-value-icon">{value.icon}</span>
                )}
                <h3>{getLocalizedValue(value.title, lang)}</h3>
                <p>{getLocalizedValue(value.body, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section home-partners-section">
          <h2>{getLocalizedValue(page.partnersSectionTitle, lang)}</h2>

          {getLocalizedValue(page.partnersIntro, lang) && (
            <p>{getLocalizedValue(page.partnersIntro, lang)}</p>
          )}

          <h3>{getLocalizedValue(page.keyProjectsTitle, lang)}</h3>

          <div className="home-partners-grid">
            {partners.map((partner, index) => (
              <a
                key={partner._key || index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-partner-card"
              >
                <div className="home-partner-logo-wrapper">
                  <img
                    src={
                      partner.logo
                        ? urlFor(partner.logo).width(300).height(200).url()
                        : placeholderImage
                    }
                    alt={getLocalizedValue(partner.name, lang)}
                  />
                </div>
                <span className="home-partner-name">
                  {getLocalizedValue(partner.name, lang)}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;