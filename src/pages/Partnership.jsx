import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../sanityClient';
import '../styles/Partnership.css';

const getLocalizedValue = (field, lang = 'ru') => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.ru || field.kz || field.en || '';
};

const getLocalizedArray = (field, lang = 'ru') => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.ru || field.kz || field.en || [];
};

function Partnership({ lang = 'ru' }) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "pagePartnership"][0]{
          heroTitle,
          heroSubtitle,
          benefitsTitle,
          fullText,
          directionsTitle,
          directions
        }`
      )
      .then(setPage)
      .catch(console.error);
  }, []);

  if (!page) return null;

  const localizedFullText = getLocalizedArray(page.fullText, lang);
  const localizedDirections = getLocalizedArray(page.directions, lang);

  return (
    <div className="partnership-page">
      <header className="partnership-hero">
        <h1>{getLocalizedValue(page.heroTitle, lang)}</h1>
        {getLocalizedValue(page.heroSubtitle, lang) && (
          <p>{getLocalizedValue(page.heroSubtitle, lang)}</p>
        )}
      </header>

      <div className="page-content-wrapper">
        <section className="partnership-section">
          <h2>{getLocalizedValue(page.benefitsTitle, lang)}</h2>
          <div className="benefits-full-text">
            <PortableText value={localizedFullText} />
          </div>
        </section>

        <section className="partnership-section">
          <h2>{getLocalizedValue(page.directionsTitle, lang)}</h2>
          <ul className="cooperation-list">
            {localizedDirections.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Partnership;