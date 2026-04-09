import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import GridSection from "../components/GridSection";
import "../styles/Home.css";

import { client, urlFor } from "../sanityClient";
import placeholderImage from "../assets/placeholder.png";

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

const homeUiText = {
  ru: {
    loading: "Загрузка главной страницы…",
    imageAlt: "Изображение",
  },
  kk: {
    loading: "Басты бет жүктелуде…",
    imageAlt: "Сурет",
  },
  en: {
    loading: "Loading homepage…",
    imageAlt: "Image",
  },
};

function Home() {
  const { i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);
  const uiText = homeUiText[lang];

  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "pageHome"][0]{
          introBlocks[]{
            title,
            image,
            reverse
          },
          featuredNewsLabel,
          featuredNews->{
            _id,
            title,
            slug,
            image,
            mainImage,
            excerpt
          },
          sidebarCards[]{
            title,
            subtitle,
            url,
            image
          },
          newsletterTitle,
          newsletterText,
          newsletterButton
        }
      `)
      .then((data) => {
        console.log("Home page from Sanity:", data);
        setHomeData(data || null);
      })
      .catch((err) => {
        console.error("Error loading home page:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="home">
        <HeroSection />
        <section className="content">
          <p>{uiText.loading}</p>
        </section>
      </main>
    );
  }

  const introBlocks = homeData?.introBlocks || [];
  const featuredNews = homeData?.featuredNews || null;
  const sidebarCards = homeData?.sidebarCards || [];

  const featuredNewsLabel = getLocalizedValue(homeData?.featuredNewsLabel, lang);
  const newsletterTitle = getLocalizedValue(homeData?.newsletterTitle, lang);
  const newsletterText = getLocalizedValue(homeData?.newsletterText, lang);
  const newsletterButton = getLocalizedValue(homeData?.newsletterButton, lang);

  const featuredNewsTitle = getLocalizedValue(featuredNews?.title, lang);
  const featuredNewsExcerpt = getLocalizedValue(featuredNews?.excerpt, lang);

  const featuredImage =
    featuredNews?.mainImage || featuredNews?.image || null;

  const featuredHref =
    featuredNews?.slug?.current ? `/news/${featuredNews.slug.current}` : "#";

  return (
    <main className="home">
      <HeroSection />

      <section className="content">
        {introBlocks.map((block, index) => (
          <GridSection
            key={index}
            title={getLocalizedValue(block.title, lang)}
            image={
              block.image
                ? urlFor(block.image).width(1200).url()
                : placeholderImage
            }
            reverse={block.reverse}
          />
        ))}
      </section>

      <div className="new-content-grid">
        <div className="main-article-content">
          <article className="news-article">
            <div className="news-header">
              <span>{featuredNewsLabel}</span>
            </div>

            <h2>{featuredNewsTitle}</h2>

            <a href={featuredHref} className="image-wrapper">
              <img
                src={
                  featuredImage
                    ? urlFor(featuredImage).width(1400).url()
                    : placeholderImage
                }
                alt={featuredNewsTitle || uiText.imageAlt}
              />
              <span className="lu-tag">LU</span>
            </a>

            {featuredNewsExcerpt && (
              <div className="news-footer">
                <span>{featuredNewsExcerpt}</span>
              </div>
            )}
          </article>
        </div>

        <aside className="right-sidebar">
          {sidebarCards.map((card, index) => {
            const cardTitle = getLocalizedValue(card.title, lang);
            const cardSubtitle = getLocalizedValue(card.subtitle, lang);

            return (
              <div className="sidebar-card" key={index}>
                <a href={card.url || "#"}>
                  {card.image ? (
                    <img
                      src={urlFor(card.image).width(800).url()}
                      alt={cardTitle || uiText.imageAlt}
                      className="sidebar-card-image"
                    />
                  ) : (
                    <div className="image-placeholder"></div>
                  )}
                </a>

                <h3>{cardTitle}</h3>
                {cardSubtitle && <p>{cardSubtitle}</p>}
              </div>
            );
          })}
        </aside>
      </div>

      {(newsletterTitle || newsletterText || newsletterButton) && (
        <section className="newsletter-section">
          {newsletterTitle && <h2>{newsletterTitle}</h2>}
          {newsletterText && <p>{newsletterText}</p>}
          {newsletterButton && (
            <button type="button" className="newsletter-button">
              {newsletterButton}
            </button>
          )}
        </section>
      )}
    </main>
  );
}

export default Home;