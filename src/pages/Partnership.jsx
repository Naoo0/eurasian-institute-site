// src/pages/Partnership.jsx
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../sanityClient';
import '../styles/Partnership.css';

function Partnership() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "pagePartnership"][0]{
          heroTitle,
          heroSubtitle,
          fullText,
          directions
        }`
      )
      .then(setPage)
      .catch(console.error);
  }, []);

  if (!page) return null; // можно сделать "Загрузка..."

  return (
    <div className="partnership-page">
      <header className="partnership-hero">
        <h1>{page.heroTitle}</h1>
        {page.heroSubtitle && <p>{page.heroSubtitle}</p>}
      </header>

      <div className="page-content-wrapper">
        <section className="partnership-section">
          <h2>Почему стоит сотрудничать с нами?</h2>
          <div className="benefits-full-text">
            <PortableText value={page.fullText} />
          </div>
        </section>

        <section className="partnership-section">
          <h2>Направления сотрудничества</h2>
          <ul className="cooperation-list">
            {page.directions?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Partnership;
