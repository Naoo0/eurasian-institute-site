import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

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

const Home = ({ lang: propLang }) => {
  const { i18n } = useTranslation();
  const lang = propLang || normalizeLang(i18n.language);

  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "pageHome"][0]{
        heroTitle,
        heroSubtitle,
        heroPrimaryButtonText,
        heroPrimaryButtonLink,
        heroSecondaryButtonText,
        heroSecondaryButtonLink,

        introTitle,
        introText,
        introImage,

        directionsSectionTitle,
        directions[]{
          _key,
          title,
          body
        },

        valuesSectionTitle,
        values[]{
          _key,
          icon,
          title,
          body
        },

        partnershipTitle,
        partnershipText,
        partnershipButtonText,
        partnershipButtonLink
      }`)
      .then((data) => setPage(data || null))
      .catch(console.error);
  }, []);

  if (!page) return null;

  const introImage = page.introImage
    ? urlFor(page.introImage).width(1200).height(900).url()
    : placeholderImage;

  return (
    <main className="home-page">
      <header className="home-hero">
        <div className="home-container home-hero-inner">
          <div className="home-hero-text">
            <h1>{getLocalizedValue(page.heroTitle, lang)}</h1>

            {getLocalizedValue(page.heroSubtitle, lang) && (
              <p>{getLocalizedValue(page.heroSubtitle, lang)}</p>
            )}

            <div className="home-hero-buttons">
              {page.heroPrimaryButtonLink && (
                <a
                  href={page.heroPrimaryButtonLink}
                  className="home-btn home-btn-primary"
                >
                  {getLocalizedValue(page.heroPrimaryButtonText, lang)}
                </a>
              )}

              {page.heroSecondaryButtonLink && (
                <a
                  href={page.heroSecondaryButtonLink}
                  className="home-btn home-btn-secondary"
                >
                  {getLocalizedValue(page.heroSecondaryButtonText, lang)}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="home-section">
        <div className="home-container home-intro-grid">
          <div className="home-intro-text">
            <h2>{getLocalizedValue(page.introTitle, lang)}</h2>
            <p>{getLocalizedValue(page.introText, lang)}</p>
          </div>

          <div className="home-intro-image-wrap">
            <img
              src={introImage}
              alt={getLocalizedValue(page.introTitle, lang) || "Home intro"}
              className="home-intro-image"
            />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <h2 className="home-section-title">
            {getLocalizedValue(page.directionsSectionTitle, lang)}
          </h2>

          <div className="home-cards-grid">
            {page.directions?.map((item, index) => (
              <div className="home-card" key={item._key || index}>
                <h3>{getLocalizedValue(item.title, lang)}</h3>
                <p>{getLocalizedValue(item.body, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-values-section">
        <div className="home-container">
          <h2 className="home-section-title">
            {getLocalizedValue(page.valuesSectionTitle, lang)}
          </h2>

          <div className="home-values-grid">
            {page.values?.map((value, index) => (
              <div className="home-value-card" key={value._key || index}>
                {value.icon && <span className="home-value-icon">{value.icon}</span>}
                <h3>{getLocalizedValue(value.title, lang)}</h3>
                <p>{getLocalizedValue(value.body, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <div className="home-cta-card">
            <div>
              <h2>{getLocalizedValue(page.partnershipTitle, lang)}</h2>
              <p>{getLocalizedValue(page.partnershipText, lang)}</p>
            </div>

            {page.partnershipButtonLink && (
              <a
                href={page.partnershipButtonLink}
                className="home-btn home-btn-primary"
              >
                {getLocalizedValue(page.partnershipButtonText, lang)}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;