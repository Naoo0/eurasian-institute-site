import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { client, urlFor } from '../sanityClient';
import placeholderImage from '../assets/placeholder.png';
import '../styles/Partnership.css';

const normalizeLang = (lang) => {
  if (!lang) return 'ru';
  if (lang.startsWith('kk') || lang.startsWith('kz')) return 'kk';
  if (lang.startsWith('en')) return 'en';
  return 'ru';
};

const getLocalizedValue = (field, lang = 'ru') => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.ru || field.kk || field.en || '';
};

const getLocalizedArray = (field, lang = 'ru') => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.ru || field.kk || field.en || [];
};

function Partnership({ lang: propLang }) {
  const { i18n } = useTranslation();
  const lang = propLang || normalizeLang(i18n.language);

  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "pagePartnership"][0]{
          heroTitle,
          heroSubtitle,

          firstSectionTitle,
          firstSectionSubtitle,
          firstSectionPoints,
          firstSectionImage,

          secondSectionTitle,
          secondSectionSubtitle,
          secondSectionPoints,

          thirdSectionTitle,
          thirdSectionSubtitle,
          thirdSectionPoints,
          thirdSectionImage,

          finalSectionTitle,
          finalSectionPoints
        }
      `)
      .then((data) => setPage(data || null))
      .catch(console.error);
  }, []);

  if (!page) {
    return null;
  }

  const firstSectionPoints = getLocalizedArray(page.firstSectionPoints, lang);
  const secondSectionPoints = getLocalizedArray(page.secondSectionPoints, lang);
  const thirdSectionPoints = getLocalizedArray(page.thirdSectionPoints, lang);
  const finalSectionPoints = getLocalizedArray(page.finalSectionPoints, lang);

  const firstSectionImage = page.firstSectionImage
    ? urlFor(page.firstSectionImage).width(1200).url()
    : placeholderImage;

  const thirdSectionImage = page.thirdSectionImage
    ? urlFor(page.thirdSectionImage).width(1200).url()
    : placeholderImage;

  return (
    <main className="partnership-page">
      <header className="partnership-hero">
        <div className="partnership-container">
          <h1>{getLocalizedValue(page.heroTitle, lang)}</h1>

          {getLocalizedValue(page.heroSubtitle, lang) && (
            <p>{getLocalizedValue(page.heroSubtitle, lang)}</p>
          )}
        </div>
      </header>

      <section className="partnership-section partnership-section-with-image">
        <div className="partnership-container partnership-grid">
          <div className="partnership-text">
            <h2>{getLocalizedValue(page.firstSectionTitle, lang)}</h2>

            {getLocalizedValue(page.firstSectionSubtitle, lang) && (
              <p className="partnership-subtitle">
                {getLocalizedValue(page.firstSectionSubtitle, lang)}
              </p>
            )}

            <ul className="partnership-points">
              {firstSectionPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="partnership-image-wrap">
            <img
              src={firstSectionImage}
              alt={getLocalizedValue(page.firstSectionTitle, lang) || 'Partnership'}
              className="partnership-image"
            />
          </div>
        </div>
      </section>

      <section className="partnership-section">
        <div className="partnership-container">
          <div className="partnership-text partnership-text-single">
            <h2>{getLocalizedValue(page.secondSectionTitle, lang)}</h2>

            {getLocalizedValue(page.secondSectionSubtitle, lang) && (
              <p className="partnership-subtitle">
                {getLocalizedValue(page.secondSectionSubtitle, lang)}
              </p>
            )}

            <ul className="partnership-points">
              {secondSectionPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="partnership-section partnership-section-with-image">
        <div className="partnership-container partnership-grid partnership-grid-reverse">
          <div className="partnership-text">
            <h2>{getLocalizedValue(page.thirdSectionTitle, lang)}</h2>

            {getLocalizedValue(page.thirdSectionSubtitle, lang) && (
              <p className="partnership-subtitle">
                {getLocalizedValue(page.thirdSectionSubtitle, lang)}
              </p>
            )}

            <ul className="partnership-points">
              {thirdSectionPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="partnership-image-wrap">
            <img
              src={thirdSectionImage}
              alt={getLocalizedValue(page.thirdSectionTitle, lang) || 'Partnership'}
              className="partnership-image"
            />
          </div>
        </div>
      </section>

      <section className="partnership-final-section">
        <div className="partnership-container">
          <div className="partnership-final-card">
            <h2>{getLocalizedValue(page.finalSectionTitle, lang)}</h2>

            <ul className="partnership-points partnership-points-final">
              {finalSectionPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Partnership;