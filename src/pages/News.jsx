import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../sanityClient';
import '../styles/News.css';

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

const News = ({ lang = 'ru' }) => {
  const [items, setItems] = useState([]);

  const translations = {
    ru: {
      title: 'Новости',
      subtitle:
        'Актуальные события и публикации исследователей Евразийского института междисциплинарных исследований (ЕИМИ)',
      locale: 'ru-RU',
    },
    kz: {
      title: 'Жаңалықтар',
      subtitle:
        'Еуразиялық пәнаралық зерттеулер институты зерттеушілерінің өзекті оқиғалары мен жарияланымдары',
      locale: 'kk-KZ',
    },
    en: {
      title: 'News',
      subtitle:
        'Current events and publications of researchers of the Eurasian Institute for Interdisciplinary Studies',
      locale: 'en-US',
    },
  };

  const t = translations[lang] || translations.ru;

  useEffect(() => {
    client
      .fetch(
        `*[_type == "newsItem"] | order(date desc){
          _id,
          title,
          date,
          tag,
          image,
          body
        }`
      )
      .then(setItems)
      .catch(console.error);
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <div className="page-container">
      <div className="news-header">
        <h1 className="news-main-title">{t.title}</h1>
        <p className="news-main-subtitle">{t.subtitle}</p>
      </div>

      <div className="news-list">
        {items.map((item, index) => {
          const formattedDate = item.date
            ? new Date(item.date).toLocaleDateString(t.locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '';

          const localizedTitle = getLocalizedValue(item.title, lang);
          const localizedTag = getLocalizedValue(item.tag, lang);
          const localizedBody = getLocalizedArray(item.body, lang);

          return (
            <article
              key={item._id}
              className={`news-item ${index % 2 === 1 ? 'news-item--reverse' : ''}`}
            >
              <div className="news-image-wrapper">
                {item.image ? (
                  <img
                    src={urlFor(item.image).width(1200).url()}
                    alt={localizedTitle}
                    className="news-image"
                  />
                ) : (
                  <div className="news-image-placeholder" />
                )}
              </div>

              <div className="news-content">
                <div className="news-meta">
                  {localizedTag && <span className="news-tag">{localizedTag}</span>}
                  {formattedDate && <span className="news-date">{formattedDate}</span>}
                </div>

                <h2 className="news-item-title">{localizedTitle}</h2>

                <div className="news-item-body">
                  <PortableText value={localizedBody} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default News;