// src/pages/News.jsx
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../sanityClient';
import '../styles/News.css';

const News = () => {
  const [items, setItems] = useState([]);

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
        <h1 className="news-main-title">Новости</h1>
        <p className="news-main-subtitle">
          Актуальные события и публикации исследователей Евразийского института
          междисциплинарных исследований (ЕИМИ)
        </p>
      </div>

      <div className="news-list">
        {items.map((item, index) => {
          const formattedDate = item.date
            ? new Date(item.date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '';

          return (
            <article
              key={item._id}
              className={`news-item ${index % 2 === 1 ? 'news-item--reverse' : ''}`}
            >
              <div className="news-image-wrapper">
                {item.image ? (
                  <img
                    src={urlFor(item.image).width(1200).url()} // ВАЖНО: БЕЗ .height(...)
                    alt={item.title}
                    className="news-image"
                  />
                ) : (
                  <div className="news-image-placeholder" />
                )}
              </div>

              <div className="news-content">
                <div className="news-meta">
                  {item.tag && <span className="news-tag">{item.tag}</span>}
                  {formattedDate && <span className="news-date">{formattedDate}</span>}
                </div>

                <h2 className="news-item-title">{item.title}</h2>

                <div className="news-item-body">
                  <PortableText value={item.body} />
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
