import React from "react";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher({ lang, setLang }) {
  const languages = [
    { code: "ru", label: "RU" },
    { code: "kz", label: "KZ" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="language-switcher">
      {languages.map((item) => (
        <button
          key={item.code}
          className={`lang-btn ${lang === item.code ? "active" : ""}`}
          onClick={() => setLang(item.code)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;