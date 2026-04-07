import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import "../styles/Header.css";
import SubscribeModal from './SubscribeModal';
import LanguageSwitcher from './LanguageSwitcher';

function Header({ lang, setLang }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translations = {
    ru: {
      title: "Eurasian Institute for Interdisciplinary Studies",
      subscribe: "Подписаться",
      logoAlt: "Логотип Eurasian Institute",
    },
    kz: {
      title: "Eurasian Institute for Interdisciplinary Studies",
      subscribe: "Жазылу",
      logoAlt: "Eurasian Institute логотипі",
    },
    en: {
      title: "Eurasian Institute for Interdisciplinary Studies",
      subscribe: "Subscribe",
      logoAlt: "Eurasian Institute logo",
    },
  };

  const t = translations[lang] || translations.ru;

  return (
    <>
      <header className="header">
        <div className="header-top">

          <div className="header-left">
            <Link to="/" className="logo-link">
              <img
                src={logoImage}
                alt={t.logoAlt}
                className="logo-image"
              />
            </Link>
          </div>

          <div className="header-center">
            <h1 className="header-title">
              {t.title}
            </h1>
          </div>

          <div className="header-right">
            <div className="actions">
              <LanguageSwitcher lang={lang} setLang={setLang} />

              <button
                className="btn btn-yellow"
                onClick={() => setIsModalOpen(true)}
              >
                {t.subscribe}
              </button>
            </div>

            <div className="socials">
            </div>
          </div>

        </div>
      </header>

      <SubscribeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Header;